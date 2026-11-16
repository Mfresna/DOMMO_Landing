# Salas DOMMO — Espacio Matheu (Sede 1)

Información estructurada de cada sala, tomada de `frontend/Referencias PDF/BROCHURE DOMMO.pdf`. La versión legible por máquina está en [SALAS.json](SALAS.json) (mismo contenido). Lineamientos generales en [BROCHURE.md](BROCHURE.md).

**Convenciones**
- Las salas con más de un cupo son **unidades numeradas** (ej. DOMMO ESSENTIAL 1, 2, 3, 4) y **cada una tiene su propio calendario**. Las de un solo cupo llevan el nombre sin número.
- *Descripción* y *equipamiento* se basan en el texto del brochure; *Interpretación* y *Público ideal* son lectura propia, no texto oficial.
- "Cupos disponibles" del brochure se interpreta como la **cantidad de unidades** de ese tipo en la sede, no como disponibilidad en tiempo real.
- Las membresías del brochure están fuera de este documento (pendientes).

## Resumen

| Sala | Tipo comercial | Tipo en el modelo | Capacidad |
|---|---|---|---|
| DOMMO ESSENTIAL 1 | Oficina privada | OFICINA | Hasta 3-4 personas |
| DOMMO ESSENTIAL 2 | Oficina privada | OFICINA | Hasta 3-4 personas |
| DOMMO ESSENTIAL 3 | Oficina privada | OFICINA | Hasta 3-4 personas |
| DOMMO ESSENTIAL 4 | Oficina privada | OFICINA | Hasta 3-4 personas |
| DOMMO LAB | Oficina suite con bacha | OFICINA | Hasta 2 personas |
| DOMMO COMFORT 1 | Oficina con living o baño en suite | OFICINA | Hasta 4 personas |
| DOMMO COMFORT 2 | Oficina con living o baño en suite | OFICINA | Hasta 4 personas |
| DOMMO MEETING ROOM | Sala de reuniones | REUNIONES | Hasta 8 personas |

Total: **8 salas** (4 ESSENTIAL, 1 LAB, 2 COMFORT, 1 MEETING ROOM).

## DOMMO ESSENTIAL

**Tipo:** Oficina privada · **Capacidad:** Hasta 3-4 personas · **Unidades:** DOMMO ESSENTIAL 1, DOMMO ESSENTIAL 2, DOMMO ESSENTIAL 3, DOMMO ESSENTIAL 4

**Descripción.** Oficina privada pensada para el profesional que atiende solo o con un acompañante. Es el espacio base de DOMMO: escritorio, silla ejecutiva y asientos para recibir a pacientes o clientes en un ambiente climatizado, luminoso y de diseño de autor.

**Interpretación.** Es el espacio más numeroso de la sede (4 unidades) y el de uso más general: consultorio, estudio o atención a clientes.

**Equipamiento**
- Escritorio principal
- Silla ejecutiva
- Sillas de pacientes/clientes
- TV
- Wi-Fi de alta velocidad
- Diseño de autor
- Climatización
- Iluminación natural

**Público ideal (inferido)**
- Profesionales independientes que reciben clientes
- Profesionales de la salud (consultas)
- Consultores, abogados, contadores, coaches

**Notas**
- El brochure indica capacidad "hasta 3-4 personas"; se guarda 4 como máximo y el texto original. A confirmar el tope real.

## DOMMO LAB

**Tipo:** Oficina suite con bacha · **Capacidad:** Hasta 2 personas · **Unidades:** DOMMO LAB

**Descripción.** Oficina tipo suite con bacha de agua corriente integrada y mueble bajo mesada. Es el espacio pensado para quienes necesitan agua en el lugar de atención.

**Interpretación.** El brochure la señala como ideal para profesionales de salud y estética. Es el espacio más reducido (2 personas) y el único con bacha: apunta a tratamientos, curaciones o atención con higiene de manos.

**Equipamiento**
- Escritorio principal
- Silla ejecutiva
- Sillas de pacientes/clientes
- Mueble bajo mesada
- Bacha con agua corriente integrada
- TV
- Wi-Fi de alta velocidad
- Climatización
- Iluminación natural

**Público ideal (inferido)**
- Profesionales de la salud
- Profesionales de la estética (por ejemplo, cosmetología, manicuría, depilación)
- Quienes necesitan agua corriente en la atención

**Notas**
- La bacha es el diferencial: mostrarla en la ficha y filtros del frontend.
- El brochure no lista "Diseño de autor" en el equipamiento de este espacio, pero lo rotula como diseño de autor; se trata como común a todos.

## DOMMO COMFORT

**Tipo:** Oficina con living o baño en suite · **Capacidad:** Hasta 4 personas · **Unidades:** DOMMO COMFORT 1, DOMMO COMFORT 2

**Descripción.** Oficina ampliada con living integrado (y, según el brochure, living o baño en suite). Suma un sector de estar para recibir con más comodidad, sin dejar de ser un espacio privado de trabajo.

**Interpretación.** Es el escalón superior de la oficina privada: más amplitud y capacidad (4 personas) y un ambiente de recepción más cálido. Apunta a quien quiere que el cliente espere o converse en un sector tipo living.

**Equipamiento**
- Escritorio principal
- Silla ejecutiva
- Sillas de pacientes/clientes
- Living integrado
- TV
- Wi-Fi de alta velocidad
- Climatización
- Iluminación natural

**Público ideal (inferido)**
- Profesionales que atienden clientes y quieren un ambiente de estar
- Equipos pequeños de hasta 4 personas
- Atención con acompañantes

**Notas**
- El título del brochure dice "oficina con living o baño en suite" pero el equipamiento detalla solo "living integrado". A confirmar si cada unidad tiene living, baño en suite o ambos, y si COMFORT 1 y 2 son iguales.

## DOMMO MEETING ROOM

**Tipo:** Sala de reuniones · **Capacidad:** Hasta 8 personas · **Unidades:** DOMMO MEETING ROOM

**Descripción.** Sala de reuniones con mesa de directorio y ocho sillas ergonómicas, TV para presentaciones de alto impacto y coffee station cercano. Un ambiente luminoso y de diseño de autor para reunirse con clientes o aliados.

**Interpretación.** Es el único espacio de uso colectivo y el de mayor capacidad (8). Apunta a reuniones, presentaciones y capacitaciones breves de profesionales que no tienen sala propia.

**Equipamiento**
- Mesa de directorio
- 8 sillas ergonómicas
- TV para presentaciones de alto impacto
- Wi-Fi
- Coffee Station cercano
- Iluminación natural
- Diseño de autor

**Público ideal (inferido)**
- Reuniones con clientes o aliados estratégicos
- Presentaciones y propuestas
- Equipos de hasta 8 personas

**Notas**
- Único espacio de tipo REUNIONES.
- El brochure no menciona climatización para esta sala; no se asume.

## Áreas comunes de la sede

- Estación de impresión (Print Station)
- Baños exclusivos
- Coffee Station equipado
- Recepción con personal

El brochure marca "baños exclusivos" con un asterisco cuya aclaración no figura en el texto extraído (pendiente de confirmar).

## Comparativa de equipamiento

| Equipamiento | ESSENTIAL | LAB | COMFORT | MEETING ROOM |
|---|:-:|:-:|:-:|:-:|
| Escritorio principal | ✔ | ✔ | ✔ | — |
| Silla ejecutiva | ✔ | ✔ | ✔ | — |
| Sillas de pacientes/clientes | ✔ | ✔ | ✔ | — |
| Mesa de directorio y 8 sillas ergonómicas | — | — | — | ✔ |
| Mueble bajo mesada y bacha con agua corriente | — | ✔ | — | — |
| Living integrado | — | — | ✔ | — |
| TV | ✔ | ✔ | ✔ | ✔ |
| Wi-Fi | ✔ | ✔ | ✔ | ✔ |
| Climatización | ✔ | ✔ | ✔ | — |
| Iluminación natural | ✔ | ✔ | ✔ | ✔ |
| Coffee Station cercano | — | — | — | ✔ |

"Diseño de autor" se aplica a todas las salas (el brochure lo rotula en cada ficha), por eso no se incluye como fila.

## Mapeo al modelo de datos

- Cada unidad numerada es **una fila de `SALA`** con su propio calendario; el campo `capacidad` toma `capacidadMaxima`.
- `tipo_sala`: **OFICINA** para ESSENTIAL, LAB y COMFORT; **REUNIONES** para MEETING ROOM.
- El equipamiento se representa con el catálogo de **amenities** (`AMENITY`, `AMENITY_X_SALA`). Los nombres de este documento son la fuente; el catálogo puede unificar sinónimos.
- `min_hs`, `precio_hs` y `hs_anticipacion_cancelacion` no figuran en el brochure y se configuran aparte.
- No se requieren cambios de esquema.
