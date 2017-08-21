import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Calculator from '@/components/Calculator'
import Select from '@/components/select'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    }
  ]
})
