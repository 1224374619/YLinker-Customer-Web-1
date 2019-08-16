<template>
  <div class="inforchange">
      <el-dialog
          title=""
          :visible.sync="dialog"
          width="30%"
          :before-close="handleClose">
          <div style="display:flex;flex-direction:row;margin-left:220px">
              <img style="height:18px;" :src="require('../assets/images/222.png')"/>
              <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">请先登录？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
              <el-button type="primary"  style="margin:0 200px 0 0" @click="next">确 定</el-button>
          </div>
          <div style="height:30px"></div>
      </el-dialog>
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
            <el-button @click="next" style="width:178px;height:43px;margin-left:520px" type="primary">提交</el-button>
          </div>
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
      textarea:'',
      dialog:false
    }
  },
  methods: {
      next() {
          this.dialog = false,
          this.$router.push({ path: "/login" });
      },
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
    width 1000px
    display flex
    flex-direction row
    margin 0 auto 0 
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


