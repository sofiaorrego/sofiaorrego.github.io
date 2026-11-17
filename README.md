# Portafolio de Sofía Orrego

Sitio público en español. Usa Next.js, TypeScript, Tailwind CSS y Base UI. Los proyectos irán en [content/projects.ts](content/projects.ts) con contenido validado por Sofía.

## Trabajar en la página

Con Node.js 22.12 o superior, desde este repositorio en PowerShell:

```powershell
npm.cmd install
npm.cmd test
npm.cmd run dev
```

Abre `http://localhost:3000` y revisa móvil, tablet y escritorio. Lee [AGENTS.md](AGENTS.md) y usa `$impeccable` para cambios de frontend. Consulta [la referencia de Base UI](components/llms.txt) antes de cambiar componentes.

Cada componente compartido tiene su carpeta, el archivo `Nombre.tsx`, su prueba `Nombre.test.tsx` y un `index.ts` con exportación por defecto. Se importa desde `@/components/Nombre`.

## Publicar

`npm.cmd run build` genera los archivos estáticos en `out/`. Sube los commits a `main` del repo público `sofiaorrego/sofiaorrego.github.io`. En **Settings → Pages**, elige **GitHub Actions** y ejecuta **Portafolio en GitHub Pages** desde **Actions** para iniciar la primera publicación. [Next.js y exportación estática](https://nextjs.org/docs/app/guides/static-exports) · [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
