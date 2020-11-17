<template>
  <div>
    <!-- 两栏式布局 -->
    <div class="left">
      <img src="../../assets/image/logo.png" alt="" />
    </div>
    <div class="right">
      <div class="main">
        <!-- 登录框 -->
        <el-form :inline="true" class="login" :model="loginForm" :rules="loginRules" ref="loginFormRef" label-width="70px" hide-required-asterisk>
          <el-form-item label="账号" prop="account">
            <el-input v-model="loginForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item style="margin-left: 10px">
            <el-button>登录</el-button>
          </el-form-item>
        </el-form>
        <!-- 废话框 -->
        <div class="trash"></div>
        <h2 class="title"><span style="font-size: 40px">分</span> 享校园生活，<span style="font-size: 40px">精彩</span> 就在这一刻!</h2>
        <!-- 注册账号 -->
        <div class="register">
          <h3>还没账号? 立即注册</h3>
          <el-button @click="handleReg">注册</el-button>
        </div>
      </div>
    </div>
    <!-- 注册对话框 -->
    <el-dialog title="新用户注册" :visible.sync="regVisible" width="30%">
      <span>
        <el-form class="diagReg" :model="regForm" :rules="regRules" ref="regFormRef" label-width="83px">
          <el-form-item label="昵称:" prop="nickname">
            <el-input v-model="regForm.nickname"></el-input>
          </el-form-item>
          <el-form-item label="账号:" prop="account">
            <el-input v-model="regForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input type="password" v-model="regForm.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码:" prop="passwordAgin">
            <el-input type="password" v-model="regForm.passwordAgin"></el-input>
          </el-form-item>
          <el-form-item label="性别:" prop="sex">
            <el-radio-group v-model="regForm.sex">
              <el-radio label="male">小哥哥♂</el-radio>
              <el-radio label="female">小姐姐♀</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生产日期:" prop="birthDate">
            <el-date-picker placeholder="选择时间" v-model="regForm.birthDate" style="width: 100%"></el-date-picker>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="regVisible = false">取 消</el-button>
        <el-button type="primary" @click="regVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginRules: { account: [{ required: true, message: '请输入账号', trigger: 'blur' }], password: [{ required: true, message: '请输入密码', trigger: 'blur' }] },
      loginForm: {
        account: '',
        password: '',
      },
      // 注册对象
      regForm: {
        nickname: '',
        account: '',
        password: '',
        passwordAgin: '',
        sex: 'female',
        birthDate: '',
      },
      regRules: {
        nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        passwordAgin: [{ required: true, message: '请验证您的输入', trigger: 'blur' }],
        birthDate: [{ required: true, message: '请选择出生日期', trigger: 'blur' }],
      },
      regVisible: false,
    }
  },
  methods: {
    handleReg() {
      this.regVisible = true
    },
  },
}
</script>
<style lang="less" scoped>
.left {
  float: left;
  width: 50%;
  height: 100vh;
  background: url(../../assets/image/bac.png) no-repeat;
  background-size: cover;
  img {
    margin-left: 20px;
    margin-top: 10px;
  }
}
.right {
  float: right;
  width: 50%;
  height: 100vh;
  background-color: white;
  .main {
    width: 85%;
    margin: auto;
    .login {
      margin-top: 20%;
      font-weight: 700;
      /deep/.el-input__inner {
        background-color: #e8f0fe;
        border: 0;
        border-bottom: 4px solid #e6ecf0;
        height: 30px;
        width: 196px;
        border-radius: 0;
      }
      .el-button {
        color: #1da1f2;
        border-radius: 15px;
        font-weight: 700;
        border: 1px solid #1da1f2;
      }
    }
    .trash {
      margin-top: 5%;
      height: 300px;
      text-align: center;
      background: url(../../assets/image/bac2.jpg) no-repeat;
      // background-position: -770px -500px;
      filter: blur(6px);
      background-size: cover;
      border-radius: 10px;
      box-shadow: 0 0 10px #000;
    }
    .title {
      position: relative;
      top: -200px;
      margin-left: 120px;
      color: white;
    }
    .register {
      margin-top: 9%;
      text-align: center;
      h3 {
        padding-bottom: 10px;
      }
      .el-button {
        color: #1da1f2;
        border-radius: 15px;
        font-weight: 700;
        padding-left: 40px;
        padding-right: 40px;
        border: 1px solid #1da1f2;
      }
    }
  }
  // 对话框中的表单
}
.diagReg {
  font-weight: 700;
}
</style>
