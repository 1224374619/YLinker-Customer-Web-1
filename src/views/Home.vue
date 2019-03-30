<template>
  <div class="home">
    <el-dialog title="登录" :visible.sync="showLoginModal" width="350px">
      <el-form :model="loginForm">
        <el-form-item
          :rules="{ required: true, type: 'email', message: '请输入用户名', trigger: 'change' }">
          <el-input v-model="loginForm.username" autocomplete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
      </el-form>
       <el-button style="float: right;" type="text" @click="showForgetPwdModal = true">忘记密码？</el-button>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="doLogin">登录</el-button>
      </div>
    </el-dialog>
    <el-dialog title="注册" :visible.sync="showRegisterModal" width="380px">
      <el-form :model="registerForm">
        <el-form-item>
          <el-input v-model="registerForm.email" autocomplete="off" placeholder="请输入邮箱（将作为登陆用户名）"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="registerForm.captcha" autocomplete="off" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="registerForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="doRegister">注册</el-button>
      </div>
    </el-dialog>
    <el-dialog title="忘记密码" :visible.sync="showForgetPwdModal" width="380px">
      <el-form :model="resetPwdForm">
        <el-form-item>
          <el-input v-model="resetPwdForm.email" autocomplete="off" placeholder="请输入重置账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="resetPwdForm.captcha" autocomplete="off" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="resetPwdForm.newPassword" autocomplete="off" placeholder="请输入新密码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="doResetPwd">确认重置密码</el-button>
      </div>
    </el-dialog>
    <nav>
      <img src="https://sxsimg.xiaoyuanzhao.com/static/new_main/img/logo.png?v=ca7e7ee7a9339caf25d8e12d055eb1e8" />
      <div class="menu">
        <div class="btn-single">
          <button>企业入口</button>
        </div>
        <div class="btn-set" v-if="!isLogin">
          <button @click="showLoginModal = true">登录</button>
          <button @click="showRegisterModal = true">注册</button>
        </div>
        <div class="user-operations" v-else>
          <el-dropdown placement="bottom-start" @command="dealMenuClick">
            <img :src="placeholder" />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>我的简历</el-dropdown-item>
              <el-dropdown-item>账号设置</el-dropdown-item>
              <el-dropdown-item divided command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </nav>
    <div class="header">
      <div class="map">
        <div><img :src="require('../assets/images/map.png')" /></div>
      </div>
      <div class="slogan">军工人才 <br />&nbsp;&nbsp;&nbsp;&nbsp;领先世界</div>
    </div>
    <div class="middle">
      <div class="recommend">职位推荐滚动</div>
      <div class="search-bar">
        <el-cascader
          class="search-city-picker"
          placeholder="请选择地区"
          :options="options"
          v-model="selectedOptions"
          @change="handleChangeLocation">
        </el-cascader>
        <el-input class="search-input" v-model="searchKey" placeholder="请输入搜索职位"></el-input>
        <el-button type="primary" @click="redirectToSearchResult">搜索</el-button>
      </div>
    </div>
    <div class="category">
      <div class="list">
        <el-menu 
          default-active="1-1" class="el-menu-vertical-demo" @open="handleOpenMenu" :collapse="true">
          <el-submenu index="1">
            <template slot="title">
              <i>研发技术</i>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i>产品设计</i>
          </el-menu-item>
          <el-menu-item index="3">
            <i>运营销售</i>
          </el-menu-item>
          <el-menu-item index="4">
            <i>职能赋能</i>
          </el-menu-item>
          <el-menu-item index="5">
            <i>科学研究</i>
          </el-menu-item>
          <el-menu-item index="6">
            <i>营销规划</i>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="carousel">
        <el-carousel :interval="5000" arrow="always" height="450px">
          <el-carousel-item v-for="item in carouselImgs" :key="item">
            <img :src="item"/>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="company" ref="company-holder">
      <img :src="require('../assets/images/company1.jpg')"/>
      <img :src="require('../assets/images/company2.jpg')"/>
      <img :src="require('../assets/images/company3.png')"/>
      <img :src="require('../assets/images/company4.png')"/>
      <img :src="require('../assets/images/company5.png')"/>
      <img :src="require('../assets/images/company1.jpg')"/>
      <img :src="require('../assets/images/company2.jpg')"/>
      <img :src="require('../assets/images/company3.png')"/>
      <img :src="require('../assets/images/company4.png')"/>
      <img :src="require('../assets/images/company5.png')"/>
      <img :src="require('../assets/images/company1.jpg')"/>
      <img :src="require('../assets/images/company2.jpg')"/>
      <img :src="require('../assets/images/company3.png')"/>
      <img :src="require('../assets/images/company4.png')"/>
      <img :src="require('../assets/images/company5.png')"/>
    </div>
    <div class="occupation-card">
      <div class="container">
        <div class="desc">
          <h3>Web 前端架构师</h3>
          <h5>FESCO Adecco - 企业服务,教育/培训</h5>
          <div class="meta">
            <span>2天/周</span>
            <span>100-150/天</span>
            <span>上海</span>
          </div>
        </div>
        <div class="logo">
          <img :src="require('../assets/images/occupation1.png')" />
        </div>
      </div>
      <div class="container">
        <div class="desc">
          <h3>Web 前端架构师</h3>
          <h5>FESCO Adecco - 企业服务,教育/培训</h5>
          <div class="meta">
            <span>2天/周</span>
            <span>100-150/天</span>
            <span>上海</span>
          </div>
        </div>
        <div class="logo">
          <img :src="require('../assets/images/occupation2.png')" />
        </div>
      </div>
    </div>
    <div class="occupation-card">
      <div class="container">
        <div class="desc">
          <h3>Web 前端架构师</h3>
          <h5>FESCO Adecco - 企业服务,教育/培训</h5>
          <div class="meta">
            <span>2天/周</span>
            <span>100-150/天</span>
            <span>上海</span>
          </div>
        </div>
        <div class="logo">
          <img :src="require('../assets/images/occupation3.png')" />
        </div>
      </div>
      <div class="container">
        <div class="desc">
          <h3>Web 前端架构师</h3>
          <h5>FESCO Adecco - 企业服务,教育/培训</h5>
          <div class="meta">
            <span>2天/周</span>
            <span>100-150/天</span>
            <span>上海</span>
          </div>
        </div>
        <div class="logo">
          <img :src="require('../assets/images/occupation4.jpg')" />
        </div>
      </div>
    </div>
    <div class="occupation-card">
      <div class="container">
        <div class="desc">
          <h3>Web 前端架构师</h3>
          <h5>FESCO Adecco - 企业服务,教育/培训</h5>
          <div class="meta">
            <span>2天/周</span>
            <span>100-150/天</span>
            <span>上海</span>
          </div>
        </div>
        <div class="logo">
          <img :src="require('../assets/images/occupation5.png')" />
        </div>
      </div>
      <div class="container">
        <div class="desc">
          <h3>Web 前端架构师</h3>
          <h5>FESCO Adecco - 企业服务,教育/培训</h5>
          <div class="meta">
            <span>2天/周</span>
            <span>100-150/天</span>
            <span>上海</span>
          </div>
        </div>
        <div class="logo">
          <img :src="require('../assets/images/occupation6.jpg')" />
        </div>
      </div>
    </div>
    <div class="occupation-card">
      <div class="container">
        <div class="desc">
          <h3>Web 前端架构师</h3>
          <h5>FESCO Adecco - 企业服务,教育/培训</h5>
          <div class="meta">
            <span>2天/周</span>
            <span>100-150/天</span>
            <span>上海</span>
          </div>
        </div>
        <div class="logo">
          <img :src="require('../assets/images/occupation7.jpg')" />
        </div>
      </div>
      <div class="container">
        <div class="desc">
          <h3>Web 前端架构师</h3>
          <h5>FESCO Adecco - 企业服务,教育/培训</h5>
          <div class="meta">
            <span>2天/周</span>
            <span>100-150/天</span>
            <span>上海</span>
          </div>
        </div>
        <div class="logo">
          <img :src="require('../assets/images/occupation8.png')" />
        </div>
      </div>
    </div>
    <div class="occupation-card">
      <div class="container">
        <div class="desc">
          <h3>Web 前端架构师</h3>
          <h5>FESCO Adecco - 企业服务,教育/培训</h5>
          <div class="meta">
            <span>2天/周</span>
            <span>100-150/天</span>
            <span>上海</span>
          </div>
        </div>
        <div class="logo">
          <img :src="require('../assets/images/occupation9.png')" />
        </div>
      </div>
      <div class="container">
        <div class="desc">
          <h3>Web 前端架构师</h3>
          <h5>FESCO Adecco - 企业服务,教育/培训</h5>
          <div class="meta">
            <span>2天/周</span>
            <span>100-150/天</span>
            <span>上海</span>
          </div>
        </div>
        <div class="logo">
          <img :src="require('../assets/images/occupation10.jpg')" />
        </div>
      </div>
    </div>
    <customized-footer />
  </div>
</template>

<script>
import placeholder from 'assets/images/placeholder.jpg';
import CustomizedFooter from 'components/customized-footer.vue';

export default {
  name: 'home',
  components: {
    CustomizedFooter
  },
  data() {
    return {
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
    margin 0
    .dialog-footer
      button
        width 100%
    nav
      z-index 100
      background-color white
      box-shadow 0px 1px 9px #ccc
      width 100%
      position fixed
      top 0
      display flex
      flex-direction row
      height 70px
      align-content center
      align-items center
      img
        height 40
        margin 0 20px
      .menu
        display flex
        flex 1
        height 100%
        justify-content flex-end
        align-items center
        .user-operations
          cursor pointer
          img
            width 50px
            height 50px
            border-radius 50%
        .btn-set
          margin 0 15px
          button 
            cursor pointer
            font-size 15px
            background none
            border none
            padding 0 13px
            border-right solid 1px lightgrey
            &:last-child
              border none
        .btn-single
          margin 0 10px
          button 
            padding 10px 20px
            border solid 1px lightgrey
            font-size 14px
    .header
      border-bottom: solid 1px darkgray
      height 700px
      display flex
      flex-direction row
      justify-content center
      align-items center
      .map
        flex 3
        display flex
        flex-direction column
        top 20px
        position relative
        img 
          margin 20px
          padding 20px
          flex 1
          max-width 600px
            
      .slogan
        flex 2
        font-size 50px
        font-style italic
        line-height 2
        text-shadow 4px 4px 3px #ccc
    .middle
      display flex
      flex-direction row
      padding 20px
      align-items center
      margin auto
      max-width 1280px
      min-width 1024px
      border solid 1px #eeee
      margin 20px auto
      .recommend
        width 250px
        margin-right 20px
        border solid 1px lightgray
        height 50px
        display flex
        align-items center
        justify-content center
      .search-bar
        flex 1
        display flex
        flex-direction row
        height 55px
        .search-city-picker
          font-size 17px
          line-height 55px
          width 180px
          margin-right 20px
        .search-input
          flex 1
        button
          font-size 21px
          width 150px
          margin-left 20px
    .category
      margin 20px auto
      max-width 1280px
      min-width 1024px
      display flex
      flex-direction row
      margin 20px auto
      padding 20px
      border solid 1px #eee
    .company
      width 100%
      height 170px
      display flex
      flex--direction row
      justify-content space-evenly
      align-items center
      border: solid 1px #eee
      margin: 20px 0
      overflow scroll
      img 
        height 150px
        margin 0 10px
    .occupation-card
      display flex
      flex-direction row
      margin auto
      max-width 1280px
      min-width 1024px
      flex-wrap wrap
      div.container
        display flex
        flex 1
        padding 10px
        align-items center
        flex-direction row
        margin 10px
        border solid 1px lightgray
        .desc
          flex 1
          display flex
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
        
</style>

<style lang="stylus">
.home
  .middle
    .search-bar
      .search-city-picker, .search-input
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