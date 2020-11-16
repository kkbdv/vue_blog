<template>
  <div>
    <k-header text="探索" :url="require('../../assets/image/navigation.png')"></k-header>
  </div>
</template>
<script>
import kHeader from '../common/head'
export default {
  data() {
    return {}
  },
  components: {
    'k-header': kHeader,
  },
  created() {
    this.$root.isShowSend = false
    console.log('我是新人')
  },
}
</script>
<style lang="less" scoped>
</style>
