<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <b-card-group class="login">
            <b-card no-body class="p-4">
              <b-card-body>
                <h1 class="title">Acceso</h1>
                <b-form @submit="onSubmit">
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="fa fa-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" v-model="form.username" placeholder="Username" required />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="fa fa-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" v-model="form.password" placeholder="Password" required />
                  </b-input-group>
                  <b-alert v-if="error" variant="danger" show>{{error}}</b-alert>
                  <b-button type="submit" variant="primary">Login</b-button>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { postTokens } from '../http/admin'

export default {
  name: 'Login',
  data () {
    return {
      error: null,
      form: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    ...mapMutations(['ADMIN_LOGIN']),
    onSubmit: function () {
      postTokens({
        _username: this.form.username,
        _password: this.form.password
      })
        .then(response => {
          this.ADMIN_LOGIN(response)
          this.$router.push('/dashboard')
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-row {
  display: flex;
  min-height: 100vh;
  background: #f0f0f0;
}
.login {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  button {
    display: block;
    width: 100%;
  }
}
</style>
