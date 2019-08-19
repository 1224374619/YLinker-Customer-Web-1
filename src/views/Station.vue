<template>
  <div class="station">
    <div v-if="deliver">
        <deliver></deliver>
    </div>
    <div class="station-nav" v-if="stationNav">
      <div class="station-nav-name">
        <span>产品实习生</span>
        <span>4-5k</span>
      </div>
      <div class="station-nav-content">
        <div class="content-nav">
          <span>上海 徐汇区 | 1-3年 | 应届生 | 实习</span>
        </div>
        <div class="content-article">
           <span>发布时间：今天 15：00</span>
        </div>
        <div v-if="showDeliver">
          <span style="margin:0 20px 0 0">
            <el-button id="deliver" style="width:140px;height:40px;" type="primary" @click="isclick()"> 投递简历</el-button>
          </span>
          <span>
            <el-button id="collect" style="width:140px;height:40px" plain>收藏</el-button>
          </span>
        </div>
        <div v-if="mapList">
          <span >
            <el-button
            
              type="primary"
              icon="el-icon-check"
              style="width:140px;height:40px;margin:0 20px 0 0;background:#617dbc;border:0px solid red"
            >已投递</el-button>
          </span>
          <span>
            <el-button
              type="primary"
              icon="el-icon-star-off"
              style="width:140px;height:40px;background:#617dbc;border:0px solid red"
            >已收藏</el-button>
          </span>
        </div>
      </div>
      <el-dialog  :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span style="font-size:16px;color:#455379">简历中要至少要填写"基本信息"和"校园经历",否则无法投递呦</span>
        <span slot="footer" class="dialog-footer" >
          <el-button style="width:94px;height:34px" @click="dialogVisible = false" class="cancel">取 消</el-button>
          <el-button type="primary" style="margin-right:160px;width:94px;height:34px;" @click="dialogVisible = false">完善简历</el-button>
        </span>
      </el-dialog>
      <el-dialog  :visible.sync="dialogVisibleOne" width="30%" :before-close="handleClose">
        <span style="font-size:34px;color:#52c41a;"><i class="el-icon-circle-check"></i></span><br>
        <span style="font-size:16px;color:#455379;">投递成功，静候佳音吧~~~</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="isdeliver()" style="margin:0 40% 5px 0;width:94px;height:34px">好的</el-button>
        </span>
      </el-dialog>
    </div>
    <div class="station-foot" v-if="stationFoot">
      <div class="station-foot-content">
        <p>职位描述</p>
        <p>
          1、在上级的领导和监督下定期完成量化的工作要求；<br><br> 
          2、能独立处理和解决所负责的任务；<br> <br>
          3、根据开发进度和任务分配，完成相应模块软件的设计、开发、编程任务；<br> <br>
          二、招聘要求：<br> <br>
          1、本科在读，20年应届生，计算机、软件工程、网络类及相关理工科专业毕业优先；<br><br> 
          2、有充裕时间，即日起可稳定实习，一周三天以上，至少6个月，可长期实习最佳；<br><br>
          3、热爱软件开发行业，善于学习和总结分析； <br><br>
          4、做事认真、细心、负责，能够专心学习技术；<br> <br>
          5、有良好的工作态度和团队合作精神； 
        </p>

        <div class="station-foot-foot">
          <div class="station-foot-foot-one">工作地点:</div>
          <div class="station-foot-foot-two">
            <span>上海市徐汇区梅陇路139号</span>
            <span>查看地图</span>
          </div>
          <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" ak="LGSF5bLoRGYzsOBrr20kXazopMHxLgL1">
          </baidu-map>
        </div>
      </div>
      <div class="station-foot-aside">
        <div class="station-foot-aside-nav">
          <div class="station-foot-aside-nav-img">
            <img style="width:100px;height:100px" :src="url" />
          </div>
          <div class="station-foot-aside-nav-article">
            <div class="company-name">
              <span>上海xx公司</span>
            </div>
            <div class="company-type">
              <span>
                <i class="el-icon-menu"></i> 互联网 金融
              </span>
            </div>
            <div class="company-status">
              <span>
                <i class="el-icon-s-data"></i> 国企
              </span>
            </div>
            <div class="company-num">
              <span>
                <i class="el-icon-coordinate"></i> 150-500人
              </span>
            </div>
          </div>
        </div>
        <div class="station-foot-aside-footer">
          <div class="aside-footer">
          <div class="company-post">
            <span>产品经理</span>
            <span>4-5k</span>
          </div>
          <div class="company-address">
            <span>上海YY公司</span>
            <span>长宁区</span>
          </div>
          <div class="line"></div>
          </div>
          <div class="aside-footer">
          <div class="company-post">
            <span>产品经理</span>
            <span>4-5k</span>
          </div>
          <div class="company-address">
            <span>上海YY公司</span>
            <span>长宁区</span>
          </div>
          <div class="line"></div>
          </div>
          <div class="aside-footer">
          <div class="company-post">
            <span>产品经理</span>
            <span>4-5k</span>
          </div>
          <div class="company-address">
            <span>上海YY公司</span>
            <span>长宁区</span>
          </div>
          <div class="line"></div>
          </div>
          <div class="aside-footer">
          <div class="company-post">
            <span>产品经理</span>
            <span>4-5k</span>
          </div>
          <div class="company-address">
            <span>上海YY公司</span>
            <span>长宁区</span>
          </div>
          <div class="line"></div>
          </div>
          <div class="aside-footer">
          <div class="company-post">
            <span>产品经理</span>
            <span>4-5k</span>
          </div>
          <div class="company-address">
            <span>上海YY公司</span>
            <span>长宁区</span>
          </div>
          <div class="line"></div>
          </div>
          <div class="aside-footer">
          <div class="company-post">
            <span>产品经理</span>
            <span>4-5k</span>
          </div>
          <div class="company-address">
            <span>上海YY公司</span>
            <span>长宁区</span>
          </div>
          <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>    

<script>
import Deliver from 'components/Deliver.vue';
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  name: "station",
  components: {
      Deliver,
      BaiduMap
        },
  data() {
    return {
        center: {lng: 0, lat: 0},
        zoom: 3,
        num:1,
        deliver:false,
        stationNav:true,
        stationFoot:true,
        dialogVisibleOne: true,
        dialogVisible: false,
        map:false,
        mapList:false,
        showDeliver:true,
        showCollect:true,
        isshow:true,  
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',  
      }
  },
  methods: {
    // 地图加载完毕事件
      handler () {
          this.center.lng = 116.404
          this.center.lat = 39.915
          this.zoom = 15
      },
      isclick () {
          if(this.num == 1) {
              this.dialogVisible = true
          }else{
              this.dialogVisibleOne = true
          }
          this.showDeliver = false,
          this.showCollect = false,
          this.map = true,
          this.mapList = true
      },
      isdeliver () {
          this.dialogVisibleOne = false
          this.stationNav = false
          this.stationFoot = false
          this.deliver = true
      }
    },
};
</script>

<style lang="stylus">
  .station
    margin 80px 0 0 0
    display flex
    flex-direction column
    .station-nav
      margin 3% 0 0 0
      display flex
      flex-direction column
      .station-nav-name
        display flex
        flex-direction row
      .station-nav-name span
        padding 0 0 0 2%
      .station-nav-name span:nth-child(1)
        font-size 32px
        color #1f368d
        font-weight bold
      .station-nav-name span:nth-child(2)
        font-size 28px
        color #617dcb
        font-weight bold
        line-height 45px
        padding  0 0 0 5%
      .station-nav-content
        display flex
        flex-direction row
        justify-content space-between
        font-size 15px
        line-height 60px
        .content-nav
          color #455379
          font-size 14px
          margin 0 0 0 20px
        .content-article 
          color #9b9b9b
          font-size 14px
      .cancel:hover
        background #1f368d  
        color white
        border-color #1f368d     
    .station-foot
      display flex
      flex-direction row
      margin 1% 0 0 0
      .station-foot-content
        display flex
        flex-direction column
        width 75%
        text-align left 
        background-color white
      .station-foot-content p:nth-child(1)  
        font-size 16px
        color #617dcb
        margin 17px 0 0 42px
      .station-foot-content p:nth-child(2)
        font-size 14px
        color #61687c
        margin 15px 0 -20px 42px 
      .station-foot-aside
        width 24%
        background-color white
        margin 0 0 0 1% 
      .station-foot-aside-nav
        display flex
        flex-direction row
        .station-foot-aside-nav-img
          margin 6% 0 0 6%
        .station-foot-aside-nav-article
          margin 6% 0 0 6%
          text-align left
          .company-name
            font-size 25px
            font-weight bold
            color #1f368d
          .company-type
            padding  4% 0 0 0
            font-size 13px
            color #636f8d
          .company-status
            padding  4% 0 0 0
            font-size 13px
            color #636f8d
          .company-num
            padding  4% 0 0 0
            font-size 13px
            color #636f8d
      .station-foot-aside-footer
        display flex
        flex-direction column
        margin 0 0 0 0
        .aside-footer
          margin 10px 0 0 0  
          .company-post 
            display flex
            flex-direction row
            justify-content space-between
            font-size 14px
            color #455379
            padding 2% 0 0 0
          .company-post span:nth-child(1)
            margin 0 0 0 6% 
          .company-post span:nth-child(2)
            margin 0 6% 0 0
          .company-address
            display flex
            flex-direction row
            justify-content space-between
            font-size 10px
            color #cbcbcb
            padding 4% 0 0 0
          .company-address span:nth-child(1)
            margin 0 0 0 6% 
          .company-address span:nth-child(2)
            margin 0 6% 0 0
          .line
            width 90%
            border 0.5px  solid #e5e5e5
            margin 2% 0 0 5%         
      .station-foot-content span
        margin 0 0 0 2%
        color #6a7184
        font-size 14px
        padding 1% 0 0 0 
      .station-foot-foot
        display flex
        flex-direction column
        margin 5% 0 0 0
        .station-foot-foot-one
          margin 0 0 0 40px
          font-size 14px
          color #1f368d 
        .station-foot-foot-two
          display flex
          flex-direction row
          justify-content space-between
          font-size 14px
          color #61687c
          margin 0 0 0 20px
        .bm-view
          margin 10px 0 20px 42px
          width 880px
          height 70px
        .anchorBL
          display none   
        .station-foot-foot-two span:nth-child(1)
          font-size 13px
          font-weight bold  
        .station-foot-foot-two span:nth-child(2)
          margin 0 38px 0 0
          font-size 13.5px
          font-weight bold
          color #6ec5d2
        .station-foot-foot-three
          margin 0 0 0 2%                     
</style>
