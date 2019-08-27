<template>
  <div class="personal">
    <div class="personal-left">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="personal-tabs" v-if="showTabs">
        <el-tab-pane :label="`投递记录（${throwNum}）`" name="first">
          <div style="width:630px" class="hover"  v-for="(list,index) in submittedList" :key="index">
            <div class="tabs-first">
              <span>{{list.positionName}}</span>
              <span>{{list.salaryMin}}-{{list.salaryMax}}k</span>
            </div>
            <div class="tabs-second">
              <span>{{list.companyName}}</span>
              <span>上海 徐汇区 | {{list.workAgeMin}}-{{list.workAgeMax}}年 | {{list.degreeMin}}</span>
              <span>
                {{list.publishedTime	}}
                <el-tooltip
                  style="padding-left:19px;font-size:14px;color:#909090"
                  class="item"
                  effect="dark"
                  placement="top-end"
                >
                  <div slot="content">
                    多行信息
                    <br />第二行信息
                  </div>
                  <span>被查看</span>
                </el-tooltip>
              </span>
            </div>
            <div class="tabs-line"></div>
          </div>
          <div class="tabs-pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            ></el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`我的收藏（${collectNum}）`" name="second">
          <div style="width:630px;" class="hover" v-for="(list,index) in favoriteList" :key="index">
            <div class="tabs-first">
              <span>{{list.positionName}}</span>
              <span>{{list.salaryMin}}-{{list.salaryMax}}k</span>
            </div>
            <div class="collect-second">
              <span class="collect-company">迪卡侬</span>
              <span class="collect-city">上海 徐汇区 | {{list.workAgeMin}}-{{list.workAgeMax}}年 | {{list.degreeMin}}</span>
              <span class="collect-button">
                <el-button class="button" type="primary" @click="iscancel" size="mini">取消收藏</el-button>
              </span>
            </div>
            <div class="collect-line"></div>
          </div>
          <div class="collect-pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            ></el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div style="font-size:15px;line-height:500px" v-if="isshowTabs">你还没有任何投递记录呦~~</div>
    </div>
    <div class="personal-right">
      <div class="right-nav">
        <span class="span-hover" @click="edit">编辑</span>
        <img @click="toPerson" :src="require('../assets/images/tou.png')" />
        <span class="span-name">
          李康
          <img :src="require('../assets/images/xingbie.png')" />
        </span>
        <div v-if="showInfor" class="infor">
        <span class="span-city">现居{{city}} | {{workAge}}工作经验 | {{age}}</span>
          <span class="span-type">{{state}}|{{workState}}</span>
        </div>
        <div v-if="showWarn" style="font-size:14px;padding:10px 0 10px 0">个人信息未填写完整，快快来补充吧</div>
      </div>
      <div class="right-footer">
        <div class="footer-nav">
          <span>推荐职位</span>
          <span @click="next">查看更多 》</span>
        </div>
        <div v-for="list in searchedList" :key="list">
          <div class="footer-article">
            <span>{{list.postion}}</span>
            <span>{{list.salaryMin}}-{{list.salaryMax}}k</span>
          </div>
          <div class="footer-foot">
            <span>{{list.companyName}}</span>
            <span>上海长宁区</span>
          </div>
          <div class="footer-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datacenterBus from '../apis/datacenterBus.js';
export default {
  name: 'personal',
  components: {

  },
  data() {
    return {
        throwNum:23,
        collectNum:4,
        activeName:'first',
        showInfor:true,
        showWarn:false,
        showTabs:true,
        isshowTabs:false,
        submittedList:[{
          companyName:'迪卡侬',
          degreeMin:'本科',
          positionName:'产品经理',
          publishedTime:'今天 15:30',
          salaryMax:'5',
          salaryMin:'3',
          workAgeMax:'3',
          workAgeMin:'1'
        },
        {
          companyName:'引领',
          degreeMin:'本科',
          positionName:'产品经理',
          publishedTime:'今天 15:30',
          salaryMax:'8',
          salaryMin:'7',
          workAgeMax:'3',
          workAgeMin:'1'
        }],
        favoriteList:[{
          degreeMin:'大专',
          positionName:'前端',
          salaryMax:'9',
          salaryMin:'3',
          workAgeMax:'5',
          workAgeMin:'3'
        },{
          degreeMin:'硕士',
          positionName:'JAVA',
          salaryMax:'9',
          salaryMin:'3',
          workAgeMax:'5',
          workAgeMin:'3'
        }],
        searchedList:[{
          postion:'产品经理',
          salaryMin:'3',
          salaryMax:'5',
          companyName:'迪卡侬',
        },
        {
          postion:'前端',
          salaryMin:'3',
          salaryMax:'5',
          companyName:'迪卡侬',
        },{
          postion:'前端',
          salaryMin:'3',
          salaryMax:'5',
          companyName:'迪卡侬',
        },{
          postion:'前端',
          salaryMin:'3',
          salaryMax:'5',
          companyName:'迪卡侬',
        },{
          postion:'前端',
          salaryMin:'3',
          salaryMax:'5',
          companyName:'迪卡侬',
        }],
        city:'上海',
        workAge:'2年',
        age:'24岁',
        state:'离职',
        workState:'离职-随时到岗'
    }
  },
  methods: {
      next() {
        this.$router.push({path:'/joblist'})
      },
      toPerson() { 
           this.$router.push({path:'/inforchange'})
      },
      //编辑个人信息
      edit() {
        // datacenterBus.$emit("myFun",false)   //$emit这个方法会触发一个事件
        this.$router.push({path:'/resume'})
      },
      //获取投递过的岗位(接口需要登陆)
      submitted() {
          this.$http.get('/submitted/position').then(res => {
          if (res.data.code == 200) {
            this.submittedList = res.data.data; 
          }
        });
      },
      //获取收藏的岗位(接口需要登陆)
      favorite() {
          this.$http.get('/favorite/position').then(res => {
          if (res.data.code == 200) {
            this.favoriteList = res.data.data; 
          }
        });
      },
      //取消对岗位的收藏
      iscancel() {
          this.$http.delete(`/favorite/position/${2}`).then(res => {
          if (res.data.code == 200) {
            // this.favoriteList = res.data.data; 
          }
        });
      },
      //获取个人简讯
      brief() {
        this.$http.delete('/resume/biref').then(res => {
          if (res.data.code == 200) {
            // this.favoriteList = res.data.data; 
          }
        });
      },
      //获取推荐岗位
      searched() {
        this.$http.delete('/searched/position').then(res => {
          if (res.data.code == 200) {
            // this.favoriteList = res.data.data; 
          }
        });
      }
    },
    created() {
      this.submitted();
      this.favorite();
      this.iscancel();
      this.searched();
    },
}
</script>

<style lang="stylus"> 
  .personal
    display flex
    flex-direction row
    margin 90px 0 0 0
    width 1000px
    .hover:hover
      background  #f7f7f7
    .personal-left
      width 700px
      background white
      .personal-tabs
        margin 16px 0 0 35px
      .el-tabs__nav-wrap:after
        height 0px 
      .el-tabs__item.is-active
        color #617DCB
      .el-tabs__active-bar
        background-color #617DCB  
      .el-tabs__item
        font-size 15px 
        font-family PingFangSC-Semibold
        color #1f368d
        font-weight 550
        padding 0 25px
        width 120px
      .collect-second
        display flex
        flex-direction row 
        justify-content space-between
        margin 10px 0 15px 0
      .collect-line
        width 630px
        margin 8px 0 0 0
        border 0.5px solid #f0f0f0
      .collect-pagination
        margin 30px 0 0 0
        padding 0 0 20px 0    
      .collect-company
        font-size 16px
        margin 0 0 0 10px
        width 100px
        text-align left
      .collect-city
        margin 2px 230px 1px 0
        font-size 14px 
      .collect-button
        margin -5px 10px 0 0
        font-size 12px
        .button
          background-color #617dcb
          border 1px solid #617dcb
          margin -6px 0 0 0
        .button:focus
          background-color #d8d8d8
          border 1px solid #d8d8d8   
      .tabs-first
        display flex
        flex-direction row
        font-family PingFangSC-Regular
        font-size 15px
        margin 16px 0 0 0
        text-align left
      .tabs-first span:nth-child(1)
        color #1f368d
        margin 10px 0 0 10px
        width 120px
      .tabs-first span:nth-child(2)
        color #617dcb
        margin 10px 0 0 0
        width 120px
      .tabs-second
        display flex
        flex-direction row
        justify-content space-between
        text-align left
        margin 10px 0 0 0
      .tabs-second span:nth-child(1)
        font-size 16px 
        margin 0 0 0 10px
        width 100px
      .tabs-second span:nth-child(2)
        margin 2px 180px 7px 0
        font-size 14px
      .tabs-second span:nth-child(3)
        margin  0 10px 0 0
        font-size 14px
        color #909090
        .time
          font-size 14px
          margin 0 0 0 20px
          color #909090 
      .tabs-line
        width 630px
        margin 10px 0 0 0
        border 0.5px solid #f0f0f0
      .tabs-pagination
        margin 30px 0 0 0
        padding 0 0 20px 0
        color #1f368d  
    .personal-right
      width 290px
      margin 0 0 0 10px
      .right-nav
        display flex
        flex-direction column
        background white
        .span-hover
          font-family PingFangSC-Regular
          color #909090
          font-size 13px
          margin 23px 0 0 230px
          opacity 0
        &:hover
          .span-hover
              opacity 1  
        .span-name 
          font-family PingFangSC-Regular
          color #455379 
          font-size 14px
          margin 10px 0 0 10px
          text-align center
        .span-name img 
          width 15px
          height 15px
          margin 0 0 0 5px
        .infor
          display flex
          flex-direction column
          .span-city
            font-family PingFangSC-Regular
            color #455379 
            font-size 14px
            margin 10px 0 0 0
          .span-type
            font-family PingFangSC-Regular
            color #455379 
            font-size 14px 
            margin 10px 0 11px 0      
      .right-nav img
        font-family PingFangSC-Regular
        color #909090
        width 110px
        height 110px
        margin 0 0 0 90px
      .right-footer
        background white
        margin 10px 0 0 0
        height 374px
        .footer-nav
          display flex
          flex-direction row
          justify-content space-between
          padding 24px 0 0 0
        .footer-nav span:nth-child(1)
          font-family PingFangSC-Semibold
          color #1f368d
          font-size 14px
          margin 0 0 0 20px 
        .footer-nav span:nth-child(2)
          font-family PingFangSC-Semibold
          color #617DCB
          font-size 12px 
          margin 0 15px 0 0
        .footer-article
          display flex
          flex-direction row
          justify-content space-between
          margin 15px 0 0 0
        .footer-article span:nth-child(1)
          font-family PingFangSC-Semibold
          color #1f368d
          font-size 15px
          margin 0 0 0 24px 
        .footer-article span:nth-child(2)
          font-family PingFangSC-Semibold
          color #617dcb
          font-size 15px 
          margin 0 26px 0 0
        .footer-foot
          display flex
          flex-direction row
          justify-content space-between
          margin 5px 0 5px 0
        .footer-foot span:nth-child(1)
          font-family PingFangSC-Semibold
          font-size 12px
          margin 0 0 0 24px 
        .footer-foot span:nth-child(2)
          font-family PingFangSC-Semibold
          font-size 12px 
          margin 0 26px 0 0
        .footer-line 
          width 240px 
          border 0.5px solid #f0f0f0
          margin 6px 0 0 24px      
</style>
