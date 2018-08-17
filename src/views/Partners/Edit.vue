<template>
  <b-card>
    <b-row>
      <b-col cols="12">

        <b-card>
          <div slot="header">
            <strong>Icon/Text</strong> Groups
          </div>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input type="text" placeholder="Username"></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-form-input type="email" placeholder="Email" autocomplete="email"></b-form-input>
              <b-input-group-append><b-input-group-text><i class="fa fa-envelope-o"></i></b-input-group-text></b-input-group-append>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-euro"></i></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input type="text" placeholder="ex. $1.000.000"></b-form-input>
              <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
            </b-input-group>
          </b-form-group>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="success"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>

        <b-card>
          <div slot="header">
            <strong>Credit Card</strong> <small>Form</small>
          </div>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="name">Code</label>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="fa fa-barcode"></i></b-input-group-text></b-input-group-prepend>
                  <b-form-input type="text" class="form-control" v-model="partner.code" placeholder="Código" disabled />
                </b-input-group>
              </b-form-group>
              <b-form-group>
                <label for="name">Nombre</label>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="fa fa-user"></i></b-input-group-text></b-input-group-prepend>
                  <b-form-input type="text" class="form-control" v-model="partner.name" placeholder="Nombre" required />
                </b-input-group>
              </b-form-group>
              <b-form-group>
                <label for="name">Apellidos</label>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="fa fa-user"></i></b-input-group-text></b-input-group-prepend>
                  <b-form-input type="text" class="form-control" v-model="partner.surname" placeholder="Apellidos" required />
                </b-input-group>
              </b-form-group>
              <b-form-group>
                <label for="name">Email</label>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="fa fa-envelope"></i></b-input-group-text></b-input-group-prepend>
                  <b-form-input type="text" class="form-control" v-model="partner.email" placeholder="Email" required />
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { getPartnersId } from '../../http/partners'

export default {
  name: 'view',
  data () {
    return {
      partner: []
    }
  },
  mounted () {
    getPartnersId(this.$route.params.idPartner)
      .then(response => {
        this.partner = response
      })
  }
}
</script>

<style scoped>

</style>
