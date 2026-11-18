---
name: Portafolio de Sofía Orrego
description: Collage editorial con fondo blanco y controles verde oliva.
colors:
  accent: "#46523B"
  accent-hover: "#39432F"
  on-accent: "#FFFFFF"
  paper: "#FFFFFF"
  ink: "#161711"
  muted: "#515247"
  rule: "#22231b"
  concrete: "#d5d4c7"
typography:
  display:
    fontFamily: IBM Plex Sans
    fontSize: "clamp(2.9rem, 11.85vw, 9.5rem)"
    fontWeight: 300
    lineHeight: 0.91
    letterSpacing: "-0.04em"
  headline:
    fontFamily: IBM Plex Sans
    fontSize: "clamp(1.65rem, 3.25vw, 2.75rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  sheet-title:
    fontFamily: IBM Plex Sans
    fontSize: "clamp(2rem, 5.5vw, 4.9rem)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  tile-title:
    fontFamily: IBM Plex Sans
    fontSize: "clamp(1rem, 1.6vw, 1.4rem)"
    fontWeight: 300
    lineHeight: 1.12
  construction-title:
    fontFamily: IBM Plex Sans
    fontSize: "clamp(1.85rem, 5vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: IBM Plex Sans
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.55
  control:
    fontFamily: IBM Plex Sans
    fontSize: "1rem"
    fontWeight: 400
  label:
    fontFamily: IBM Plex Sans
    fontSize: "0.875rem"
    fontWeight: 400
rounded:
  square: "0px"
spacing:
  control-inset: "1rem"
  content-gap: "1.25rem"
  collage-gap: "clamp(0.7rem, 1vw, 1.1rem)"
components:
  section-link:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
  project-link:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
  project-close:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.square}"
    size: "3.25rem"
  project-tile:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.tile-title}"
    rounded: "{rounded.square}"
  text-tile:
    backgroundColor: "{colors.concrete}"
    textColor: "{colors.ink}"
    typography: "{typography.tile-title}"
    rounded: "{rounded.square}"
  project-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    width: "min(100%, 51rem)"
  construction-notice:
    backgroundColor: "{colors.concrete}"
    textColor: "{colors.ink}"
    typography: "{typography.construction-title}"
    rounded: "{rounded.square}"
---

# Sistema de diseño del portafolio de Sofía Orrego

## Overview

**Creative North Star: "Lámina de arquitectura"**

El portafolio toma su ritmo de una lámina de arquitectura. El nombre en IBM Plex Sans, las líneas de registro y el espacio entre piezas ordenan los recortes del collage. El blanco enmarca las imágenes y el verde oliva señala dónde actuar.

La ficha se abre desde el borde derecho y conserva el collage a la vista bajo un velo de tinta. La vista previa reúne cuatro proyectos de Sofía y sus galerías de imágenes.

**Key Characteristics:**

- Recortes de distinta escala con bordes cuadrados.
- Tipografía ligera y líneas finas de tinta.
- Controles verde oliva con texto e iconos blancos.

## Colors

### Primary

- **Verde oliva.** `#46523B` destaca los saltos de sección, las flechas de las piezas, el botón de cierre y la selección de texto. El texto y los iconos sobre oliva son blancos.

### Neutral

- **Blanco.** `#FFFFFF` sostiene la página, las cartelas y la ficha.
- **Tinta.** Da contraste al texto y al foco de teclado. Se vuelve translúcida detrás de la ficha.
- **Tinta atenuada.** Identifica el conteo y la nota de muestra junto al encabezado de proyectos.
- **Línea de registro.** Define los marcos, las divisiones y los bordes de los controles.
- **Hormigón.** Da fondo a los recortes, las piezas sin portada y el estado vacío.

**Regla del oliva.** Reserva el verde para acciones, cartelas activadas por el puntero o el teclado y selección de texto.

## Typography

El proyecto aloja IBM Plex Sans en un archivo variable. El nombre, los títulos y las descripciones usan Light 300. Las cabeceras compactas, las etiquetas y los enlaces de acción usan Regular 400.

- **Nombre.** Escala fluida y caja ajustada con interlineado de 0.91.
- **Encabezado de sección.** Escala fluida contenida e interlineado de 1.05.
- **Título de ficha.** Columna de hasta `18ch`.
- **Título de pieza.** Cartela de altura flexible que admite nombres largos.
- **Descripción.** Texto de ficha limitado a `68ch`.
- **Nota de muestra.** Texto pequeño en tinta atenuada.

**Regla de la jerarquía.** Usa la escala y el peso para distinguir el nombre, la sección y cada pieza.

## Layout

El marco centrado crece hasta `105rem` y el margen interior se ajusta entre `1rem` y `3.75rem`. Las imágenes rellenan su recorte en el collage y conservan su proporción en la ficha.

- **Móvil, por debajo de `40rem`.** Una columna. La pieza principal es 1:1, la secundaria 16:9 y la estándar 4:3. Cuando la última ocuparía el lugar de otra principal, funciona como franja 2:1.
- **Tablet, desde `40rem` hasta menos de `64rem`.** Dos columnas. La primera pieza ocupa ambas. Una pieza final que queda sola en su fila también ocupa ambas. Las dos usan 16:9.
- **Escritorio, desde `64rem`.** Doce columnas. La primera pieza ocupa siete columnas por dos filas. Dos piezas más estrechas ocupan las cinco columnas restantes. El siguiente grupo invierte la composición. La última pieza abre una franja a todo ancho cuando inicia un grupo.

## Elevation & Depth

Las superficies son planas. La ficha crea profundidad con un velo de tinta al 65% y una línea vertical de separación. Si el usuario permite movimiento, las tres primeras imágenes aparecen con un recorte escalonado y la ficha entra desde la derecha.

**Regla de la superposición.** Usa el velo de tinta y el borde para distinguir la ficha del collage.

## Shapes

Paneles, recortes y controles tienen esquinas rectas. Los contornos y las divisiones de cartelas y controles usan líneas de `1px`. La cabecera remata con una línea de `2px`. Las flechas y la cruz de cierre se dibujan con trazos de `1.5px`.

## Components

### Navegación y enlaces

Los saltos de página usan fondo verde oliva, texto blanco y una flecha direccional. El enlace de ficha lleva flecha diagonal y marco completo. El puntero oscurece el fondo a `#39432F`. El foco de teclado lleva contorno de tinta de `3px` separado por `3px`.

### Pieza del collage

La imagen y la cartela forman una sola superficie interactiva. El título se alinea a la izquierda y la flecha blanca ocupa un bloque oliva a la derecha. El puntero o el foco aplican esa combinación al resto de la cartela. La variante sin portada usa una superficie de hormigón y una cartela blanca en reposo.

### Ficha y cierre

La ficha lateral ocupa todo el ancho disponible hasta `51rem`. La barra superior queda fija durante el desplazamiento y lleva un cierre cuadrado oliva con cruz y foco interior blancos. Cuando corresponde, la barra muestra «Proyecto de muestra · Imagen generada».

Al abrir una galería, la portada aparece primero. El marco mantiene su proporción al deslizar y muestra cada imagen completa. Una línea bajo el marco identifica cada imagen. La activa usa oliva oscuro y un trazo más grueso. Las demás usan oliva claro. Las líneas funcionan como botones y admiten navegación con las flechas del teclado. El pie identifica la vista y permite abrirla a tamaño completo.

### Estado vacío

El panel de hormigón reúne el texto «Portafolio en construcción» y un dibujo axonométrico de línea. La retícula los coloca lado a lado cuando hay espacio y los apila en una columna estrecha.

## Do's and Don'ts

- **Do** Mantén la portada y la cartela como una sola pieza interactiva.
- **Do** Conserva la etiqueta de muestra junto a las imágenes generadas de la vista previa.
- **Do** Mantén rectas las esquinas de recortes, cartelas y paneles.
- **Do** Delimita las superficies planas con líneas de registro.
