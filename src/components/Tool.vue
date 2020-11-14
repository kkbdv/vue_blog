<template>
  <div>
    <div class="one">搜索框</div>
    <div ref="hot" :class="{ position_fixed: isActive }">热门</div>
    <div>广告</div>
    <div>返回顶部</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 判断是否切换
      isActive: false,
    }
  },
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let hot = this.$refs.hot.offsetHeight
      console.log('scrollTop:' + scrollTop)
      console.log('hot:' + hot)
      if (scrollTop >= 200) {
        this.isActive = true
      } else {
        this.isActive = false
      }
      console.log(this.isActive)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>
<style lang="less" scoped>
.one {
  position: absolute;
  left: 0;
  height: 80px;
}
div:nth-child(2) {
  background-color: red;
  height: 200px;
  width: 200px;
  position: absolute;
  top: 200px;
}
div:nth-child(3) {
  background-color: blue;
  height: 200px;
  position: absolute;
  top: 400px;
}
div:nth-child(4) {
  background-color: plum;
  height: 200px;
  position: absolute;
  top: 800px;
}
.position_fixed {
  position: fixed !important;
  top: 0px !important;
}
</style>
