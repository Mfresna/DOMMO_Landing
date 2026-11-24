# Instructivo: actualizar la landing en el servidor

Procedimiento para reemplazar la landing estática (Fase 1) en el VPS. Contexto del servidor en [`SERVIDOR_FASE1.md`](SERVIDOR_FASE1.md).

Hay dos terminales distintas; mezclarlas es el error más común:

- 🖥️ **PC**: PowerShell en la computadora local.
- 🌐 **Servidor**: la sesión de SSH.

Reemplazar `<IP_VPS>` por la IP del servidor (no se guarda en el repo).

## 1. Conectarse al servidor
🖥️ **PC**:
```powershell
ssh dommo@<IP_VPS>
```
Pide la passphrase de la llave. Si el prompt pasa a `dommo@srv...:~$`, ya se está dentro. Para salir: `exit`.

## 2. Vaciar la carpeta
🌐 **Servidor**. Primero mirar qué hay, para confirmar la ruta:
```bash
ls -la /var/www/dommo/landing
```
Después borrar el contenido (la carpeta queda, porque Nginx la necesita):
```bash
find /var/www/dommo/landing -mindepth 1 -delete
```
> Borra sin preguntar y sin papelera: revisar la ruta antes de ejecutarlo.

## 3. Subir los archivos
Si cambió el CSS o el JS, subir el número `?v=` en las 3 líneas del `index.html` que lo usan (ej. `?v=20261123`). Así el navegador y Cloudflare bajan la versión nueva.

🖥️ **PC**, en **otra** ventana de PowerShell (no en la del SSH):
```powershell
cd C:\Users\matia\Desktop\DOMMO_Landing
scp -rp index.html favicon.ico robots.txt sitemap.xml assets css js dommo@<IP_VPS>:/var/www/dommo/landing/
```
- `-r` copia carpetas; `-p` conserva las fechas.
- Se nombran los archivos uno por uno para **no** subir `.git`, `.github`, `.claude`, `docs`, `.htaccess` ni `.nojekyll`.
- Para subir un solo archivo cambiado, por ejemplo el CSS:
```powershell
scp css\styles.css dommo@<IP_VPS>:/var/www/dommo/landing/css/
```

## 4. Dejar los permisos en orden
🌐 **Servidor**. `scp` desde Windows deja las carpetas en 700 y Nginx no las puede leer:
```bash
chmod -R u=rwX,go=rX /var/www/dommo/landing
```

## 5. Verificar
🌐 **Servidor**:
```bash
ls -la /var/www/dommo/landing
find /var/www/dommo/landing -type f | wc -l
```
Debe haber solo 7 entradas (`index.html`, `favicon.ico`, `robots.txt`, `sitemap.xml`, `assets`, `css`, `js`). El conteo de archivos debe dar **39** mientras no se agreguen ni quiten archivos.

🖥️ **PC**:
```powershell
curl.exe -s https://www.dommocoworking.com.ar/ | Select-String "styles.css"
```
Debe mostrar el `?v=` recién puesto. Abrir el sitio con `Ctrl+Shift+R` o en una ventana de incógnito.

## Si algo sale mal
- **`Permission denied` al subir:** casi siempre es la carpeta de destino; repetir el paso 4.
- **Se ve la versión vieja:** falta subir el `?v=`, o Cloudflare guarda una copia. En Cloudflare: Caching → Configuration → Purge Everything.
- **Error 403 o 404 en el sitio:** permisos (paso 4) o falta algún archivo.
- **Se ve distinto que en local con el hash correcto:** revisar la consola del navegador (`F12` → Console). El CSP de Nginx y el `<meta>` del `index.html` se combinan y gana el más restrictivo: sin estilos en línea (`style=` o `<style>`) no hay problema.
