# Brochure DOMMO — lineamientos comerciales y de redacción

Fuente: `frontend/Referencias PDF/BROCHURE DOMMO.pdf` (texto extraído). **Consultar este archivo antes de nombrar salas, redactar textos de interfaz o decidir comportamientos de cara al cliente.** Para el detalle de cada sala ver [SALAS.md](SALAS.md) / [SALAS.json](SALAS.json).

> **Fuera de alcance por ahora:** las modalidades de membresía del brochure (precios, mínimos y bonificaciones) quedan **pendientes de definición**. No documentarlas ni implementarlas hasta que se aprueben, para no generar conflictos con las reservas y los descuentos ya definidos.

---

## 1. Esencia

- **Qué es:** un coworking para profesionales independientes que necesitan trabajar y recibir clientes en un entorno privado o semiprivado, estético y profesional, sin asumir el costo de tener una oficina propia.
- **Cómo se contrata:** los espacios se alquilan por **hora, día o mes** mediante una plataforma **100 % online**.
- **Claim oficial (decidido):** **"Un espacio a la altura de tu trabajo."** Se usa la palabra **"espacio"**. (`frontend/GUIA_MARCA.md` todavía dice "lugar": quedó desactualizada respecto de esta decisión y conviene alinearla cuando la apruebes.)
- **Público:** profesionales de salud y estética (el brochure habla de "pacientes/clientes" y destaca la bacha) y cualquier independiente que reciba clientes o aliados estratégicos.

## 2. Pilares

| Pilar | Frase del brochure | Cómo se traduce en el sistema |
|---|---|---|
| **Profesionalismo** | Un entorno que respalda y eleva tu trabajo. | Mensajes claros y formales sin rigidez; comprobantes y datos correctos. |
| **Agilidad** | Flexibilidad real para reservar, pagar y usar. | Pocos pasos para reservar y pagar; disponibilidad en tiempo real; sin fricción. |
| **Cuidado** | Cada detalle de la experiencia y del espacio está pensado. | Errores explicados con claridad, estados coherentes, nada "a medias". |
| **Cercanía** | Trato humano, personalizado y sin estructuras rígidas. | Tono cálido, canal de contacto visible, evitar jerga burocrática. |

## 3. Tono y redacción

Rasgos observados en el brochure:
- **Voseo rioplatense en imperativo** para guiar al usuario: *Elegí*, *Consultá*, *Reservá*.
- **Frases cortas y nominales**, sin subordinadas largas ("Entorno exclusivo y privado").
- **Titulares en MAYÚSCULAS** con énfasis tipográfico en las palabras clave (ESPACIO, ALTURA, TRABAJO).
- **Cálido y profesional**: lenguaje de hogar ("casa", "calidez") junto a lenguaje de oficio ("profesionalismo", "directorio"). Sin tecnicismos corporativos.
- **"Pacientes/clientes"** juntos, para incluir salud y estética.
- **"Diseño de autor"** como adjetivo recurrente de los espacios.
- Nombres de salas en mayúsculas con prefijo de marca: **DOMMO ESSENTIAL**, etc.

| Sí | No |
|---|---|
| "Elegí tu espacio de trabajo." | "Seleccione el recurso a reservar." |
| "Consultá la disponibilidad en tiempo real." | "El sistema verificará la disponibilidad." |
| "Reservá desde cualquier dispositivo." | "Proceda a realizar la reserva." |
| "Tu espacio está reservado." | "Operación exitosa." |

## 4. Sede 1: Espacio Matheu

- Ubicación: **Matheu y San Luis, Mar del Plata**.
- Es una **casa de estilo marplatense reciclada**: fusiona la calidez del hogar con diseño contemporáneo y arquitectura de autor.
- Funciona como **carta de presentación profesional**: combina la agilidad de un coworking con la estética, comodidad y calidez de un espacio boutique.
- Distribución en **planta baja y planta alta**.
- Se la llama **"Sede 1"** y el descriptor de marca es **"espacio matheu"** (ver `GUIA_MARCA.md`). El sistema debe poder sumar otras sedes.

## 5. Espacios

Cuatro tipos con sus unidades. **Regla (decidida):** cada sala con más de un cupo se trabaja como **unidades numeradas**, y **cada una tiene su propio calendario**.

| Nombre en el sistema | Cupos | Tipo |
|---|---|---|
| DOMMO ESSENTIAL 1, 2, 3, 4 | 4 | Oficina privada |
| DOMMO LAB | 1 | Oficina suite con bacha |
| DOMMO COMFORT 1, 2 | 2 | Oficina con living o baño en suite |
| DOMMO MEETING ROOM | 1 | Sala de reuniones |

Total: **8 salas**. Equipamiento, capacidad y descripciones en [SALAS.md](SALAS.md).

## 6. Gestión 100 % online

Flujo de tres pasos que debe reflejar la experiencia (frontend) y el contrato (API):
1. **Elegí tu espacio de trabajo.**
2. **Consultá disponibilidad en tiempo real.**
3. **Reservá de manera rápida desde cualquier dispositivo.**

Diferenciales declarados:
- **Entorno exclusivo y privado:** módulos y salas preparados para recibir clientes, pacientes o aliados estratégicos con total profesionalismo.
- **Gestión 100 % digital y ágil:** plataforma intuitiva para consultar disponibilidad, reservar y gestionar pagos de forma rápida.
- **Servicios complementarios:** acceso a impresiones, recepción de paquetes y amenities.

## 7. Áreas comunes

- Estación de impresión (**Print Station**).
- **Baños exclusivos** (el brochure lleva un asterisco cuya aclaración no figura en el texto extraído).
- **Coffee Station** equipado.
- **Recepción con personal**.

## 8. Lineamientos para API, backend y frontend

1. **Nombres:** usar los de la tabla del apartado 5, exactos y en mayúsculas de marca ("DOMMO ESSENTIAL 2"). No abreviar ni traducir.
2. **Una fila de `SALA` por unidad**: cada una con su calendario y disponibilidad independientes. No modelar "cupos" como contador dentro de una sala.
3. **Textos de interfaz** en voseo y con el tono del apartado 3; mensajes de error claros, sin detalles internos.
4. **Término "espacio"** en el texto de cara al cliente (claim, titulares, ayudas). En el código y la API se mantiene el vocabulario del modelo (`sala`).
5. **No inventar** equipamiento, servicios ni beneficios que el brochure no menciona; si hace falta uno nuevo, se aprueba y se documenta primero.
6. **Equipamiento = amenities:** lo listado por sala se representa con el catálogo de amenities existente, sin crear estructuras nuevas.
7. **Disponibilidad en tiempo real** y reserva desde móvil: el frontend es responsive y la consulta de disponibilidad debe ser rápida.
8. **Membresías:** no tocar hasta que se aprueben (ver aviso al inicio).

## 9. Relación con la documentación vigente

- `MODELO_DATOS.md`: `SALA` ya tiene `tipo_sala` {REUNIONES, OFICINA}, `capacidad` y amenities; **no se requieren cambios de esquema** para este brochure.
- `backend/RESERVAS.md`: ya aclara que la presentación comercial del brochure no se equipara automáticamente con los tipos de reserva; se respeta.
- `frontend/GUIA_MARCA.md`: define identidad visual; su claim "lugar" difiere del "espacio" decidido (ver apartado 1).

## 10. Puntos a confirmar con el cliente

- Aclaración del asterisco de los **baños exclusivos**.
- DOMMO COMFORT: "living **o** baño en suite" — ¿cada unidad tiene uno u otro, o ambos? ¿Es igual en COMFORT 1 y 2?
- DOMMO ESSENTIAL: capacidad "hasta 3-4 personas" — ¿cuál es el tope real?
- Planta (baja/alta) de cada unidad: los planos del brochure rotulan por planta pero no permiten asignarlas con certeza.
- Membresías: definición y alcance (pendiente).
