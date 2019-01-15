<template>
  <nav>
    <v-toolbar flat app class="cyan lighten-5">
        <v-toolbar-side-icon @click="drawer = !drawer" class="dark--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase dark--text">
        <span class="font-weight-light">Hahu</span>
        <span>Jobs</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn flat color="dark">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn> -->

      <v-menu bottom left>
      <v-btn
              slot="activator"
              dark
              icon
            >
              <v-icon>more_vert</v-icon>
            </v-btn>

            <v-list>
              <v-list-tile
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
 </v-menu>
    </v-toolbar>
<!-- 
 <v-navigation-drawer app v-model="drawer" class="cyan darken-4">
       <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
        <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>My company</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
 
  </nav>
</template>

<script>
// export default {
//   data() {
//      return {
//       drawer: false,
//       links: [
//         { icon: 'dashboard', text: 'Dashboard', route: '/dashboard' },
//         { icon: 'folder', text: 'Manage', route: '/manages' },
//      { icon: 'person', text: 'Team', route: '/team' },
//       ]
//     }
//   }
// }
  export default {
    
   data () {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'Interview', icon: 'question_answer' },
          { title: 'Search Candidates', icon: 'search' },
          { title: 'Vacancy', icon: 'person' }

          
 
        ],
        mini: false,
        right: null
      }
     
    }

  }

</script>

<style>
</style>
