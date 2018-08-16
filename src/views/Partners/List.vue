<template>
  <div class="list">
    <h1>List</h1>
    <el-table :data="partners" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">

      <el-table-column type="expand">
        <template slot-scope="props">
          <ul v-if="props.row.subscriptions">
            <li v-for="subscription in props.row.subscriptions" :key="subscription.id">
              <p>{{ subscription.in_date }} - {{ subscription.out_date }}</p>
              <p>{{ subscription.info }} - {{ subscription.price }}</p>
            </li>
          </ul>
        </template>
      </el-table-column>

      <el-table-column prop="code" label="Código"></el-table-column>
      <el-table-column prop="name" label="Nombre"></el-table-column>
      <el-table-column prop="surname" label="Apellidos"></el-table-column>
      <el-table-column prop="email" label="Email"></el-table-column>
      <el-table-column prop="role" label="Rol"></el-table-column>
      <el-table-column prop="cdate" label="Fecha alta"></el-table-column>
      <el-table-column label="">
        <template slot-scope="props">
          <el-button @click="$router.push('/partners/' + props.row.id  + '/view')" size="small">
            <i class="iconfont icon-details"></i>Ver
          </el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { getPartners } from '../../http/partners'

export default {
  name: 'list',
  data () {
    return {
      partners: []
    }
  },
  mounted () {
    this.getPartners()
  },
  methods: {
    getPartners () {
      getPartners()
        .then(response => {
          this.partners = response
        })
        .catch(err => {
          this.$message({ type: 'error', message: err.message })
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
