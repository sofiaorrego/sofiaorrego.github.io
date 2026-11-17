import type { PortfolioProject } from "./project";

export const projects: PortfolioProject[] = [
  {
    id: "lodge-senior",
    title: "Lodge Senior",
    description: [
      "Proyecto de fin de carrera de Arquitectura UBB, 2022. En Atacalco, El Carmen, la propuesta destina 3.250 m² a un lodge de bienestar para personas mayores.",
      "Un recorrido curvo conduce desde el acceso hacia el río. Los quiebres del volumen siguen la pendiente, buscan conservar la vegetación existente y crean pausas con vistas al paisaje. Una ruta accesible conecta las habitaciones con las áreas comunes.",
      "El programa reúne 20 habitaciones, piscinas, terrazas y espacios de descanso. Sobre fundaciones de hormigón armado, la estructura combina paneles de madera contralaminada (CLT) con vigas y pilares de pino radiata laminado.",
    ].join("\n\n"),
    cover: {
      src: "/proyectos/lodge-senior.webp",
      alt: "Vista conceptual del lodge entre montañas, con fachada de madera y grandes ventanales",
      width: 1871,
      height: 840,
    },
  },
];
