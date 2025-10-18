<template>
  <div class="max-w-2xl mx-auto">
    <div v-if="reserva">
      <!-- Icono de Éxito -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-4">
          <svg class="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-800 mb-2">¡Reserva Confirmada!</h1>
        <p class="text-gray-600">Tu reserva ha sido registrada exitosamente</p>
      </div>

      <!-- Detalles de la Reserva -->
      <div class="bg-white rounded-lg shadow-md p-8 mb-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">
          Detalles de tu Reserva
        </h2>

        <div class="space-y-4">
          <div class="flex justify-between items-start">
            <div class="text-gray-600">Código de Reserva:</div>
            <div class="font-semibold text-gray-800">{{ reserva.codigo }}</div>
          </div>

          <div class="flex justify-between items-start">
            <div class="text-gray-600">Espacio:</div>
            <div class="font-semibold text-gray-800 text-right">
              {{ espacio?.nombre }}<br>
              <span class="text-sm font-normal text-gray-600">{{ espacio?.ubicacion }}</span>
            </div>
          </div>

          <div class="flex justify-between items-start">
            <div class="text-gray-600">Fecha:</div>
            <div class="font-semibold text-gray-800">{{ formatearFecha(reserva.fecha) }}</div>
          </div>

          <div class="flex justify-between items-start">
            <div class="text-gray-600">Horario:</div>
            <div class="font-semibold text-gray-800">{{ reserva.horaInicio }} - {{ reserva.horaFin }}</div>
          </div>

          <div class="flex justify-between items-start">
            <div class="text-gray-600">Capacidad:</div>
            <div class="font-semibold text-gray-800">{{ reserva.numeroPersonas }} personas</div>
          </div>

          <div class="flex justify-between items-start">
            <div class="text-gray-600">Estado:</div>
            <div>
              <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Confirmada
              </span>
            </div>
          </div>

          <div class="border-t pt-4 mt-4">
            <div class="text-gray-600 mb-2">Propósito:</div>
            <div class="font-semibold text-gray-800">{{ reserva.proposito }}</div>
          </div>
        </div>
      </div>

      <!-- Información Adicional -->
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
        <div class="flex items-start">
          <svg class="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 class="font-semibold text-blue-900 mb-2">Información Importante</h3>
            <ul class="text-sm text-blue-800 space-y-1">
              <li>• Se ha guardado tu reserva en el sistema local</li>
              <li>• Presenta tu código de reserva al llegar al espacio</li>
              <li>• Puedes cancelar desde "Mis Reservas"</li>
              <li>• Asegúrate de dejar el espacio limpio y ordenado</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- RF5: Mostrar plano del espacio -->
      <div v-if="espacio" class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Ubicación del Espacio</h3>
        <div class="bg-gray-100 rounded-lg p-8 text-center">
          <svg class="w-32 h-32 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <p class="text-gray-700 font-medium">{{ espacio.nombre }}</p>
          <p class="text-sm text-gray-600">{{ espacio.ubicacion }}</p>
          <p class="text-xs text-gray-500 mt-2">Plano ilustrativo del espacio reservado</p>
        </div>
      </div>

      <!-- Botones de Acción -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button 
          @click="verMisReservas"
          class="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-medium"
        >
          Ver Mis Reservas
        </button>
        <button 
          @click="volverInicio"
          class="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
        >
          Hacer Otra Reserva
        </button>
      </div>
    </div>

    <!-- Estado de carga o error -->
    <div v-else class="text-center py-12">
      <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p class="text-gray-600 text-lg">Reserva no encontrada</p>
      <button 
        @click="volverInicio"
        class="mt-4 px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
      >
        Volver al Inicio
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useReservas } from '../composables/useReservas'

const router = useRouter()
const route = useRoute()
const { obtenerReservaPorCodigo, obtenerEspacioPorId } = useReservas()

const reserva = ref(null)
const espacio = ref(null)

onMounted(() => {
  const codigo = route.params.reservaCodigo
  if (codigo) {
    reserva.value = obtenerReservaPorCodigo(codigo)
    if (reserva.value) {
      espacio.value = obtenerEspacioPorId(reserva.value.espacioId)
    }
  }
})

const formatearFecha = (fecha) => {
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(fecha + 'T00:00:00').toLocaleDateString('es-ES', opciones)
}

const verMisReservas = () => {
  router.push('/reservas')
}

const volverInicio = () => {
  router.push('/')
}
</script>
