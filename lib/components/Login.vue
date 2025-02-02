<template>
  <div class = "login-layout">
    <div class="login-box">
        <div class="login-header">
            <span class="text">登录</span>
        </div>
        <div class="login-body">
            <el-form :model="ruleForm" label-width="60px" label-position="left">
                <el-form-item label="用户名">
                    <el-input  v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="login-footer">
            <!-- <el-button type="primary">以访客身份登录</el-button> -->
            <el-button type="primary">登录</el-button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {
    
  },
  data() {
    return {
        ruleForm: {
            username: '',
            password: '',
        }
    }
  },
  props: {

  },
  computed: {

  },
  watch: {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = 'scss' scoped>
.login-layout{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-box{
        border: 1px solid;
        border-radius: 11px;
        padding-bottom: 20px;
        .login-header{
            width: 100%;
            height: 60px;
            line-height: 60px;
            text-align: center;
            border-bottom: 1px solid;
            .text{
                font-size: 15px;
            }
            margin-bottom: 20px;
        }
        .login-body{
            padding-right: 50px;
            padding-left: 50px;
        }
        .login-footer{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
