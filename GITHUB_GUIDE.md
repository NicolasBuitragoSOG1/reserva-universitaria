# 📤 Guía para Subir a GitHub

## Paso 1: Inicializar Git Local

Abre PowerShell o CMD en la carpeta del proyecto y ejecuta:

```bash
# Navegar a la carpeta del proyecto
cd "C:\Users\nicob\OneDrive\Escritorio\Trabajo semanal"

# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "feat: Implementación completa del sistema de reservas universitarias

- RF1: Ver lista de espacios disponibles con filtros
- RF2: Crear reservas con validaciones completas
- RF3: Prevención de reservas duplicadas (mismo espacio, fecha y hora)
- RF4: Cancelar reservas con confirmación
- RF5: Visualización de planos de espacios

Tecnologías: Vue.js 3, Tailwind CSS, LocalStorage
Persistencia: LocalStorage automática
Interfaz: Completamente responsive"
```

## Paso 2: Crear Repositorio en GitHub

1. **Ir a GitHub:** https://github.com/
2. **Iniciar sesión** con tu cuenta
3. **Click en el botón "+" (esquina superior derecha)** → "New repository"
4. **Configurar el repositorio:**
   - **Repository name:** `reserva-espacios-universitarios` (o el nombre que prefieras)
   - **Description:** "Sistema de reserva de espacios universitarios (aulas, canchas, laboratorios) - Vue.js 3"
   - **Visibilidad:** Public o Private (según prefieras)
   - **⚠️ NO marcar** "Initialize this repository with a README" (ya tienes uno)
   - **⚠️ NO agregar** .gitignore ni licencia (ya los tienes)
5. **Click en "Create repository"**

## Paso 3: Conectar Repositorio Local con GitHub

GitHub te mostrará las instrucciones. Usa estas en tu terminal:

```bash
# Configurar la rama principal
git branch -M main

# Conectar con GitHub (reemplaza TU_USUARIO y NOMBRE_REPO)
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git

# Subir los archivos
git push -u origin main
```

### Ejemplo real:
```bash
git branch -M main
git remote add origin https://github.com/NicolasBuitrago/reserva-espacios-universitarios.git
git push -u origin main
```

## Paso 4: Verificar que se Subió Correctamente

1. Refresca la página de tu repositorio en GitHub
2. Deberías ver todos los archivos:
   - ✅ package.json
   - ✅ src/ (carpeta con todos los archivos)
   - ✅ README.md
   - ✅ IMPLEMENTACION.md
   - ✅ etc.

## 📝 Hacer Cambios Futuros

Cada vez que hagas cambios al código:

```bash
# 1. Verificar qué archivos cambiaron
git status

# 2. Agregar los cambios
git add .

# 3. Hacer commit con mensaje descriptivo
git commit -m "feat: Descripción del cambio"

# 4. Subir a GitHub
git push
```

### Ejemplos de mensajes de commit:

```bash
# Nuevas características
git commit -m "feat: Agregar exportación de reservas a PDF"

# Correcciones
git commit -m "fix: Corregir validación de horarios"

# Mejoras
git commit -m "refactor: Mejorar diseño de tarjetas de espacios"

# Documentación
git commit -m "docs: Actualizar README con nuevas instrucciones"

# Estilos
git commit -m "style: Mejorar estilos de formulario de reserva"
```

## 🌿 Trabajar con Ramas (Recomendado)

Para desarrollar nuevas funcionalidades sin afectar la versión principal:

```bash
# Crear y cambiar a nueva rama
git checkout -b feature/nueva-funcionalidad

# Hacer cambios, commits...
git add .
git commit -m "feat: Nueva funcionalidad"

# Subir la rama a GitHub
git push -u origin feature/nueva-funcionalidad

# Volver a la rama principal
git checkout main

# Fusionar la rama (cuando esté lista)
git merge feature/nueva-funcionalidad
git push
```

## 📊 Agregar Badges al README (Opcional)

Puedes agregar badges bonitos al inicio de tu README:

```markdown
# Sistema de Reserva de Espacios Universitarios

![Vue.js](https://img.shields.io/badge/Vue.js-3.3.8-4FC08D?logo=vue.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-Academic-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)
```

## 🔒 Archivo .gitignore (Ya está creado)

Asegúrate de que `.gitignore` contenga:

```
node_modules/
dist/
*.log
.DS_Store
.env
```

Esto evita subir archivos innecesarios a GitHub.

## ⚠️ Solución de Problemas

### Error: "Permission denied"
```bash
# Usar HTTPS en lugar de SSH
git remote set-url origin https://github.com/TU_USUARIO/REPO.git
```

### Error: "failed to push"
```bash
# Hacer pull primero
git pull origin main --allow-unrelated-histories
git push
```

### Error: "Git no reconocido"
Instalar Git desde: https://git-scm.com/downloads

## 📱 GitHub Desktop (Alternativa Visual)

Si prefieres una interfaz gráfica:

1. Descargar **GitHub Desktop**: https://desktop.github.com/
2. Instalar y abrir
3. **File → Add Local Repository**
4. Seleccionar la carpeta del proyecto
5. **Publish repository** en la parte superior
6. Listo! Ahora puedes hacer commits y push desde la interfaz

## 🎯 Checklist Final

Antes de compartir el repositorio:

- [ ] Todos los archivos están en GitHub
- [ ] README.md está completo y claro
- [ ] .gitignore funciona (node_modules NO está en GitHub)
- [ ] El proyecto se ejecuta con `npm install` y `npm run dev`
- [ ] Documentación de requisitos funcionales completa
- [ ] Commits tienen mensajes descriptivos

## 🔗 Enlaces Útiles

- **Git Documentation:** https://git-scm.com/doc
- **GitHub Guides:** https://guides.github.com/
- **Git Cheat Sheet:** https://education.github.com/git-cheat-sheet-education.pdf

---

## 📋 Resumen Rápido

```bash
# Primera vez
git init
git add .
git commit -m "Mensaje descriptivo"
git branch -M main
git remote add origin https://github.com/USUARIO/REPO.git
git push -u origin main

# Cambios posteriores
git add .
git commit -m "Mensaje"
git push
```

---

**¡Listo para compartir tu proyecto en GitHub!** 🚀
