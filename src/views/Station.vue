<template>
  <div class="station">
    <div v-if="deliver">
        <deliver></deliver>
    </div>
    <div class="station_nav" v-if="station_nav">
      <div class="station_nav_name">
        <span>产品实习生</span>
        <span>4-5k</span>
      </div>
      <div class="station_nav_content">
        <span>上海 徐汇区</span>
        <span>|</span>
        <span>1-3年</span>
        <span>|</span>
        <span>应届生</span>
        <span>|</span>
        <span>实习</span>
        <span>发布时间：今天 15：00</span>
        <span v-if="aa">
          <el-button id="deliver" type="primary" style="width:110px" @click="isclick()">
            <i class="el-icon-check"></i> 投递简历
          </el-button>
        </span>
        <span v-if="bb">
          <el-button id="collect" type="primary" style="width:110px" plain>收藏</el-button>
        </span>
        <span v-if="map_list">
          <el-button
            type="primary"
            icon="el-icon-check"
            style="width:110px;background:#617dbc;border:0px solid red"
          >已投递</el-button>
        </span>
        <span v-if="map">
          <el-button
            type="primary"
            icon="el-icon-star-off"
            style="width:110px;background:#617dbc;border:0px solid red"
          >已收藏</el-button>
        </span>
      </div>
      <el-dialog  :visible.sync="dialogVisible" width="20%" :before-close="handleClose">
        <span style="font-size:16px;color:#455379">简历中要至少要填写"基本信息"和"校园经历",否则无法投递呦</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false" style="float:left">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">完善简历</el-button>
        </span>
      </el-dialog>
      <el-dialog  :visible.sync="dialogVisibleOne" width="20%" :before-close="handleClose">
        <span style="font-size:16px;color:#455379">投递成功，静候佳音吧~~~</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="isdeliver()" style="margin:0 40% 0 0">好的</el-button>
        </span>
      </el-dialog>
    </div>
    <div class="station_foot" v-if="station_foot">
      <div class="station_foot_content">
        <span>一.职位描述</span>
        <span>1.在上级的领导和要求下定期按量的完成工作要求</span>
        <span>2.能独立处理和解决所负责的任务</span>
        <span>二.招聘要求</span>
        <span>1.在上级的领导和要求下定期按量的完成工作要求</span>
        <span>2.能独立处理和解决所负责的任务</span>
        <div class="station_foot_foot">
          <div class="station_foot_foot_one">工作地点:</div>
          <div class="station_foot_foot_two">
            <span>上海市徐汇区梅陇路139号</span>
            <span>查看地图</span>
          </div>
          <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" ak="LGSF5bLoRGYzsOBrr20kXazopMHxLgL1">
          </baidu-map>
        </div>
      </div>
      <div class="station_foot_aside">
        <div class="station_foot_aside_nav">
          <div class="station_foot_aside_nav_img">
            <img style="width:100px;height:100px" :src="url" />
          </div>
          <div class="station_foot_aside_nav_article">
            <div class="company_name">
              <span>上海xx公司</span>
            </div>
            <div class="company_type">
              <span>
                <i class="el-icon-menu"></i> 互联网 金融
              </span>
            </div>
            <div class="company_status">
              <span>
                <i class="el-icon-s-data"></i> 国企
              </span>
            </div>
            <div class="company_num">
              <span>
                <i class="el-icon-coordinate"></i> 150-500人
              </span>
            </div>
          </div>
        </div>
        <div class="station_foot_aside_footer">
          <div class="company_post">
            <span>产品经理</span>
            <span>4-5k</span>
          </div>
          <div class="company_address">
            <span>上海YY公司</span>
            <span>长宁区</span>
          </div>
          <div class="line"></div>
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
        deliver:false,
        station_nav:true,
        station_foot:true,
        a:2,
        dialogVisibleOne: false,
        dialogVisible: false,
        map:false,
        map_list:false,
        aa:true,
        bb:true,
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
      isclick(){
          if(this.a==1){
              this.dialogVisible=true
          }else{
              this.dialogVisibleOne=true
          }
          this.aa=false,
          this.bb=false,
          this.map=true,
          this.map_list=true
      },
      isdeliver(){
          this.dialogVisibleOne=false
          this.station_nav=false
          this.station_foot=false
          this.deliver=true
      }
    },
};
</script>

<style lang="stylus">
  .station
    margin 80px 0 0 0
    display flex
    flex-direction column
    .station_nav
      margin 3% 0 0 0
      display flex
      flex-direction column
      .station_nav_name
        display flex
        flex-direction row
      .station_nav_name span
        padding 0 0 0 2%
      .station_nav_name span:nth-child(1)
        font-size 30px
        color #1f368d
        font-weight bold
      .station_nav_name span:nth-child(2)
        font-size 25px
        color #617dcb
        font-weight bold
        line-height 45px
        padding  0 0 0 5%
      .station_nav_content
        display flex
        flex-direction row
        font-size 15px
        margin 0 0 0 2%
      .station_nav_content span:nth-child(2)
        padding  0 0 0 1%
      .station_nav_content span:nth-child(3)
        padding  0 0 0 1%
      .station_nav_content span:nth-child(4)
        padding  0 0 0 1% 
      .station_nav_content span:nth-child(5)
        padding  0 0 0 1% 
      .station_nav_content span:nth-child(6)
        padding  0 0 0 1% 
      .station_nav_content span:nth-child(7)
        padding  0 0 0 1%
      .station_nav_content span:nth-child(8)
        padding  0 0 0 22%  
        font-size 13px
      .station_nav_content span:nth-child(8)
        padding  0 0 0 22%  
        font-size 13px
      .station_nav_content span:nth-child(9)
        padding  0 0 0 20% 
      .station_nav_content span:nth-child(10)
        padding  0 0 0 6%
      .station_nav_content span:nth-child(11)
        padding  0 0 0 6% 
    .station_foot
      display flex
      flex-direction row
      margin 1% 0 0 0
      .station_foot_content
        display flex
        flex-direction column
        width 75%
        text-align left 
        background-color white 
      .station_foot_aside
        width 24%
        background-color white
        margin 0 0 0 1% 
      .station_foot_aside_nav
        display flex
        flex-direction row
        .station_foot_aside_nav_img
          margin 6% 0 0 6%
        .station_foot_aside_nav_article
          margin 6% 0 0 6%
          text-align left
          .company_name
            font-size 25px
            font-weight bold
            color #1f368d
          .company_type
            padding  4% 0 0 0
            font-size 13px
            color #636f8d
          .company_status
            padding  4% 0 0 0
            font-size 13px
            color #636f8d
          .company_num
            padding  4% 0 0 0
            font-size 13px
            color #636f8d
      .station_foot_aside_footer
        display flex
        flex-direction column
        margin 5% 0 0 0
        .company_post 
          display flex
          flex-direction row
          justify-content space-between
          font-size 14px
          color #455379
          padding 2% 0 0 0
        .company_post span:nth-child(1)
          margin 0 0 0 6% 
        .company_post span:nth-child(2)
          margin 0 6% 0 0
        .company_address
          display flex
          flex-direction row
          justify-content space-between
          font-size 10px
          color #cbcbcb
          padding 4% 0 0 0
        .company_address span:nth-child(1)
          margin 0 0 0 6% 
        .company_address span:nth-child(2)
          margin 0 6% 0 0
        .line
          width 90%
          border 0.5px  solid #e5e5e5
          margin 2% 0 0 5%         
      .station_foot_content span
        margin 0 0 0 2%
        color #6a7184
        font-size 14px
        padding 1% 0 0 0 
      .station_foot_foot
        display flex
        flex-direction column
        margin 5% 0 0 0
        .station_foot_foot_one
          margin 0 0 0 2%
          font-size 13px
          font-weight bold
          color #1f368d 
        .station_foot_foot_two
          display flex
          flex-direction row
          justify-content space-between
          font-size 13px
          font-weight bold
          color #1f368d
        .bm-view
          margin 10px 0 0 10px
          width 98%
          height 200px
        .BMap_cpyCtrl
          display none   
        .station_foot_foot_two span:nth-child(1)
          font-size 13px
          font-weight bold  
        .station_foot_foot_two span:nth-child(2)
          margin 0 2% 0 0
          font-size 13px
          font-weight bold
          color #48b32b
        .station_foot_foot_three
          margin 0 0 0 2%                     
</style>
