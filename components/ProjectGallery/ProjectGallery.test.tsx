import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import ProjectGallery from "./index";

afterEach(cleanup);

const cover = { src: "/portada.jpg", alt: "Vista exterior", width: 1600, height: 900 };
const gallery = [
  { src: "/planta.jpg", alt: "Planta del primer nivel", width: 1600, height: 900, caption: "Planta" },
  { src: "/corte.jpg", alt: "Corte del edificio", width: 1600, height: 900, caption: "Corte" },
];

it("sincroniza el indicador con el desplazamiento y la navegación por teclado", () => {
  const { container } = render(<ProjectGallery cover={cover} gallery={gallery} />);
  const track = container.querySelector<HTMLDivElement>(".project-gallery-track")!;
  Object.defineProperty(track, "clientWidth", { value: 640 });
  track.scrollLeft = 640;
  fireEvent.scroll(track);

  const plan = screen.getByRole("button", { name: "Imagen 2 de 3. Planta" });
  const section = screen.getByRole("button", { name: "Imagen 3 de 3. Corte" });
  expect(plan.getAttribute("aria-current")).toBe("true");
  expect(screen.queryByRole("img", { name: cover.alt })).toBeNull();

  plan.focus();
  fireEvent.keyDown(plan, { key: "ArrowRight" });
  expect(track.scrollLeft).toBe(1280);
  expect(section.getAttribute("aria-current")).toBe("true");
  expect(document.activeElement).toBe(section);

  fireEvent.keyDown(section, { key: "Home" });
  expect(track.scrollLeft).toBe(0);
  expect(screen.getByRole("img", { name: cover.alt })).toBeTruthy();
});

it("muestra una sola imagen sin indicadores", () => {
  render(<ProjectGallery cover={cover} />);
  expect(screen.getByRole("img", { name: cover.alt })).toBeTruthy();
  expect(screen.queryByRole("button")).toBeNull();
});
