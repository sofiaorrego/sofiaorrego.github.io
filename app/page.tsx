import ConstructionNotice from "@/components/ConstructionNotice";
import ProjectCollage from "@/components/ProjectCollage";
import { projects } from "@/content/projects";

export default function PortfolioPage() {
  const projectCount = projects.filter(({ sample }) => !sample).length;
  const sampleCount = projects.length - projectCount;

  return (
    <div className="site-frame" id="inicio">
      <header className="masthead">
        <div className="masthead-bar">
          <span>Portafolio</span>
          <a className="section-link" href="#proyectos">
            Proyectos <span className="arrow-mark arrow-down" aria-hidden="true" />
          </a>
        </div>
        <h1>Sofía Orrego</h1>
      </header>

      <main>
        <section id="proyectos" className="work-section" aria-labelledby="project-section-title">
          <div className="work-heading">
            <h2 id="project-section-title">Proyectos</h2>
            {projects.length > 0 && (
              <span>
                {projectCount === 0
                  ? "Proyectos de muestra · Imágenes generadas"
                  : `${projectCount} ${projectCount === 1 ? "proyecto" : "proyectos"}`}
                {projectCount > 0 && sampleCount > 0 && (
                  ` · ${sampleCount} ${sampleCount === 1 ? "muestra" : "muestras"}`
                )}
              </span>
            )}
          </div>
          {projects.length > 0 ? <ProjectCollage projects={projects} /> : <ConstructionNotice />}
        </section>
      </main>

      {projects.length > 0 && (
        <footer className="site-footer">
          <a className="section-link" href="#inicio">
            Volver arriba <span className="arrow-mark arrow-up" aria-hidden="true" />
          </a>
        </footer>
      )}
    </div>
  );
}
