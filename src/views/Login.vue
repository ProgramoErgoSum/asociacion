<template>
  <div class="login">
    <ol v-if="errors">
      <li v-for="error in errors" :key="error.id">{{error}}</li>
    </ol>
    {{response}}
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>User name</label>
      <input required v-model="username" type="text" />
      <label>Password</label>
      <input required v-model="password" type="password"/>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      username: null,
      password: null,
      errors: [],
      response: null
    }
  },
  methods: {
    login: function () {
      let credentials = {
        _username: this.username,
        _password: this.password
      }
      axios
        .post('http://localhost:8000/api/v1/tokens', credentials)
        .then(response => {
          this.$store.state.user.authenticated = true
          localStorage.setItem('jwt', response.data.token)
        })
        .catch(err => {
          this.errors.push(err.response.data)
        })
    }
  }
}
</script>

<style scoped>

</style>
