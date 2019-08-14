<template>
  <div class="home">
    <div class="joblist-search">
      <el-select v-model="value" style="width:77px;height:44px;font-size:14px;">
        <el-option label="上海" value></el-option>
      </el-select>
      <span style="font-size:20px">|</span>
      <el-select
        slot="prepend"
        v-model="company"
        @change="getVendorId"
        style="width:77px;height:44px;font-size:14px"
        :label-in-value="true"
      >
        <el-option
          v-for="item in perList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <span style="font-size:20px">|</span>
      <el-input style="width:470px;" placeholder="请输入内容"></el-input>
      <el-button
        class="search-button"
        style="border-radius:0 2px 2px 0"
        type="primary"
        icon="el-icon-search"
      >搜索</el-button>
    </div>
    <div style="text-align:left;margin:4px 0 0 15px">
      <span style="font-size:12px;color:#617dcb">热门搜索：</span>
      <span style="font-size:12px;color:#7d8dcd">哈哈哈 嘿嘿嘿 产品经理 运营 JAVA PHP</span>
    </div>
    <div class="carousel" style="border:1px solid red">
      <el-carousel height="307px" :interval="5000" >
        <el-carousel-item v-for="item in carouselImgs" :key="item">
          <img style="width:802px" :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="company" ref="company-holder">
        <div class="block">
          <span class="demonstration">默认</span>
          <el-image :src="src"></el-image>
        </div>
        
        <!-- <img :src="require('../assets/images/company2.jpg')"/>
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
        <img :src="require('../assets/images/company5.png')"/> -->
      </div>
  </div>
</template>

<script>
// import placeholder from 'assets/images/placeholder.jpg';

export default {
  name: "home",
  data() {
    return {
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      value: "上海",
      company: "职位",
      dialogVisible: false,
      perList: [
        {
          value: "111",
          label: "职位"
        },
        {
          value: "222",
          label: "公司"
        }
      ],
      carouselImgs: [
        require('../assets/images/loop1.jpg'),
        require('../assets/images/loop2.png'),
        require('../assets/images/loop1.jpg'),
      ],
    };
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
      if (command === "logout") {
        this.isLogin = false;
      }
    },
    doLogot() {
      this.isLogin = false;
    },
    doRegister() {},
    doResetPwd() {},
    redirectToSearchResult() {
      this.$router.push({ path: "/search" });
    },
    companyScrolling() {
      const holder = this.$refs["company-holder"];
      if (
        holder &&
        document.body.clientWidth === holder.scrollWidth - holder.scrollLeft
      )
        holder.scrollLeft = 0;
      holder.scrollLeft += 1;
      requestAnimationFrame(this.companyScrolling);
    }
  },
  mounted() {
    this.companyScrolling();
  }
};
</script>

<style lang="stylus">
  .home
    width 802px
    border 1px solid red
    margin 120px 0 0 0
    .joblist-search
      width 802px
      height 44px
      background white
      .el-icon-search:before
        color white
        font-size 17px 
      .el-input__inner
        border 0px solid red
      .search-button
        width 167px
        height 44px
        font-size 12px
        color white
      .search-button:hover
        border-color #7d8dcd 
    .carousel
      margin 3px 0 0 0
    .company
      display flex
      flex-direction row
      justify-content space-evenly
      align-items center
      border: solid 1px #eee
      margin: 10px auto
      overflow scroll
    .company img 
      height 100px
      padding 0 15px 0 0            
</style>

