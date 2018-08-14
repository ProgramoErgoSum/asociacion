<template>
  <div class="login">
    <div class="form">
      <el-row>
        <el-col :span="24">
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="login-container">
            <h3 class="title">Acceso</h3>
            <el-form-item prop="username">
              <el-input v-model="ruleForm.username" type="text" auto-complete="off" placeholder="Username" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="ruleForm.password" type="password" auto-complete="off" placeholder="Password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
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
      ruleForm: {
        username: null,
        password: null
      },
      errors: [],
      rules: {
        username: [{ required: true, message: 'Introduce el nombre de usuario', trigger: 'blur' }],
        password: [{ required: true, message: 'Introduce la contraseña', trigger: 'blur' }]
      }
    }
  },
  methods: {
    ...mapMutations(['ADMIN_LOGIN']),
    submitForm: function (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          postTokens({
            _username: this.ruleForm.username,
            _password: this.ruleForm.password
          })
            .then(response => {
              this.ADMIN_LOGIN(response)
              this.$router.push('/dashboard')
            })
            .catch(err => {
              this.$message({ type: 'error', message: err.message })
            })
        }
        this.$refs[formName].resetFields()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f0f0f0;
}
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
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
