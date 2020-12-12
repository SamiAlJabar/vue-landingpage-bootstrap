import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/view/LandingPage'
import SomeOtherPage from '@/view/SomeOtherPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/someotherpage',
      name: 'SomeOtherPage',
      component: SomeOtherPage
    }
  ]
})
