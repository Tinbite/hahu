import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import CompanyPerf from './views/CompanyPerf.vue'
import AllCompanyPerformanceSummary from './views/AllCompanyPerformanceSummary.vue'
import AdminDashboard from './views/AdminDashboard.vue'
// import Login from '@components/Pages/Login.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   component: Login
    // },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/CompanyPerfs',
      name: 'CompanyPerfs',
      component: CompanyPerf
     
    },
    {
      path: '/AllCompPerf',
      name: 'AllCompPerf',
      component: AllCompanyPerformanceSummary
     
     },
     {
      path: '/AdminDb',
      name: 'AdminDb',
      component: AdminDashboard
     
     }
  ]
})