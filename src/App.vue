<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header / Navbar -->
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-primary-600">
              📚 ReservaUni
            </h1>
          </div>
          <div class="flex items-center space-x-4">
            <router-link 
              to="/" 
              class="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Inicio
            </router-link>
            <router-link 
              to="/reservas" 
              class="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Mis Reservas
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p class="text-center text-gray-600">
          © 2025 Sistema de Reserva de Espacios Universitarios - Prototipo UI
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Este es el componente principal de la aplicación
// Solo incluye la estructura visual sin funcionalidad
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 50;
}
</style>
