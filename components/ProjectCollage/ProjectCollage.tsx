"use client";

import { Dialog } from "@base-ui/react/dialog";
import Image from "next/image";
import ProjectGallery from "@/components/ProjectGallery";
import type { PortfolioProject } from "@/content/project";

const areaFormat = new Intl.NumberFormat("es-CL", { maximumFractionDigits: 2 });

export default function ProjectCollage({ projects }: { projects: PortfolioProject[] }) {
  return (
    <ul className="project-collage">
      {projects.map(({ id, title, description, details, url, cover, gallery, sample }, index) => (
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
                  <ProjectGallery cover={cover} gallery={gallery} />
                  {details && (
                    <dl className="project-facts">
                      <div>
                        <dt>Proyecto</dt>
                        <dd>{title}</dd>
                      </div>
                      <div>
                        <dt>Año</dt>
                        <dd>{details.year ?? "Por confirmar"}</dd>
                      </div>
                      <div>
                        <dt>Lugar</dt>
                        <dd>{details.location}</dd>
                      </div>
                      <div>
                        <dt>Superficie construida</dt>
                        <dd>{details.builtArea === undefined ? "Por confirmar" : `${areaFormat.format(details.builtArea)} m²`}</dd>
                      </div>
                    </dl>
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
