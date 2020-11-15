<template>
  <div class="header">
    <div class="con">
      <div class="bh">{{ text }}</div>
      <div>
        <img style="width: 29px" :src="url" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['url', 'text'],
  data() {
    return {}
  },
  created() {},
}
</script>
<style lang="less" scoped>
.header {
  height: 80px;
  background-color: white;
  border-bottom: 1px solid #E6ECF0;
}
// 版心
.con {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 93%;
  margin: auto;
  padding-top: 20px;
}
</style>
