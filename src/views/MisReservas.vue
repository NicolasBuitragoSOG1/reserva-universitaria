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
          Activas (3)
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
          Pasadas (5)
        </button>
      </nav>
    </div>

    <!-- Lista de Reservas Activas -->
    <div v-if="tabActivo === 'activas'" class="space-y-4">
      <!-- Reserva 1 -->
      <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-bold text-gray-800">Aula 101</h3>
            <p class="text-gray-600">Edificio A - Primer Piso</p>
          </div>
          <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            Confirmada
          </span>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="flex items-center text-gray-700">
            <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>2025-10-20</span>
          </div>
          <div class="flex items-center text-gray-700">
            <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>10:00 - 12:00</span>
          </div>
          <div class="flex items-center text-gray-700">
            <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>25 personas</span>
          </div>
        </div>

        <div class="mb-4">
          <p class="text-sm text-gray-600"><strong>Propósito:</strong> Clase de programación</p>
          <p class="text-sm text-gray-600"><strong>Código de reserva:</strong> RES-001-2025</p>
        </div>

        <div class="flex gap-2">
          <button class="px-4 py-2 text-primary-600 border border-primary-600 rounded-md hover:bg-primary-50 transition-colors text-sm font-medium">
            Ver Detalles
          </button>
          <button class="px-4 py-2 text-red-600 border border-red-600 rounded-md hover:bg-red-50 transition-colors text-sm font-medium">
            Cancelar Reserva
          </button>
        </div>
      </div>

      <!-- Reserva 2 -->
      <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-bold text-gray-800">Cancha de Fútbol</h3>
            <p class="text-gray-600">Zona Deportiva - Exterior</p>
          </div>
          <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            Confirmada
          </span>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="flex items-center text-gray-700">
            <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>2025-10-22</span>
          </div>
          <div class="flex items-center text-gray-700">
            <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>16:00 - 18:00</span>
          </div>
          <div class="flex items-center text-gray-700">
            <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>22 personas</span>
          </div>
        </div>

        <div class="mb-4">
          <p class="text-sm text-gray-600"><strong>Propósito:</strong> Torneo interclases</p>
          <p class="text-sm text-gray-600"><strong>Código de reserva:</strong> RES-002-2025</p>
        </div>

        <div class="flex gap-2">
          <button class="px-4 py-2 text-primary-600 border border-primary-600 rounded-md hover:bg-primary-50 transition-colors text-sm font-medium">
            Ver Detalles
          </button>
          <button class="px-4 py-2 text-red-600 border border-red-600 rounded-md hover:bg-red-50 transition-colors text-sm font-medium">
            Cancelar Reserva
          </button>
        </div>
      </div>

      <!-- Reserva 3 -->
      <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-bold text-gray-800">Lab. Computación</h3>
            <p class="text-gray-600">Edificio C - Tercer Piso</p>
          </div>
          <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            Pendiente
          </span>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="flex items-center text-gray-700">
            <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>2025-10-25</span>
          </div>
          <div class="flex items-center text-gray-700">
            <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>14:00 - 16:00</span>
          </div>
          <div class="flex items-center text-gray-700">
            <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>20 personas</span>
          </div>
        </div>

        <div class="mb-4">
          <p class="text-sm text-gray-600"><strong>Propósito:</strong> Práctica de base de datos</p>
          <p class="text-sm text-gray-600"><strong>Código de reserva:</strong> RES-003-2025</p>
        </div>

        <div class="flex gap-2">
          <button class="px-4 py-2 text-primary-600 border border-primary-600 rounded-md hover:bg-primary-50 transition-colors text-sm font-medium">
            Ver Detalles
          </button>
          <button class="px-4 py-2 text-red-600 border border-red-600 rounded-md hover:bg-red-50 transition-colors text-sm font-medium">
            Cancelar Reserva
          </button>
        </div>
      </div>
    </div>

    <!-- Lista de Reservas Pasadas -->
    <div v-if="tabActivo === 'pasadas'" class="space-y-4">
      <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-400">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-bold text-gray-800">Aula 205</h3>
            <p class="text-gray-600">Edificio B - Segundo Piso</p>
          </div>
          <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
            Completada
          </span>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="flex items-center text-gray-700">
            <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>2025-10-10</span>
          </div>
          <div class="flex items-center text-gray-700">
            <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>08:00 - 10:00</span>
          </div>
          <div class="flex items-center text-gray-700">
            <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>30 personas</span>
          </div>
        </div>

        <p class="text-sm text-gray-600 mb-4"><strong>Código de reserva:</strong> RES-098-2025</p>

        <button class="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium">
          Ver Detalles
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabActivo = ref('activas')
</script>
