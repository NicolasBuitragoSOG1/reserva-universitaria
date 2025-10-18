import { ref } from 'vue'

const notificaciones = ref([])

export function useNotificaciones() {
  const agregarNotificacion = (mensaje, tipo = 'info') => {
    const id = Date.now()
    notificaciones.value.push({ id, mensaje, tipo })

    // Auto-remover después de 5 segundos
    setTimeout(() => {
      eliminarNotificacion(id)
    }, 5000)

    return id
  }

  const eliminarNotificacion = (id) => {
    const index = notificaciones.value.findIndex(n => n.id === id)
    if (index !== -1) {
      notificaciones.value.splice(index, 1)
    }
  }

  const exito = (mensaje) => agregarNotificacion(mensaje, 'success')
  const error = (mensaje) => agregarNotificacion(mensaje, 'error')
  const advertencia = (mensaje) => agregarNotificacion(mensaje, 'warning')
  const info = (mensaje) => agregarNotificacion(mensaje, 'info')

  return {
    notificaciones,
    agregarNotificacion,
    eliminarNotificacion,
    exito,
    error,
    advertencia,
    info
  }
}
