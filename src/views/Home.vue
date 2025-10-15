<template>
  <div>
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg shadow-lg p-8 mb-8 text-white">
      <h1 class="text-4xl font-bold mb-4">Reserva de Espacios Universitarios</h1>
      <p class="text-xl opacity-90">
        Encuentra y reserva aulas, canchas y laboratorios de forma rápida y sencilla
      </p>
    </div>

    <!-- Filtros -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">Filtrar Espacios</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Espacio
          </label>
          <select class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent">
            <option value="">Todos</option>
            <option value="aula">Aula</option>
            <option value="cancha">Cancha</option>
            <option value="laboratorio">Laboratorio</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Capacidad Mínima
          </label>
          <input 
            type="number" 
            placeholder="Ej: 20"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Fecha
          </label>
          <input 
            type="date" 
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>

    <!-- Lista de Espacios -->
    <div class="mb-6">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">Espacios Disponibles</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card de Aula -->
      <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
        <div class="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
          <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold text-gray-800">Aula 101</h3>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Aula
            </span>
          </div>
          <p class="text-gray-600 mb-4">Edificio A - Primer Piso</p>
          <div class="space-y-2 mb-4">
            <div class="flex items-center text-gray-700">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Capacidad: 30 personas</span>
            </div>
            <div class="flex items-center text-gray-700">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Proyector, Aire acondicionado</span>
            </div>
          </div>
          <button 
            @click="irAReserva('aula-101')"
            class="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
          >
            Reservar Ahora
          </button>
        </div>
      </div>

      <!-- Card de Cancha -->
      <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
        <div class="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold text-gray-800">Cancha de Fútbol</h3>
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Cancha
            </span>
          </div>
          <p class="text-gray-600 mb-4">Zona Deportiva - Exterior</p>
          <div class="space-y-2 mb-4">
            <div class="flex items-center text-gray-700">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Capacidad: 22 jugadores</span>
            </div>
            <div class="flex items-center text-gray-700">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Césped sintético, Iluminación</span>
            </div>
          </div>
          <button 
            @click="irAReserva('cancha-futbol')"
            class="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
          >
            Reservar Ahora
          </button>
        </div>
      </div>

      <!-- Card de Laboratorio -->
      <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
        <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
          <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold text-gray-800">Lab. Computación</h3>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              Laboratorio
            </span>
          </div>
          <p class="text-gray-600 mb-4">Edificio C - Tercer Piso</p>
          <div class="space-y-2 mb-4">
            <div class="flex items-center text-gray-700">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Capacidad: 25 personas</span>
            </div>
            <div class="flex items-center text-gray-700">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>25 PCs, Software especializado</span>
            </div>
          </div>
          <button 
            @click="irAReserva('lab-comp')"
            class="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
          >
            Reservar Ahora
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const irAReserva = (espacioId) => {
  // Navegación al formulario de reserva
  router.push({ name: 'ReservaForm', params: { espacioId } })
}
</script>
