/**
 * @fileoverview Composable para gestión de reservas y espacios
 * @description Maneja toda la lógica de negocio para crear, consultar,
 * validar y cancelar reservas de espacios universitarios
 * 
 * Requisitos funcionales implementados:
 * - RF1: Obtener lista de espacios disponibles
 * - RF2: Crear reservas con validaciones
 * - RF3: Evitar reservas duplicadas
 * - RF4: Cancelar reservas
 * 
 * Requisitos no funcionales:
 * - RNF1: Operaciones optimizadas para respuesta < 3s
 * - RNF2: Persistencia automática en LocalStorage
 * - RNF5: Código documentado con comentarios claros
 */

import { ref, computed, watch } from 'vue'

// ============================================
// ESTADO REACTIVO GLOBAL
// ============================================

/**
 * Array reactivo de todas las reservas del sistema
 * @type {Ref<Array<Reserva>>}
 * RNF2: Se sincroniza automáticamente con LocalStorage
 */
const reservas = ref([])

/**
 * Catálogo de espacios disponibles en la universidad
 * @type {Ref<Array<Espacio>>}
 * RNF1: Array en memoria para acceso instantáneo
 */
const espacios = ref([
  {
    id: 'aula-101',
    nombre: 'Aula 101',
    tipo: 'aula',
    ubicacion: 'Edificio A - Primer Piso',
    capacidad: 30,
    equipamiento: ['Proyector', 'Aire acondicionado', 'Pizarra digital'],
    imagen: '/images/aula.jpg',
    plano: '/images/plano-aula-101.jpg',
    color: 'blue'
  },
  {
    id: 'cancha-futbol',
    nombre: 'Cancha de Fútbol',
    tipo: 'cancha',
    ubicacion: 'Zona Deportiva - Exterior',
    capacidad: 22,
    equipamiento: ['Césped sintético', 'Iluminación', 'Graderías'],
    imagen: '/images/cancha.jpg',
    plano: '/images/plano-cancha.jpg',
    color: 'green'
  },
  {
    id: 'lab-comp',
    nombre: 'Lab. Computación',
    tipo: 'laboratorio',
    ubicacion: 'Edificio C - Tercer Piso',
    capacidad: 25,
    equipamiento: ['25 PCs', 'Software especializado', 'Proyector'],
    imagen: '/images/laboratorio.jpg',
    plano: '/images/plano-lab.jpg',
    color: 'purple'
  },
  {
    id: 'aula-205',
    nombre: 'Aula 205',
    tipo: 'aula',
    ubicacion: 'Edificio B - Segundo Piso',
    capacidad: 40,
    equipamiento: ['Proyector', 'Sistema de sonido', 'Aire acondicionado'],
    imagen: '/images/aula.jpg',
    plano: '/images/plano-aula-205.jpg',
    color: 'blue'
  },
  {
    id: 'cancha-baloncesto',
    nombre: 'Cancha de Baloncesto',
    tipo: 'cancha',
    ubicacion: 'Zona Deportiva - Interior',
    capacidad: 20,
    equipamiento: ['Piso de madera', 'Tableros profesionales', 'Iluminación'],
    imagen: '/images/cancha.jpg',
    plano: '/images/plano-cancha-basket.jpg',
    color: 'green'
  },
  {
    id: 'lab-fisica',
    nombre: 'Lab. Física',
    tipo: 'laboratorio',
    ubicacion: 'Edificio D - Primer Piso',
    capacidad: 20,
    equipamiento: ['Equipos de medición', 'Mesas de trabajo', 'Material de laboratorio'],
    imagen: '/images/laboratorio.jpg',
    plano: '/images/plano-lab-fisica.jpg',
    color: 'purple'
  }
])

// ============================================
// PERSISTENCIA DE DATOS (RNF2)
// ============================================

/**
 * Carga las reservas guardadas desde LocalStorage
 * @function cargarDatos
 * @description RNF2: Lee los datos almacenados localmente al iniciar la aplicación
 * @returns {void}
 * @throws {Error} Si los datos en LocalStorage están corruptos
 */
const cargarDatos = () => {
  const reservasGuardadas = localStorage.getItem('reservas')
  if (reservasGuardadas) {
    try {
      reservas.value = JSON.parse(reservasGuardadas)
      console.log(`✅ ${reservas.value.length} reservas cargadas desde LocalStorage`)
    } catch (error) {
      console.error('❌ Error al cargar reservas:', error)
      reservas.value = []
    }
  } else {
    console.log('ℹ️ No hay reservas guardadas, iniciando con lista vacía')
  }
}

/**
 * Guarda todas las reservas en LocalStorage
 * @function guardarDatos
 * @description RNF2: Persiste los datos localmente de forma automática
 * @returns {void}
 */
const guardarDatos = () => {
  localStorage.setItem('reservas', JSON.stringify(reservas.value))
  console.log(`💾 Guardadas ${reservas.value.length} reservas en LocalStorage`)
}

/**
 * Watcher que detecta cambios en reservas y las guarda automáticamente
 * RNF2: Persistencia automática sin intervención del usuario
 * RNF1: Operación asíncrona que no bloquea la UI
 */
watch(reservas, () => {
  guardarDatos()
}, { deep: true })

// Inicializar: Cargar datos al montar el composable
cargarDatos()

/**
 * Hook principal para gestión de reservas
 * @function useReservas
 * @returns {Object} Métodos y estado para gestión de reservas
 */
export function useReservas() {
  
  // ============================================
  // UTILIDADES
  // ============================================
  
  /**
   * Genera un código único para cada reserva
   * @function generarCodigoReserva
   * @returns {string} Código en formato RES-XXX-YYYY
   * @example "RES-001-2025"
   */
  const generarCodigoReserva = () => {
    const numero = reservas.value.length + 1
    const year = new Date().getFullYear()
    return `RES-${String(numero).padStart(3, '0')}-${year}`
  }

  // ============================================
  // RF2: CREAR RESERVA
  // ============================================
  
  /**
   * Crea una nueva reserva con validaciones completas
   * @function crearReserva
   * @param {Object} datosReserva - Datos de la reserva
   * @param {string} datosReserva.nombre - Nombre completo del usuario
   * @param {string} datosReserva.email - Email del usuario
   * @param {string} datosReserva.codigoEstudiantil - Código estudiantil
   * @param {string} datosReserva.telefono - Teléfono de contacto
   * @param {string} datosReserva.espacioId - ID del espacio a reservar
   * @param {string} datosReserva.fecha - Fecha de la reserva (YYYY-MM-DD)
   * @param {string} datosReserva.horaInicio - Hora de inicio (HH:MM)
   * @param {string} datosReserva.horaFin - Hora de fin (HH:MM)
   * @param {number} datosReserva.numeroPersonas - Cantidad de personas
   * @param {string} datosReserva.proposito - Propósito de la reserva
   * @returns {Object} La reserva creada con código único
   * @throws {Error} Si los datos son inválidos o existe conflicto de horario
   * 
   * Validaciones implementadas:
   * - Todos los campos obligatorios
   * - RF3: No permite reservas duplicadas
   * - Hora fin > Hora inicio
   * - Número de personas <= Capacidad del espacio
   * - RNF1: Ejecución optimizada < 3 segundos
   */
  const crearReserva = (datosReserva) => {
    // Validar datos obligatorios
    if (!datosReserva.nombre || !datosReserva.email || !datosReserva.codigoEstudiantil ||
        !datosReserva.telefono || !datosReserva.espacioId || !datosReserva.fecha ||
        !datosReserva.horaInicio || !datosReserva.horaFin || !datosReserva.numeroPersonas ||
        !datosReserva.proposito) {
      throw new Error('Todos los campos son obligatorios')
    }

    // RF3: Validar que no exista una reserva duplicada (mismo espacio, fecha y horario)
    const existeReserva = verificarReservaDuplicada(
      datosReserva.espacioId,
      datosReserva.fecha,
      datosReserva.horaInicio,
      datosReserva.horaFin
    )

    if (existeReserva) {
      throw new Error('Ya existe una reserva para este espacio en el horario seleccionado')
    }

    // Validar que la hora de fin sea mayor que la hora de inicio
    if (datosReserva.horaInicio >= datosReserva.horaFin) {
      throw new Error('La hora de fin debe ser mayor que la hora de inicio')
    }

    // Validar capacidad del espacio
    const espacio = espacios.value.find(e => e.id === datosReserva.espacioId)
    if (!espacio) {
      throw new Error('Espacio no encontrado')
    }

    if (datosReserva.numeroPersonas > espacio.capacidad) {
      throw new Error(`El número de personas excede la capacidad del espacio (${espacio.capacidad})`)
    }

    // Crear la reserva
    const nuevaReserva = {
      id: Date.now().toString(),
      codigo: generarCodigoReserva(),
      ...datosReserva,
      estado: 'confirmada',
      fechaCreacion: new Date().toISOString(),
      cancelada: false
    }

    reservas.value.push(nuevaReserva)
    return nuevaReserva
  }

  // RF3: Verificar reserva duplicada
  const verificarReservaDuplicada = (espacioId, fecha, horaInicio, horaFin) => {
    return reservas.value.some(reserva => {
      if (reserva.cancelada || reserva.espacioId !== espacioId || reserva.fecha !== fecha) {
        return false
      }

      // Verificar si hay conflicto de horarios
      const inicioExistente = reserva.horaInicio
      const finExistente = reserva.horaFin

      // Caso 1: La nueva reserva comienza durante una reserva existente
      if (horaInicio >= inicioExistente && horaInicio < finExistente) {
        return true
      }

      // Caso 2: La nueva reserva termina durante una reserva existente
      if (horaFin > inicioExistente && horaFin <= finExistente) {
        return true
      }

      // Caso 3: La nueva reserva envuelve completamente a una existente
      if (horaInicio <= inicioExistente && horaFin >= finExistente) {
        return true
      }

      return false
    })
  }

  // RF4: Cancelar reserva
  const cancelarReserva = (reservaId) => {
    const reserva = reservas.value.find(r => r.id === reservaId)
    if (!reserva) {
      throw new Error('Reserva no encontrada')
    }

    if (reserva.cancelada) {
      throw new Error('La reserva ya está cancelada')
    }

    reserva.cancelada = true
    reserva.estado = 'cancelada'
    reserva.fechaCancelacion = new Date().toISOString()

    return reserva
  }

  // Obtener reserva por ID
  const obtenerReservaPorId = (id) => {
    return reservas.value.find(r => r.id === id)
  }

  // Obtener reserva por código
  const obtenerReservaPorCodigo = (codigo) => {
    return reservas.value.find(r => r.codigo === codigo)
  }

  // Obtener espacio por ID
  const obtenerEspacioPorId = (id) => {
    return espacios.value.find(e => e.id === id)
  }

  // RF1: Obtener espacios disponibles (con filtros opcionales)
  const obtenerEspaciosDisponibles = (filtros = {}) => {
    let espaciosFiltrados = [...espacios.value]

    if (filtros.tipo) {
      espaciosFiltrados = espaciosFiltrados.filter(e => e.tipo === filtros.tipo)
    }

    if (filtros.capacidadMinima) {
      espaciosFiltrados = espaciosFiltrados.filter(e => e.capacidad >= filtros.capacidadMinima)
    }

    return espaciosFiltrados
  }

  // Obtener reservas activas (no canceladas, fecha futura o actual)
  const reservasActivas = computed(() => {
    const hoy = new Date().toISOString().split('T')[0]
    return reservas.value.filter(r => !r.cancelada && r.fecha >= hoy)
  })

  // Obtener reservas pasadas
  const reservasPasadas = computed(() => {
    const hoy = new Date().toISOString().split('T')[0]
    return reservas.value.filter(r => r.fecha < hoy || r.cancelada)
  })

  // Obtener todas las reservas
  const todasLasReservas = computed(() => reservas.value)

  // Limpiar todas las reservas (útil para desarrollo/testing)
  const limpiarReservas = () => {
    reservas.value = []
    localStorage.removeItem('reservas')
  }

  return {
    // Estado
    espacios: computed(() => espacios.value),
    reservasActivas,
    reservasPasadas,
    todasLasReservas,

    // Métodos
    crearReserva,
    cancelarReserva,
    obtenerReservaPorId,
    obtenerReservaPorCodigo,
    obtenerEspacioPorId,
    obtenerEspaciosDisponibles,
    verificarReservaDuplicada,
    limpiarReservas
  }
}
