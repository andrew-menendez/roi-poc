import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Tools from '@/components/Tools'
import TablePanel from '@/components/TablePanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tools',
      name: 'tools',
      component: Tools
    },
    {
      path: '/internalroi',
      name: 'internalroi',
      component: TablePanel
    }
  ]
})
