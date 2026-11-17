# Portafolio de Sofía Orrego

Cada proyecto tiene un espacio para contar qué se hizo, cuál fue el aporte de Sofía y dónde ver el resultado. Mientras no haya proyectos publicados, la portada muestra **Portafolio en construcción**.

[Ver el portafolio](https://sofiaorrego.github.io/) · [Agregar un proyecto](#agregar-un-proyecto) · [Publicar en GitHub Pages](#publicar-en-github-pages)

## Previsualizar el sitio

Abre el repositorio en PowerShell o usa su terminal en Orca. Necesitas Node.js 22.12 o superior. GitHub Actions usa Node.js 24.

```powershell
npm.cmd install
npm.cmd run dev
```

Abre la dirección que muestra la terminal, normalmente `http://localhost:3000`. Guarda un archivo para ver el cambio en la página. Usa `Ctrl+C` para detener la vista previa.

## Agregar un proyecto

Edita [content/projects.ts](content/projects.ts). Para cada proyecto, escribe un título, un identificador único y una descripción breve con su contexto, tu aporte y el resultado. El campo `url` es opcional y se usa cuando el trabajo ya tiene un enlace público.

```ts
{
  id: "nombre-del-proyecto",
  title: "Nombre del proyecto",
  description: "Cuenta qué necesitaba el proyecto, qué hiciste y qué resultado se puede comprobar.",
}
```

Añade la ficha dentro de `projects`. La lista de proyectos aparece al guardar la primera ficha y reemplaza el aviso de construcción. Usa contenido que quieras compartir públicamente.

Si prefieres editar con Codex, abre una sesión en este repositorio desde Orca o ejecuta `codex` en PowerShell. Un buen primer pedido es **Agrega al portafolio este proyecto con el texto que te paso. Muéstrame cómo queda en el navegador antes de publicarlo**.

## Trabajar en la interfaz

| Ruta | Qué contiene |
| --- | --- |
| [app/page.tsx](app/page.tsx) | Portada y selección entre la vista de construcción y la lista de proyectos |
| [app/globals.css](app/globals.css) | Colores, tipografía y estilos compartidos |
| [components/](components/) | Componentes TSX, pruebas e índices con exportación por defecto |
| [components/llms.txt](components/llms.txt) | Índice de Base UI para consultar antes de cambiar un componente |
| [AGENTS.md](AGENTS.md) | Flujo de trabajo para Codex, TDD, Impeccable y revisión del navegador |

Next.js genera el sitio estático. Tailwind CSS se encarga de los estilos y Base UI aporta los comportamientos interactivos. Para un componente compartido, usa `components/Nombre/Nombre.tsx`, su prueba `Nombre.test.tsx` e `index.ts`. Desde una página, impórtalo como `@/components/Nombre`.

Escribe primero la prueba si cambia un comportamiento. Antes de publicar, ejecuta las pruebas y compila el sitio.

```powershell
npm.cmd test
npm.cmd run build
```

Abre la vista previa en el navegador a 390, 768 y 1440 píxeles. Revisa que el texto se lea sin desplazamiento horizontal. Si hay proyectos, comprueba con el teclado que puedas abrir sus detalles y seguir sus enlaces.

## Publicar en GitHub Pages

En la configuración del repositorio, abre **Settings → Pages** y elige **GitHub Actions** como origen. Para el primer despliegue, abre **Actions → Portafolio en GitHub Pages** y ejecuta el flujo en `main`.

A partir de ahí, cada push a `main` ejecuta las pruebas, compila el sitio y publica los archivos de `out/` si todo pasa. Comprueba que el trabajo `deploy` termine correctamente y abre [sofiaorrego.github.io](https://sofiaorrego.github.io/) para ver el cambio. Si el flujo se detiene, abre la ejecución en **Actions** y revisa el primer paso que falló. [Flujo del repositorio](.github/workflows/pages.yml) · [Configuración de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
