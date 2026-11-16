# Indicaciones técnicas — Frontend

Parámetros que se siguen para todo lo relacionado con el frontend.

---

## 1. `<head>`: metadatos y SEO

Acá van los **metadatos** e información invisible para el usuario. Se utiliza principalmente para el SEO (encargado de posicionar la página en los motores de búsqueda).

### 1.1 Generales

#### Codificación de caracteres

Define los caracteres que se permiten en la página web. Generalmente se usa `UTF-8`, que es universal y acepta acentos, ñ y símbolos.

```html
<meta charset="UTF-8">
```

Valores comunes:

- `UTF-8` (universal, recomendado).
- `ISO-8859-1` (latino básico, más antiguo).

#### Idioma del contenido (usado para la traducción)

```html
<meta http-equiv="content-language" content="es">
```

Define que la página está escrita en español (`es`); por lo tanto, si el navegador está configurado en otro idioma, va a sugerir al visitante que traduzca la página.

#### Escala y vista (viewport) — se utiliza para responsive

Controla cómo se ve el contenido en móviles y tablets.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- `width=device-width` → ajusta el ancho a la pantalla del dispositivo.
- `initial-scale=1.0` → nivel de zoom inicial (1 significa 100%).

Otros parámetros:

- `maximum-scale=1.0` → evita que el usuario haga zoom.
- `user-scalable=no` → bloquea el zoom (no recomendado por accesibilidad).

#### Título (visible para el usuario)

Lo usan los buscadores para ponerlo en el listado de búsqueda. Es visible en la pestaña del navegador.

```html
<title>Mi página web</title>
```

#### Ícono (visible para el usuario)

Establece el ícono de la página web; por defecto se muestra un mundo gris (no es obligatorio). Es el ícono que muestra el navegador en las listas de búsqueda.

```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

Es muy recomendable que contenga el atributo `sizes`, que indica el tamaño del ícono, así los navegadores saben cuál usar según lo que necesiten.

**Tamaños recomendados**

- **16×16 px** → tamaño clásico en pestañas de navegador.
- **32×32 px** → usado en accesos rápidos y pantallas de alta resolución.
- **48×48 px** → algunos navegadores antiguos lo usan.
- **64×64 px o 96×96 px** → accesos directos en escritorios.
- **180×180 px** → recomendado para dispositivos Apple (iPhone/iPad, como *apple-touch-icon*).
- **192×192 px o 512×512 px** → recomendado para apps web progresivas (PWA) en Android.

**Formatos recomendados**

- `.ico` → funciona en todos los navegadores, soporta múltiples resoluciones en un solo archivo.
- **`.png`** → muy usado hoy porque tiene transparencia y mejor calidad.
- `.svg` → moderno, escalable, pero no soportado por todos los navegadores como favicon.

El formato se debe especificar en el atributo `type` para que el navegador sepa cómo interpretar la imagen:

- `.ico` → `type="image/x-icon"`
- `.png` → `type="image/png"`
- `.svg` → `type="image/svg+xml"`

**Cómo quedarían los íconos cargados en el head**

```html
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="favicon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192" href="favicon-192x192.png">
<link rel="icon" type="image/png" sizes="512x512" href="favicon-512x512.png">
```

#### Estilos CSS

```html
<link rel="stylesheet" href="styles.css">
```

Se pueden vincular todos los que se necesiten.

#### Scripts de JS

Son los archivos de JS que se vinculan a la página HTML y, al igual que los CSS, se pueden tener todos los que se necesiten.

```html
<script src="script.js" defer></script>
```

El atributo define cómo se ejecutará el script:

1. **Sin atributo** — `<script src="script.js"></script>`: se carga el JS y luego continúa la carga del HTML; no se puede visualizar la web hasta que el JS esté listo para ejecutarse. Ralentiza la carga de las páginas web.
2. **Con `defer`**: espera a que el DOM (la página web) esté cargado; es decir, no se ejecuta nada del JS hasta que no se renderiza todo el HTML.
3. **Con `async`**: se ejecutan apenas están disponibles; se utilizan generalmente para estadísticas o scripts de terceros que no alteran el comportamiento del DOM.

### 1.2 Específicas para el SEO

#### Descripción

```html
<meta name="description" content="Este es un ejemplo de página con metadatos en HTML.">
```

Es la descripción de lo que trata la página web; debe tener entre **150 y 160 caracteres**. Es fundamental para que los buscadores sepan de qué trata la página.

#### Palabras clave

Es muy poco utilizado, pero nunca está de más ponerlo para que los motores viejos o pequeños lo puedan utilizar. Las palabras se separan por coma (`,`).

```html
<meta name="keywords" content="HTML, metadatos, ejemplos, programación web">
```

#### Autor

No tiene incidencia directa en el SEO, pero sirve para relacionar la página web con su creador (persona física, empresa u organización).

```html
<meta name="author" content="Tu Nombre">
```

#### Control de indexación para motores

Define cómo debe comportarse el motor de búsqueda ante la página web.

```html
<meta name="robots" content="index, follow">
```

Los atributos son `name` y `content`; este último recibe los parámetros de configuración.

**`name`**

Define para quién está dirigida la metadata; el más común es `robots`, que incluye a todos. Pero se puede tener configuración específica para cada motor:

- `name="googlebot"` (solo para Google).
- `name="bingbot"` (solo para Bing).

**`content`**

Define el comportamiento del motor con respecto a la página web. Es obligatorio aclarar si es `index` o `noindex` y si es `follow` o `nofollow`; los otros parámetros son opcionales, y si no se especifican quedan por defecto.

- `index` → permite indexar la página (aparece en resultados).
- `noindex` → no indexar la página.
- `follow` → seguir los enlaces dentro de la página (indexa las URL que están dentro de la web).
- `nofollow` → no seguir los enlaces.
- `noarchive` → impide que Google guarde una copia en caché.
- `nosnippet` → no mostrar fragmentos de texto debajo del título en Google.
- `max-snippet:50` → limita a 50 caracteres el snippet.
- `max-image-preview:large` → controla el tamaño de miniaturas de imágenes.
- `max-video-preview:0` → impide vista previa de videos.

```html
<!-- Directivas generales (otros motores) -->
<meta name="robots" content="index, follow">

<!-- Google: sí indexa, pero no sigue los enlaces -->
<meta name="googlebot" content="index, nofollow">

<!-- Bing: no indexa, pero sí sigue los enlaces -->
<meta name="bingbot" content="noindex, follow">

<!-- Yahoo: no indexa ni sigue enlaces -->
<meta name="yahooSeeker" content="noindex, nofollow">
```

### 1.3 OpenGraph — compartir la web en redes sociales

Es un **protocolo creado por Facebook** para que cualquier página web pueda controlar cómo se ve cuando se comparte en **redes sociales** (Facebook, LinkedIn, Twitter, WhatsApp, etc.).

```html
<meta property="og:title" content="Título para redes sociales">
<meta property="og:description" content="Descripción optimizada para redes">
<meta property="og:image" content="imagen.jpg">
<meta property="og:url" content="https://ejemplo.com">
```

#### `og:title`

- Define el **título que se mostrará al compartir la página**.
- Debe ser **claro, atractivo y breve** (aprox. 60–70 caracteres).
- Ejemplo: `"Curso de HTML y CSS para principiantes"`

#### `og:description`

- Texto que se muestra **debajo del título** en la tarjeta de la red social.
- Ideal entre **100–200 caracteres**, resumido y llamativo.
- Ejemplo: `"Aprende a crear páginas web desde cero con ejemplos prácticos y fáciles de entender."`

#### `og:image`

- URL de la **imagen que se mostrará en la tarjeta**.
- Recomendaciones:
  - Tamaño mínimo: **1200×630 px** (para Facebook y LinkedIn).
  - Formato: `.jpg` o `.png`.
  - Proporción: 1.91:1 (horizontal).

Opcionalmente:

- `og:image:width` → define el ancho de la imagen para que no sufra deformaciones en el reescalado.
- `og:image:height` → define el alto de la imagen para que no sufra deformaciones en el reescalado.

#### `og:url`

Es la URL de la página web; debe ser la principal, la más representativa de la web.

Recomendaciones:

- URL canónica de la página.
- Importante para que **la red social reconozca la página única** y evite duplicados.
- Siempre debe ser **la misma URL que se comparte**.

#### `og:type`

Define el tipo de contenido que se compartió en la red social. Cada tipo permite información más específica; los principales son:

| og:type | Uso principal |
| --- | --- |
| `website` | Página web genérica o principal de un sitio. |
| `article` | Artículo o post de blog; permite fecha de publicación, autor y sección. |
| `book` | Página sobre un libro; permite autor, ISBN, fecha de publicación. |
| `profile` | Perfil de persona; se pueden incluir nombre, sexo, username. |
| `video.movie` | Película o video; permite duración, actor, director. |
| `video.episode` | Episodio de serie o programa. |
| `music.song` | Canción; permite artista, álbum, duración. |
| `product` | Producto; útil para e-commerce. |
