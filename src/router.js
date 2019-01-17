import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Manage from './views/Manage.vue'
import Team from './views/Team.vue'
// import Login from './components/Login.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/manages',
      name: 'manages',
      component: Manage
     
    },
    {
      path: '/team',
      name: 'team',
      component: Team
     
     }
    // {
    //   path: '/',
    //   name: ,
    //   component: Login
     
    // }
  ]
})