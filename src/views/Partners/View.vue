<template>
  <div class="view">
    <h1>View</h1>
    {{partner | json}}
  </div>
</template>

<script>
import { getPartnersId } from '../../http/partners'

export default {
  name: 'view',
  data () {
    return {
      partner: [],
      errors: []
    }
  },
  mounted () {
    getPartnersId(this.$route.params.idPartner)
      .then(response => {
        this.partner = response
      })
      .catch(error => {
        this.errors.push(error.message)
      })
  }
}
</script>

<style scoped>

</style>
