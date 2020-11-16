<template>
  <div class="bgc">
    <el-row>
      <!-- 左侧用户区 -->
      <el-col :span="7" class="user">
        <div class="user_offset">
          <user></user>
        </div>
      </el-col>
      <!-- 中间核心功能区 -->
      <el-col :span="10" :offset="7" class="core">
        <router-view></router-view>
      </el-col>
      <!-- 右侧工具栏区 -->
      <el-col :span="7" class="tool">
        <div class="tool_bar">
          <tool></tool>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import User from '../components/User.vue'
import Tool from '../components/Tool.vue'
// import Core from '../components/Core.vue'
export default {
  data() {
    return {}
  },
  components: {
    user: User,
    tool: Tool,
    // core: Core,
  },
}
</script>
<style lang="less" scoped>
// 用户信息组件

.user {
  background-color: pink;
  .user_offset {
    // background-color: red;
    position: fixed;
    left: 12.2%;
    width: 17%;
    height: 100vh;
  }
}
// 用户核心功能组件
.core {
  background-color: #E6ECF0;
  border-right: 1px solid #E6ECF0;
}
// 用户工具功能组件
.tool {
  padding-left: 25px;
  width: 16%;
  .tool_bar {
    // 帮助子组件Tool找定位
    position: relative;
  }
}
</style>
