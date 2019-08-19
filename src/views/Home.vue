<template>
  <div class="home">
    <div class="joblist-search">
      <el-select v-model="value" style="width:77px;height:44px;font-size:14px;">
        <el-option label="上海" value></el-option>
      </el-select>
      <span class="joblist-after"></span>
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
      <span class="joblist-after"></span>
      <el-input style="width:478px;" placeholder="请输入内容"></el-input>
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
      <span style="font-size:12px;color:#7d8dcd">哈哈哈 嘿嘿嘿 产品经理 运营 JAVA PHP</span>
    </div>
    <div class="carousel">
      <el-carousel height="307px" :interval="5000">
        <el-carousel-item v-for="item in carouselImgs" :key="item">
          <img style="width:802px" :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="text-align:left;color:#455379;font-size:14px;margin:10px 0 0 15px">热门企业</div>
    <div class="company" ref="company-holder">
      <img @click="desc" :src="require('../assets/images/company2.jpg')" />
      <img :src="require('../assets/images/company3.png')" />
      <img :src="require('../assets/images/company4.png')" />
      <img :src="require('../assets/images/company5.png')" />
      <img :src="require('../assets/images/company1.jpg')" />
      <img :src="require('../assets/images/company2.jpg')" />
      <img :src="require('../assets/images/company3.png')" />
      <img :src="require('../assets/images/company4.png')" />
      <img :src="require('../assets/images/company5.png')" />
      <img :src="require('../assets/images/company1.jpg')" />
      <img :src="require('../assets/images/company2.jpg')" />
      <img :src="require('../assets/images/company3.png')" />
      <img :src="require('../assets/images/company4.png')" />
      <img :src="require('../assets/images/company5.png')" />
    </div>
    <div class="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="为你推荐" name="first" v-if="recommend">
          <div class="demo">
            <div class="desc">
              <div class="desc-first">
                <span>产品经理</span>
                <span>4-5k</span>
              </div>
              <div class="desc-second">上海 徐汇区 | 1-3年 | 本科</div>
              <div class="line"></div>
              <div class="desc-third">
                <img @click="desc" style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
                <div class="third-content">
                  <span>迪卡侬</span>
                  <span>50-100人 | 电子商务，文化...</span>
                </div>
              </div>
            </div>
          </div>
          <div class="demo">
            <div class="desc">
              <div class="desc-first">
                <span>产品经理</span>
                <span>4-5k</span>
              </div>
              <div class="desc-second">上海 徐汇区 | 1-3年 | 本科</div>
              <div class="line"></div>
              <div class="desc-third">
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
                <div class="third-content">
                  <span>迪卡侬</span>
                  <span>50-100人 | 电子商务，文化...</span>
                </div>
              </div>
            </div>
          </div>
          <div class="demo">
            <div class="desc">
              <div class="desc-first">
                <span>产品经理</span>
                <span>4-5k</span>
              </div>
              <div class="desc-second">上海 徐汇区 | 1-3年 | 本科</div>
              <div class="line"></div>
              <div class="desc-third">
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
                <div class="third-content">
                  <span>迪卡侬</span>
                  <span>50-100人 | 电子商务，文化...</span>
                </div>
              </div>
            </div>
          </div>
          <div class="demo">
            <div class="desc">
              <div class="desc-first">
                <span>产品经理</span>
                <span>4-5k</span>
              </div>
              <div class="desc-second">上海 徐汇区 | 1-3年 | 本科</div>
              <div class="line"></div>
              <div class="desc-third">
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
                <div class="third-content">
                  <span>迪卡侬</span>
                  <span>50-100人 | 电子商务，文化...</span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="热门职位" name="second">
          <div class="demo">
            <div class="desc">
              <div class="desc-first">
                <span>产品经理</span>
                <span>4-5k</span>
              </div>
              <div class="desc-second">上海 徐汇区 | 1-3年 | 本科</div>
              <div class="line"></div>
              <div class="desc-third">
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
                <div class="third-content">
                  <span>迪卡侬</span>
                  <span>50-100人 | 电子商务，文化...</span>
                </div>
              </div>
            </div>
          </div>
          <div class="demo">
            <div class="desc">
              <div class="desc-first">
                <span>产品经理</span>
                <span>4-5k</span>
              </div>
              <div class="desc-second">上海 徐汇区 | 1-3年 | 本科</div>
              <div class="line"></div>
              <div class="desc-third">
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
                <div class="third-content">
                  <span>迪卡侬</span>
                  <span>50-100人 | 电子商务，文化...</span>
                </div>
              </div>
            </div>
          </div>
          <div class="demo">
            <div class="desc">
              <div class="desc-first">
                <span>产品经理</span>
                <span>4-5k</span>
              </div>
              <div class="desc-second">上海 徐汇区 | 1-3年 | 本科</div>
              <div class="line"></div>
              <div class="desc-third">
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
                <div class="third-content">
                  <span>迪卡侬</span>
                  <span>50-100人 | 电子商务，文化...</span>
                </div>
              </div>
            </div>
          </div>
          <div class="demo">
            <div class="desc">
              <div class="desc-first">
                <span>产品经理</span>
                <span>4-5k</span>
              </div>
              <div class="desc-second">上海 徐汇区 | 1-3年 | 本科</div>
              <div class="line"></div>
              <div class="desc-third">
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
                <img style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
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
            <div class="desc">
              <div class="desc-first">
                <span>产品经理</span>
                <span>4-5k</span>
              </div>
              <div class="desc-second">上海 徐汇区 | 1-3年 | 本科</div>
              <div class="line"></div>
              <div class="desc-third">
                <img @click="desc" style="width:50px;margin:10px 0 0 5px" :src="require('../assets/images/company1.jpg')" />
                <div class="third-content">
                  <span>迪卡侬</span>
                  <span>50-100人 | 电子商务，文化...</span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="button">
      <el-button plain  @click="search" style="width:210px;height:43px;font-size:14px">查看更多</el-button>
    </div>
    
  </div>
</template>

<script>
// import placeholder from 'assets/images/placeholder.jpg';

export default {
  name: "home",
  data() {
    return {
      recommend:true,
      activeName:"first",
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
     handleClick() {

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
  created() {
    if(this.recommend == false) {
        this.activeName = 'second'
    }else{
        this.activeName = 'first';
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
    .joblist-search
      width 802px
      height 44px
      background white
      .joblist-after                  
        border 0.5px solid #455379
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
      overflow-y hidden
      overflow-x:hidden
    .company img
      height 100px
      padding 0 15px 0 0 
    .tabs
      .el-tabs
        margin 0 0 0 7px 
        .demo
          display flex
          flex-direction row
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
</style>
