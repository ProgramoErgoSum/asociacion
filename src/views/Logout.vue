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
      this.$router.push('/login')
    }
  }
}
</script>
