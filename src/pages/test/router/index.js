import Vue from 'vue'
import Router from 'vue-router'
import login from '../login'
import success from '../success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/success/:user',
      name: 'success',
      component: success,
    }
  ]
})
