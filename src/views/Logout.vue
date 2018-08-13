<template>
  <div class="logout">
    <h1>Logout</h1>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'logout',
  data () {
    return {

    }
  },
  created () {
    this.logout()
  },
  methods: {
    ...mapMutations(['ADMIN_LOGOUT']),
    logout: function () {
      this.ADMIN_LOGOUT()
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>

</style>
