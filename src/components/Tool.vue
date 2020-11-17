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
        <li v-if="hotList.length === 0">
          <h5>😰 出大问题</h5>
          <p>怎么啥也没有?</p>
        </li>
        <li v-for="(item, i) in hotList" :key="i">
          <h5>
            #{{ item.keyWord }} <span style="font-size: 12px; color: #659ec7; float: right">{{ item.heatDegree }}w</span>
          </h5>
          <p>{{ item.describe }}</p>
        </li>
      </ul>
    </div>
    <!-- 好物推荐 -->
    <div :class="{ position_fixed: isActive }" ref="hot" class="goods">
      <el-carousel direction="vertical">
        <el-carousel-item v-for="(item, i) in goodsList" :key="i">
          <img style="object-fit: cover" :src="item" alt="" />
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
      // 好物列表
      goodsList: [
        'https://wxt.sinaimg.cn/thumb300/6ba12822ly1gks3c4qn1qj2230230qs9.jpg?tags=%5B%5D',
        'https://wxt.sinaimg.cn/thumb300/6ba12822ly1gkpyz16ef0j21lt4tgqv6.jpg?tags=%5B%5D',
        'https://wxt.sinaimg.cn/thumb300/6ba12822ly1gkpyyvsnm9j21lt4tgx6q.jpg?tags=%5B%5D',
      ],
      hotList: [
        {
          id: 1,
          keyWord: '这是一个热点',
          describe: '这是一个热点描述',
          heatDegree: 12,
        },
        {
          id: 2,
          keyWord: '这是一个热点',
          describe: '这是一个热点描述',
          heatDegree: 10,
        },
        {
          id: 3,
          keyWord: '这是一个热点',
          describe: '这是一个热点描述',
          heatDegree: 9,
        },
        {
          id: 4,
          keyWord: '这是一个热点',
          describe: '这是一个热点描述',
          heatDegree: 4.4,
        },
      ],
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
    background-color: #e6ecf0;
    color: #14171a;
    &::placeholder {
      color: #659ec7;
    }
  }
}
.tody_hot {
  margin-top: 80px;
  background-color: #f5f8fa;
  width: 100%;
  // height: 300px;
  border-radius: 10px;
  .topic {
    font-weight: 700;
    padding: 10px 10px;
    border-bottom: 1px solid #e6ecf0;
  }
  ul li {
    padding: 10px 10px;
    border-bottom: 1px solid #e6ecf0;
    p {
      margin: 5px;
      font-size: 12px;
      color: #659ec7;
    }
  }
}
// 好物推荐
.goods {
  background-color: #f5f8fa;
  position: absolute;
  top: 325px;
  width: 14.3vw;
  height: 200px;
  border-radius: 10px;
}
</style>
