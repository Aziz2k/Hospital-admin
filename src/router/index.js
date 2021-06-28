import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/patients',
    name: 'Patients',
    component: () => import('../views/patients/Patient.vue'),
  },
  {
    path: '/patients/:id',
    name: 'ViewPatients',
    component: () => import('../views/patients/ViewPatient.vue'),
  },
  {
    path: '/doctors',
    name: 'Docs',
    component: () => import('../views/doctors/Doc.vue'), 
  },
  {
    path: '/doctors/:id',
    name: 'ViewDocs',
    component: () => import('../views/doctors/ViewDoc.vue'), 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
