<template>
<div class="resumes">
  <div class="content">
    <div class="content_now">
      <div class="content_1" v-if="shownav">
        <img :src="require('../assets/images/11.png')" />
        <div @click="isclick"><i class="el-icon-edit-outline"></i>  添加个人信息</div>
      </div>
      <div class="ww" v-if="showdemo"><Basic-Info /></div>
      <div class="line_1"></div>
      <div class="content_2">
        <div class="content_2_1"><i class="el-icon-edit"></i>  求职意向</div>
        <div class="content_2_2"><i class="el-icon-edit-outline"></i>  添加</div>
      </div>
      <div class="line_1"></div>
      <div class="content_2">
        <div class="content_2_1"><i class="el-icon-edit"></i>  教育经历</div>
        <div class="content_2_2"><i class="el-icon-edit-outline"></i>  添加</div>
      </div>
      <div class="line_1"></div>
      <div class="content_2">
        <div class="content_2_1"><i class="el-icon-edit"></i>  工作经历</div>
        <div class="content_2_2"><i class="el-icon-edit-outline"></i>  添加</div>
      </div>
      <div class="content_2">
        <div class="content_2_1"><i class="el-icon-edit"></i>  项目经历</div>
        <div class="content_2_2"><i class="el-icon-edit-outline"></i>  添加</div>
      </div>
      <div class="content_2">
        <div class="content_2_1"><i class="el-icon-edit"></i>  培训经历</div>
        <div class="content_2_2"><i class="el-icon-edit-outline"></i>  添加</div>
      </div>
      <div class="content_2">
        <div class="content_2_1"><i class="el-icon-edit"></i>  语言能力</div>
        <div class="content_2_2"><i class="el-icon-edit-outline"></i>  添加</div>
      </div>
      <div class="content_2">
        <div class="content_2_1"><i class="el-icon-edit"></i>  职称等级</div>
        <div class="content_2_2"><i class="el-icon-edit-outline"></i>  添加</div>
      </div>
      <div class="content_2">
        <div class="content_2_1"><i class="el-icon-edit"></i>  专业技能</div>
        <div class="content_2_2"><i class="el-icon-edit-outline"></i>  添加</div>
      </div>
      <div class="content_2">
        <div class="content_2_1"><i class="el-icon-edit"></i>  荣誉奖项</div>
        <div class="content_2_2"><i class="el-icon-edit-outline"></i>  添加</div>
      </div>
     <div class="content_2">
        <div class="content_2_1"><i class="el-icon-edit"></i>  自我评价</div>
        <div class="content_2_2"><i class="el-icon-edit-outline"></i>  添加</div>
      </div>
    </div>
  </div>
  <div class="aside">
    <div class="nav_1">
      <div class="nav_2">在线简历</div>
      <div class="nav_3">
        <span>完整度</span>
        <el-progress :percentage="70" class="progess" style="width:120px;padding:0 0 0 5px"></el-progress>
      </div>
      <div class="nav_4">最后更新 : 2019-02-21 18:30</div>
    </div>
    <div class="aside_second">
      <div class="line"></div>
      <div class="wenzi"><i class="el-icon-edit"></i>  基本信息</div>
      <div class="line"></div>
      <div class="wenzi"><i class="el-icon-edit"></i>  求职意向</div>
      <div class="line"></div>
      <div class="wenzi"><i class="el-icon-edit"></i>  教育经历</div>
      <div class="line"></div>
      <div class="wenzi"><i class="el-icon-edit"></i>  工作经历</div>
      <div class="line"></div>
      <div class="wenzi"><i class="el-icon-edit"></i>  项目经历</div>
      <div class="line"></div>
      <div class="wenzi"><i class="el-icon-edit"></i>  培训经历</div>
      <div class="line"></div>
      <div class="wenzi"><i class="el-icon-edit"></i>  语言能力</div>
      <div class="line"></div>
      <div class="wenzi"><i class="el-icon-edit"></i>  职称等级</div>
      <div class="line"></div>
      <div class="wenzi"><i class="el-icon-edit"></i>  专业技能</div>
      <div class="line"></div>
      <div class="wenzi"><i class="el-icon-edit"></i>  荣誉奖项</div>
      <div class="line"></div>
      <div class="wenzi"><i class="el-icon-edit"></i>  自我评价</div>
      <div class="line"></div>
    </div>
    <div class="aside_third">
      <div class="aside_third_1">附件简历</div>
      <div class="aside_third_2"><P>支持格式包括： 支持DOC，DOCX,PDF,JPG,PNG格式文件,<br>大小不超过2M</P></div>
      <div class="aside_third_3"><el-button type="primary" size="medium" plain>立即上传</el-button></div>
    </div>
  </div>
</div>
</template>
<script>
import BasicInfo from 'components/BasicInfo.vue';
  export default {
    name: 'resumes',
    components: {
    BasicInfo
  },
    data() {
      return { 
        showdemo:false,
        shownav:true
      };
    },
    methods: {
      isclick() {
      this.showdemo = true;
      this.shownav = false;
    }
    }
  }
</script>
<style lang="stylus" scoped>
.resumes
  margin-top 70px
  display flex
  flex-direction row
  justify-content center
  align-items center
  .content
    width 1000px
    background-color white
   .content_now
    width 800px
    margin 0 0 0 100px
    .line_1
      width 820px
      border 0.5px solid #D8D8D8
    .content_1 img
      width 80px
      height  80px
      margin 40px 0 20px 0
    .content_1 
      display flex
      flex-direction row
      justify-content space-between
      margin 0 0 10px 0
    
    .content_1 div
      margin 110px 0 0 0 
      font-size 14px
      color #1f368d
    .content_2
      display flex
      flex-direction row
      justify-content space-between
     .content_2_1
      font-size 17px
      font-weight bold
      color #1f368d
      line-height 60px
     .content_2_2
      font-size 14px
      color #1f368d
      line-height 61px
  
  .aside
    width 240px
    background-color white
    margin 20px 0 0 10px
    display flex
    flex-direction:column 
    .nav_1
     width 200px
     margin 10px 0 0 40px
     text-align left
     .nav_3
      font-size 10px
      display flex
      padding 10px 0 0 0
      flex-direction:row
      .progress
       width 150px
       padding 0 0 0 5px
     .nav_2
      font-size 14px
      padding 10px 0 0 0
      color #2e3961
     .nav_4
      font-size 10px
      padding 10px 0 0 0
    .aside_second
     display flex
     flex-direction column
     justify-content center
     align-items center
     margin 25px 0 0 0
     .line
      width 160px
      border 0.5px solid #D8D8D8
     .wenzi
      line-height 40px
      margin-right  60px
      font-size 13px
    .aside_third
     margin 10px 0 0 40px
     text-align left
     font-size 14px
     .aside_third_2
      margin -10px 0 0 0
      font-size 10px
      text-align left
     .aside_third_3
      margin 20px 0 20px 40px
      
     
</style>
