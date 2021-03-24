import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Who from '../views/Who.vue'
import Diseases from '../views/Diseases.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/nosotros',
    name: 'who',
    component: Who,
  },
  {
    path: '/enfermedades',
    name: 'diseases',
    component: Diseases,
  },
  {
    path: '/servicios',
    name: 'services',
    component: Services,
  },
  {
    path: '/contacto',
    name: 'contact',
    component: Contact,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
