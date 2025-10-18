<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Mis Reservas</h1>
      <p class="text-gray-600 mt-2">Administra tus reservas activas y pasadas</p>
    </div>

    <!-- Tabs -->
    <div class="mb-6 border-b border-gray-200">
      <nav class="-mb-px flex space-x-8">
        <button 
          @click="tabActivo = 'activas'"
          :class="[
            'py-4 px-1 border-b-2 font-medium text-sm transition-colors',
            tabActivo === 'activas' 
              ? 'border-primary-600 text-primary-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          ]"
        >
          Activas ({{ reservasActivas.length }})
        </button>
        <button 
          @click="tabActivo = 'pasadas'"
          :class="[
            'py-4 px-1 border-b-2 font-medium text-sm transition-colors',
            tabActivo === 'pasadas' 
              ? 'border-primary-600 text-primary-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          ]"
        >
          Pasadas ({{ reservasPasadas.length }})
        </button>
      </nav>
    </div>

    <!-- Lista de Reservas Activas -->
    <div v-if="tabActivo === 'activas'">
      <div v-if="reservasActivas.length === 0" class="text-center py-12">
        <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p class="text-gray-600 text-lg">No tienes reservas activas</p>
        <button 
          @click="$router.push('/')"
          class="mt-4 px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
        >
          Crear Nueva Reserva
        </button>
      </div>

      <div v-else class="space-y-4">
        <div 
          v-for="reserva in reservasActivasConEspacio" 
          :key="reserva.id"
          class="bg-white rounded-lg shadow-md p-6 border-l-4"
          :class="reserva.estado === 'confirmada' ? 'border-green-500' : 'border-yellow-500'"
        >
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-bold text-gray-800">{{ reserva.espacio?.nombre }}</h3>
              <p class="text-gray-600">{{ reserva.espacio?.ubicacion }}</p>
            </div>
            <span 
              :class="[
                'px-3 py-1 rounded-full text-sm font-medium',
                reserva.estado === 'confirmada' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              ]"
            >
              {{ estadoTexto(reserva.estado) }}
            </span>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div class="flex items-center text-gray-700">
              <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{{ formatearFecha(reserva.fecha) }}</span>
            </div>
            <div class="flex items-center text-gray-700">
              <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ reserva.horaInicio }} - {{ reserva.horaFin }}</span>
            </div>
            <div class="flex items-center text-gray-700">
              <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>{{ reserva.numeroPersonas }} personas</span>
            </div>
          </div>

          <div class="mb-4 space-y-1">
            <p class="text-sm text-gray-600"><strong>Propósito:</strong> {{ reserva.proposito }}</p>
            <p class="text-sm text-gray-600"><strong>Código de reserva:</strong> {{ reserva.codigo }}</p>
            <p class="text-sm text-gray-600"><strong>Nombre:</strong> {{ reserva.nombre }}</p>
          </div>

          <div class="flex gap-2">
            <button 
              @click="verDetalles(reserva)"
              class="px-4 py-2 text-primary-600 border border-primary-600 rounded-md hover:bg-primary-50 transition-colors text-sm font-medium"
            >
              Ver Detalles
            </button>
            <button 
              @click="confirmarCancelacion(reserva)"
              class="px-4 py-2 text-red-600 border border-red-600 rounded-md hover:bg-red-50 transition-colors text-sm font-medium"
            >
              Cancelar Reserva
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Lista de Reservas Pasadas -->
    <div v-if="tabActivo === 'pasadas'">
      <div v-if="reservasPasadas.length === 0" class="text-center py-12">
        <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-gray-600 text-lg">No tienes reservas pasadas</p>
      </div>

      <div v-else class="space-y-4">
        <div 
          v-for="reserva in reservasPasadasConEspacio" 
          :key="reserva.id"
          class="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-400"
        >
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-bold text-gray-800">{{ reserva.espacio?.nombre }}</h3>
              <p class="text-gray-600">{{ reserva.espacio?.ubicacion }}</p>
            </div>
            <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
              {{ reserva.cancelada ? 'Cancelada' : 'Completada' }}
            </span>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div class="flex items-center text-gray-700">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{{ formatearFecha(reserva.fecha) }}</span>
            </div>
            <div class="flex items-center text-gray-700">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ reserva.horaInicio }} - {{ reserva.horaFin }}</span>
            </div>
            <div class="flex items-center text-gray-700">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>{{ reserva.numeroPersonas }} personas</span>
            </div>
          </div>

          <p class="text-sm text-gray-600 mb-4"><strong>Código de reserva:</strong> {{ reserva.codigo }}</p>

          <button 
            @click="verDetalles(reserva)"
            class="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Ver Detalles
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de Detalles -->
    <div 
      v-if="modalDetalles"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click="cerrarDetalles"
    >
      <div 
        class="bg-white rounded-lg max-w-2xl w-full p-6"
        @click.stop
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-2xl font-bold text-gray-800">Detalles de la Reserva</h3>
          <button 
            @click="cerrarDetalles"
            class="text-gray-500 hover:text-gray-700"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div v-if="reservaSeleccionada" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm text-gray-600">Código</p>
              <p class="font-semibold">{{ reservaSeleccionada.codigo }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-600">Estado</p>
              <p class="font-semibold">{{ estadoTexto(reservaSeleccionada.estado) }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-600">Espacio</p>
              <p class="font-semibold">{{ reservaSeleccionada.espacio?.nombre }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-600">Ubicación</p>
              <p class="font-semibold">{{ reservaSeleccionada.espacio?.ubicacion }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-600">Fecha</p>
              <p class="font-semibold">{{ formatearFecha(reservaSeleccionada.fecha) }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-600">Horario</p>
              <p class="font-semibold">{{ reservaSeleccionada.horaInicio }} - {{ reservaSeleccionada.horaFin }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-600">Personas</p>
              <p class="font-semibold">{{ reservaSeleccionada.numeroPersonas }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-600">Nombre</p>
              <p class="font-semibold">{{ reservaSeleccionada.nombre }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-600">Email</p>
              <p class="font-semibold">{{ reservaSeleccionada.email }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-600">Teléfono</p>
              <p class="font-semibold">{{ reservaSeleccionada.telefono }}</p>
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-600">Propósito</p>
            <p class="font-semibold">{{ reservaSeleccionada.proposito }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Confirmación de Cancelación -->
    <div 
      v-if="modalCancelacion"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click="cerrarModalCancelacion"
    >
      <div 
        class="bg-white rounded-lg max-w-md w-full p-6"
        @click.stop
      >
        <h3 class="text-xl font-bold text-gray-800 mb-4">Cancelar Reserva</h3>
        <p class="text-gray-600 mb-6">
          ¿Estás seguro de que deseas cancelar la reserva <strong>{{ reservaACancelar?.codigo }}</strong>?
          Esta acción no se puede deshacer.
        </p>
        <div class="flex gap-4">
          <button 
            @click="cerrarModalCancelacion"
            class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
          >
            No, mantener
          </button>
          <button 
            @click="ejecutarCancelacion"
            class="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Sí, cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useReservas } from '../composables/useReservas'
import { useNotificaciones } from '../composables/useNotificaciones'

const { reservasActivas, reservasPasadas, obtenerEspacioPorId, cancelarReserva } = useReservas()
const { exito, error } = useNotificaciones()

const tabActivo = ref('activas')
const modalDetalles = ref(false)
const modalCancelacion = ref(false)
const reservaSeleccionada = ref(null)
const reservaACancelar = ref(null)

// Agregar información del espacio a cada reserva
const reservasActivasConEspacio = computed(() => {
  return reservasActivas.value.map(reserva => ({
    ...reserva,
    espacio: obtenerEspacioPorId(reserva.espacioId)
  }))
})

const reservasPasadasConEspacio = computed(() => {
  return reservasPasadas.value.map(reserva => ({
    ...reserva,
    espacio: obtenerEspacioPorId(reserva.espacioId)
  }))
})

const estadoTexto = (estado) => {
  const estados = {
    'confirmada': 'Confirmada',
    'pendiente': 'Pendiente',
    'cancelada': 'Cancelada'
  }
  return estados[estado] || estado
}

const formatearFecha = (fecha) => {
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(fecha + 'T00:00:00').toLocaleDateString('es-ES', opciones)
}

const verDetalles = (reserva) => {
  reservaSeleccionada.value = {
    ...reserva,
    espacio: obtenerEspacioPorId(reserva.espacioId)
  }
  modalDetalles.value = true
}

const cerrarDetalles = () => {
  modalDetalles.value = false
  reservaSeleccionada.value = null
}

// RF4: Cancelar reserva
const confirmarCancelacion = (reserva) => {
  reservaACancelar.value = reserva
  modalCancelacion.value = true
}

const cerrarModalCancelacion = () => {
  modalCancelacion.value = false
  reservaACancelar.value = null
}

const ejecutarCancelacion = () => {
  try {
    cancelarReserva(reservaACancelar.value.id)
    exito('Reserva cancelada exitosamente')
    cerrarModalCancelacion()
  } catch (err) {
    error(err.message)
  }
}
</script>
