"use client";

import { Dialog } from "@base-ui/react/dialog";
import Image from "next/image";
import type { PortfolioProject } from "@/content/project";

export default function ProjectCollage({ projects }: { projects: PortfolioProject[] }) {
  return (
    <ul className="project-collage">
      {projects.map(({ id, title, description, url, cover, sample }, index) => (
        <li key={id} className="project-tile">
          <Dialog.Root>
            <h3 className="project-heading">
              <Dialog.Trigger className={cover ? "project-trigger" : "project-trigger project-trigger-text"}>
                {cover && (
                  <span className="project-media">
                    <Image src={cover.src} alt="" fill sizes="(min-width: 64rem) 60vw, 100vw" loading={index < 3 ? "eager" : "lazy"} />
                  </span>
                )}
                <span className="project-caption">
                  <span className="project-title">{title}</span>
                  <span className="project-action" aria-hidden="true"><span className="arrow-mark" /></span>
                </span>
              </Dialog.Trigger>
            </h3>

            <Dialog.Portal>
              <Dialog.Backdrop className="project-backdrop" />
              <Dialog.Popup className="project-sheet">
                <div className="project-sheet-bar">
                  <span>
                    {sample ? "Proyecto de muestra" : "Ficha de proyecto"}
                    {sample && cover && " · Imagen generada"}
                  </span>
                  <Dialog.Close className="project-close" aria-label="Cerrar ficha">
                    <span className="close-mark" aria-hidden="true" />
                  </Dialog.Close>
                </div>
                <div className="project-sheet-body">
                  <Dialog.Title className="project-sheet-title">{title}</Dialog.Title>
                  {cover && (
                    <Image
                      className="project-sheet-image"
                      src={cover.src}
                      alt={cover.alt}
                      width={cover.width}
                      height={cover.height}
                      sizes="(min-width: 52rem) 48rem, 100vw"
                    />
                  )}
                  <Dialog.Description className="project-description">{description}</Dialog.Description>
                  {url && <a className="project-link" href={url}>Ver proyecto <span className="arrow-mark" aria-hidden="true" /></a>}
                </div>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </li>
      ))}
    </ul>
  );
}
