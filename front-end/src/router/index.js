import Vue from 'vue'
import Router from 'vue-router'
import sections from '@/components/sections'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sections',
      component: sections
    }
  ]
})
