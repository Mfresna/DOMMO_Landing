# Prompt para generar el mockup HTML del frontend

Prompt para pasarle a otra IA y obtener un mockup estático (sin backend) de DOMMO. Se basa en `GUIA_MARCA.md` y en los documentos `REQUISITOS.md`, `GLOSARIO.md` y los endpoints del proyecto de la aplicación (DOMMO-Coworking), **que no están en este repositorio**. Este prompt describe la app de reservas completa, no la landing. Si cambia la guía de marca o los requisitos, actualizar este archivo.

Adjuntar a la otra IA: los SVG de `docs/Logos-DOMMO/SVG/` y algunas fotos de `docs/Imagenes-DOMMO/` (la maqueta `DOMMO_home_manual_marca.html` no está en el repo; como referencia visual de la home sirve la landing, `index.html`). Si la IA tiene límite de salida chico, pedir primero home, catálogo y wizard de reserva, y el resto en una segunda tanda.

---

Actuá como diseñador/a frontend senior. Necesito un **mockup navegable en HTML/CSS/JS puro** (sin frameworks, sin build, sin backend) del frontend de **DOMMO · espacio matheu**, un coworking de salas de reuniones y oficinas en Mar del Plata. El objetivo es **validar estética, estructura de pantallas y lógica de navegación**, **no** el funcionamiento real. Todos los datos son ficticios y están hardcodeados en JS. No hay llamadas de red, login real ni pagos reales. Los botones simulan el flujo (cambiar de pantalla, abrir modales, mostrar mensajes de éxito o error de ejemplo).

## 1. Entregables técnicos
- Una carpeta con `index.html`, `styles.css` (tokens CSS) y `app.js` (datos mock y navegación simple). Puede ser un único HTML con navegación por hash (`#/reservar`, `#/mis-reservas`, etc.). Elegí lo más simple.
- Responsive (mobile-first, contenedor máx. 1410 px), `lang="es"`, `<meta viewport>`, título por vista, favicon con el monograma "MM".
- Un **selector flotante de rol** (Cliente / Secretaría / Administrador) y un **selector de estado de datos** (con datos / vacío / error), solo para el mockup.
- Comentarios en el código que marquen qué vendría de la API (ej. `<!-- API: GET /salas -->`), sin implementarla.

## 2. Identidad visual (OBLIGATORIA, no improvisar)
**Esencia:** limpia, ordenada, profesional, moderna, cálida. Claim: *"Un lugar a la altura de tu trabajo."* Regla: **mucho aire, pocos elementos por pantalla, sobrio y cálido**. Líneas finas, **sin sombras ni degradados**.

**Paleta (solo estos 4 tonos como identidad):**

| Rol | Nombre | HEX | Uso aprox. |
|---|---|---|---|
| Fondo | Crema | `#FFFDF7` | 50 % (fondo por defecto) |
| Neutro | Hueso | `#F4F1EC` | 25 % (secciones alternas, tarjetas suaves) |
| Secundario | Gris niebla | `#9FA3AE` | 15 % (texto secundario, bordes, apoyo) |
| Principal | Grafito | `#3C3E4B` | 10 % (texto principal, botón primario, logo) |

Extras: línea/borde sutil `--line:#dedbd5`; epígrafes `#82858c`; backdrop de modales `#252733a8`.
**Colores de estado, solo para feedback (mensajes, campos, badges), nunca como decoración ni en botones:** error `#B4443C` (fondo `rgba(180,68,60,.12)`), éxito `#4F7A5A` (fondo `rgba(79,122,90,.12)`).
**Prohibido:** verde de marca, azules o rojos estridentes, modo oscuro. Las secciones oscuras puntuales usan fondo grafito con texto crema.

```css
:root{
  --graphite:#3C3E4B; --mist:#9FA3AE; --bone:#F4F1EC; --cream:#FFFDF7;
  --line:#dedbd5; --error:#B4443C; --ok:#4F7A5A;
  --radius-contenedor:1.5rem;
}
```

**Tipografía (Poppins e Inter, fuentes locales):** títulos **Poppins Bold**; descriptor y microtextos **Poppins**; cuerpo **Inter Regular**, base `400 15px/1.4 Inter`, **interlineado 1.4**. Etiquetas, botones y epígrafes en **MAYÚSCULAS, 10–12 px, letter-spacing .08–.18em, peso 600**.

**Formas:**
- **Botones y campos de formulario: SIEMPRE rectos (`border-radius:0`)**. Nada de píldoras ni esquinas suaves.
- **Contenedores** (tarjetas, paneles, modales, cajas): esquinas redondeadas con **un único radio `1.5rem`** en todo el sitio.
- Botones de 48 px de alto (42 px en la barra de navegación), texto 12 px, mayúsculas, peso 600.

**Variantes de botón (solo con los 4 tonos, mismas medidas y esquinas rectas):**

| Variante | Fondo | Texto | Borde |
|---|---|---|---|
| Primario (uno por vista) | Grafito | Crema | Grafito |
| Secundario | Transparente | Grafito | Grafito (hover: invierte a grafito/crema) |
| Suave | Hueso | Grafito | `--line` |
| Primario sobre grafito | Crema | Grafito | Crema |
| Contorno sobre grafito | Transparente | Crema | Crema (hover: invierte) |
| Deshabilitado | el de su variante | el de su variante | el de su variante, con opacidad reducida |

Hover: `translateY(-2px)` o inversión del contorno. Sin colores de estado en botones.

**Logo:** versión principal horizontal con descriptor "espacio matheu" por defecto (~80 % de los usos), en grafito + niebla sobre crema/hueso. Versión negativa (crema + niebla) sobre grafito. **Monograma "MM"** para espacios chicos (< 120 px de ancho, avatar, favicon). Nunca deformar, recolorear, contornear, poner sombra ni ubicar sobre fotos recargadas. Respetá el área de seguridad. Usá los SVG adjuntos; si no los tenés, poné un placeholder "DOMMO" en Poppins Bold con "e s p a c i o  m a t h e u" espaciado debajo.

**Fotografía:** fotos reales, luz natural, madera, sin poses stock ni filtros. Usá las imágenes adjuntas o placeholders grises neutros con etiqueta. Texto sobre foto solo en zonas calmas y con contraste (pie de foto en blanco, mayúsculas, 11 px).

**Voz y tono:** clara, directa, cálida, segura; **voseo rioplatense** ("Reservá tu lugar", "Tu lugar, a tu manera"). Sin humor como recurso central, sin exageración ni solemnidad.

## 3. Contexto de negocio (para que la lógica de las pantallas sea correcta)
- Sucursal única hoy: **Espacio Matheu**, pero la UI debe poder mostrar varias. La sucursal es el **primer paso** de la reserva. Cada una tiene horario de apertura y cierre (ej. 08:00–20:00, ficticio).
- **Salas** (tipo `REUNIONES` u `OFICINA`): nombre, capacidad, precio por hora, mínimo de horas consecutivas (ej. sala de conferencias 3 h), horas de anticipación para cancelar, estado (ACTIVA / INACTIVA / MANTENIMIENTO; las no activas no se ofrecen) y **amenities** (TV, pizarra, café, wifi, aire acondicionado).
- **Disponibilidad en bloques de 1 hora** enteros, dentro de apertura y cierre. Un bloque libre aislado puede no cumplir el mínimo de horas consecutivas, y la UI debe indicarlo.
- **Dos modalidades de reserva:**
  - **Puntual:** una o varias franjas (sala + fecha + hora desde/hasta), que pueden ser de salas y fechas distintas.
  - **Recurrente:** patrón semanal (día de la semana + franja + sala, hasta 20 patrones) entre fecha de inicio y fin. Si dura más de un mes, se paga mes a mes por adelantado.
- **Ventana configurable por el administrador:** máximo de meses de duración y de anticipación (por defecto 12 y 12). Mostrá un error de ejemplo si se supera.
- **Retención de 10 minutos:** al crear la reserva (estado PENDIENTE) los horarios se retienen 10 min hasta acreditar el pago. Si vence, pasa a VENCIDA y se liberan. Mostrá un **contador regresivo** en la pantalla de pago.
- **Estados de reserva:** PENDIENTE, CONFIRMADA, FINALIZADA, CANCELADA, VENCIDA (badges sobrios).
- **Precio:** horas × precio por hora, desglosado por sala. **Descuentos** por horas mínimas (ej. más de 10 h → 10 %) o por sala. No son acumulables: se aplica uno solo. Mostrá bruto, descuento y total. Una liquidación en $0 queda pagada y confirma sola.
- **Liquidación:** alquiler + servicios adicionales de un período, con fecha límite de pago. Sin pagos parciales: cada liquidación se paga completa. Pago online con **Mercado Pago** (simulá "redirigiendo a Mercado Pago" y un retorno exitoso, fallido o pendiente) o **efectivo** registrado por la secretaría.
- **Cancelación:** siempre posible en una reserva confirmada. Si se cancela con la anticipación mínima de cada sala, se devuelve lo pagado (en dinero, manualmente, por secretaría). Si no, no hay devolución. El **motivo** es obligatorio (máx. 500 caracteres). Mostrá cuánto se devolvería antes de confirmar.
- **No-show:** un bloque confirmado que no se usa se considera consumido, sin devolución ni crédito. No hay créditos ni horas a favor.
- **Perfiles fiscales:** máximo 3 por cliente, con un favorito siempre. Cada reserva elige uno propio. Campos típicos de Argentina: razón social o nombre, CUIT/CUIL/DNI, condición frente al IVA, domicilio fiscal, email de facturación. Avisá antes de editar o eliminar un perfil con facturas por emitir. La factura la carga la secretaría (PDF adjunto) y el cliente la ve como "Descargar comprobante".
- **Roles:** `CLIENTE`, `SECRETARIA`, `ADMINISTRADOR`. Secretaría y administrador ven todas las sucursales y también pueden reservar como cliente.
- **Cuentas:** ACTIVO / INACTIVO / BLOQUEADO. El email debe estar **verificado** para reservar online. Registro con email y contraseña (8 a 20 caracteres, con mayúscula, minúscula y número), verificación por email, recuperación de contraseña, bloqueo por intentos fallidos y **"Continuar con Google"**.
- **Notificaciones:** campanita con **contador de no leídas** en el header y listado paginado. Se puede marcar una o todas como leídas. Tipos: SISTEMA (ej. "Debe abonar la liquidación del mes…"), PERSONAL (de secretaría, ej. "Ya está listo su pedido") y VISITA ("Llegó {nombre}"). Son unidireccionales, sin respuestas. Las leídas se eliminan a los 60 días.
- **Hacer pasar a una visita:** en una notificación VISITA, el cliente con **reserva activa en ese momento** toca "Hacer pasar" y se envía a las **pantallas (TV)** de la sucursal: *"Cliente {visita} pasar por {sala}"*. Sin reserva activa en esa sala → mensaje de error. Si la cola está llena o envía muy seguido → botón deshabilitado unos segundos y reintento.
- **Pantalla de TV (`/dispositivo?token=…`):** vista pública a pantalla completa, sin navegación, fondo grafito. Muestra de a un aviso, grande y legible (Poppins Bold, crema), durante ~30 s, con el logo DOMMO. En reposo muestra logo, hora y fecha. Es la misma para todos los televisores de la sucursal.

## 4. Pantallas a diseñar

### Públicas
1. **Home** (referencia: la maqueta de marca adjunta): hero (titular "Un lugar a la altura de tu trabajo." + foto grande + CTA primario "Reservá tu lugar") → nosotros ("El espacio también habla de vos.") → espacios (tarjetas de salas) → statement → modalidades ("Una forma de trabajar.": puntual vs recurrente) → experiencia ("El detalle hace la diferencia.": amenities y servicios) → cierre/CTA ("Tu próximo espacio de trabajo te espera.") → footer.
2. **Catálogo de salas** con filtros (sucursal, tipo, capacidad mínima, rango de precio, amenities, nombre) y tarjetas con foto, nombre, tipo, capacidad, precio por hora, mínimo de horas y amenities.
3. **Detalle de sala:** galería, descripción, amenities, política (mínimo de horas, cancelación), precio y botón "Reservar esta sala".
4. **Registro, inicio de sesión, verificar email (PIN o enlace), olvidé mi contraseña / restablecer**, con estados de error (credenciales inválidas, cuenta bloqueada, email no verificado).
5. **Pantalla TV** (ver sección 3).

### Cliente
6. **Flujo de reserva** (wizard, un paso por pantalla, con indicador de progreso sobrio):
   1. Sucursal.
   2. Modalidad (puntual / recurrente).
   3. Sala(s), fechas o patrón y horarios: selector de fecha y **grilla de bloques de 1 hora** (libres seleccionables, ocupados deshabilitados, aviso si no se cumple el mínimo consecutivo). Resumen lateral con las franjas elegidas y posibilidad de sumar más salas o fechas. En recurrente: días de la semana, franja, sala, fecha de inicio y de fin.
   4. Perfil fiscal (elegir uno guardado o crear uno) y observaciones.
   5. Resumen y precio: desglose por sala, descuento aplicado y total. Para recurrente de más de 1 mes, mostrar el primer período a pagar y aclarar que los siguientes se pagan mes a mes.
   6. Pago: contador regresivo de 10 min y botón "Pagar con Mercado Pago" (simulado). Estados: éxito, pendiente, rechazado y vencido (con "Volver a empezar").
   7. Confirmación con resumen y acceso a "Mis reservas".
7. **Mis reservas:** listado paginado con filtros (estado, tipo, sala, desde/hasta) y badges de estado. **Detalle** con usos por fecha, patrones, liquidaciones (período, vencimiento, bruto, descuento, total, estado), pagos y comprobante descargable. Incluye botón "Pagar" en liquidaciones pendientes y "Cancelar reserva" (modal con motivo y aviso de devolución).
8. **Mis perfiles fiscales** (ABM, máx. 3, favorito) y **Mi cuenta** (datos personales editables salvo el email, cambiar contraseña, historial de operaciones, "Darme de baja" marcado como A DEFINIR).
9. **Notificaciones** (campanita y página completa) con la acción "Hacer pasar" en las de tipo VISITA y un modal para confirmar el nombre de la visita.

### Secretaría (además de lo del cliente)
10. **Panel de reservas:** tabla filtrable de todas las reservas (titular, estado, sala, sucursal, fechas) y detalle. Incluye:
    - **Alta presencial** para un cliente, con el mismo wizard.
    - **Cobro en efectivo** de una o varias liquidaciones juntas.
    - **Emisión de liquidaciones anticipadas** y **liberación por mora**.
    - Cancelación con importe a devolver.
    - Carga manual de factura (subir PDF).
11. **Clientes:** listado, alta manual, ver y gestionar sus perfiles fiscales, cambiar estado de cuenta (solo de clientes).
12. **Enviar notificación** a un cliente (mensaje editable, campo opcional "visitante").
13. **Estado de salas** y gestión de amenities.

### Administrador (todo lo anterior, más)
14. **Sucursales** (alta, edición, horarios, activar/inactivar), **Salas** (alta y edición con tipo, capacidad, horas mínimas, anticipación de cancelación y precio por hora) y **Amenities** (catálogo).
15. **Descuentos** (por horas mínimas o por sala, porcentaje, activo/inactivo), con la nota "no acumulables, gana el mayor general".
16. **Configuración de reservas** (máx. meses de duración y de anticipación).
17. **Servicios y precios por sucursal** (recepción de paquetes, impresiones, cafetería).
18. **Usuarios y roles** (asignar uno o varios roles, estado de cuenta).
19. **Dispositivos (TV)** por sucursal: listar, alta con nombre, mostrar el **token de 8 dígitos y el link `/dispositivo?token=…` una sola vez** (con advertencia de que no se vuelve a ver), regenerar token y dar de baja.

## 5. Navegación y componentes
- **Header** con logo principal a la izquierda, enlaces según rol, campanita con contador y menú de usuario. Footer sobrio sobre hueso o grafito.
- Componentes con estética de marca:
  - Botones (6 variantes).
  - Campos de texto, select, fecha, checkbox y radio **rectos**, con etiqueta en mayúsculas pequeñas y error en `--error`.
  - Tarjetas y paneles (radio 1.5rem, borde `--line`, sin sombra).
  - Tablas finas con filas separadas por línea.
  - Badges, tabs, paginación y modales (backdrop grafito translúcido).
  - Toasts y alertas con fondo translúcido de estado.
  - Estados vacíos (mensaje cálido + CTA) y de carga (esqueletos hueso).
- Accesibilidad: contraste suficiente, foco visible, navegación por teclado, `aria-label` en íconos.
- Íconos: línea fina, monocromos grafito/niebla, SVG inline.

## 6. Lo que NO debés hacer
- No conectar a ninguna API ni implementar autenticación, pagos o validaciones reales.
- No agregar colores, fuentes, sombras, degradados, esquinas redondeadas en botones o campos, ni verde de marca.
- No inventar reglas de negocio distintas a las descriptas. Si algo es ambiguo, marcalo con `<!-- A DEFINIR -->`.
- No usar fotos con poses stock ni textos con humor o exageración.

## 7. Cómo responder
Primero listá brevemente la estructura de archivos y la navegación. Después entregá el código completo y funcional, listo para abrir con doble clic en `index.html`. Al final indicá qué pantallas y estados simulaste y qué quedó como "A DEFINIR".
