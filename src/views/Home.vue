<template>
  <div class="home">
    <div class="content">
      <div class="middle">
        <div class="search-bar">
          <el-cascader
            class="search-picker"
            placeholder="请选择地区"
            :options="options"
            v-model="selectedOptions"
            @change="handleChangeLocation">
          </el-cascader>
          <el-cascader
            class="search-picker"
            placeholder="请选择职位"
            :options="options"
            v-model="selectedOptions"
            @change="handleChangeLocation">
          </el-cascader>
          <el-input class="search-input" v-model="searchKey" placeholder="请输入搜索职位"></el-input>
          <el-button type="primary" @click="redirectToSearchResult"><i class="el-icon-search"></i> 搜索</el-button>
        </div>
      </div>
      <div class="hot">
        <span>热门搜索：</span>
        <el-button class="tag" type="text" @click="redirectToSearchResult">哈哈哈</el-button>
        <el-button class="tag" type="text" @click="redirectToSearchResult">哈哈哈</el-button>
      </div>
      <div class="header">
        <div class="carousel">
          <el-carousel :interval="5000" arrow="always" height="450px">
            <el-carousel-item v-for="item in carouselImgs" :key="item">
              <img :src="item"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="title">
        <span>热门企业</span>
      </div>
      <div class="company" ref="company-holder">
        <div class="group">
          <img :src="require('../assets/images/company1.jpg')"/>
          <p>哔哩哔哩</p>
        </div>
        <div class="group">
          <img :src="require('../assets/images/company1.jpg')"/>
          <p>哔哩哔哩</p>
        </div>
        <div class="group">
          <img :src="require('../assets/images/company1.jpg')"/>
          <p>哔哩哔哩</p>
        </div>
        <div class="group">
          <img :src="require('../assets/images/company1.jpg')"/>
          <p>哔哩哔哩</p>
        </div>
        <div class="group">
          <img :src="require('../assets/images/company1.jpg')"/>
          <p>哔哩哔哩</p>
        </div>
        <div class="group">
          <img :src="require('../assets/images/company1.jpg')"/>
          <p>哔哩哔哩</p>
        </div>
        <div class="group">
          <img :src="require('../assets/images/company1.jpg')"/>
          <p>哔哩哔哩</p>
        </div>
        <div class="group">
          <img :src="require('../assets/images/company1.jpg')"/>
          <p>哔哩哔哩</p>
        </div>
        <div class="group">
          <img :src="require('../assets/images/company1.jpg')"/>
          <p>哔哩哔哩</p>
        </div>
        <div class="group">
          <img :src="require('../assets/images/company1.jpg')"/>
          <p>哔哩哔哩</p>
        </div>
      </div>
      <el-tabs v-model="activeTabName">
        <el-tab-pane label="为您推荐" name="recommend">
          <div class="occupation-card">
            <div class="container">
              <div class="head">
                <h4>Web 前端架构师</h4>
                <h4 class="price">4-5K</h4>
              </div>
              <div class="meta">
                <span>上海 徐汇区</span>
                <span>1-3年</span>
                <span>本科</span>
              </div>
              <div class="bottom">
                <img :src="require('../assets/images/occupation2.png')" />
                <div>
                  <p>迪卡侬</p>
                  <h5>50-100人 | 企业服务,教育/培训</h5>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="head">
                <h4>Web 前端架构师</h4>
                <h4 class="price">4-5K</h4>
              </div>
              <div class="meta">
                <span>上海 徐汇区</span>
                <span>1-3年</span>
                <span>本科</span>
              </div>
              <div class="bottom">
                <img :src="require('../assets/images/occupation2.png')" />
                <div>
                  <p>迪卡侬</p>
                  <h5>50-100人 | 企业服务,教育/培训</h5>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="head">
                <h4>Web 前端架构师</h4>
                <h4 class="price">4-5K</h4>
              </div>
              <div class="meta">
                <span>上海 徐汇区</span>
                <span>1-3年</span>
                <span>本科</span>
              </div>
              <div class="bottom">
                <img :src="require('../assets/images/occupation2.png')" />
                <div>
                  <p>迪卡侬</p>
                  <h5>50-100人 | 企业服务,教育/培训</h5>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="热门职位" name="hot">
          <div class="occupation-card">
            <div class="container">
              <div class="head">
                <h4>Web 前端架构师</h4>
                <h4 class="price">4-5K</h4>
              </div>
              <div class="meta">
                <span>上海 徐汇区</span>
                <span>1-3年</span>
                <span>本科</span>
              </div>
              <div class="bottom">
                <img :src="require('../assets/images/occupation2.png')" />
                <div>
                  <p>迪卡侬</p>
                  <h5>50-100人 | 企业服务,教育/培训</h5>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="head">
                <h4>Web 前端架构师</h4>
                <h4 class="price">4-5K</h4>
              </div>
              <div class="meta">
                <span>上海 徐汇区</span>
                <span>1-3年</span>
                <span>本科</span>
              </div>
              <div class="bottom">
                <img :src="require('../assets/images/occupation2.png')" />
                <div>
                  <p>迪卡侬</p>
                  <h5>50-100人 | 企业服务,教育/培训</h5>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="head">
                <h4>Web 前端架构师</h4>
                <h4 class="price">4-5K</h4>
              </div>
              <div class="meta">
                <span>上海 徐汇区</span>
                <span>1-3年</span>
                <span>本科</span>
              </div>
              <div class="bottom">
                <img :src="require('../assets/images/occupation2.png')" />
                <div>
                  <p>迪卡侬</p>
                  <h5>50-100人 | 企业服务,教育/培训</h5>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="最新职位" name="newest">
          <div class="occupation-card">
            <div class="container">
              <div class="head">
                <h4>Web 前端架构师</h4>
                <h4 class="price">4-5K</h4>
              </div>
              <div class="meta">
                <span>上海 徐汇区</span>
                <span>1-3年</span>
                <span>本科</span>
              </div>
              <div class="bottom">
                <img :src="require('../assets/images/occupation2.png')" />
                <div>
                  <p>迪卡侬</p>
                  <h5>50-100人 | 企业服务,教育/培训</h5>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="head">
                <h4>Web 前端架构师</h4>
                <h4 class="price">4-5K</h4>
              </div>
              <div class="meta">
                <span>上海 徐汇区</span>
                <span>1-3年</span>
                <span>本科</span>
              </div>
              <div class="bottom">
                <img :src="require('../assets/images/occupation2.png')" />
                <div>
                  <p>迪卡侬</p>
                  <h5>50-100人 | 企业服务,教育/培训</h5>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="head">
                <h4>Web 前端架构师</h4>
                <h4 class="price">4-5K</h4>
              </div>
              <div class="meta">
                <span>上海 徐汇区</span>
                <span>1-3年</span>
                <span>本科</span>
              </div>
              <div class="bottom">
                <img :src="require('../assets/images/occupation2.png')" />
                <div>
                  <p>迪卡侬</p>
                  <h5>50-100人 | 企业服务,教育/培训</h5>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
<<<<<<< HEAD
=======
    <button class="more">查看更多</button>
    <customized-footer />
>>>>>>> b980e36eca623fafac12c34537d4d58570e8f4c8
  </div>
</template>

<script>
import placeholder from 'assets/images/placeholder.jpg';


export default {
  name: 'home',
  data() {
    return {
      activeTabName: 'recommend',
      isLogin: false,
      placeholder,
      showLoginModal: false,
      showRegisterModal: false,
      showForgetPwdModal: false,
      selectedOptions: null,
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        email: '',
        captcha: '',
        password: ''
      },
      resetPwdForm: {
        email: '',
        captcha: '',
        newPassword: ''
      },
      carouselImgs: [
        require('../assets/images/loop1.jpg'),
        require('../assets/images/loop2.png')
      ],
      options: [{
        value: '101',
        label: '江苏省',
        children: [{
          value: '10101',
          label: '南京'
        }, {
          value: '10102',
          label: '苏州'
        }, {
          value: '10103',
          label: '无锡'
        }, {
          value: '10104',
          label: '常州'
        }, {
          value: '10105',
          label: '南通'
        }, {
          value: '10106',
          label: '泰州'
        }, {
          value: '10107',
          label: '扬州'
        }, {
          value: '10108',
          label: '盐城'
        }, {
          value: '10109',
          label: '镇江'
        }, {
          value: '10110',
          label: '盐城'
        }, {
          value: '10111',
          label: '宿迁'
        }, {
          value: '10112',
          label: '淮安'
        }, {
          value: '10113',
          label: '徐州'
        }, {
          value: '10114',
          label: '连云港'
        }]
      }],
      searchKey: ''
    }
  },
  methods: {
    handleOpenMenu() {},
    handleChangeLocation() {},
    doLogin() {
      // request;
      this.showLoginModal = false;
      this.isLogin = true;
    },
    dealMenuClick(command) {
      if (command === 'logout') {
        this.isLogin = false;
      }
    },
    doLogot() {
      this.isLogin = false;
    },
    doRegister() {

    },
    doResetPwd() {

    },
    redirectToSearchResult() {
      this.$router.push({ path: '/search' });
    },
    companyScrolling() {
      const holder = this.$refs['company-holder'];
      if (holder && document.body.clientWidth === (holder.scrollWidth - holder.scrollLeft))
          holder.scrollLeft = 0;
        holder.scrollLeft += 1;
      requestAnimationFrame(this.companyScrolling);
    }
  },
  mounted() {
    this.companyScrolling();
  }
}
</script>

<style lang="stylus" scoped>
  .home
    margin-top 70px
    .more
      width 210px
      height 43px
      background-color #1F368D
      color white
      font-size 14px
      margin 30px 0
      cursor pointer
    .content
      width 100%
      /*padding 20px 40px*/
      margin auto
      background-color white
      .header
        margin 20px 0
        display flex
        flex-direction row
        justify-content center
        align-items center
        .carousel
          width 100%
      .hot
        display flex
        flex-direction row
        padding 0 20px
        font-size 14px
        .tag
          padding 0
          margin-left 10px
      .title
        display flex
        flex-direction row
        color #455379
        font-weight bold
        padding 0
      .middle
        display flex
        flex-direction row
        padding 20px
        align-items center
        margin auto
        border solid 1px #eeee
        margin 20px auto
        .search-bar
          flex 1
          display flex
          flex-direction row
          height 55px
          .search-picker
            font-size 17px
            line-height 55px
            width 180px
            margin-right 20px
          .search-input
            flex 1
          button
            font-size 18px
            width 200px
            margin-left 20px
      .company
        display flex
        flex--direction row
        justify-content space-evenly
        align-items center
        margin: 20px auto
        overflow scroll
<<<<<<< HEAD
        img
          height 150px
          margin 0 10px
=======
        .group
          img 
            height 150px
            margin 0 10px
          p
            margin 5px 0
            font-size 13px
>>>>>>> b980e36eca623fafac12c34537d4d58570e8f4c8
      .occupation-card
        display flex
        flex-direction row
        margin auto
        flex-wrap wrap  
        .container
          margin 10px
          box-shadow 1px 1px 4px rgba(0,0,0,0.2)
          padding 20px
          flex 1
          display flex
          flex-direction column
          .head
            display flex
<<<<<<< HEAD
            flex-direction column
            align-items flex-start
            h3
              margin 0 0 10px 0
            h5
              margin 10px 0
            .meta
              span
                margin-right 10px
                font-size 14px
          .logo
            display flex
            align-items center
            img
              height 100px

=======
            justify-content space-between
            margin-bottom 5px
            h4
              margin 2px 0
              &.price
                color red
          .meta
            text-align left
            border-bottom solid 1px darkgray
            padding-bottom 10px
            span
              padding 0 5px
              border-right solid 1px black
              &:last-child
                border none 
              &:first-child
                padding-left 0
          .bottom
            display flex
            flex-direction row
            margin-top 10px
            img
              flex 0 0 40px
              height 55px
            div
              flex: 1
              text-align left
              padding 0 20px
              p, h5
                margin 5px


        
        
>>>>>>> b980e36eca623fafac12c34537d4d58570e8f4c8
</style>

<style lang="stylus">
.home
  .middle
    .search-bar
      .search-picker, .search-input
        input
          height 55px
  .category
    .list
      .el-menu--collapse
        width 300px
        i
          width 100%
          text-align left
          font-size 20px
          &:after
            content '>'
            margin-left 50px
    .carousel
      flex 1
      margin-left 20px
  .company
    &::-webkit-scrollbar
      display none
</style>
