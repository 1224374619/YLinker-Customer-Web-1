<template>
<div>
    <customized-nav />
    <el-container>       
        <el-main>
            <div class="main">
                <div class="personalinformation" >
                    <img  :src="require('../assets/images/11.png')" />
                    <div id="personalinformation" @click="isclick" onMouseOver="this.className='on'" onMouseOut="this.className='out'"><i class="el-icon-edit-outline"></i>  添加个人信息</div>
                </div>
                <div class="showdemo" v-if="showdemo"><Basic-Info /></div>
                <div class="main_line"></div>
                <div class="main_content" id="jobintension">
                    <div class="main_content_1" ><i class="el-icon-edit"></i>  求职意向</div>
                    <div class="main_content_2" onMouseOver="this.className='onon'" onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i>  添加</div>
                </div>
                <div class="main_line"></div>
                <div class="main_content" id="educational">
                    <div class="main_content_1"><i class="el-icon-edit"></i>  教育经历</div>
                    <div class="main_content_2" onMouseOver="this.className='onon'" onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i>  添加</div>
                </div>
                <div class="main_line"></div>
                <div class="main_content" id="work">
                    <div class="main_content_1" ><i class="el-icon-edit"></i>  工作经历</div>
                    <div class="main_content_2" onMouseOver="this.className='onon'" onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i>  添加</div>
                </div>
                <div class="main_line"></div>
                <div class="main_content" id="progect">
                    <div class="main_content_1"><i class="el-icon-edit"></i>  项目经历</div>
                    <div class="main_content_2" onMouseOver="this.className='onon'" onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i>  添加</div>
                </div>
                <div class="main_line"></div>
                <div class="main_content" id="training">
                    <div class="main_content_1"><i class="el-icon-edit"></i>  培训经历</div>
                    <div class="main_content_2"><i class="el-icon-edit-outline"></i>  添加</div>
                </div>
                <div class="main_line"></div>
                <div class="main_content" id="language">
                    <div class="main_content_1"><i class="el-icon-edit"></i>  语言能力</div>
                    <div class="main_content_2"><i class="el-icon-edit-outline"></i>  添加</div>
                </div>
                <div class="main_line"></div>
                <div class="main_content" id="professional">
                    <div class="main_content_1"><i class="el-icon-edit"></i>  职称等级</div>
                    <div class="main_content_2"><i class="el-icon-edit-outline"></i>  添加</div>
                </div>
                <div class="main_line"></div>
                <div class="main_content" id="personal_skill">
                    <div class="main_content_1"><i class="el-icon-edit"></i>  专业技能</div>
                    <div class="main_content_2"><i class="el-icon-edit-outline"></i>  添加</div>
                </div>
                <div class="main_line" ></div>
                <div class="main_content" >
                    <div class="main_content_1" id="awards"><i class="el-icon-edit"></i>  荣誉奖项</div>
                    <div class="main_content_2"><i class="el-icon-edit-outline"></i>  添加</div>
                </div>
                <div class="main_line"></div>
                <div class="main_content">
                    <div class="main_content_1" id="self-appraisal"><i class="el-icon-edit"></i>  自我评价</div>
                    <div class="main_content_2"><i class="el-icon-edit-outline"></i>  添加</div>
                </div>
            </div>
        </el-main>
        <el-aside id="aside">
            <div class="aside">
                <div class="aside_content">在线简历</div>
                <div class="aside_progress">
                    <span>完整度</span>
                    <el-progress :percentage="70" class="progess" style="width:150px;padding:0 0 0 5px"></el-progress>
                </div>
                <div class="aside_time">最后更新 : 2019-02-21 18:30</div>
            </div>
            <div class="aside_tabulation">
                <div class="aside_line"></div>
                <div class="tabulation"><a href="#personalinformation" ><i class="el-icon-edit"></i>  基本信息</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a href="#jobintension" ><i class="el-icon-edit"></i>  求职意向</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a href="#educational" ><i class="el-icon-edit"></i>  教育经历</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a href="#work" ><i class="el-icon-edit"></i>  工作经历</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a href="#progect" ><i class="el-icon-edit"></i>  项目经历</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a href="#training" ><i class="el-icon-edit"></i>  培训经历</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a href="#language" ><i class="el-icon-edit"></i>  语言能力</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a href="#professional" ><i class="el-icon-edit"></i>  职称等级</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a href="#personal_skill" ><i class="el-icon-edit"></i>  专业技能</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a href="#awards" ><i class="el-icon-edit"></i>  荣誉奖项</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a href="#self-appraisal" ><i class="el-icon-edit"></i>  自我评价</a></div>
                <div class="aside_line"></div>
            </div>
            <div class="aside_foot">
                <div class="aside_foot_1">附件简历</div>
                <div class="aside_foot_2"><P>支持格式包括： 支持DOC，DOCX,PDF,JPG,PNG格式文件,<br>大小不超过2M</P></div>
                <div class="aside_foot_3"><el-button type="primary" size="medium" plain>立即上传</el-button></div>
            </div>
        </el-aside>
    </el-container>
</div>
</template>

<script>
import CustomizedNav from 'components/customized-nav.vue';
export default {
  name: 'user-license',
  components: {
    
    CustomizedNav
  },
  data() {
    return {
     
    }
  },
  methods: {
  },

}



</script>

<style lang="stylus" scoped>
.el-container
  margin 5% 20% 0 20%
  width 60%
  display flex
  flex-direction row
  justify-content center
  align-items center
 .el-aside
    background-color white
    margin 0 0 0 10px
    
  .aside
    width 200px
    margin 10px 0 0 40px
    text-align left
  .aside_content
    font-size 14px
    padding 10px 0 0 0
    color #2e3961
  .aside_progress
    font-size 10px
    display flex
    padding 10px 0 0 0
    flex-direction:row
  .aside_time
    font-size 10px
    padding 10px 0 0 
 .aside_tabulation
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin 25px 0 0 0
  .aside_line
      width 220px
      border 0.5px solid #D8D8D8
     .tabulation
      line-height 40px
      margin-right  120px
      font-size 13px
     .tabulation a
      text-decoration none
      color #617dcb
     .tabulation a:active
      font-size 23px
      font-weight bold
      color #617dcb
 .aside_foot
    margin 10px 0 0 40px
    text-align left
    font-size 14px
   .aside_foot_1
     color #617dcb
   .aside_foot_2
     margin -10px 0 0 0
     font-size 10px
     text-align left
   .aside_foot_3
     margin 20px 0 20px 40px     
 
 
 .el-main
   background-color white
   .personalinformation
     display flex
     flex-direction row
     justify-content space-between
   .on 
     font-weight bold
     line-height 17px
   .out 
    font-size  13px
   .personalinformation div
     margin 80px 30px 40px 0
     
   .personalinformation img
     width 80px
     height  80px 
   .main_line
     width 800px
     border 0.5px solid #D8D8D8
   .main_content
     display flex
     flex-direction row
     justify-content space-between
     .main_content_1
       font-size 17px
       font-weight bold
       color #1f368d
       line-height 60px
       margin 0 0 0 30px
     .main_content_2
       font-size 14px
       color #1f368d
       line-height 61px
       margin 0 30px 0 0
     .onon
       line-height 61px
       margin 0 30px 0 0
       font-weight bold
     .outout
       font-size  13px
       color #1f368d
       line-height 61px
       margin 0 30px 0 0
</style>
