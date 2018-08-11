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
import axios from 'axios'

export default {
  name: 'list',
  data () {
    return {
      partners: []
    }
  },
  created () {
    axios
      .get('http://localhost:8000/api/v1/partners', { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('jwt') })
      .then(response => { this.partners = response.data })
  }
}
</script>

<style scoped>

</style>
