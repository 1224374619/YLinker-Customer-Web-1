<template>
<div class="resumes">
    <div class="content">
        <div class="personalinformation" v-if="personalinformation">
            <div class="personalinformation-img"><img :src="require('../assets/images/11.png')"/></div>
            <div class="img-add" @click="isshowpersonalinformation"><img :src="require('../assets/images/add.png')"/><span class="add">添加个人信息</span></div>
        </div>
        <div class="showdemo" v-if="showdemo"><Basic-Info/></div>
        <div class="content-line"></div>
        <div ref="jobintension" class="main-content" >
            <div class="main-content-first"><img :src="require('../assets/images/44.png')"/><span>求职意向</span> </div>
            <div class="main-content-second" v-if="showadd"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
        </div>
        <div class="showJob" v-if="showJob"><job-intension /></div>
        <div class="content-line"></div>
        <div ref="educational" class="main-content" >
            <div class="main-content-first"><img :src="require('../assets/images/55.png')"/><span>教育经历</span> </div>
            <div class="main-content-second"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
        </div>
        <div class="showeducation" v-if="showeducation"><Education-Experience /></div>
        <div class="content-line"></div>
        <div ref="work" class="main-content" >
            <div class="main-content-first"><img :src="require('../assets/images/33.png')"/><span>工作经历</span> </div>
            <div class="main-content-second"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
        </div>
        <div v-if="showwork"><work-experience /></div>
        <div class="content-line"></div>
        <div ref="work" class="main-content" >
            <div class="main-content-first"><img :src="require('../assets/images/66.png')"/><span>项目经历</span> </div>
            <div class="main-content-second"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
        </div>
        <div v-if="showproject"><project-experience /></div>
        <div class="content-line"></div>
        <div ref="work" class="main-content" >
            <div class="main-content-first"><img :src="require('../assets/images/77.png')"/><span>培训经历</span> </div>
            <div class="main-content-second"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
        </div>
        <div v-if="showtraining"><training-experience /></div>
        <div class="content-line"></div>
        <div ref="work" class="main-content" >
            <div class="main-content-first"><img :src="require('../assets/images/66.png')"/><span>语言能力</span> </div>
            <div class="main-content-second"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
        </div>
        <div v-if="showlanguage"><language-experience /></div>
        <div class="content-line"></div>
        <div ref="work" class="main-content" >
            <div class="main-content-first"><img :src="require('../assets/images/88.png')"/><span>职称等级</span> </div>
            <div class="main-content-second"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
        </div>
        <div v-if="showprofessional"><professional-experience /></div>
        <div class="content-line"></div>
        <div ref="work" class="main-content" >
            <div class="main-content-first"><img :src="require('../assets/images/99.png')"/><span>专业技能</span> </div>
            <div class="main-content-second"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
        </div>
        <div v-if="showpersonalskill"><personal-skill /></div>
        <div class="content-line"></div>
        <div ref="work" class="main-content" >
            <div class="main-content-first"><img :src="require('../assets/images/0.png')"/><span>荣誉奖项</span> </div>
            <div class="main-content-second"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
        </div>
        <div v-if="showawards"><Aw-Ards /></div>
        <div class="content-line"></div>
        <div ref="work" class="main-content" >
            <div class="main-content-first"><img :src="require('../assets/images/1.png')"/><span>自我评价</span> </div>
            <div class="main-content-second"><img :src="require('../assets/images/add.png')"/> <span>添加</span></div>
        </div>
        <div v-if="showselfappraisal"><self-appraisal /></div>
    </div>
    <div class="aside">
        <div class="aside-nav">
            <div class="aside-nav-first">在线简历</div>
            <div class="aside-nav-second"><span>完整度</span><span><el-progress :percentage="10" class="progess" style="width:111px;padding:0 0 0 7px;height:9px"></el-progress></span></div>
            <div class="aside-nav-third">最后更新：2019-02-03 18:30</div>
        </div>
        <div class="aside-tabulation">
            <div class="aside-line"></div>
            <div class="tabulation"><a @click="testRef()"><img :src="require('../assets/images/2.png')"/><span class="tabulation-language">基本信息</span> </a></div>
            <div class="aside-line"></div>
            <div class="tabulation"><a @click="testRef('jobintension')"><img :src="require('../assets/images/44.png')"/> <span class="tabulation-language">求职意向</span></a></div>
            <div class="aside-line"></div>
            <div class="tabulation"><a @click="testRef('educational')"><img :src="require('../assets/images/55.png')"/><span class="tabulation-language">教育经历</span></a></div>
            <div class="aside-line"></div>
            <div class="tabulation"><a @click="testRef('work')"><img :src="require('../assets/images/33.png')"/> <span class="tabulation-language">工作经历</span></a></div>
            <div class="aside-line"></div>
            <div class="tabulation"><a @click="testRef('progect')"><img :src="require('../assets/images/66.png')"/> <span class="tabulation-language">项目经历</span></a></div>
            <div class="aside-line"></div>
            <div class="tabulation"><a @click="testRef('training')"><img :src="require('../assets/images/77.png')"/><span class="tabulation-language">培训经历</span></a></div>
            <div class="aside-line"></div>
            <div class="tabulation"><a @click="testRef('language')"><img :src="require('../assets/images/66.png')"/><span class="tabulation-language">语言能力</span></a></div>
            <div class="aside-line"></div>
            <div class="tabulation"><a @click="testRef('professional')"><img :src="require('../assets/images/88.png')"/> <span class="tabulation-language">职称等级</span></a></div>
            <div class="aside-line"></div>
            <div class="tabulation"><a @click="testRef('personal_skill')"><img :src="require('../assets/images/99.png')"/><span class="tabulation-language">专业技能</span></a></div>
            <div class="aside-line"></div>
            <div class="tabulation"><a @click="testRef('awards')"><img :src="require('../assets/images/0.png')"/> <span class="tabulation-language">荣誉奖项</span></a></div>
            <div class="aside-line"></div>
            <div class="tabulation"><a @click="testRef('self-appraisal')"><img :src="require('../assets/images/1.png')"/> <span class="tabulation-language">自我介绍</span></a></div>
            <div class="aside-line"></div>
        </div>
        <div class="aside-foot">
            <div class="aside-foot-first">附件简历</div>
            <div class="aside-foot-second"><span>支持格式包括： 支持DOC，DOCX,PDF,JPG,PNG格式<br>文件,大小不超过2M</span></div>
            <div class="aside-foot-third">
                <el-button type="primary" size="medium" round>立即上传</el-button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    // import PersonalinformationFrom from 'components/personalinformation_from.vue'
    import BasicInfo from 'components/BasicInfo.vue';
    import JobIntension from 'components/Jobintension.vue';
    import EducationExperience from 'components/education.vue';
    import WorkExperience from 'components/work.vue';
    import ProjectExperience from 'components/project.vue';
    import TrainingExperience from 'components/training.vue';
    import LanguageExperience from 'components/language.vue';
    import ProfessionalExperience from 'components/professional.vue';
    import PersonalSkill from 'components/personal_skill.vue';
    import AwArds from 'components/awards.vue';
    import SelfAppraisal from 'components/self-appraisal.vue';
    export default {
        name: 'Resumes',
        components: {
        // PersonalinformationFrom,
         BasicInfo,
         JobIntension,
         EducationExperience,
         WorkExperience,
         ProjectExperience,
         TrainingExperience,
         LanguageExperience,
         ProfessionalExperience,
         PersonalSkill,
         AwArds,
         SelfAppraisal,
        },
        data() {
            return {
                personalinformation:true,
                showdemo:false,
                showJob:true,
                showadd:true,
                showeducation:true,
                showwork:true,
                showproject:true,
                showtraining:true,
                showlanguage:true,
                showprofessional:true,
                showpersonalskill:true,
                showawards:true,
                showselfappraisal:true
                
            }
        },
        methods: {
          isshowpersonalinformation() {
            this.personalinformation = false
            this.showdemo = true
          }
    }
    }

</script>

<style lang="stylus" scoped>
  .resumes
    width 990px
    margin 140px 220px 0 220px
    display flex
    flex-direction row
    .content
      width 770px
      background #FFFFFF
      margin 0 10px 0 0
      .personalinformation
        width 770px
        display flex
        flex-direction row
        font-size 14px
        .img-add img
          width 12px
          margin 111px 0 0 467px
        .img-add span
          margin 0 0 0 10px
          font-size 14px
          font-family PingFangSC-Regular
          color #111D4B 100% 
          font-weight bold 
      .personalinformation div:nth-child(1) img
        width 80px 
        height 80px
        margin 32px 0 0 42px
      .personalinformation div:nth-child(2) 
        margin 0 75px 15px 0
      .content-line
        width 682px
        border 0.5px solid #D8D8D8
        margin 0 44px 0 44px
      .main-content
        display flex
        flex-direction row
        justify-content space-between
        .main-content-first
          font-weight bold
          line-height 50px
          margin 0 0 0 52px 
        .main-content-first span
          font-size 18px
          font-family PingFangSC-Regular
          color #111D4B 100%
          margin 0 0 0 10px
        .main-content-first img
          height  16px
          vertical-align middle
          margin 0 0 4px 0
        .main-content-second
          font-weight bold
          line-height 50px
          margin 0 74px 0 0
        .main-content-second span
          font-family PingFangSC-Regular
          color #111D4B 100%
          font-size 14px
          margin 0 0 0 10px
        .main-content-second img
          height  12px
          vertical-align middle
          margin  0 0 2px 10px  
    .aside
      width 220px
      background #FFFFFF
      position fixed
      margin-left 790px
      .aside-nav
        display flex
        flex-direction column
        text-align left 
        margin 21px 0 0 0
        .aside-nav-first
          font-family PingFangSC-Regular
          color #111D4B 100%
          font-size 14px
          font-weight bold
          margin 0 0 0 32px
        .aside-nav-second
          display flex
          flex-direction row
          font-family PingFangSC-Regular
          color #455379 100%
          font-size 12px
          margin 10px 0 0 32px
        .aside-nav-third
          font-family PingFangSC-Regular
          color #455379 100%
          font-size 12px
          margin 10px 0 0 32px
      .aside-tabulation
        display flex
        flex-direction column
        margin 25px 0 0 0
        .aside-line
          width 160px
          border 0.5px solid #D8D8D8
          margin 0 27px 0 32px
        .tabulation
          line-height 42px
          margin  0 0 0 44px
          font-size 13px
          text-align left  
          .tabulation-language
            margin  0 0 0 10px
            font-family PingFangSC-Regular
            color #455379 100%
            font-size 14px
        .tabulation img
          height 16px
          vertical-align middle
          margin 0 0 4px 0 
      .aside-foot
        margin 10px 0 0 30px
        text-align left
        font-size 14px
        .aside-foot-first
          font-family PingFangSC-Regular
          color #1F368D 100%
          font-size 14px
          text-align left
          margin 11px 0 0 0
        .aside-foot-second
          font-famil PingFangSC-Regular
          color #909090 100%
          font-size 12px
          text-align left
        .aside-foot-third
          margin 15px 31px 92px 20px   

            
</style>
