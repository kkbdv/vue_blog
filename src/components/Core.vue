<template>
  <!-- <div class="app" style="height:200px background-color: #ccc; width: 400px; margin: 0 auto" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="200">
    <div style="height: 200px; margin: 10px 0; background-color: pink" v-for="(e, i) in data" :key="i">{{ e }}</div>
  </div> -->
  <div>
    <!-- 头部区域 -->
    <k-header text="头部" :url="require('../assets/image/home.png')"></k-header>
    <!-- 版心 -->
    <div class="main">
      <!-- 编辑区 -->
      <div>
        <el-row>
          <el-col :span="2">
            <el-image style="width: 60px; height: 60px; border-radius: 40px" :src="url" fit="cover"></el-image>
          </el-col>
          <el-col :span="21" :offset="1">
            <el-input type="textarea" autosize placeholder="有什么新鲜事？" v-model="textarea" resize="none" :show-word-limit="true" :maxlength="140"> </el-input>

            <!-- 图片上传区 -->
            <el-upload
              v-show="isShowUpload"
              style="margin-top: 15px"
              action="https://jsonplaceholder.typicode.com/posts/"
              :file-list="dialogImageUrl"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :limit="4"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
            <!-- 工具条区 -->
            <div class="tool">
              <ul>
                <li @click="showUpload"><span class="iconfont" :class="[isActive === 1 ? 'icon-picture-filling' : 'icon-picture']"></span></li>
                <!-- 表情区 -->
                <el-popover placement="bottom" width="200" trigger="click">
                  <div class="emoji">
                    <span :key="i" @click="handleEmoji(i)" v-for="(itme, i) in emojis">{{ itme }}</span>
                  </div>
                  <li slot="reference" @click="handleActive(2)"><span class="iconfont" :class="[isActive === 2 ? 'icon-smile-filling' : 'icon-smile']"></span></li>
                </el-popover>
                <li @click="handleActive(3)"><span class="iconfont" :class="[isActive === 3 ? 'icon-hide' : 'icon-browse']"></span></li>
              </ul>
              <el-button size="mini" @click="handleSend">发送</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 浏览区 -->
    <div class="blog">
      <div class="blog_block" :key="item.id" v-for="item in blogList">
        <el-row>
          <el-col :span="2">
            <el-image style="width: 50px; height: 50px; border-radius: 40px" :src="url" fit="cover"></el-image>
          </el-col>
          <el-col :span="21" :offset="1">
            <!-- 昵称/账户/发布日期 -->
            <div class="state">
              <div class="pet_name">一个人伤心</div>
              <div class="account">@one_Sadness</div>
              <div class="date"><span style="font-weight: 700">·</span> 11月24日</div>
            </div>
            <!-- 文章 -->
            <div class="blog_text">
              {{ item.content }}
            </div>
            <!-- 图片 -->
            <div class="blog_pic">
              <img class="general" :class="handlPicClass(item.imgUrl.length)" :src="pic.url" :key="pic.id" v-for="pic in item.imgUrl" alt="" />
            </div>
            <!-- 操作 -->
            <div class="operate">
              <ul>
                <li><span class="iconfont icon-smile"></span><span class="number">123</span></li>
                <li><span class="iconfont icon-meh"></span><span class="number">123</span></li>
                <li><span class="iconfont icon-comment"></span><span class="number">123</span></li>
                <li><span class="iconfont icon-share"></span><span class="number">123</span></li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 对话框 -->
    <el-dialog title="提示" :visible.sync="editVisible" width="30%" @close="handleColse">
      <span>
        <el-input type="textarea" autosize placeholder="有什么新鲜事？" v-model="textarea2" resize="none" :show-word-limit="true" :maxlength="140"> </el-input>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import infiniteScroll from 'vue-infinite-scroll'
import kHeader from '../components/common/head'
export default {
  data() {
    return {
      // 输入框
      textarea: '',
      // 第二个输入框
      textarea2: '',
      url: 'https://img.dpm.org.cn/Uploads/Picture/2019/04/04/s5ca5735ab039b.jpg',
      busy: false,
      data: [1],
      // 图片区
      dialogImageUrl: [],
      dialogVisible: false,
      isShowUpload: false,
      // 微博区
      blogList: [
        { id: 1, content: '12312313', imgUrl: [{ id: 1, url: 'https://img.dpm.org.cn/Uploads/Picture/2020/10/29/s5f9a1e3a38307.jpg' }] },
        {
          id: 2,
          content: '12312313',
          imgUrl: [
            { id: 1, url: 'https://img.dpm.org.cn/Uploads/Picture/2020/10/29/s5f9a1d3aaac40.jpg' },
            { id: 2, url: 'https://img.dpm.org.cn/Uploads/Picture/2020/10/29/s5f9a1f0acecb4.jpg' },
            { id: 3, url: 'https://img.dpm.org.cn/Uploads/Picture/2020/08/05/s5f2a7535e4f17.jpg' },
            { id: 4, url: 'https://img.dpm.org.cn/Uploads/Picture/2020/08/05/s5f2a76975dc61.jpg' },
          ],
        },
        { id: 3, content: '12312313', imgUrl: [] },
      ],
      // 图片数组长度
      picClass1: {
        one_pic: true,
      },
      picClass2: {
        two_pic: true,
      },
      picClass3: {
        three_pic: true,
      },
      picClass4: {
        four_pic: true,
      },
      // 图标激活状态
      isActive: 0,
      // 表情数组
      emojis: ['😀', '😅', '😍', '🤑', '🥵', '💩', '😱'],
      // 发送微博对象
      blogForm: {
        id: 99,
        content: '',
        imgUrl: [],
      },
    }
  },
  computed: {
    editVisible: {
      get() {
        return this.$root.editVisible
      },
      set(v) {
        this.$root.editVisible = v
      },
    },
  },
  methods: {
    // loadMore: function () {
    //   var self = this
    //   self.busy = true
    //   console.log('loading... ' + new Date())
    //   setTimeout(function () {
    //     var app = document.querySelector('.app')
    //     var height = app.clientHeight
    //     if (self.data.length === 0) {
    //       console.log('加载完毕')
    //       // 设置一个结束状态
    //     } else {
    //       app.style.height = height + 300 + 'px'
    //       self.data.push('new')
    //     }
    //     console.log('end... ' + new Date())
    //     self.busy = false
    //   }, 1000)
    // },

    //  图片区
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl.push(file)
      this.dialogVisible = true
    },
    // 显示图片上传框
    showUpload() {
      this.isShowUpload = !this.isShowUpload
      this.handleActive(1)
    },
    handlPicClass(len) {
      if (len === 1) {
        return this.picClass1
      } else if (len === 2) {
        return this.picClass2
      } else if (len === 3) {
        return this.picClass3
      }
      return this.picClass4
    },
    // 关闭对话框清理输入
    handleColse() {
      this.textarea2 = ''
    },
    // 处理激活状态
    handleActive(id) {
      this.isActive = id
    },
    // 处理表情
    handleEmoji(id) {
      this.textarea += this.emojis[id]
    },
    // 发送微博事件
    handleSend() {
      if (this.textarea.length > 0) {
        this.blogForm.id = this.blogForm.id + 3
        console.log(this.textarea)
        this.blogForm.content = this.textarea
        this.blogList.unshift(this.blogForm)
        this.blogForm.content = ''
      }
    },
  },
  directives: { infiniteScroll },
  components: {
    'k-header': kHeader,
  },
  created() {
    this.$root.isShowSend = true
    console.log('我是Core create')
  },
}
</script>
<style lang="less" scoped>
.main,
.blog {
  // 版心
  padding: 15px;
  //   width: 93%;
  margin: auto;
  background-color: white;
}
.blog {
  margin-top: 15px;
  margin-bottom: 15px;
}
.blog_block {
  border-bottom: 1px solid #E6ECF0;
  padding-top: 15px;
}
.tool {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #E6ECF0;
  display: flex;
  justify-content: space-between;
  .el-button {
    color: white;
    padding: 15px 50px;
    background-color: #1DA1F2;
    font-weight: bold;
    font-size: 15px;
  }
  ul {
    margin-top: 8px;
    display: flex;
    padding-left: 0;
    li {
      margin: 0 5px;
      img {
        width: 28px;
      }
      .iconfont {
        font-size: 24px;
      }
    }
  }
}
// 用户状态
.state {
  display: flex;
  margin-bottom: 15px;
  .pet_name {
    font-weight: 700;
    font-size: 16px;
  }
  .account,
  .date {
    margin: 0 5px;
    color: #8996A2;
    font-size: 14px;
  }
}
// 微博文章
.blog_text {
  margin-bottom: 15px;
}
.blog_pic {
  .general {
    width: 45%;
    margin: 0 5px;
    border-radius: 10px;
  }
  .one_pic {
    width: 100% !important;
  }
  .two_pic {
    width: 45% !important;
  }
  .three_pic {
    &:nth-child(1) {
      width: 45% !important;
      height: 284px;
    }
    &:nth-child(2) {
      position: absolute !important;

      width: 39% !important;
      height: 137px;
    }
    &:nth-child(3) {
      width: 45% !important;
      height: 137px;
    }
  }
  .four_pic {
    width: 45% !important;
  }
}
// 微博操作
.operate {
  margin-top: 12px;
  margin-bottom: 12px;
  ul {
    display: flex;
    justify-content: space-around;

    .iconfont {
      font-size: 20px;
    }
    .number {
      font-size: 14px;
      color: #659EC7;
      margin-left: 5px;
    }
  }
}
/deep/.el-textarea__inner {
  border: 0;
  font-size: 18px;
  color: #14171A;
  &::placeholder {
    color: #657786;
    font-weight: 700;
    font-size: 19px;
  }
}
.emoji {
  span {
    margin: 2px;
    cursor: pointer;
  }
}
</style>
