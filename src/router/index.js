 /**
   * @file router.vue
   * @summary simple router that shows dashboard and sign up page.
   */

import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Signup from '@/components/Signup'
import TodoList from '@/components/TodoList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoList
    }
  ]
})
