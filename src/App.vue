<!--<template>
   <div>
    <template v-if="!$route.meta.allowAnonymous">
      <v-app id="inspire">
        <div class="app-container">
          <toolbar @toggleNavigationBar="drawer = !drawer"/>
          <navigation :toggle="drawer"/>
          <v-content>
            <breadcrumbs />
            <router-view/>
            <page-footer />
          </v-content>
        </div>
      </v-app>
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
  </div>
</template> -->

<!--<script>
 // export default {
//   name: 'App',
//   data() {
//     return {
//       drawer: true
//     }
//   }
// }
// </script>

// <style>
// </style> -->
<template>
  <v-app class="grey lighten-4">
    <Navbar />

    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
 import Navbar from './components/Navbar'
export default {
  components: { 
    Navbar
    },
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>