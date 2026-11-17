---
name: Portafolio de Sofía Orrego
description: Collage editorial con fondo naranja claro y controles verde esmeralda.
colors:
  accent: "oklch(84.5% 0.143 164.978)"
  accent-hover: "oklch(76.5% 0.177 163.223)"
  on-accent: "oklch(27.8% 0.033 256.848)"
  paper: "oklch(95.4% 0.038 75.164)"
  ink: "#161711"
  muted: "#515247"
  rule: "#22231b"
  concrete: "#d5d4c7"
typography:
  display:
    fontFamily: Lato
    fontSize: "clamp(2.9rem, 11.85vw, 9.5rem)"
    fontWeight: 700
    lineHeight: 0.91
    letterSpacing: "-0.04em"
  headline:
    fontFamily: Lato
    fontSize: "clamp(1.65rem, 3.25vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  sheet-title:
    fontFamily: Lato
    fontSize: "clamp(2rem, 5.5vw, 4.9rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  tile-title:
    fontFamily: Lato
    fontSize: "clamp(1rem, 1.6vw, 1.4rem)"
    fontWeight: 700
    lineHeight: 1.12
  body:
    fontFamily: Lato
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: Lato
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
    rounded: "{rounded.square}"
  project-link:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
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
    rounded: "{rounded.square}"
---

# Sistema de diseño del portafolio de Sofía Orrego

## Overview

**Creative North Star: "Lámina de arquitectura"**

El portafolio toma su ritmo de una lámina de arquitectura. El nombre en Lato, las líneas de registro y el espacio entre piezas ordenan los recortes del collage. El naranja claro enmarca las imágenes y el verde esmeralda señala dónde actuar.

La ficha se abre desde el borde derecho y conserva el collage a la vista bajo un velo de tinta. Este sistema recoge la vista previa local con imágenes de muestra. La colección de proyectos reales está vacía.

**Key Characteristics:**

- Recortes de distinta escala con bordes cuadrados.
- Jerarquía en Lato y líneas finas de tinta.
- Controles verde esmeralda con texto e iconos gris oscuro.

## Colors

### Primary

- **Verde esmeralda.** `emerald-300` destaca los saltos de sección, las flechas de las piezas, el botón de cierre y la selección de texto. `gray-800` da contraste al texto y los iconos.

### Neutral

- **Naranja claro.** `orange-100` sostiene la página, las cartelas y la ficha.
- **Tinta.** Da contraste al texto y al foco de teclado. Se vuelve translúcida detrás de la ficha.
- **Tinta atenuada.** Identifica el conteo y la nota de muestra junto al encabezado de proyectos.
- **Línea de registro.** Define los marcos, las divisiones y los bordes de los controles.
- **Hormigón.** Da fondo a los recortes, las piezas sin portada y el estado vacío.

**Regla del verde esmeralda.** Reserva el verde para acciones, cartelas activadas por el puntero o el teclado y selección de texto.

## Typography

Lato se aloja en el proyecto. El nombre, los encabezados y los títulos usan el peso 700. La descripción y la nota de muestra usan el peso 400. Las cabeceras compactas y los enlaces de acción mantienen el peso 700.

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

Los saltos de página usan fondo verde esmeralda, texto gris oscuro y una flecha direccional. El enlace de ficha lleva flecha diagonal y marco completo. El puntero cambia el fondo a `emerald-400`. El foco de teclado lleva contorno de tinta de `3px` separado por `3px`.

### Pieza del collage

La imagen y la cartela forman una sola superficie interactiva. El título se alinea a la izquierda y la flecha gris oscura ocupa un bloque verde a la derecha. El puntero o el foco aplican esa combinación al resto de la cartela. La variante sin portada usa una superficie de hormigón y una cartela naranja clara en reposo.

### Ficha y cierre

La ficha lateral ocupa todo el ancho disponible hasta `51rem`. La barra superior queda fija durante el desplazamiento y lleva un cierre cuadrado verde con cruz y foco interior gris oscuro. Cuando corresponde, la barra muestra «Proyecto de muestra · Imagen generada». La ficha incorpora la imagen y el enlace cuando están disponibles.

### Estado vacío

El panel de hormigón reúne el texto «Portafolio en construcción» y un dibujo axonométrico de línea. La retícula los coloca lado a lado cuando hay espacio y los apila en una columna estrecha.

## Do's and Don'ts

- **Do** Mantén la portada y la cartela como una sola pieza interactiva.
- **Do** Conserva la etiqueta de muestra junto a las imágenes generadas de la vista previa.
- **Do** Mantén rectas las esquinas de recortes, cartelas y paneles.
- **Do** Delimita las superficies planas con líneas de registro.
