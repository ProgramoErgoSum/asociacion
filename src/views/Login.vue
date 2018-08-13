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
import { postTokens } from '../http/admin'

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
    ...mapMutations(['ADMIN_LOGIN']),
    login: function () {
      postTokens({
        _username: this.username,
        _password: this.password
      })
        .then(response => {
          this.ADMIN_LOGIN(response)
          this.$router.push('/dashboard')
        })
        .catch(error => {
          this.errors.push(error.message)
        })
    }
  }
}
</script>

<style scoped>

</style>
