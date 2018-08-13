<template>
  <div class="list">
    <h1>List</h1>
    <ul>
      <li v-for="partner in partners" :key="partner.id">
        {{ partner.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getPartners } from '../../http/partners'

export default {
  name: 'list',
  data () {
    return {
      partners: [],
      errors: []
    }
  },
  mounted () {
    getPartners()
      .then(response => {
        this.partners = response
      })
      .catch(error => {
        this.errors.push(error.message)
      })
  }
}
</script>

<style scoped>

</style>
