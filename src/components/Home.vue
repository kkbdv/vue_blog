<template>
  <div class="bgc">
    <el-row>
      <!-- 左侧用户区 -->
      <el-col :span="6" class="user">
        <div class="user_offset">
          <user></user>
        </div>
      </el-col>
      <!-- 中间核心功能区 -->
      <el-col :span="12" :offset="6" class="core">
        <core></core>
      </el-col>
      <!-- 右侧工具栏区 -->
      <el-col :span="6" class="tool">
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
import Core from '../components/Core.vue'
export default {
  data() {
    return {}
  },
  components: {
    user: User,
    tool: Tool,
    core: Core,
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
    left: 8%;
    width: 17%;
    height: 100vh;
  }
}
// 用户核心功能组件
.core {
  background-color: lightblue;
}
// 用户工具功能组件
.tool {
  background-color: #303F9F;
  .tool_bar {
    background-color: #303F9F;
    // 帮助子组件Tool找定位
    position: relative;
  }
}
</style>
