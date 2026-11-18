import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { openSync, type Font } from "fontkit";
import sharp from "sharp";

const app = new URL("../app/", import.meta.url);
const publicDirectory = new URL("../public/", import.meta.url);
const iconSvg = await readFile(new URL("./favicon.svg", import.meta.url));

async function renderFavicon() {
  const sizes = [16, 32, 48];
  const images = await Promise.all(
    sizes.map((size) => sharp(iconSvg).resize(size, size).png().toBuffer()),
  );
  const headerLength = 6;
  const entryLength = 16;
  const directory = Buffer.alloc(headerLength + entryLength * sizes.length);
  directory.writeUInt16LE(1, 2);
  directory.writeUInt16LE(sizes.length, 4);

  // The ICO directory points to one embedded PNG for each size.
  let imageOffset = directory.length;
  for (const [index, size] of sizes.entries()) {
    const entry = headerLength + index * entryLength;
    const image = images[index];
    directory[entry] = size;
    directory[entry + 1] = size;
    directory.writeUInt16LE(1, entry + 4);
    directory.writeUInt16LE(32, entry + 6);
    directory.writeUInt32LE(image.length, entry + 8);
    directory.writeUInt32LE(imageOffset, entry + 12);
    imageOffset += image.length;
  }
  return Buffer.concat([directory, ...images]);
}

function textOutline(font: Font, text: string, size: number, left: number, baseline: number) {
  const run = font.layout(text);
  const scale = size / font.unitsPerEm;
  let cursor = 0;
  const outlines = run.glyphs.map((glyph, index) => {
    const position = run.positions[index];
    const x = cursor + position.xOffset;
    cursor += position.xAdvance;
    return `<path d="${glyph.path.toSVG()}" transform="translate(${x} ${position.yOffset})"/>`;
  });
  const x = left - run.bbox.minX * scale;
  return `<g transform="translate(${x} ${baseline}) scale(${scale} -${scale})">${outlines.join("")}</g>`;
}

async function renderOpenGraph() {
  const width = 1200;
  const height = 630;
  const ink = "#161711";
  const line = "#22231B";
  const typeface = openSync(fileURLToPath(new URL("fonts/ibm-plex-sans.woff2", app)));
  if (!("getVariation" in typeface)) {
    throw new Error("Se esperaba el archivo variable de IBM Plex Sans.");
  }
  const light = typeface.getVariation({ wght: 300 });
  const regular = typeface.getVariation({ wght: 400 });

  const frames = [
    { source: "lodge-senior/01-fachada-pradera", left: 466, top: 40, width: 694, height: 346 },
    { source: "archivo-tomi-ungerer", left: 466, top: 398, width: 341, height: 192 },
    { source: "pabellon-de-cine-de-lebu", left: 819, top: 398, width: 341, height: 192 },
  ];
  const images = await Promise.all(frames.map(async ({ source, left, top, width, height }) => ({
    left,
    top,
    input: await sharp(fileURLToPath(new URL(`proyectos/${source}.webp`, publicDirectory)))
      .resize(width, height, { fit: "cover" })
      .toBuffer(),
  })));

  const artwork = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <g fill="none" stroke="${line}">
        <path d="M40 125.5H428M40 424.5H428M40 589.5H428"/>
        ${frames.map((frame) => `<rect x="${frame.left + 0.5}" y="${frame.top + 0.5}" width="${frame.width - 1}" height="${frame.height - 1}"/>`).join("")}
      </g>
      <g fill="${ink}">
        ${textOutline(light, "Sofía", 116, 40, 244)}
        ${textOutline(light, "Orrego", 116, 40, 352)}
        ${textOutline(regular, "Portafolio de arquitectura", 29, 40, 471)}
      </g>
    </svg>
  `);
  const mark = await sharp(iconSvg).resize(64, 64).png().toBuffer();
  return sharp({ create: { width, height, channels: 3, background: "#FFFFFF" } })
    .composite([...images, { input: mark, left: 40, top: 40 }, { input: artwork }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();
}

const [favicon, openGraph] = await Promise.all([renderFavicon(), renderOpenGraph()]);
await Promise.all([
  writeFile(new URL("favicon.ico", app), favicon),
  writeFile(new URL("opengraph.jpg", publicDirectory), openGraph),
]);
