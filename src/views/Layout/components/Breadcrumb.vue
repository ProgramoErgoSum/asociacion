<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item" :key="index" v-for="(routeObject, index) in routeRecords">
      <span class="active" v-if="isLast(index)">{{ getName(routeObject) }}</span>
      <router-link :to="routeObject" v-else>{{ getName(routeObject) }}</router-link>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    getName (item) {
      console.log(item)
      return item.meta && item.meta.title ? item.meta.title : item.name || null
    },
    isLast (index) {
      return index === this.list.length - 1
    }
  },
  computed: {
    routeRecords: function () {
      return this.list.filter((route) => route.meta.title || route.name)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
