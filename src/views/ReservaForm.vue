<template>
  <div class="max-w-3xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <button 
        @click="volver"
        class="flex items-center text-primary-600 hover:text-primary-700 mb-4"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Volver a espacios
      </button>
      <h1 class="text-3xl font-bold text-gray-800">Formulario de Reserva</h1>
      <p class="text-gray-600 mt-2">Complete los datos para realizar su reserva</p>
    </div>

    <!-- Formulario -->
    <div class="bg-white rounded-lg shadow-md p-8">
      <form @submit.prevent="submitReserva">
        <!-- Información del Espacio -->
        <div class="mb-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
          <h3 class="font-semibold text-primary-800 mb-2">Espacio Seleccionado</h3>
          <p class="text-primary-700">{{ espacioSeleccionado }}</p>
        </div>

        <!-- Datos Personales -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Datos Personales</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo *
              </label>
              <input 
                type="text" 
                required
                placeholder="Ej: Juan Pérez"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Código Estudiantil *
              </label>
              <input 
                type="text" 
                required
                placeholder="Ej: 2020123456"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input 
                type="email" 
                required
                placeholder="ejemplo@universidad.edu"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Teléfono *
              </label>
              <input 
                type="tel" 
                required
                placeholder="Ej: 3001234567"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <!-- Detalles de la Reserva -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Detalles de la Reserva</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Fecha *
              </label>
              <input 
                type="date" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Hora de Inicio *
              </label>
              <input 
                type="time" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Hora de Fin *
              </label>
              <input 
                type="time" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Número de Personas *
              </label>
              <input 
                type="number" 
                required
                min="1"
                placeholder="Ej: 15"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <!-- Propósito -->
        <div class="mb-8">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Propósito de la Reserva *
          </label>
          <textarea 
            required
            rows="4"
            placeholder="Describa brevemente el propósito de su reserva..."
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          ></textarea>
        </div>

        <!-- Términos y Condiciones -->
        <div class="mb-6">
          <label class="flex items-start">
            <input 
              type="checkbox" 
              required
              class="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <span class="ml-2 text-sm text-gray-700">
              Acepto los términos y condiciones de uso de espacios universitarios *
            </span>
          </label>
        </div>

        <!-- Botones -->
        <div class="flex gap-4">
          <button 
            type="button"
            @click="volver"
            class="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
          >
            Cancelar
          </button>
          <button 
            type="submit"
            class="flex-1 px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-medium"
          >
            Confirmar Reserva
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const espacioSeleccionado = computed(() => {
  const id = route.params.espacioId
  const espacios = {
    'aula-101': 'Aula 101 - Edificio A',
    'cancha-futbol': 'Cancha de Fútbol - Zona Deportiva',
    'lab-comp': 'Laboratorio de Computación - Edificio C'
  }
  return espacios[id] || 'Espacio no especificado'
})

const volver = () => {
  router.push('/')
}

const submitReserva = () => {
  // Simulación de envío - sin funcionalidad real
  router.push('/confirmacion')
}
</script>
