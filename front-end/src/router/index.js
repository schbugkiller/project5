import Vue from 'vue'
import Router from 'vue-router'
import sections from '@/components/sections'
import admin from '@/components/admin'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sections',
      name: 'sections',
      component: sections
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
