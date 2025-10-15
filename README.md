# Sistema de Reserva de Espacios Universitarios

Prototipo funcional de aplicación web para reservar espacios universitarios (aulas, canchas, laboratorios).

## 🚀 Características

- **Frontend en Vue.js 3**: Interfaz moderna y reactiva
- **Persistencia Temporal**: Uso de JSON o LocalStorage (sin backend)
- **Validaciones Básicas**: Formularios con validación visual
- **Control de Versiones**: Configurado para GitHub

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- Git

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd trabajo-semanal
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

## 📁 Estructura del Proyecto

```
trabajo-semanal/
├── src/
│   ├── views/           # Vistas principales
│   │   ├── Home.vue            # Página principal con lista de espacios
│   │   ├── ReservaForm.vue     # Formulario de reserva
│   │   ├── MisReservas.vue     # Administración de reservas
│   │   └── Confirmacion.vue    # Confirmación de reserva
│   ├── router/          # Configuración de rutas
│   ├── App.vue          # Componente principal
│   ├── main.js          # Punto de entrada
│   └── style.css        # Estilos globales
├── index.html
├── package.json
└── README.md
```

## 🎨 Tecnologías Utilizadas

- **Vue.js 3** - Framework JavaScript progresivo
- **Vue Router** - Enrutamiento SPA
- **Tailwind CSS** - Framework CSS utility-first
- **Vite** - Build tool y servidor de desarrollo
- **Heroicons** - Iconos SVG

## 📝 Funcionalidades Implementadas

### ✅ Página Principal (Home)
- Lista de espacios disponibles (aulas, canchas, laboratorios)
- Filtros por tipo, capacidad y fecha
- Tarjetas visuales con información de cada espacio
- Botones de navegación a reserva

### ✅ Formulario de Reserva
- Campos para datos personales (nombre, código, email, teléfono)
- Selección de fecha, hora de inicio y fin
- Número de personas
- Propósito de la reserva
- Términos y condiciones
- Validaciones básicas

### ✅ Vista de Confirmación
- Mensaje de éxito
- Detalles de la reserva
- Código de reserva generado
- Información adicional
- Botones de navegación

### ✅ Mis Reservas
- Lista de reservas activas y pasadas
- Estados visuales (Confirmada, Pendiente, Completada)
- Opciones para ver detalles y cancelar
- Sistema de tabs para organizar reservas

## 🔄 Control de Versiones (Git)

### Inicializar repositorio
```bash
git init
git add .
git commit -m "Initial commit: Prototipo UI completo"
```

### Conectar con GitHub
```bash
git branch -M main
git remote add origin <url-repositorio>
git push -u origin main
```

### Flujo de trabajo recomendado
```bash
# Crear rama para nueva funcionalidad
git checkout -b feature/nombre-feature

# Hacer cambios y commit
git add .
git commit -m "Descripción del cambio"

# Subir cambios
git push origin feature/nombre-feature

# Crear Pull Request en GitHub
```

## 📦 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo

# Producción
npm run build        # Compilar para producción
npm run preview      # Vista previa de build de producción
```

## 🎯 Estado Actual

**FASE 1 - COMPLETADA**: Interfaz de usuario base sin funcionalidad backend

### ⚠️ Nota Importante
Este es un **prototipo visual**. Los formularios no guardan datos realmente y la navegación es simulada. En las siguientes fases se implementará:

- Backend con API REST
- Persistencia real de datos
- Autenticación de usuarios
- Validaciones del lado del servidor
- Pruebas automatizadas

## 👨‍💻 Desarrollo

Este proyecto está en desarrollo activo. Se irá actualizando el repositorio de manera incremental.

## 📄 Licencia

Este es un proyecto académico para fines educativos.

---

**Desarrollado con ❤️ usando Vue.js**
