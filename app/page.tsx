import ConstructionNotice from "@/components/ConstructionNotice";
import ProjectAccordion from "@/components/ProjectAccordion";
import { projects } from "@/content/projects";

export default function PortfolioPage() {
  return (
    <main className="mx-auto min-h-dvh max-w-6xl px-6 pt-12 pb-12 sm:px-10 sm:pt-20 lg:px-16">
      <header className="border-b border-rule pb-7 sm:pb-9">
        <h1 className="font-display text-[clamp(2.5rem,7vw,5.75rem)] leading-[1.02] tracking-[-0.04em]">
          Sofía Orrego
        </h1>
      </header>

      {projects.length ? (
        <section
          aria-labelledby="proyectos"
          className="grid gap-5 py-8 sm:grid-cols-[1fr_2fr] sm:gap-12 sm:py-12"
        >
          <h2 id="proyectos" className="font-display text-3xl tracking-tight sm:text-4xl">
            Proyectos
          </h2>
          <ProjectAccordion projects={projects} />
        </section>
      ) : (
        <ConstructionNotice />
      )}
    </main>
  );
}
