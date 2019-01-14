<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1>Login</h1>
        <v-text-field
          label="Email"
          placeholder="email"
          v-model="email"
        ></v-text-field>
        <br>
        <v-text-field
          label="Password"
          placeholder="password"
          type="password"
          v-model="password"
      autocomplete="new-password"
        ></v-text-field>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan darken-4"
           @click="login">
          <v-icon class="mr-2">fingerprint</v-icon>
          Login
        </v-btn>
    </v-flex>
  </v-layout>
  </v-container>
</template>
 <script>
 
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
 <style scoped>
 h1 {
   color: darkcyan;
 }
</style>