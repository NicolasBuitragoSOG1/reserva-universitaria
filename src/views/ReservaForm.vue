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
        <div v-if="espacio" class="mb-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
          <h3 class="font-semibold text-primary-800 mb-2">Espacio Seleccionado</h3>
          <p class="text-primary-700 font-medium">{{ espacio.nombre }}</p>
          <p class="text-sm text-primary-600">{{ espacio.ubicacion }}</p>
          <p class="text-sm text-primary-600">Capacidad máxima: {{ espacio.capacidad }} personas</p>
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
                v-model="formData.nombre"
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
                v-model="formData.codigoEstudiantil"
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
                v-model="formData.email"
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
                v-model="formData.telefono"
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
                v-model="formData.fecha"
                type="date" 
                required
                :min="fechaMinima"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Hora de Inicio *
              </label>
              <input 
                v-model="formData.horaInicio"
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
                v-model="formData.horaFin"
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
                v-model.number="formData.numeroPersonas"
                type="number" 
                required
                min="1"
                :max="espacio?.capacidad"
                placeholder="Ej: 15"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <p v-if="espacio" class="text-xs text-gray-500 mt-1">
                Máximo: {{ espacio.capacidad }} personas
              </p>
            </div>
          </div>
        </div>

        <!-- Propósito -->
        <div class="mb-8">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Propósito de la Reserva *
          </label>
          <textarea 
            v-model="formData.proposito"
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
              v-model="formData.aceptaTerminos"
              type="checkbox" 
              required
              class="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <span class="ml-2 text-sm text-gray-700">
              Acepto los términos y condiciones de uso de espacios universitarios *
            </span>
          </label>
        </div>

        <!-- Mensaje de error -->
        <div v-if="errorMensaje" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-sm text-red-800">{{ errorMensaje }}</p>
          </div>
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
            :disabled="enviando"
            class="flex-1 px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="enviando">Procesando...</span>
            <span v-else>Confirmar Reserva</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useReservas } from '../composables/useReservas'
import { useNotificaciones } from '../composables/useNotificaciones'

const router = useRouter()
const route = useRoute()
const { crearReserva, obtenerEspacioPorId } = useReservas()
const { exito, error: notifError } = useNotificaciones()

const espacio = ref(null)
const enviando = ref(false)
const errorMensaje = ref('')

const formData = ref({
  nombre: '',
  codigoEstudiantil: '',
  email: '',
  telefono: '',
  fecha: '',
  horaInicio: '',
  horaFin: '',
  numeroPersonas: null,
  proposito: '',
  aceptaTerminos: false,
  espacioId: ''
})

const fechaMinima = computed(() => {
  return new Date().toISOString().split('T')[0]
})

onMounted(() => {
  const espacioId = route.params.espacioId
  if (espacioId) {
    espacio.value = obtenerEspacioPorId(espacioId)
    formData.value.espacioId = espacioId
    
    if (!espacio.value) {
      notifError('Espacio no encontrado')
      router.push('/')
    }
  } else {
    notifError('Debe seleccionar un espacio')
    router.push('/')
  }
})

const volver = () => {
  router.push('/')
}

// RF2: Crear reserva con validaciones
const submitReserva = async () => {
  errorMensaje.value = ''
  enviando.value = true

  try {
    // Validación básica de horario
    if (formData.value.horaInicio >= formData.value.horaFin) {
      throw new Error('La hora de fin debe ser mayor que la hora de inicio')
    }

    // RF2 y RF3: Crear reserva (incluye validación de duplicados)
    const nuevaReserva = crearReserva(formData.value)
    
    exito('¡Reserva creada exitosamente!')
    
    // Redirigir a confirmación
    router.push({ 
      name: 'Confirmacion', 
      params: { reservaCodigo: nuevaReserva.codigo } 
    })
  } catch (err) {
    errorMensaje.value = err.message
    notifError(err.message)
  } finally {
    enviando.value = false
  }
}
</script>