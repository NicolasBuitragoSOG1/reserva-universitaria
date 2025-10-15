# 🚀 Instrucciones de Instalación y Ejecución

## Pasos para ejecutar el proyecto

### 1. Abrir terminal en esta carpeta
Abre PowerShell o CMD en la carpeta `Trabajo semanal`

### 2. Instalar dependencias
```bash
npm install
```

Este comando instalará todas las dependencias necesarias (Vue, Vite, Tailwind CSS, etc.)

### 3. Ejecutar el proyecto
```bash
npm run dev
```

### 4. Abrir en el navegador
El servidor se iniciará en: `http://localhost:5173`

---

## 🔧 Solución de Problemas

### Si npm no es reconocido
- Asegúrate de tener Node.js instalado
- Descarga Node.js desde: https://nodejs.org/

### Si hay errores de instalación
```bash
# Limpiar caché
npm cache clean --force

# Reinstalar
npm install
```

---

## 📂 Inicializar Git (Para GitHub)

### 1. Inicializar repositorio local
```bash
git init
git add .
git commit -m "Prototipo inicial: Interfaz de reserva de espacios universitarios"
```

### 2. Crear repositorio en GitHub
- Ve a GitHub: https://github.com/new
- Crea un nuevo repositorio
- **NO** inicialices con README (ya tenemos uno)

### 3. Conectar con GitHub
```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPOSITORIO.git
git push -u origin main
```

---

## 📝 Comandos Útiles de Git

### Ver estado
```bash
git status
```

### Hacer cambios
```bash
git add .
git commit -m "Descripción del cambio"
git push
```

### Crear nueva rama
```bash
git checkout -b feature/nueva-funcionalidad
```

---

## 🎯 Próximos Pasos Sugeridos

1. **Ejecutar el proyecto** y probar la interfaz
2. **Inicializar Git** en el proyecto
3. **Crear repositorio** en GitHub
4. **Hacer el primer commit** y push
5. **Planificar la siguiente fase** (backend, persistencia, etc.)

---

**¡Listo para comenzar!** 🎉
