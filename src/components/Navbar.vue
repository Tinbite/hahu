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
          <!-- <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar> -->
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

        <v-list-group
        prepend-icon="settings"
        class='blue--text'
        value="true"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title class="white--text">Configurations</v-list-tile-title>
   
    </v-list-tile>

        <v-list-group
          sub-group
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Registration</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(registration, i) in registrations"
            :key="i"
          >
<!-- <router-link :to="{name: 'registration', params: { name: registration.name, id: index + 1 }}">
                    {{customer.name}}
                </router-link>-->

            <v-list-tile-title class='cyan--text' v-text="registration[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon class='cyan--text' v-text="registration[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        <v-list-tile
            v-for="(configuration, i) in configurations"
            :key="i"
           @click="registrations"
          >
            <v-list-tile-title v-text="configuration[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="configuration[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-group
          sub-group
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Adminstrations</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(adminstration, i) in adminstrations"
            :key="i"
            
          >
            <v-list-tile-title class='cyan--text' v-text="adminstration[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon class='cyan--text' v-text="adminstration[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
</v-list-group>

<v-list-group
 prepend-icon="enhanced_encryption"
        >
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Authorization</v-list-tile-title>
        </v-list-tile>
         <v-list-tile @click="$router.push({ name: 'Login' })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">Login</v-list-tile-title>
        </v-list-tile>
    </v-list-group>
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
          { title: 'Dashboard', icon: 'dashboard', route: '/dashboard'},
          { title: 'Company performance', icon: 'question_answer', route: '/CompanyPerfs' },
          { title: 'All company performance summary', icon: 'search', route: '/AllCompPerf'},
          { title: 'Admin Dashboard', icon: 'gavel', route: '/AdminDb' },

          
 
        ],
        menus:[
      { title: 'Profile', icon: 'person' },
        { title: 'Settings', icon: 'setting' },
        { title: 'Logout' , icon:'exit_to_app'},
        
      ],
      selectedIndex: 1,
      registrations: [
   {title: 'Industry Park',icon: 'business', route: '/dashboard' },
        ['Companies', 'account_balance']
      ],
      configurations: [
      [ 'Grading Labels'],
      ['Period Settings'],
      ['Test']
      ],
      
      adminstrations: [
        ['Users'],
        ['Roles'],
        ['Docs'],
        ['Operations'],
        ['Permissions'] 
      ],

mini: false,
        right: null,

methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    }
  },
        
      }
     
    }
  }
</script>

<style>
</style>