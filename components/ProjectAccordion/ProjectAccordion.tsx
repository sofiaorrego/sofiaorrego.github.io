"use client";

import { Accordion } from "@base-ui/react/accordion";

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  url?: string;
}

export default function ProjectAccordion({ projects }: { projects: PortfolioProject[] }) {
  return (
    <Accordion.Root className="w-full min-w-0">
      {projects.map(({ id, title, description, url }) => (
        <Accordion.Item key={id} value={id} className="border-b border-rule">
          <Accordion.Header render={<h3 />}>
            <Accordion.Trigger className="group flex min-h-12 w-full cursor-pointer items-center justify-between gap-4 py-3 text-left font-semibold hover:text-accent">
              <span className="min-w-0 wrap-anywhere">{title}</span>
              <span aria-hidden="true" className="relative size-3 shrink-0 before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-px after:bg-current group-aria-expanded:after:hidden" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="pb-5 leading-relaxed text-muted">
            <p className="wrap-anywhere">{description}</p>
            {url && (
              <a className="mt-3 inline-block font-semibold text-accent underline underline-offset-4" href={url}>
                Ver proyecto
              </a>
            )}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
