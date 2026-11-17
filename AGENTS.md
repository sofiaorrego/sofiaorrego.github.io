# Portafolio público de Sofía Orrego

## Git y calidad

1. Empieza leyendo `AGENT.md` y comprobando `git status --short --branch`. Si estás en `main`, el árbol está limpio y existe `origin/main`, ejecuta `git pull --ff-only origin main` antes de editar. Si hay cambios pendientes, respétalos y sincroniza cuando sea seguro. En un worktree, sincroniza primero el checkout principal si es accesible, está limpio y usa `main`. En su defecto, ejecuta `git fetch origin main` y trabaja desde la referencia actualizada. Si aún no existe el remoto o su primera rama, informa y continúa localmente.
2. Usa TypeScript para el código y TDD para cada comportamiento nuevo o corregido. Escribe y ejecuta primero una prueba que falle por el motivo esperado, implementa lo mínimo, vuelve a ejecutar las pruebas y después refactoriza. Documenta cualquier comprobación impedida por el entorno.
3. En trabajo de frontend, invoca `$impeccable` antes de editar. Abre los cambios en un navegador y revisa móvil, tablet y escritorio, teclado, interacciones y consola. Si una herramienta falla, registra lo pendiente al entregar.
4. Revisa el diff y las pruebas. Haz commits pequeños por tema con mensajes claros. Comprueba el destino de `origin` antes de `git push` o `git push -u origin <rama>`. Si la rama diverge, revisa su historia. Evita forzar un push. Conserva cada cambio en el repositorio al que pertenece.

## Este repo

- Usa Next.js App Router, Tailwind CSS y Base UI. Mantén `output: "export"` y rutas desde la raíz de GitHub Pages.
- Antes de crear o modificar cualquier componente de UI, abre [components/llms.txt](components/llms.txt) y la página del componente de Base UI a la que apunta. Reutiliza los componentes existentes. Centraliza la UI compartida en `components/`.
- Cada componente vive en `components/Nombre/Nombre.tsx`, con `Nombre.test.tsx` e `index.ts` con exportación por defecto. Importa con `@/components/Nombre`. Usa `.ts` para lógica y `.tsx` para JSX.
- Lee `PRODUCT.md` antes de diseñar. Para cambios visuales, invoca `$impeccable` y úsalo también para revisar el resultado. Ejecuta `npm test` y `npm run build`. Abre `npm run dev` en el navegador y comprueba anchos de 390, 768 y 1440 píxeles, navegación por teclado, estados abiertos y desbordes.
- Publica solo el contenido explícitamente aprobado por Sofía. Registra en el vault los avances relevantes, con un enlace al proyecto cuando exista.
