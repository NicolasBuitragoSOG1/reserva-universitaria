<template>
  <div class="max-w-2xl mx-auto">
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
          <div class="font-semibold text-gray-800">RES-003-2025</div>
        </div>

        <div class="flex justify-between items-start">
          <div class="text-gray-600">Espacio:</div>
          <div class="font-semibold text-gray-800 text-right">Aula 101 - Edificio A</div>
        </div>

        <div class="flex justify-between items-start">
          <div class="text-gray-600">Fecha:</div>
          <div class="font-semibold text-gray-800">20 de Octubre, 2025</div>
        </div>

        <div class="flex justify-between items-start">
          <div class="text-gray-600">Horario:</div>
          <div class="font-semibold text-gray-800">10:00 AM - 12:00 PM</div>
        </div>

        <div class="flex justify-between items-start">
          <div class="text-gray-600">Capacidad:</div>
          <div class="font-semibold text-gray-800">25 personas</div>
        </div>

        <div class="flex justify-between items-start">
          <div class="text-gray-600">Estado:</div>
          <div>
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Confirmada
            </span>
          </div>
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
            <li>• Se ha enviado un correo de confirmación a tu email</li>
            <li>• Presenta tu código de reserva al llegar al espacio</li>
            <li>• Puedes cancelar hasta 24 horas antes sin penalización</li>
            <li>• Asegúrate de dejar el espacio limpio y ordenado</li>
          </ul>
        </div>
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
        Volver al Inicio
      </button>
    </div>

    <!-- Botón de Descarga -->
    <div class="mt-6 text-center">
      <button class="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Descargar Comprobante (PDF)
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const verMisReservas = () => {
  router.push('/reservas')
}

const volverInicio = () => {
  router.push('/')
}
</script>
