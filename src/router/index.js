import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ReservaForm from '../views/ReservaForm.vue'
import MisReservas from '../views/MisReservas.vue'
import Confirmacion from '../views/Confirmacion.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reservar/:espacioId?',
    name: 'ReservaForm',
    component: ReservaForm
  },
  {
    path: '/reservas',
    name: 'MisReservas',
    component: MisReservas
  },
  {
    path: '/confirmacion',
    name: 'Confirmacion',
    component: Confirmacion
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
