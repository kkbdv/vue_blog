<template>
  <div class="con">
    <!-- 图标 -->
    <div class="logo">
      <img src="../assets/image/logo.png" alt="" />
    </div>
    <!-- 菜单栏 -->
    <div class="main">
      <el-menu ref="menuRef" default-active="/home" class="el-menu-vertical-demo" background-color="white" active-text-color="#0091ea" router>
        <el-menu-item :index="item.route" :key="item.id" @click="handleActive(item.id)" v-for="item in means">
          <!-- <img class="nav_icon" src="../assets/image/home.png" alt="" /> -->
          <span class="iconfont" :class="[isActive === item.id ? item.selectIcon : item.icon]"></span>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
      <!-- 发送推文按钮 -->
      <el-button @click="showEdit" v-show="isShowSend">推文</el-button>
      <!-- 用户状态信息 -->
    </div>
    <el-popover placement="top-start" width="200" trigger="hover">
      <!-- 弹窗显示内容 -->
      <ul class="station">
        <li>关注: <span style="font-weight: 400">123.4w</span></li>
        <li>粉丝: <span style="font-weight: 400">123.4w</span></li>
        <li>
          <el-button class="logout" size="mini" type="info">退出登录</el-button>
        </li>
      </ul>
      <div class="footer" slot="reference">
        <el-image class="avatar" :src="url"> </el-image>
        <div class="name">
          <p>匿名用户</p>
          <p class="user_id">@yourbaster</p>
        </div>
      </div>
    </el-popover>
  </div>
</template>
<script>
export default {
  data: () => ({
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    srcList: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'],
    isActive: '1',
    // 菜单数组
    means: [
      { id: '1', name: '主页', icon: 'icon-home', selectIcon: 'icon-home-filling', route: '/home' },
      { id: '2', name: '探索', icon: 'icon-navigation', selectIcon: 'icon-navigation-2', route: '/home/usercenter' },
      { id: '3', name: '通知', icon: 'icon-notification', selectIcon: 'icon-notification-filling', route: '/3' },
      { id: '4', name: '私信', icon: 'icon-email', selectIcon: 'icon-email', route: '/4' },
    ],
  }),
  computed: {
    isShowSend: {
      get() {
        return this.$root.isShowSend
      },
    },
  },
  methods: {
    showEdit() {
      this.$root.editVisible = true
    },
    // 处理图片激活状态
    handleActive(id) {
      this.isActive = id
    },
  },
  mounted() {
    console.log(this.$refs.menuRef)
  },
}
</script>
<style lang="less" scoped>
.con {
  display: flex;
  flex-direction: column;
  height: 100vh;
  border-right: 1px solid #E6ECF0;
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
.iconfont {
  font-size: 23px;
  margin-right: 15px;
}
.el-menu {
  border: 0;
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
  padding: 15px 90px;
  font-weight: 700;
  margin-top: 5vh;
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
// 弹出窗口
.station {
  li {
    text-align: center;
    font-weight: 700;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #E6ECF0;
    &:last-child {
      border: 0;
    }
  }
  .logout {
    padding: 10px 60px;
    margin-top: 0;
    background-color: #A6A9AD;
  }
  .logout:hover {
    background-color: #babec3;
  }
}
</style>
