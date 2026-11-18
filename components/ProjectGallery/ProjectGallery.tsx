"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type UIEvent } from "react";
import type { ProjectGalleryImage, ProjectImage } from "@/content/project";

const sizes = "(min-width: 52rem) 48rem, 100vw";

export default function ProjectGallery({
  cover,
  gallery = [],
}: {
  cover?: ProjectImage;
  gallery?: readonly ProjectGalleryImage[];
}) {
  const images = cover ? [{ ...cover, caption: "Portada" }, ...gallery] : gallery;
  const track = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const first = images[0];

  if (!first) return null;

  if (images.length === 1) {
    const { src, alt, width, height } = first;
    return <Image className="project-sheet-image" src={src} alt={alt} width={width} height={height} sizes={sizes} loading="eager" />;
  }

  const lastIndex = images.length - 1;

  function select(index: number) {
    if (!track.current) return;
    track.current.scrollLeft = index * track.current.clientWidth;
    setActiveIndex(index);
  }

  function followScroll({ currentTarget }: UIEvent<HTMLDivElement>) {
    const { clientWidth, scrollLeft } = currentTarget;
    if (clientWidth === 0) return;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(Math.max(0, Math.min(index, lastIndex)));
  }

  function handleKeys(event: KeyboardEvent<HTMLDivElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    let nextIndex = activeIndex;
    switch (event.key) {
      case "ArrowLeft": nextIndex = Math.max(0, activeIndex - 1); break;
      case "ArrowRight": nextIndex = Math.min(lastIndex, activeIndex + 1); break;
      case "Home": nextIndex = 0; break;
      case "End": nextIndex = lastIndex; break;
      default: return;
    }
    event.preventDefault();
    select(nextIndex);
    event.currentTarget.querySelectorAll("button")[nextIndex]?.focus({ preventScroll: true });
  }

  return (
    <div className="project-gallery" role="region" aria-label="Imágenes del proyecto">
      <div ref={track} className="project-gallery-track" onScroll={followScroll} tabIndex={-1}>
        {images.map(({ src, alt, width, height }, index) => (
          <div key={src} className="project-gallery-slide" aria-hidden={index !== activeIndex}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes={sizes}
              loading={index === 0 ? "eager" : "lazy"}
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div
        role="group"
        aria-label="Seleccionar imagen"
        className="project-gallery-indicators"
        onKeyDown={handleKeys}
      >
        {images.map(({ src, caption }, index) => (
          <button
            key={src}
            type="button"
            className="project-gallery-indicator"
            aria-label={`Imagen ${index + 1} de ${images.length}. ${caption}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => select(index)}
          />
        ))}
      </div>
      <div className="project-gallery-caption">
        <span aria-live="polite">{images[activeIndex].caption}</span>
        <a href={images[activeIndex].src} target="_blank" rel="noreferrer">Ver imagen completa</a>
      </div>
    </div>
  );
}
