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
  {
    id: "sendero-interpretativo-collipulli",
    title: "Sendero interpretativo de Collipulli",
    description: [
      "Proyecto grupal de magíster desarrollado con Freddy Sepúlveda. En Collipulli, Región de La Araucanía, la propuesta enlaza la estación ferroviaria, la iglesia de San Leonardo, el Molino El Globo y el viaducto del Malleco mediante un recorrido patrimonial.",
      "La intervención propone recuperar la estación como centro cultural. Un atrio prolonga el paseo patrimonial y un nivel soterrado incorpora espacios de exposición. El programa contempla una muestra dedicada a Mario Grandón.",
      "El sendero incorpora una ciclovía, miradores y espacios de pausa. En el viaducto, una pasarela con exposiciones a ambos lados permite recorrer el interior de la estructura.",
    ].join("\n\n"),
    cover: {
      src: "/proyectos/sendero-interpretativo-collipulli.webp",
      alt: "Vista del centro cultural en la Estación Collipulli, con un atrio cubierto y una escalera amarilla",
      width: 1920,
      height: 1080,
    },
  },
  {
    id: "archivo-tomi-ungerer",
    title: "Archivo Tomi Ungerer en Estrasburgo",
    description: [
      "Proyecto grupal de Taller VIII de Arquitectura desarrollado por Javiera Díaz, Sofía Orrego e Isabela Troncoso. La propuesta sitúa un archivo dedicado al ilustrador Tomi Ungerer en la Gran Isla, en el centro histórico de Estrasburgo.",
      "El proyecto distribuye los depósitos en tres torres que toman como referencia la altura y el ancho de las fachadas vecinas. Una abertura entre los volúmenes prolonga el recorrido desde la plaza arbolada hasta una terraza sobre el río.",
      "El programa incluye salas de exposición, lectura y consulta, además de una librería y una cafetería. El nivel subterráneo incorpora un espacio de digitalización para las obras del archivo.",
    ].join("\n\n"),
    cover: {
      src: "/proyectos/archivo-tomi-ungerer.webp",
      alt: "Vista desde el río de tres torres de ladrillo entre los edificios del centro histórico de Estrasburgo",
      width: 1477,
      height: 819,
    },
  },
];
