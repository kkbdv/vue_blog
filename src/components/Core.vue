<template>
  <div class="app" style="height:200px background-color: #ccc; width: 400px; margin: 0 auto" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="200">
    <div style="height: 200px; margin: 10px 0; background-color: pink" v-for="(e, i) in data" :key="i">{{ e }}</div>
  </div>
</template>
<script>
import infiniteScroll from 'vue-infinite-scroll'
export default {
  data() {
    return {
      busy: false,
      data: [1],
      windowHeight: document.documentElement.clientHeight,
    }
  },
  methods: {
    loadMore: function () {
      var self = this
      self.busy = true
      console.log('loading... ' + new Date())
      setTimeout(function () {
        var app = document.querySelector('.app')
        var height = app.clientHeight
        if (self.data.length === 0) {
          console.log('加载完毕')
          // 设置一个结束状态
        } else {
          app.style.height = height + 300 + 'px'
          self.data.push('new')
        }

        console.log('end... ' + new Date())
        self.busy = false
      }, 1000)
    },
  },
  directives: { infiniteScroll },
}
</script>
<style lang="less" scoped>
</style>
