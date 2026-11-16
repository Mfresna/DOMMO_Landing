# Guía de marca DOMMO para el Frontend

Resumen operativo de los archivos de `docs/` (`Referencias PDF/`, `Logos-DOMMO/`, `Imagenes-DOMMO/`). **Consultar este archivo en lugar de releer los PDF.**

Fuentes:
- `DOMMO · Manual de marca- .pdf` — Manual de marca v1.0, ed. 2026, por Jota Efe Diseño (13 pp.). Texto extraído.
- `KIT DOMMO- LOGO.pdf` — Kit de logo (5 pp.). Es imagen: se interpretó visualmente; la p. 5 ("Reglas") no se pudo leer, pero las reglas de uso están en el manual (§4 de esta guía).
- La maqueta `DOMMO_home_manual_marca.html` (referencia de layout y CSS) **no está incluida en este repositorio**; la landing (`index.html`, `css/styles.css`) es hoy la referencia de aplicación del manual.

> Marca: **DOMMO** + descriptor **"espacio matheu"** (sede de Matheu, Mar del Plata). El sistema es modular y replicable en otras sedes.

---

## 1. Esencia de marca (guía para textos y decisiones)

- **Qué es:** espacio de trabajo flexible para profesionales independientes que necesitan trabajar y recibir clientes en un entorno privado o semiprivado, estético y profesional, sin costo de oficina propia.
- **Promesa / claim:** *"Un lugar a la altura de tu trabajo."* (titular de la home).
- **Personalidad:** limpia, ordenada, profesional, moderna, contemporánea. Cualidades: clara, directa, contemporánea, cálida, segura.
- **Valores:** profesionalismo, agilidad (reservar y usar sin fricción), cuidado por el detalle, cercanía (trato humano, sin rigidez corporativa).
- **Origen del nombre:** "domo" (domus, casa); la doble M es un guiño a Manuela y Marcos.

**Regla práctica de diseño:** mucho aire, pocos elementos, sobrio y cálido. Menos objetos, más espacio.

---

## 2. Paleta de color

| Rol | Nombre | HEX | RGB | Proporción de uso |
|---|---|---|---|---|
| Fondo | **Crema** | `#FFFDF7` | 255·253·247 | **50 %** |
| Neutro | **Hueso** | `#F4F1EC` | 244·241·236 | **25 %** |
| Secundario | **Gris niebla** | `#9FA3AE` | 159·163·174 | **15 %** |
| Principal | **Grafito** | `#3C3E4B` | 60·62·75 | **10 %** |

Reglas:
- El fondo por defecto de las pantallas es **crema**; secciones alternas en **hueso**.
- **Grafito** para texto principal, botones primarios y logo; **gris niebla** para texto secundario, bordes, detalles.
- El **verde** está *reservado* como acento secundario futuro. **No usarlo** ahora y **nunca en el logo**.
- Sin colores estridentes. No introducir rojos/azules/etc. como identidad; los colores de estado (ver abajo) se usan **solo** para feedback (error/éxito), nunca como decoración.

**Colores de estado (provisorios, a ajustar al final):** rojo para error y verde para éxito, cada uno con su versión con transparencia para fondos de alertas/campos. Se eligieron apagados para combinar con crema/grafito.

| Estado | Color sólido (texto, borde, ícono) | Con transparencia (fondo) |
|---|---|---|
| Error | `#B4443C` | `rgba(180,68,60,.12)` |
| Éxito | `#4F7A5A` | `rgba(79,122,90,.12)` |

Este verde de éxito es funcional; no equivale al verde de acento de marca reservado para el futuro.
- Variables usadas en la maqueta HTML: `--graphite:#3C3E4B; --mist:#9FA3AE; --bone:#F4F1EC; --cream:#FFFDF7; --line:#dedbd5` (línea/borde sutil, no está en el manual: derivada).

Tokens sugeridos (CSS):
```css
:root{
  --graphite:#3C3E4B; --mist:#9FA3AE; --bone:#F4F1EC; --cream:#FFFDF7;
  --line:#dedbd5; /* derivado en la maqueta, no oficial */
}
```

---

## 3. Tipografía

| Uso | Fuente | Peso |
|---|---|---|
| Títulos (display) | **Poppins** | Bold |
| Descriptor "espacio matheu" | **Poppins** | Regular |
| Cuerpo de texto | **Inter** | Regular |

- **Interlineado: 1.4.**
- Jerarquía de ejemplo: título en Poppins Bold ("Un lugar a la altura de tu trabajo.") + textos en Inter Regular.
- Carga: **fuentes locales** en `assets/fonts/` (Poppins Regular/SemiBold/Bold e Inter variable, con sus licencias OFL), declaradas con `@font-face` en `css/styles.css`. No se usa Google Fonts.
- Estilo de microtexto en la maqueta: etiquetas/botones en **mayúsculas, 10–12 px, `letter-spacing` amplio (.08–.18em), peso 600**. El descriptor del logo va espaciado entre letras ("e s p a c i o  m a t h e u").
- Body base de la maqueta: `400 15px/1.4 Inter`.

---

## 4. Logo

**Versiones** (todas con/sin descriptor, ver kit):

| # | Variante | Cuándo usarla |
|---|---|---|
| 1 | **Principal** — horizontal con descriptor "espacio matheu" | **Por defecto, ~80 % de las aplicaciones** |
| 2 | **Sin descriptor** (solo DOMMO) | Cuando el contexto ya dice dónde estamos: sellos, favicon grande, firmas de mail, marcas de agua |
| 3 | **Monocromo / una sola tinta** | Fondos oscuros, impresión a una tinta, fotocopia, sellos |
| 4 | **Monograma "MM"** | Espacios chicos: avatar, perfil, sello, ícono |
| 5 | **Favicon** | Monograma sobre cuadrado, legible a **16×16 px** |

Combinaciones de color oficiales (fondo · tinta del logo):

| Combinación | Fondo | Logo | Uso |
|---|---|---|---|
| Principal sobre crema | `#FFFDF7` | `#3C3E4B` (+ "MM" parte en `#9FA3AE`) | **Por defecto** |
| Principal sobre hueso | `#F4F1EC` | `#3C3E4B` · `#9FA3AE` | Tarjetas y fondos suaves |
| Negativo sobre grafito | `#3C3E4B` | `#FFFDF7` · `#9FA3AE` | Fondos oscuros |
| Una tinta — grafito sobre crema | `#FFFDF7` | `#3C3E4B` | Todo en una tinta |
| Una tinta — grafito sobre hueso | `#F4F1EC` | `#3C3E4B` | |
| Una tinta — crema sobre grafito | `#3C3E4B` | `#FFFDF7` | Fondo oscuro |
| Una tinta — gris niebla sobre grafito | `#3C3E4B` | `#9FA3AE` | Versión tenue |
| Negro sobre blanco | `#FFFFFF` | `#000000` | Impresión 1 tinta, fotocopia, sellos |
| Blanco sobre negro | `#000000` | `#FFFFFF` | |

**Archivos del logo** (kit en `docs/Logos-DOMMO/`):

| Archivo (carpeta `SVG/`) | viewBox | Uso |
|---|---|---|
| `dommo-logo-con-descriptor_principal.svg` | 489×180 | Logo principal (por defecto). Tinta `#3C3E4B` + `#9FA3AE` |
| `dommo-logo-sin-descriptor_principal.svg` | 489×100 | Sin descriptor |
| `dommo-monograma_principal.svg` | 201×100 | Monograma "MM" |
| `dommo-icono-cuadrado_principal.svg` | 281×281 | Icono cuadrado con fondo crema `#FFFDF7`; base para el favicon |

- **Preferir SVG** (vectorial, colores de la paleta, sin fondo salvo el icono). Los SVG son solo la versión "principal": para fondos oscuros hay que usar los PNG o recolorear con los colores permitidos (crema `#FFFDF7` + gris niebla `#9FA3AE`).
- `PNG sin fondo/`: variantes transparentes en blanco, gris claro, gris oscuro, negro, logo blanco/gris y monograma (blanco, gris oscuro, negro) + `MM.png` (~2 MB, pesado).
- `PNG con fondo/`: variantes con fondo; los nombres son genéricos (`(1).png`…`(9).png`, `DOMMO (1).png`…), hay que abrirlas para saber cuál es cuál.
- En la landing el logo se usa desde `assets/logo-dommo.svg`; los favicons están en `assets/favicon/`.

**Tamaño mínimo:** digital **120 px de ancho**; impreso 30 mm. Por debajo de eso → usar el **monograma**.
**Área de seguridad:** igual a la altura de la "D" del logo (x) en todos los lados; dentro no entra texto, borde ni imagen.

**Sí:** proporciones originales, colores de la paleta, aire alrededor, fondos lisos claros u oscuros de la paleta, logo siempre completo.
**No:**
- Estirar, comprimir o deformar.
- Recolorear (solo grafito, gris niebla y crema).
- Contornear (siempre relleno, nunca solo línea).
- Poner sobre fotos recargadas (elegir zona calma o fondo liso).
- Agregar sombra, brillos o degradados.
- Usar con bajo contraste: debe ser legible sobre el fondo.

**Aplicaciones del logo:** cartelería en crema sobre grafito; papelería en versión original o negativo.

---

## 5. Fotografía e imágenes

**Mostrar:** luz natural (ventanas, claridad, horas reales del día) · espacios reales sin montajes · materiales (parquet, escalera de madera oscura, hogar en recepción) · trabajo auténtico (personas trabajando, sin posar).
**Evitar:** filtros recargados · colores estridentes · poses tipo stock (sin sonrisas armadas ni apretones de manos) · escenas saturadas.

Frase guía: *"Un espacio que se muestra solo: luz, madera y trabajo real."*

Implicancia: hero y galerías con fotos reales y amplias; texto sobre foto solo en zonas calmas y con contraste suficiente (en la maqueta: pie de foto en blanco, mayúsculas, 11 px).

---

## 6. Voz y tono (microcopy de la web)

**Sonamos:** clara · directa · contemporánea · cálida · segura.
**No sonamos:** humor como recurso central · exageración aspiracional · solemnidad rígida · informalidad improvisada.

Aplicar a botones, errores, vacíos y emails. Tratamiento en la maqueta: **voseo rioplatense** ("Reservá tu lugar", "Tu lugar, a tu manera").

---

## 7. Nombres de las reservas

A definir en conjunto; todavía no hay nombres oficiales para la UI.

---

## 8. Patrones de UI observados en la maqueta de marca (`DOMMO_home_manual_marca.html`, no incluida en el repo)

Referencia de cómo el diseñador aplicó el manual; usarla como guía de estilo, no como requisito rígido.

- **Estructura de la home:** hero (titular + foto grande) → nosotros ("El espacio también habla de vos.") → espacios → statement → modalidades ("Una forma de trabajar.") → experiencia ("El detalle hace la diferencia.") → cierre/CTA ("Tu próximo espacio de trabajo te espera.") → modal "Explorar una reserva".
- **Botón primario:** fondo grafito, texto crema, borde 1 px grafito, **esquinas rectas (`border-radius:0`)**, alto 48 px (42 px en nav), texto 12 px, mayúsculas, peso 600, `letter-spacing` amplio.
- **Estética general:** líneas finas (`--line`), sin sombras ni degradados, mucho espacio vertical (secciones con 120–140 px de padding), contenedor máx. **1410 px**.
- **Formas (regla vigente):** los **botones son siempre rectangulares, sin curvatura** (`border-radius:0`, sin píldoras ni esquinas suaves). Los **contenedores** (tarjetas, paneles, modales, cajas que agrupan contenido) **pueden tener esquinas redondeadas**; usar un único radio en todo el sitio: **`1.5rem`** (token `--radius-contenedor`; valor definitivo acordado con el cliente). Los campos de formulario siguen el criterio de los botones: rectos.

### 8.1 Botones: jugar con los tonos oficiales

Los botones solo cambian de aspecto por **color**, usando exclusivamente los cuatro tonos de la paleta (Grafito `#3C3E4B`, Gris niebla `#9FA3AE`, Hueso `#F4F1EC`, Crema `#FFFDF7`). Mismas medidas, tipografía y esquinas rectas en todas las variantes.

| Variante | Fondo | Texto | Borde 1 px | Uso |
|---|---|---|---|---|
| Primario | Grafito | Crema | Grafito | Acción principal de la pantalla (una por vista). |
| Secundario (contorno) | Transparente | Grafito | Grafito | Acción alternativa; en hover pasa a fondo grafito y texto crema. |
| Suave | Hueso | Grafito | `--line` | Acciones de bajo énfasis sobre fondo crema. |
| Primario sobre grafito | Crema | Grafito | Crema | Secciones oscuras. |
| Contorno sobre grafito | Transparente | Crema | Crema | Alternativa sobre secciones oscuras; en hover, fondo crema y texto grafito. |
| Deshabilitado | El de su variante | El de su variante | El de su variante | Con opacidad reducida; no introduce colores nuevos. Gris niebla solo para apoyo (bordes y textos tenues). |

Reglas: sin verde ni colores de estado en botones (el error/éxito se muestra en mensajes, no en el botón); sin sombras ni degradados; el hover usa un desplazamiento mínimo (`translateY(-2px)`) o la inversión de colores del contorno.
- **Modal:** backdrop grafito semitransparente (`#252733a8`).
- **Epígrafes/captions:** 10 px, mayúsculas, color `#82858c`.
- **Tema:** `theme-color #FFFDF7`; sin modo oscuro definido por el manual (el "negativo sobre grafito" es solo para el logo/secciones puntuales).

---

## 9. Checklist rápido de decisión de diseño

- [ ] Fondo crema/hueso; grafito para texto y acciones; niebla para apoyo. Sin verde. Sin colores estridentes.
- [ ] Botones y campos rectos (`border-radius:0`); solo los contenedores pueden ser redondeados. Variantes de botón solo con los cuatro tonos oficiales (§8.1).
- [ ] Títulos Poppins Bold, cuerpo Inter Regular, interlineado 1.4.
- [ ] Logo principal con descriptor por defecto; < 120 px → monograma; área de seguridad respetada; nunca deformado/recoloreado/con sombra.
- [ ] Favicon = monograma legible a 16×16.
- [ ] Fotos reales, luz natural, sin poses stock ni filtros.
- [ ] Copy claro, directo, cálido, sin humor central ni solemnidad.
- [ ] Mucho aire; pocos elementos por pantalla.

## 10. Pendientes / por validar con el cliente
- Colores de error/éxito: provisorios (ver §2); falta definir "aviso" si se necesita.
- Variantes SVG para fondos oscuros (negativo): el kit solo trae el SVG "principal".
- p. 5 del kit ("Reglas") no se leyó; las reglas de uso del manual (§4) son la referencia vigente.
