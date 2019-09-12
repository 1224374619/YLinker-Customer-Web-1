<template>
  <div class="home">
    <el-dialog
        class="dialog"
        :visible.sync="dialogVisible"
        style="width:1150px;margin-left:15%"
        :before-close="handleClose">
        <div class="dialog-title">
            <span>热门城市</span>
        </div>
        <div class="dialog-city-first">
            <span>北京</span>
            <span>天津</span>
            <span>大连</span>
            <span>上海</span>
            <span>南京</span>
            <span>苏州</span>
        </div>
        <div class="dialog-city-second">
            <span>杭州</span>
            <span>武汉</span>
            <span>广州</span>
            <span>深圳</span>
            <span>重庆</span>
            <span>成都</span>
        </div>
        <div class="dialog-province">
            <span>按省份选择</span>
        </div>
        <div class="dialog-cascader">
            <el-tooltip class="item" effect="light"  placement="bottom-start">
              <el-input
                placeholder="请选择省份"
                suffix-icon="el-icon-arrow-down"
                v-model="cityButton"
               >
              </el-input>
              <div style="width:510px" slot="content"><span class="spanCity" @click="citys(item)" style="float:left;padding:10px 0 10px 10px" v-for="item in city" :key="item">{{item.value}}</span></div>
            </el-tooltip>
            <el-tooltip  class="item" effect="light"  placement="bottom-end">
              <el-input
                placeholder="请选择城市"
                suffix-icon="el-icon-arrow-down"
                v-model="cityButton"
                style="margin:0 0 0 100px"
               >
              </el-input>
              <div style="width:510px" slot="content"><span class="spanCity" @click="citys(item)" style="float:left;padding:10px 0 10px 10px" v-for="item in city" :key="item">{{item.value}}</span></div>
            </el-tooltip>
        </div>
        <div style="height:220px"></div>
    </el-dialog>      
    <div class="joblist-search">
     <el-input v-model="value" @focus="next"  suffix-icon="el-icon-arrow-down" style="width:77px;height:44px;font-size:14px;"></el-input>
      <span class="joblist-after"></span>
      <el-select
        slot="prepend"
        v-model="company"
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
      <span class="joblist-after"></span>
      <el-input v-model="searchContent" style="width:477px;" placeholder="请输入内容"></el-input>
      <el-button
        class="search-button"
        style="border-radius:0 2px 2px 0"
        type="primary"
        @click="search"
        icon="el-icon-search"
      >搜索</el-button>
    </div>
    <div style="text-align:left;margin:4px 0 0 15px">
      <span style="font-size:12px;color:#617dcb">热门搜索：</span>
      <span style="font-size:12px;color:#7d8dcd" ><a href="#" style="padding:0 0 0 5px;text-decoration:none" v-for="item in keywordList" :key="item">{{item.content}}</a></span>
    </div>
    <div class="carousel">
      <el-carousel height="307px" :interval="5000">
        <el-carousel-item v-for="item in carouselImgs" :key="item">
          <img style="width:802px" :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="text-align:left;color:#455379;font-size:14px;margin:10px 0 0 15px">热门企业</div>
    <div class="company">
      <vue-seamless-scroll :data="imgList" :class-option="optionLeft" class="seamless-warp2">
              <img v-for="item in imgList" :src="item.idView"  class="banner_img"/>
      </vue-seamless-scroll>
    </div>
    <div class="tabs">
      <el-tabs v-model="activeName">
        <el-tab-pane label="为你推荐" name="first" v-if="recommend">
          <div class="demo">
            <div class="desc" v-for="(list,index) in listRecommend" :key="index">
              <div class="desc-first">
                <span>{{list.positionName}}</span>
                <span>{{list.salaryMin}}-{{list.salaryMax}}k</span>
              </div>
              <div class="desc-second">{{list.positionCatalog}} | {{list.workAgeMin}}-{{list.workAgeMax}}年 | {{list.degreeMin}}</div>
              <div class="line"></div>
              <div class="desc-third">
                <img
                  @click="desc"
                  style="width:50px;margin:10px 0 0 5px"
                  :src="require('../assets/images/company1.jpg')"
                />
                <div class="third-content">
                  <span>{{list.company.companyName}}</span>
                  <span>{{list.company.size}} | {{list.company.industry}}</span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="热门职位" name="second">
          <div class="demo" v-for="(list,index) in hotpositionList" :key="index">
            <div class="desc">
              <div class="desc-first">
                <span>{{list.positionName}}</span>
                <span>{{list.salaryMax}}-{{list.salaryMin}}k</span>
              </div>
              <div class="desc-second">{{list.positionCatalog}} | {{list.workAgeMax}}-{{list.workAgeMin}}年 | {{list.degreeMin}}</div>
              <div class="line"></div>
              <div class="desc-third">
                <img
                  style="width:50px;margin:10px 0 0 5px"
                  :src="require('../assets/images/company1.jpg')"
                />
                <div class="third-content">
                  <span>迪卡侬</span>
                  <span>50-100人 | 电子商务，文化...</span>
                </div>
              </div>
            </div>
            <div class="desc">
              <div class="desc-first">
                <span>产品经理</span>
                <span>4-5k</span>
              </div>
              <div class="desc-second">上海 徐汇区 | 1-3年 | 本科</div>
              <div class="line"></div>
              <div class="desc-third">
                <img
                  style="width:50px;margin:10px 0 0 5px"
                  :src="require('../assets/images/company1.jpg')"
                />
                <div class="third-content">
                  <span>迪卡侬</span>
                  <span>50-100人 | 电子商务，文化...</span>
                </div>
              </div>
            </div>
            <div class="desc">
              <div class="desc-first">
                <span>产品经理</span>
                <span>4-5k</span>
              </div>
              <div class="desc-second">上海 徐汇区 | 1-3年 | 本科</div>
              <div class="line"></div>
              <div class="desc-third">
                <img
                  style="width:50px;margin:10px 0 0 5px"
                  :src="require('../assets/images/company1.jpg')"
                />
                <div class="third-content">
                  <span>迪卡侬</span>
                  <span>50-100人 | 电子商务，文化...</span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="最新职位" name="third">
          <div class="demo">
            <div class="desc" v-for="(list,index) in newpositionList" :key="index">
              <div class="desc-first">
                <span>{{list.positionName}}</span>
                <span>{{list.salaryMin}}-{{list.salaryMax}}k</span>
              </div>
              <div class="desc-second">{{list.positionCatalog}} | {{list.workAgeMin}}-{{list.workAgeMax}}年 | {{list.degreeMin}}</div>
              <div class="line"></div>
              <div class="desc-third">
                <img
                  @click="desc"
                  style="width:50px;margin:10px 0 0 5px"
                  :src="require('../assets/images/company1.jpg')"
                />
                <div class="third-content">
                  <span>{{list.company.companyName}}</span>
                  <span>{{list.company.size}} | {{list.company.industry}}</span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="button">
      <el-button plain @click="search" style="width:210px;height:43px;font-size:14px">查看更多</el-button>
    </div>
  </div>
</template>

<script>
// import placeholder from 'assets/images/placeholder.jpg';

export default {
  name: "home",
  data() {
    return {
      searchContent:'',
      animate:false,
      listRecommend:[],
      recommend: true,
      activeName: "first",
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
      city:[
        {
          value:'北京'
        },
        {
          value:'上海'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },

        {
          value:'北京'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },
        {
          value:'北京'
        },
        
      ],
      carouselImgs: [
        require("../assets/images/loop1.jpg"),
        require("../assets/images/loop2.png")
      ],
      //热门企业
      imgList: [
          {id: 0, idView: require('../assets/images/company3.png')},
          {id: 1, idView: require('../assets/images/company1.jpg')},
          {id: 2, idView: require('../assets/images/company2.jpg')},
          {id: 3, idView: require('../assets/images/company4.png')},
          {id: 4, idView: require('../assets/images/company5.png')},
          {id: 5, idView: require('../assets/images/company3.png')},
          {id: 6, idView: require('../assets/images/company1.jpg')},
          {id: 7, idView: require('../assets/images/company2.jpg')},
          {id: 8, idView: require('../assets/images/company4.png')},
          {id: 9, idView: require('../assets/images/company5.png')},
        ],
      keywordList:[{content:'哈哈哈'},{content:'哈哈哈'},{content:'哈哈哈'}],
      hotpositionList:[],
      newpositionList:[]
    };
  },
  computed: {
      optionLeft () {
          return {
                  direction: 2,
                  limitMoveNum: 4
              }
      }
  },
  methods: {
    next() {
        this.dialogVisible = true
      },
      close() {
          this.dialogVisible = false
      },
    // handleClick(e) {
    //   if (e.index == 1) {
    //   }
    //   this.$http.get("/home/recommended/position").then(res => {
    //     console.log("22222222222");
    //     console.log(res.data);
    //   });
    // },
    //轮播图
    carousel() {
      this.$http.get("/logout").then(res => {
         if (res.data.code == 200) {
          //  console.log(res)
          }
      });
    },
    //tabs--推荐
    recommendation() {
       this.$http.get("/home/recommended/position").then(res => {
         if (res.data.code == 200) {
          //  console.log(res.data.data)
           this.listRecommend = res.data.data
          }
      });
    },
    //tabs--最新
    new() {
       this.$http.get("/home/recent/position").then(res => {
         if (res.data.code == 200) {
          //  console.log(res.data.data)
           this.newpositionList = res.data.data
          }
      });
    },
    //热门企业
    hotcompany () {
       this.$http.get("/popular/company").then(res => {
         if (res.data.code == 200) {
              console.log(res)
          }
      });
    },
    //热门词
    hotkeyword () {
       this.$http.get("/popular/keyword").then(res => {
         if (res.data.code == 200) {
              // 
              // console.log(res)
          }
      });
    },
    //热门职位
    hotposition () {
       this.$http.get("/popular/position").then(res => {
         if (res.data.code == 200) {
              // 
              // console.log(res)
          }
      });
    },
    handleOpenMenu() {},
    handleChangeLocation() {},
    doLogin() {
      // request;
      this.showLoginModal = false;
      this.isLogin = true;
    },
    search() {
      this.$router.push({ path: "/joblist" });
    },
    desc() {
      this.$router.push({ path: "/position" });
    },
    // dealMenuClick(command) {
    //   if (command === "logout") {
    //     this.isLogin = false;
    //   }
    // },
    doLogot() {
      this.isLogin = false;
    },
    doRegister() {},
    doResetPwd() {},
    redirectToSearchResult() {
      this.$router.push({ path: "/search" });
    },
    // companyScrolling() {
    //   const holder = this.$refs["company-holder"];
    //   if (
    //     holder &&
    //     document.body.clientWidth === holder.scrollWidth - holder.scrollLeft
    //   )
    //     holder.scrollLeft = 0;
    //   holder.scrollLeft += 1;
    //   requestAnimationFrame(this.companyScrolling);
    // },
  },
  created() {
    this.hotcompany();
    this.hotkeyword();
    this.hotposition();
    this.new();
    this.recommendation();
    if (this.recommend == false) {
      this.activeName = "second";
    } else {
      this.activeName = "first";
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
    margin 90px auto 0 
    .dialog
      display flex
      flex-direction column
      .el-icon-close:before
        font-size 24px
      .dialog-title span
        font-size 14.5px
        font-family PingFangSC-Regular
        color #959595
        float left
        margin -40px 0 0 0
      .dialog-city-first
        font-size 14px
        font-family PingFangSC-Regular
        color #1f368d
        float left
        margin -10px 0 0 0
      .dialog-city-first span
        padding 0 40px 0 0  
      .dialog-city-second
        font-size 14px
        font-family PingFangSC-Regular
        color #1f368d
        text-align left 
        margin 25px 0 0 0
      .dialog-city-second span
        padding 0 40px 0 0
      .dialog-province span
        font-size 14.5px
        font-family PingFangSC-Regular
        color #909090
        float left
        margin 18px 0 0 0
      .dialog-cascader
        display flex
        flex-direction row
        float left
        margin 50px 0 0 -73px
    .joblist-search
      width 802px
      height 44px
      background white
      .joblist-after                  
        border 0.5px solid #dbdbdb
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
      border: solid 1px #eee
      margin: 10px auto
      overflow hidden
    .company img
      height 100px
      padding 0 15px 0 0 
    .tabs
      .el-tabs
        margin 0 0 0 7px 
        .demo
          display flex
          flex-direction row
          flex-wrap  wrap
          .desc:hover
            background #f7f7f7
          .desc
            width 258px
            height 143px
            text-align left
            margin 3px 3px 0 0 
            background white
            .desc-first
              display flex
              flex-direction row
              justify-content space-between
            .desc-first span:nth-child(1)
              margin 15px 0 0 5px
              color #61687c
              font-size 14px
            .desc-first span:nth-child(2)
              margin 15px 5px 0 0
              color #ff7a1a
              font-size 14px
            .desc-second
              text-align left 
              margin 5px 0 0 5px
              font-size 12px
              color #61687c
            .line
              width 250px
              border 0.5px solid #f5F5F5
              margin 10px 0 0 5px
            .desc-third 
              display flex
              flex-direction row
              .third-content
                display flex
                flex-direction column
                margin 0 0 0 10px
              .third-content span:nth-child(1)
                margin 10px 0 0 0
                color #4a90e2
              .third-content span:nth-child(2)
                margin 10px 0 0 0
                color #909090
                font-size 12px
    .button
      margin 34px 0 20px 0             
</style>

<style lang="stylus">
 .el-tabs__nav-wrap:after
   background-color #f0f0f0
  a  
    color #1f368d
  a:active
    color #617dcb
  a:hover
    color #7d8dcd  
  .seamless-warp2 
    overflow hidden
    width 1500px
  .banner_img
    height 100px 
    width 100px        
</style>
