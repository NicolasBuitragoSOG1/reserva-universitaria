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
          <select 
            v-model="filtros.tipo"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
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
            v-model.number="filtros.capacidadMinima"
            type="number" 
            placeholder="Ej: 20"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Búsqueda
          </label>
          <input 
            v-model="filtros.busqueda"
            type="text" 
            placeholder="Buscar espacio..."
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div v-if="filtrosActivos" class="mt-4">
        <button 
          @click="limpiarFiltros"
          class="text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          Limpiar filtros
        </button>
      </div>
    </div>

    <!-- Lista de Espacios -->
    <div class="mb-6">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">
        Espacios Disponibles ({{ espaciosFiltrados.length }})
      </h2>
    </div>

    <div v-if="espaciosFiltrados.length === 0" class="text-center py-12">
      <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p class="text-gray-600 text-lg">No se encontraron espacios con los filtros seleccionados</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="espacio in espaciosFiltrados" 
        :key="espacio.id"
        class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
      >
        <!-- RF5: Imagen del espacio -->
        <div 
          :class="[
            'h-48 flex items-center justify-center',
            `bg-gradient-to-br from-${espacio.color}-400 to-${espacio.color}-600`
          ]"
        >
          <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <!-- Icono de Aula -->
            <path v-if="espacio.tipo === 'aula'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            <!-- Icono de Cancha -->
            <path v-else-if="espacio.tipo === 'cancha'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <!-- Icono de Laboratorio -->
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        
        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold text-gray-800">{{ espacio.nombre }}</h3>
            <span 
              :class="[
                'px-3 py-1 rounded-full text-sm font-medium',
                `bg-${espacio.color}-100 text-${espacio.color}-800`
              ]"
            >
              {{ tipoNombre(espacio.tipo) }}
            </span>
          </div>
          <p class="text-gray-600 mb-4">{{ espacio.ubicacion }}</p>
          
          <div class="space-y-2 mb-4">
            <div class="flex items-center text-gray-700">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Capacidad: {{ espacio.capacidad }} personas</span>
            </div>
            
            <div class="flex items-start text-gray-700">
              <svg class="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-sm">{{ espacio.equipamiento.join(', ') }}</span>
            </div>
          </div>
          
          <!-- Botón para ver plano -->
          <button 
            v-if="espacio.plano"
            @click="mostrarPlano(espacio)"
            class="w-full mb-2 text-primary-600 border border-primary-600 py-2 px-4 rounded-md hover:bg-primary-50 transition-colors font-medium text-sm"
          >
            📐 Ver Plano del Espacio
          </button>

          <button 
            @click="irAReserva(espacio.id)"
            class="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
          >
            Reservar Ahora
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de Plano -->
    <div 
      v-if="planoVisible"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click="cerrarPlano"
    >
      <div 
        class="bg-white rounded-lg max-w-4xl w-full p-6"
        @click.stop
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-2xl font-bold text-gray-800">{{ espacioSeleccionado?.nombre }}</h3>
          <button 
            @click="cerrarPlano"
            class="text-gray-500 hover:text-gray-700"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="bg-gray-100 rounded-lg p-8 text-center">
          <svg class="w-64 h-64 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <p class="text-gray-600 mt-4">Plano del {{ espacioSeleccionado?.nombre }}</p>
          <p class="text-sm text-gray-500">Imagen ilustrativa - {{ espacioSeleccionado?.ubicacion }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useReservas } from '../composables/useReservas'

const router = useRouter()
const { obtenerEspaciosDisponibles } = useReservas()

const filtros = ref({
  tipo: '',
  capacidadMinima: null,
  busqueda: ''
})

const planoVisible = ref(false)
const espacioSeleccionado = ref(null)

// RF1: Obtener espacios disponibles con filtros
const espaciosFiltrados = computed(() => {
  let espacios = obtenerEspaciosDisponibles({
    tipo: filtros.value.tipo || undefined,
    capacidadMinima: filtros.value.capacidadMinima || undefined
  })

  // Filtro de búsqueda por nombre o ubicación
  if (filtros.value.busqueda) {
    const busqueda = filtros.value.busqueda.toLowerCase()
    espacios = espacios.filter(e => 
      e.nombre.toLowerCase().includes(busqueda) ||
      e.ubicacion.toLowerCase().includes(busqueda)
    )
  }

  return espacios
})

const filtrosActivos = computed(() => {
  return filtros.value.tipo || filtros.value.capacidadMinima || filtros.value.busqueda
})

const limpiarFiltros = () => {
  filtros.value = {
    tipo: '',
    capacidadMinima: null,
    busqueda: ''
  }
}

const tipoNombre = (tipo) => {
  const nombres = {
    'aula': 'Aula',
    'cancha': 'Cancha',
    'laboratorio': 'Laboratorio'
  }
  return nombres[tipo] || tipo
}

const irAReserva = (espacioId) => {
  router.push({ name: 'ReservaForm', params: { espacioId } })
}

// RF5: Mostrar plano del espacio
const mostrarPlano = (espacio) => {
  espacioSeleccionado.value = espacio
  planoVisible.value = true
}

const cerrarPlano = () => {
  planoVisible.value = false
  espacioSeleccionado.value = null
}
</script>
