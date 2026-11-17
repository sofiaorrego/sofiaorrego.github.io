import ProjectAccordion from "@/components/ProjectAccordion";
import { projects } from "@/content/projects";

export default function PortfolioPage() {
  return (
    <main className="mx-auto min-h-dvh max-w-6xl px-6 pt-14 pb-20 sm:px-10 sm:pt-24 lg:px-16">
      <header className="border-b border-rule pb-12 sm:pb-16">
        <h1 className="font-display text-[clamp(3.25rem,9vw,6rem)] leading-[1.02] tracking-[-0.04em]">
          Sofía Orrego
        </h1>
      </header>

      <section aria-labelledby="proyectos" className="grid gap-5 py-8 sm:grid-cols-[1fr_2fr] sm:gap-12 sm:py-12">
        <h2 id="proyectos" className="font-display text-3xl tracking-tight sm:text-4xl">
          Proyectos
        </h2>
        {projects.length ? (
          <ProjectAccordion projects={projects} />
        ) : (
          <p className="max-w-prose self-center text-base leading-relaxed text-muted">
            Los proyectos se publicarán aquí.
          </p>
        )}
      </section>
    </main>
  );
}
