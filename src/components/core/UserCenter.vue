<template>
  <div>
    <k-header text="探索" :url="require('../../assets/image/navigation.png')"></k-header>
    <div class="fun">
      <i class="iconfont icon-browse" @click="handlefun" :class="{ 'icon-hide': isActive }" v-for="(i, index) in 1012" :key="index"></i>
      <h1>我是什么也没有</h1>
      <h2>看右边买买买就对了！</h2>
    </div>
  </div>
</template>
<script>
import kHeader from '../common/head'
export default {
  data() {
    return {
      isActive: false,
    }
  },
  components: {
    'k-header': kHeader,
  },
  created() {
    this.$root.isShowSend = false
  },
  methods: {
    handlefun() {
      this.isActive = !this.isActive
    },
  },
}
</script>
<style lang="less" scoped>
.fun {
  display: flex;
  flex-wrap: wrap;
  i {
    font-size: 35px;
  }
  h1 {
    position: fixed;
    width: 10px;
    left: 50%;
    margin-left: -15px;
    top: 130px;
    font-size: 60px;
  }
  h2 {
    position: fixed;
    left: 53%;
    top: 645px;
  }
}
</style>
