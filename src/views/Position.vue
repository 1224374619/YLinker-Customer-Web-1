<template>
  <div class="position">
    <div class="positon-nav">
      <div class="block">
        <img style="width:100px;height:100px" :src="url"/>
      </div>
      <div class="aside">
        <div class="aside-nav" @click="isclick()">上海XX公司</div>
        <div class="aside-footer"><span><i class="el-icon-menu"></i></span><span>互联网</span><span>金融</span><span><i class="el-icon-s-data"></i></span><span>国企</span>
        <span><i class="el-icon-coordinate"></i></span><span>150-500人</span></div>
      </div>
    </div>
    <div class="positon-content">
      <div class="tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="企业信息" name="first">
            <div class="information" v-if="information">
              <p class="company">公司介绍:</p>
              <p class="company-content">
                技术驱动的产品型人力资源服务公司<br><br> 
                公司近300名员工，70%的领域专家、产品经理、开发工程师。<br><br> 
                上海、无锡、深圳、北京均设有研发中心，倡导以技术推动人力资源管理变革。<br><br> 
                累计融资额最高的劳动力综合管理公司<br><br> 
                全美顶级基金DCM、光速、启明创投联袂注资，融资总额超3亿元，市值超10亿人民币。拥有线下<br>人力灵活用工服务，全面推动连锁服务行业人力管理新篇章！<br><br> 
                累计服务企业和员工最多的HRSaaS公司<br><br> 
                服务了数千家各领域头部企业，服务企业总数超过15万家，覆盖员工超过300万.<br><br> 
                涵盖了餐饮服务、零售连锁、安保物业、生产制造等数十个行业。
              </p>
              <div class="positon-footer">
                <div class="address">
                  <p class="company-address">公司地址:</p>
                </div>
                <div class="map-address">
                  <span class="map-address-span">上海市徐汇区梅陇路130号</span>
                  <span class="map-address-map">查看地图</span>
                </div>
                <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" ak="LGSF5bLoRGYzsOBrr20kXazopMHxLgL1">
                </baidu-map>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="在招职位" name="second">
            <div><post-type /></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import PostType from 'components/post-type.vue';
export default {
  name: "position",
  components: {
    BaiduMap,
    PostType,
  },
  data() {
    return {
        center: {lng: 0, lat: 0},
        zoom: 3,
        table:false,
        information:true,
        activeName: 'first',
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
        this.table=true;
        this.information=false
      }
    },
};
</script>

<style lang="stylus">
  .el-tabs__item
    color #1f368d
  .el-tabs__item.is-active
    color #617DCB 
  .el-tabs__active-bar
    background-color #617DCB    
  .position 
    display flex
    flex-direction column
    margin 100px auto 0 
    width 1000px
    background-color white
    .positon-nav 
      display flex
      flex-direction row
      .block
        margin 30px 0 0 30px
      .aside
        .aside-nav
          text-align left 
          font-size 30px
          color #1f368d
          font-weight bold
          padding 0 0 0 10px 
          margin 35px 0 0 0  
        .aside-footer
          margin 20px 0 0 0   
        .aside-footer span
          padding 0 0 0 10px 
    .positon-content 
      .tab 
        margin 20px 0 0 25px
        .el-tabs__item
          font-size 14px
          font-weight 800
        .el-tabs__nav-wrap:after 
          background-color white
          z-index 1
        .company
          text-align left
          font-size 14px
          color #1f368d 
          margin 5px 0 0 0
          font-weight bold
        .company-content
          text-align left
          font-size 14px 
          color #b2b6c0 
          margin 20px 0 0 0
        .positon-footer
          .address
            .company-address
              text-align left
              font-size 14px
              color #1f368d 
              font-weight bold 
          .map-address
            display flex
            flex-direction row
            justify-content space-between
            .map-address-span
              font-size 14px
              color #6a7183
              font-weight bold
            .map-address-map
              font-size 14px
              color #bbdf4f
              margin 10px 355px 0 0
          .bm-view
            margin 10px 0 20px 0
            width 620px
            height 70px
          .anchorBL
            display none  
</style>
