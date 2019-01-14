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
       <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
    </v-toolbar>

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
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
     return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/dashboard' },
        { icon: 'folder', text: 'Manage', route: '/manages' },
     { icon: 'person', text: 'Team', route: '/team' },
      ]
    }
  }
}
</script>

<style>
</style>
