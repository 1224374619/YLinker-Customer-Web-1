<template>
  <div class="inforchange">
      <div class="inforchange-left"  v-if="inforchangeLeft">
          <div class="left">
              <a  href="#" class="password" @click="rightpassword()">公司介绍</a>
              <span class="left-line"></span>
              <a href="#" class="phone" @click="rightphone()">联系我们</a>
          </div>
      </div>
      <div class="inforchange-right" v-if="rightPassword"> 
          <div>公司介绍</div>
          <div><p>文案文案文案文案文案文案文案文案文案文案文案文案
            文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案
            文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案
            文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案
            文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案
            文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案
            文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案
            </p></div>
          <div>支持展示图片</div>
      </div>
      <div class="aboutus-right" v-if="rightPhone"> 
          <div style="font-size:18px">联系我们</div>
          <div class="aboutus-vontent">
            <span>公司：YinLinker人力资源有限公司</span>
            <span>地址：xxxxx</span>
            <span>邮编：12345</span>
            <span>电话：123123123</span>
            <span>邮箱：1122234@11.com</span>
          </div>
          <div>
            <el-input
              type="textarea"
              placeholder="如果你有任何意见或者建议，欢迎在此填写，非常感谢你对YinLinker的支持"
              v-model="textarea">
            </el-input></div>
          <div>
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
          <div>
            <el-button style="width:178px;height:43px;margin-left:520px" type="primary">提交</el-button>
          </div>
      </div> 
      <div class="inforchangeback" v-if="inforchangeBack">
          <span><i class="el-icon-success"></i></span>
          <span>换绑成功，请用新手机号重新登陆</span>
          <span><el-button class="button" type="primary">重新登陆</el-button></span>
      </div> 
  </div>
  
</template>

<script>


export default {
  name: 'inforchange',
  
  data() {
    return {
      rightPassword:true,
      rightPhone:false,
      inforchangeLeft:true,
      inforchangeBack:false,
      textarea:''
    }
  },
  methods: {
      rightpassword() {
          this.rightPassword = true,
          this.rightPhone = false
      },
      rightphone() {
          this.rightPhone = true,
          this.rightPassword = false
      },
      showinforchangeback() {
          this.rightPhone = false,
          this.inforchangeLeft = false,
          this.rightPassword = false,
          this.inforchangeBack = true
      }
  }
}
</script>

<style lang="stylus" scoped>
  .inforchange
    display flex
    flex-direction row
    .inforchange-left
      margin 90px 0 0 0
      .left
        width 180px
        height 122px
        background white
        display flex
        flex-direction column
        font-family PingFangSC-Semibold
        color #1f368d 
        font-size 16px
        font-weight 550
        .left-line
          width 180px
          border 0.5px solid #f0f0f0
          margin 8px 0 0 0
        .password
          margin 32px 0 0 0
          color #1f368d 
          text-decoration none
        .password:focus
          color #617dcb
        .phone
          margin 8px 0 0 0
          color #1f368d 
          text-decoration none
        .phone:focus
          color #617dcb  
    .inforchange-right
      background white
      margin 90px 0 0 36px
      height 725px
    .inforchange-right div:nth-child(1)
      margin 32px 49px 0 49px
      text-align left  
      font-size 18px
      color #617dcb  
    .inforchange-right div:nth-child(2)
      width 690px
      text-align left 
      font-size 13px
      color #61687c
      margin 0 49px 0 49px
    .inforchange-right div:nth-child(3)
      width 690px
      height 160px
      margin 35px 49px 0 49px
      background #d8d8d8
      font-size 13.5px
      color #61687c
      line-height 160px
    .aboutus-right
      background white
      margin 90px 0 0 36px
      height 725px
    .aboutus-right div:nth-child(1)
      margin 32px 49px 0 49px
      text-align left  
      color #617dcb  
    .aboutus-right div:nth-child(2)
      display flex
      flex-direction column
      width 690px
      text-align left 
      font-size 13px
      color #455379
      margin 20px 49px 0 49px
    .aboutus-vontent span
      padding 15px 0 0 0  
    .aboutus-right div:nth-child(3)
      width 690px
      color #61687c
    .aboutus-right div:nth-child(4)
      width 690px
      color #61687c   
      
</style>
<style lang="stylus">
  .el-button:active
    background #617dcb
  .el-button:hover
    background #7d8dcd
  .el-input:hover  
    border-color #7d8dcd 
</style>


<style lang="stylus" scoped>
  .home
    margin-top 70px
    .content
      
      .joblist-search
        width 802px
        height 47px
        background white
        .el-icon-search:before
          color white
          font-size 17px 
        .el-input__inner
          border 0px solid red
        .search-button
          width 167px
          height 47px
          font-size 12px
          color white
        .search-button:hover
          border-color #7d8dcd 
      .more
        width 210px
        height 43px
        background-color #1F368D
        color white
        font-size 14px
        margin 30px 0
        cursor pointer
      .header
        margin 20px 0
        display flex
        flex-direction row
        justify-content center
        align-items center
        .carousel
          width 100%
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
            font-size 16px
            width 200px
            margin-left 20px
      .company
        height 170px
        display flex
        flex--direction row
        justify-content space-evenly
        align-items center
        border: solid 1px #eee
        margin: 20px auto
        overflow scroll
        img
          height 150px
          margin 0 10px
      .occupation-card
        display flex
        flex-direction row
        margin auto
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
<!-- <div class="header">
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
      <button class="more">查看更多</button>
    </div> -->