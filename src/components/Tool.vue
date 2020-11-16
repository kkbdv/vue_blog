<template>
  <div>
    <!-- 搜索条 -->
    <div class="search">
      <el-input placeholder="请输入内容" v-model="input4" clearable>
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <!-- 热门 -->
    <!-- <div ref="hot" :class="{ position_fixed: isActive }" @click="handle">热门</div> -->
    <div class="tody_hot">
      <div class="topic">热点排行</div>
      <ul>
        <li>
          <h5>#这是一个热点 <span style="font-size: 12px; color: #659EC7; float: right">12w</span></h5>
          <p>我来描述这个热点</p>
        </li>
        <li>
          <h5>#这是一个热点 <span style="font-size: 12px; color: #659EC7; float: right">12w</span></h5>
          <p>我来描述这个热点</p>
        </li>
        <li>
          <h5>#这是一个热点 <span style="font-size: 12px; color: #659EC7; float: right">12w</span></h5>
          <p>我来描述这个热点</p>
        </li>
      </ul>
    </div>
    <!-- 好物推荐 -->
    <div :class="{ position_fixed: isActive }" ref="hot" class="goods">
      <el-carousel direction="vertical">
        <el-carousel-item v-for="item in 2" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 返回顶部按钮 -->

    <el-backtop :right="200">
      <div
        style="
           {
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          }
        "
      >
        UP
      </div>
    </el-backtop>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 判断是否切换
      isActive: false,
      input4: '',
    }
  },
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let hot = this.$refs.hot.offsetHeight
      console.log('scrollTop:' + scrollTop)
      console.log('hot:' + hot)
      if (scrollTop >= 339) {
        this.isActive = true
      } else {
        this.isActive = false
      }
      console.log(this.isActive)
    },
    handle() {
      console.log('121')
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>
<style lang="less" scoped>
.el-carousel__item:nth-child(2n) {
  width: 14.3vw;
  height: 200px;
  background-color: pink;
}
.el-carousel {
  overflow: hidden;
  height: 200px;
  border-radius: 10px;
}
.el-carousel__item:nth-child(2n + 1) {
  width: 14.3vw;
  height: 200px;
  background-color: lightblue;
}

// 固定定位
.position_fixed {
  position: fixed !important;
  top: 70px !important;
}
.search {
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 14.3vw;
  padding-top: 17px;
  /deep/.el-input__inner {
    border: 0;
    background-color: #E6ECF0;
    color: #14171A;
    &::placeholder {
      color: #659EC7;
    }
  }
}
.tody_hot {
  margin-top: 80px;
  background-color: #F5F8FA;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  .topic {
    font-weight: 700;
    padding: 10px 10px;
    border-bottom: 1px solid #E6ECF0;
  }
  ul li {
    padding: 10px 10px;
    border-bottom: 1px solid #E6ECF0;
    p {
      margin: 5px;
      font-size: 12px;
      color: #659EC7;
    }
  }
}
// 好物推荐
.goods {
  background-color: #F5F8FA;
  position: absolute;
  top: 325px;
  width: 14.3vw;
  height: 200px;
  border-radius: 10px;
}
</style>
