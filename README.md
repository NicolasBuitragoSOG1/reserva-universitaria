# Sistema de Reserva de Espacios Universitarios

Aplicación web funcional para reservar espacios universitarios (aulas, canchas, laboratorios) desarrollada con Vue.js 3.

## ✅ Requisitos Funcionales Implementados

### RF1: Ver Lista de Espacios Disponibles
- ✅ El usuario puede ver todos los espacios disponibles
- ✅ Filtrado por tipo (aula, cancha, laboratorio)
- ✅ Filtrado por capacidad mínima
- ✅ Búsqueda por nombre o ubicación
- ✅ Visualización de información detallada de cada espacio

### RF2: Crear una Reserva
- ✅ Formulario completo con campos obligatorios:
  - Nombre completo
  - Código estudiantil
  - Email
  - Teléfono
  - Fecha (no puede ser anterior a hoy)
  - Hora de inicio y fin
  - Número de personas
  - Propósito de la reserva
- ✅ Validaciones básicas implementadas
- ✅ Persistencia en LocalStorage

### RF3: Evitar Reservas Duplicadas
- ✅ Validación de conflictos de horario
- ✅ Verificación de mismo espacio, fecha y hora
- ✅ Mensaje de error claro cuando existe conflicto
- ✅ Validación de capacidad del espacio

### RF4: Cancelar Reserva
- ✅ Opción para cancelar reservas desde "Mis Reservas"
- ✅ Modal de confirmación antes de cancelar
- ✅ Actualización del estado de la reserva
- ✅ Mantenimiento del historial de reservas canceladas

### RF5: Mostrar Imagen/Plano del Espacio
- ✅ Vista de plano desde la página principal
- ✅ Plano ilustrativo en la confirmación de reserva
- ✅ Modal para visualizar plano ampliado

## 🚀 Características Adicionales

- **Persistencia con LocalStorage**: Todas las reservas se guardan automáticamente
- **Sistema de Notificaciones**: Feedback visual para todas las acciones
- **Gestión de Reservas**: Vista organizada de reservas activas y pasadas
- **Código de Reserva Único**: Cada reserva tiene un código único generado automáticamente
- **Interfaz Responsiva**: Diseño adaptable a móviles y escritorio
- **Validaciones en Tiempo Real**: Feedback inmediato al usuario

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- Git (opcional, para control de versiones)

## 🛠️ Instalación

1. **Navegar a la carpeta del proyecto**
```bash
cd "C:\Users\nicob\OneDrive\Escritorio\Trabajo semanal"
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
│   ├── views/                      # Vistas principales
│   │   ├── Home.vue                # Lista de espacios (RF1)
│   │   ├── ReservaForm.vue         # Formulario de reserva (RF2)
│   │   ├── MisReservas.vue         # Gestión de reservas (RF4)
│   │   └── Confirmacion.vue        # Confirmación con plano (RF5)
│   ├── composables/                # Lógica reutilizable
│   │   ├── useReservas.js          # Gestión de reservas y espacios
│   │   └── useNotificaciones.js    # Sistema de notificaciones
│   ├── components/                 # Componentes reutilizables
│   │   └── NotificacionesContainer.vue
│   ├── router/                     # Configuración de rutas
│   │   └── index.js
│   ├── App.vue                     # Componente principal
│   ├── main.js                     # Punto de entrada
│   └── style.css                   # Estilos globales
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Tecnologías Utilizadas

- **Vue.js 3** - Framework JavaScript progresivo
- **Vue Router** - Enrutamiento SPA
- **Composition API** - Para lógica reactiva y reutilizable
- **Tailwind CSS** - Framework CSS utility-first
- **Vite** - Build tool y servidor de desarrollo
- **LocalStorage API** - Persistencia de datos en el navegador
- **Heroicons** - Iconos SVG

## 💾 Gestión de Datos

### LocalStorage
Todas las reservas se almacenan en `localStorage` bajo la clave `'reservas'`:
```javascript
// Estructura de una reserva
{
  id: "1234567890",
  codigo: "RES-001-2025",
  nombre: "Juan Pérez",
  codigoEstudiantil: "2020123456",
  email: "juan@universidad.edu",
  telefono: "3001234567",
  espacioId: "aula-101",
  fecha: "2025-10-20",
  horaInicio: "10:00",
  horaFin: "12:00",
  numeroPersonas: 25,
  proposito: "Clase de programación",
  estado: "confirmada",
  cancelada: false,
  fechaCreacion: "2025-10-15T19:00:00.000Z"
}
```

### Espacios Disponibles
6 espacios predefinidos:
- 2 Aulas (capacidad 30 y 40 personas)
- 2 Canchas (Fútbol y Baloncesto)
- 2 Laboratorios (Computación y Física)

## 🔄 Flujo de Uso

1. **Ver Espacios** → Usuario navega a la página principal y ve espacios disponibles
2. **Filtrar** → Puede aplicar filtros por tipo, capacidad o búsqueda
3. **Ver Plano** → Click en "Ver Plano" para ver ubicación del espacio
4. **Reservar** → Click en "Reservar Ahora" y completar formulario
5. **Validación** → Sistema valida que no haya conflictos de horario
6. **Confirmación** → Muestra código de reserva y detalles
7. **Gestionar** → Desde "Mis Reservas" puede ver o cancelar reservas

## 🧪 Pruebas Manuales

### Probar RF2 y RF3 (Crear y Validar Duplicados)
1. Crear una reserva para "Aula 101" el 2025-10-20 de 10:00 a 12:00
2. Intentar crear otra reserva para el mismo espacio, fecha y horario
3. Debería mostrar error: "Ya existe una reserva para este espacio en el horario seleccionado"

### Probar RF4 (Cancelar Reserva)
1. Ir a "Mis Reservas"
2. Click en "Cancelar Reserva"
3. Confirmar en el modal
4. La reserva debe moverse a "Pasadas" con estado "Cancelada"

### Probar RF5 (Ver Plano)
1. En la página principal, click en "Ver Plano del Espacio"
2. Debe abrir un modal con el plano ilustrativo
3. También visible en la página de confirmación

## 📦 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo

# Producción
npm run build        # Compilar para producción
npm run preview      # Vista previa de build de producción
```

## 🔄 Control de Versiones (Git)

### Inicializar repositorio
```bash
git init
git add .
git commit -m "feat: Implementación completa de requisitos funcionales RF1-RF5"
```

### Conectar con GitHub
```bash
git branch -M main
git remote add origin <url-repositorio>
git push -u origin main
```

## 🐛 Solución de Problemas

### Las reservas no se guardan
- Verificar que el navegador permita LocalStorage
- Abrir DevTools → Application → Local Storage

### Error al instalar dependencias
```bash
npm cache clean --force
npm install
```

### Puerto 5173 ocupado
Editar `vite.config.js` y cambiar el puerto:
```javascript
server: {
  port: 3000  // Cambiar a otro puerto
}
```

## 📝 Datos de Prueba

Al iniciar la aplicación por primera vez, no habrá reservas. Puedes:
1. Crear reservas manualmente desde la interfaz
2. O importar datos desde DevTools → Console:

```javascript
// Limpiar todas las reservas
localStorage.removeItem('reservas')

// La aplicación cargará automáticamente los espacios predefinidos
```

## 🎯 Estado del Proyecto

**FASE 2 - COMPLETADA**: ✅ Funcionalidad completa con persistencia LocalStorage

### Implementado
- ✅ RF1: Ver lista de espacios disponibles
- ✅ RF2: Crear reservas con validaciones
- ✅ RF3: Prevención de reservas duplicadas
- ✅ RF4: Cancelar reservas
- ✅ RF5: Visualización de planos/imágenes
- ✅ Persistencia con LocalStorage
- ✅ Sistema de notificaciones
- ✅ Gestión completa de reservas
- ✅ Interfaz responsive

### Próximas Mejoras (Opcionales)
- ⬜ Backend con API REST
- ⬜ Base de datos real
- ⬜ Autenticación de usuarios
- ⬜ Exportar reservas a PDF
- ⬜ Recordatorios por email
- ⬜ Pruebas automatizadas

## 📄 Licencia

Este es un proyecto académico para fines educativos.

---

**Desarrollado con ❤️ usando Vue.js 3**

**Versión:** 2.0.0 (Funcionalidad completa)
**Última actualización:** Octubre 2025
