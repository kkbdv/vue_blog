<template>
  <div class="con">
    <!-- 图标 -->
    <div class="logo">
      <img src="../assets/image/logo.png" alt="" />
    </div>
    <!-- 菜单栏 -->
    <div class="main">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="white" active-text-color="#0091ea">
        <el-menu-item index="1">
          <img class="nav_icon" src="../assets/image/home.png" alt="" />
          <span>主页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <img class="nav_icon" src="../assets/image/fun.png" alt="" />
          <span>探索</span>
        </el-menu-item>
        <el-menu-item index="3">
          <img class="nav_icon" src="../assets/image/notification.png" alt="" />
          <span>通知</span>
        </el-menu-item>
        <el-menu-item index="4">
          <img class="nav_icon" src="../assets/image/email.png" alt="" />
          <span>私信</span>
        </el-menu-item>
      </el-menu>
      <!-- 发送推文按钮 -->
      <el-button>推文</el-button>
      <!-- 用户状态信息 -->
    </div>
    <div class="footer">
      <el-image class="avatar" :src="url" :preview-src-list="srcList"> </el-image>

      <div class="name">
        <p>匿名用户</p>
        <p class="user_id">@yourbaster</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    srcList: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg', 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'],
  }),
}
</script>
<style lang="less" scoped>
.con {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main {
  flex: 1;
}
.logo {
  height: 100px;
  // background-color: #FFF9C4;
}
.nav_icon {
  width: 23px;
  margin-right: 15px;
}
.el-menu-item {
  font-weight: 700;
  font-size: 17px;
  color: rgb(20, 23, 26);
}
.el-menu-item:hover {
  background-color: rgba(142, 208, 248, 0.2) !important;
  color: #0091ea !important;
}
.el-button {
  padding: 12px 90px;
  position: relative;
  top: 30px;
  left: 50%;
  margin-left: -124px;
  font-weight: 700;
  color: white;
  background-color: #1DA1F2;
}
//用户状态信息
.footer {
  height: 100px;
  display: flex;
  align-items: center;
  .avatar {
    margin: 0 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .name {
    font-size: 16px;
    font-weight: 700;
    .user_id {
      font-size: 14;
      font-weight: 400;
      color: #D0D0D0;
    }
  }
}
</style>
