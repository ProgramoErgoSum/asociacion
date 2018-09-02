<template>
  <b-card>
    <b-row align-h="end">
      <b-col cols="3">
        <b-form-group>
          <b-form-input v-model="filter" placeholder="Buscar" />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-table show-empty :items="partners" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter" @filtered="onFiltered">
          <template slot="code" slot-scope="row">
            <h5><b-badge variant="success">{{row.item.code}}</b-badge></h5>
          </template>
          <template slot="name" slot-scope="row">
            <router-link :to="{ name: 'partners-edit', params: { idPartner: row.item.id }}">{{row.item.name}} {{row.item.surname}}</router-link>
          </template>
          <template slot="cdate" slot-scope="row">
            {{ toDate(row.item.cdate) }}
          </template>
          <template slot="subscriptions" slot-scope="row">
            {{ hasSubscriptions(row.item) }}
          </template>
          <template slot="indate" slot-scope="row">
            {{ inDate(row.item.subscriptions) }}
          </template>
          <template slot="outdate" slot-scope="row">
            {{ outDate(row.item.subscriptions) }}
          </template>
          <template slot="actions" slot-scope="row">
            <b-button size="sm" @click.stop="row.toggleDetails">Suscripciones</b-button>
          </template>
          <template slot="row-details" slot-scope="row">
            <b-table :items="row.item.subscriptions"></b-table>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { getPartners } from '../../http/partners'

export default {
  name: 'list',
  data () {
    return {
      partners: [],
      fields: [
        { key: 'code', label: 'Código' },
        { key: 'name', label: 'Nombre', sortable: true },
        { key: 'email', label: 'Email' },
        { key: 'cdate', label: 'Alta', sortable: true },
        { key: 'subscriptions', label: 'Suscripciones', sortable: true },
        { key: 'indate', label: 'Inicio subscripción', sortable: true },
        { key: 'outdate', label: 'Fin subscripción', sortable: true },
        { key: 'actions', label: 'Actions' }
      ],
      currentPage: 1,
      perPage: 10,
      totalRows: 0,
      filter: null,
      modalInfo: { title: '', content: '' }
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
          this.totalRows = this.partners.length
        })
    },
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    hasSubscriptions (partner) {
      return partner.subscriptions.length
    },
    toDate (datetime) {
      let date = datetime ? new Date(datetime) : null
      return date && date.toISOString().split('T')[0]
    },
    inDate (subscriptions) {
      return null
      let first = subscriptions.slice(0)[0]
      return this.toDate(first.in_date)
    },
    outDate (subscriptions) {
      return null
      let last = subscriptions.slice(-1)[0]
      return this.toDate(last.in_date)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
