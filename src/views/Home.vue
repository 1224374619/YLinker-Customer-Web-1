<template>
  <div class="home">
    <nav>
      <img src="https://sxsimg.xiaoyuanzhao.com/static/new_main/img/logo.png?v=ca7e7ee7a9339caf25d8e12d055eb1e8" />
      <div class="menu">
        <div class="btn-set">
          <button>登陆</button>
          <button>注册</button>
        </div>
        <div class="btn-single">
          <button>企业入口</button>
        </div>
      </div>
    </nav>
    <div class="header">
      <div class="map">
        <div><img :src="placeholder" /></div>
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
          @change="handleChange">
        </el-cascader>
        <el-input class="search-input" v-model="searchKey" placeholder="请输入搜索职位"></el-input>
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <div class="category">
      <div class="list">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="true">
          <el-submenu index="1">
            <template slot="title">
              <i>职位大类别一</i>
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
            <i>职位大类别二</i>
          </el-menu-item>
          <el-menu-item index="3">
            <i>职位大类别三</i>
          </el-menu-item>
          <el-menu-item index="4">
            <i>职位大类别四</i>
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
      <img :src="placeholder"/>
      <img :src="placeholder"/>
      <img :src="placeholder"/>
      <img :src="placeholder"/>
      <img :src="placeholder"/>
      <img :src="placeholder"/>
      <img :src="placeholder"/>
      <img :src="placeholder"/>
      <img :src="placeholder"/>
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
          <img :src="placeholder" />
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
          <img :src="placeholder" />
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
          <img :src="placeholder" />
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
          <img :src="placeholder" />
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
          <img :src="placeholder" />
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
          <img :src="placeholder" />
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
          <img :src="placeholder" />
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
          <img :src="placeholder" />
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
          <img :src="placeholder" />
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
          <img :src="placeholder" />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="appendix">
        <div>
          <span>友情链接</span>
          <ul>
            <li>占位字符</li>
            <li>占位字符</li>
            <li>占位字符</li>
            <li>占位字符</li>
          </ul>
        </div>
        <div>
          <span>企业服务</span>
          <ul>
            <li>占位字符</li>
            <li>占位字符</li>
            <li>占位字符</li>
            <li>占位字符</li>
          </ul>
        </div>
        <div>
          <span>关于我们</span>
          <ul>
            <li>占位字符</li>
            <li>占位字符</li>
            <li>占位字符</li>
            <li>占位字符</li>
          </ul>
        </div>
        <div>
          <span>联系我们</span>
          <ul>
            <li>占位字符</li>
            <li>占位字符</li>
            <li>占位字符</li>
            <li>占位字符</li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <p>xxxxxx有限责任公司版权所有 中国领先的职业招聘平台</p>
        <p>©2017 实习僧 | 沪ICP备xxxxxxx号-1</p>
      </div>
    </div>
  </div>
</template>

<script>
import placeholder from '../assets/images/placeholder.jpg';

export default {
  name: 'home',
  data() {
    return {
      placeholder,
      carouselImgs: [
        placeholder, placeholder
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
    companyScrolling() {
      const holder = this.$refs['company-holder'];
      if (document.body.clientWidth === (holder.scrollWidth - holder.scrollLeft))
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
        .btn-set
          margin 0 10px
          button 
            font-size 15px
            background none
            border none
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
        div 
          margin 20px
          padding 20px
          border solid 1px #000
          flex 1
      .slogan
        flex 2
        font-size 50px
        font-style italic
        line-height 2
    .middle
      display flex
      flex-direction row
      padding 20px
      align-items center
      margin auto
      max-width 1280px
      min-width 1024px
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
    .footer
      background-color #fafafa
      margin-top 70px
      .appendix
        display flex
        max-width 1280px
        min-width 1024px
        padding 70px 150px 20px
        flex-direction row
        align-items center
        justify-content space-between
        div
          span
            font-size 20px
            font-weight 500
          ul
            list-style-type none
            padding 0
            text-align left
            li
              margin 10px 0
              font-size 16px
              color #666
      .copyright
        font-size 12px
        color #999
        padding 10px 0
          
    
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
          font-size 18px
    .carousel
      flex 1
      margin-left 20px
  .company
    &::-webkit-scrollbar 
      display none
</style>