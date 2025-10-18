# 🚀 Instrucciones Rápidas de Instalación

## Requisitos Previos

- ✅ Node.js (versión 16 o superior) - [Descargar](https://nodejs.org/)
- ✅ npm (viene con Node.js)
- ✅ Git (opcional) - [Descargar](https://git-scm.com/)

## Pasos para Ejecutar el Proyecto

### 1️⃣ Abrir Terminal en la Carpeta del Proyecto

**Opción A - PowerShell:**
- Click derecho en la carpeta "Trabajo semanal"
- Seleccionar "Abrir en Terminal" o "Abrir PowerShell aquí"

**Opción B - CMD:**
```bash
cd "C:\Users\nicob\OneDrive\Escritorio\Trabajo semanal"
```

### 2️⃣ Instalar Dependencias

```bash
npm install
```

Este comando instalará:
- Vue.js 3
- Vue Router
- Vite
- Tailwind CSS
- Todas las dependencias necesarias

**Tiempo estimado:** 2-3 minutos (depende de tu conexión)

### 3️⃣ Iniciar Servidor de Desarrollo

```bash
npm run dev
```

Deberías ver algo como:
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### 4️⃣ Abrir en el Navegador

Abre tu navegador favorito y ve a:
```
http://localhost:5173
```

**¡Listo!** 🎉 La aplicación debería estar funcionando.

---

## 🧪 Probar la Aplicación

### Flujo Básico de Prueba

1. **Ver Espacios Disponibles**
   - La página principal muestra 6 espacios (aulas, canchas, laboratorios)

2. **Crear una Reserva**
   - Click en "Reservar Ahora" en cualquier espacio
   - Llenar el formulario completo
   - Click en "Confirmar Reserva"
   - Ver página de confirmación con código de reserva

3. **Ver Plano del Espacio**
   - En la página principal, click en "📐 Ver Plano del Espacio"
   - Se abre modal con plano ilustrativo

4. **Gestionar Reservas**
   - Click en "Mis Reservas" en el menú
   - Ver reservas activas y pasadas
   - Click en "Cancelar Reserva" para cancelar

5. **Probar Validación de Duplicados**
   - Crear una reserva para "Aula 101" el 2025-10-20 de 10:00-12:00
   - Intentar crear otra para el mismo espacio, fecha y horario
   - Debería mostrar error

---

## 📦 Comandos Disponibles

```bash
# Desarrollo - Inicia servidor con hot-reload
npm run dev

# Producción - Compila para producción
npm run build

# Vista previa - Previsualiza build de producción
npm run preview
```

---

## 🔧 Solución de Problemas

### ❌ Error: "npm no es reconocido"

**Solución:**
1. Descargar e instalar Node.js desde https://nodejs.org/
2. Reiniciar la terminal
3. Verificar: `node --version` y `npm --version`

### ❌ Error: "Cannot find module"

**Solución:**
```bash
# Limpiar caché e reinstalar
rm -rf node_modules
npm cache clean --force
npm install
```

### ❌ Puerto 5173 ya está en uso

**Solución:**
- Cerrar otras aplicaciones que usen el puerto
- O cambiar el puerto en `vite.config.js`:
```javascript
server: {
  port: 3000  // Cambiar a otro puerto
}
```

### ❌ Pantalla en blanco

**Solución:**
1. Abrir DevTools (F12)
2. Ver la consola para errores
3. Verificar que todos los archivos están en su lugar
4. Reiniciar el servidor: Ctrl+C, luego `npm run dev`

---

## 💾 Datos de la Aplicación

### Dónde se Guardan las Reservas

Las reservas se guardan en **LocalStorage** del navegador:
- **Ubicación:** DevTools → Application → Local Storage → `reservas`
- **Formato:** JSON array

### Limpiar Todos los Datos

Si quieres empezar desde cero:
1. Abrir DevTools (F12)
2. Application → Local Storage
3. Click derecho en `reservas` → Delete
4. Recargar la página

---

## 📱 Acceder desde Otros Dispositivos

Para acceder desde tu celular o tablet en la misma red:

1. **Modificar `vite.config.js`:**
```javascript
server: {
  port: 5173,
  host: '0.0.0.0'  // Agregar esta línea
}
```

2. **Reiniciar servidor**

3. **Encontrar tu IP:**
```bash
# Windows
ipconfig

# Buscar "Dirección IPv4", ej: 192.168.1.100
```

4. **Acceder desde otro dispositivo:**
```
http://192.168.1.100:5173
```

---

## 🎯 Funcionalidades Disponibles

✅ **RF1:** Ver lista de espacios con filtros  
✅ **RF2:** Crear reservas con validaciones  
✅ **RF3:** Prevención de reservas duplicadas  
✅ **RF4:** Cancelar reservas  
✅ **RF5:** Ver planos de espacios  

---

## 📚 Documentación Adicional

- **README.md** - Documentación completa del proyecto
- **IMPLEMENTACION.md** - Detalles técnicos de la implementación
- **GITHUB_GUIDE.md** - Guía para subir a GitHub

---

## ⚡ Inicio Rápido (Resumen)

```bash
# 1. Abrir terminal en la carpeta
cd "C:\Users\nicob\OneDrive\Escritorio\Trabajo semanal"

# 2. Instalar
npm install

# 3. Ejecutar
npm run dev

# 4. Abrir navegador
# http://localhost:5173
```

---

**¿Todo funcionando?** 🎉 ¡Comienza a crear reservas!  
**¿Problemas?** 📧 Revisa la sección de solución de problemas arriba.
