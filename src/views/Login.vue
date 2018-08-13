<template>
  <div class="login">
    <ol v-if="errors">
      <li v-for="error in errors" :key="error.id">{{error}}</li>
    </ol>
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
import { mapMutations } from 'vuex'
import { login } from '../http/admin'

export default {
  name: 'login',
  data () {
    return {
      username: null,
      password: null,
      errors: []
    }
  },
  methods: {
    ...mapMutations(['LOGIN']),
    login: function () {
      login({
        _username: this.username,
        _password: this.password
      })
        .then(response => {
          this.LOGIN(response.data)
          this.$router.push('/dashboard')
        })
        .catch(err => {
          this.errors.push(err.message)
        })
    }
  }
}
</script>

<style scoped>

</style>
