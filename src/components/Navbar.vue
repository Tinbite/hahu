<template>
 <nav>
    <v-toolbar flat app class='blue-grey darken-4'>
        <v-toolbar-side-icon @click="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">Hahu</span>
        <span>Jobs</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-menu bottom left>
      <v-btn
              slot="activator"
              dark
              transparent
              icon
            >
              <v-icon>more_vert</v-icon>
            </v-btn>

            <v-list>
              <v-list-tile
                v-for="(menu, i) in menus"
                :key="i"
              >
                <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
              </v-list-tile>
              
            
         
            </v-list>
 </v-menu> 
    </v-toolbar>
  <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
     class="blue-grey darken-4" 
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon class="white--text">chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">Hahu</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon class="white--text">chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          router :to="item.route"
        >
          <v-list-tile-action>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> 
 </nav>
</template>
<script>
  
  export default {
    
   data () {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'dashboard', route: '/dashboard'},
          { title: 'Interview', icon: 'question_answer', route: '/manages' },
          { title: 'Search Candidates', icon: 'search', route: '/team'  },
          { title: 'Vacancy', icon: 'person' }
          
 
        ],
        menus:[
      { title: 'Profile', icon: 'person' },
        { title: 'Settings', icon: 'setting' },
        { title: 'Logout' , icon:'exit_to_app'},
        
      ],
      
        mini: false,
        right: null
      }
     
    }
  }
</script>

<style>
</style>