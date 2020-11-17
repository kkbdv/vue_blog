<template>
  <!-- 用户展示用户的信息 -->
  <div>
    <div>
      <k-header text="🔙" @click.native="handleBack"></k-header>
    </div>
    <div class="main">
      <div class="avt_Block">
        <!-- 背景 -->
        <div class="bgc">
          <img src="../../assets/image/bac2.jpg" alt="" />
        </div>
        <!-- 核心内容展示 -->
        <div class="core">
          <img src="../../assets/image/bac2.jpg" alt="" />
          <el-button type="primary">关注</el-button>
        </div>
      </div>
      <div class="introduce">
        <div class="ind_name">
          JackCHen
          <p style="color: #657786; font-size: 15px">@Jack_chen</p>
          <p style="font-size: 15px; color: #14171a; font-weight: 400; margin: 10px 0">希望你们喜欢我~</p>
        </div>
        <!-- 展示tab -->
        <div class="tab">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="推文" name="first">推文</el-tab-pane>
            <el-tab-pane label="喜欢" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="回复" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="媒体" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import kHeader from '../common/head'
export default {
  data() {
    return {
      activeName: 'first',
    }
  },
  components: {
    'k-header': kHeader,
  },
  methods: {
    handleBack() {
      this.$router.go(-1)
    },
    handleClick() {},
  },
  created() {
    this.$root.isShowSend = false
  },
}
</script>
<style lang="less" scoped>
/deep/.bh {
  font-size: 30px;
  cursor: pointer;
}
.main {
  height: 800px;
}
.avt_Block {
  .bgc {
    height: 200px;
    width: 100%;
    // 防止高斯模糊溢出
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      filter: blur(8px);
      overflow: hidden;
    }
  }
  .core {
    display: flex;
    justify-content: space-between;
    position: relative;

    img {
      position: absolute;
      left: 20px;
      top: -77px;
      width: 134px;
      height: 134px;
      border-radius: 50%;
      border: 8px solid white;
    }
    .el-button {
      position: absolute;
      top: 5px;
      right: 15px;
    }
  }
}
.introduce {
  background-color: white;
  padding-top: 73px;
  // 文字part
  .ind_name {
    font-weight: 700;
    font-size: 19px;
    // 控制头像与文字的对齐 bug:一开始的布局失败埋下的.
    padding-left: 30px;
  }
}
.tab {
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
  /deep/.el-tabs__item {
    height: 50px;
    line-height: 50px;
    padding: 0 5.3vw;
    font-weight: 700;
  }
}
</style>
