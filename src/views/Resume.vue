<template>
  <Scroll ref="scroll">
    <div class="resumes">
      <div class="content">
        <el-dialog
                title=""
                :visible.sync="dialog"
                width="30%"
                :before-close="handleClose">
          <div style="display:flex;flex-direction:row;margin-left:150px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button class="cancel" @click="dialog = false">取 消</el-button>
            <el-button type="primary" style="margin:0 160px 0 0" @click="dialog = false">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
        <div class="personalinformation" v-if="personalinformation">
          <div class="personalinformation-img"><img :src="require('../assets/images/11.png')"/></div>
          <div class="img-add" @click="isshowpersonalinformation"><img :src="require('../assets/images/add.png')"/><span
                  class="add">添加个人信息</span></div>
        </div>
        <div class="showdemo" v-if="showDemo">
          <Basic-Info/>
        </div>
        <div ref="personalinformation" @mouseover="over(11)" v-if="showPersonalinformation" @mouseleave="leave(11)">
          <Personalinformation-From/>
        </div>
        <div class="content-line"></div>
        <div ref="jobintension" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/44.png')"/><span>求职意向</span></div>
          <div class="main-content-second" @click="jobintension" v-if="showadd"><img
                  :src="require('../assets/images/add.png')"/> <span>添加</span></div>
        </div>
        <ul v-if="showjobintension" style="margin:-15px 0 10px 5px" @mouseover="over(10)" @mouseleave="leave(10)">
          <li v-for="(list,index) in listjobintension" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/1.png')"/><span
                      style="margin-right:3px">编辑</span>
              </span>
            <div style="width:879px">
              <from :from-data="list" :index="index"></from>
              <br><br>
            </div>
          </li>
        </ul>
        <div @mouseover="over(10)" @mouseleave="leave(10)" class="showJob" v-if="showJob">
          <job-intension/>
        </div>
        <div class="content-line"></div>
        <div ref="educational" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/55.png')"/><span>教育经历</span></div>
          <div class="main-content-second" @click="education"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showeducational" style="margin:-5px 0 10px 5px" @mouseover="over(9)" @mouseleave="leave(9)">
          <li v-for="(list,index) in listeducational" :key="index" class="ul-a">
              <span class="actions-span">
                  <img class="img-first" style="margin-right:9px;height:12px"
                       :src="require('../assets/images/10.png')"/><span @click="showdialog()" style="margin-right:20px">删除</span>
                  <img class="img-second" style="margin-right:9px;height:12px"
                       :src="require('../assets/images/1.png')"/><span style="margin-right:3px" @click="showeducationalList(list)">编辑</span>
              </span>
            <educationexperience-From :from-data="list" :index="index"></educationexperience-From>
            <br>
          </li>
        </ul>
        <div class="showeducation" v-if="showeducation" >
          <Education-Experience @sendiptVal='sendiptVal' :educationDegree='educationDegree' />
        </div>
        <div class="content-line"></div>
        <div ref="work" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/33.png')"/><span>工作经历</span></div>
          <div class="main-content-second" @click="work"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showworkperience" style="margin:-5px 0 10px 5px" @mouseover="over(8)" @mouseleave="leave(8)">
          <li v-for="(list,index) in listwork" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/10.png')"/><span
                      @click="showdialog()" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/1.png')"/><span
                      style="margin-right:3px">编辑</span>
              </span>
            <work-from :from-data="list" :index="index"></work-from>
            <br>
          </li>
        </ul>
        <div v-if="showwork">
          <work-experience/>
        </div>
        <div class="content-line"></div>
        <div ref="progect" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/66.png')"/><span>项目经历</span></div>
          <div class="main-content-second" @click="project"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showprogectperience" style="margin:-5px 0 10px 5px" @mouseover="over(7)" @mouseleave="leave(7)">
          <li v-for="(list,index) in listprogectperience" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/10.png')"/><span
                      @click="showdialog()" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/1.png')"/><span
                      style="margin-right:3px">编辑</span>
              </span>
            <progect-from :from-data="list" :index="index"></progect-from>
            <br>
          </li>
        </ul>
        <div v-if="showproject">
          <project-experience/>
        </div>
        <div class="content-line"></div>
        <div ref="training" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/77.png')"/><span>培训经历</span></div>
          <div class="main-content-second" @click="training"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showtrain" style="margin:-5px 0 10px 5px;" @mouseover="over(6)" @mouseleave="leave(6)">
          <li v-for="(list,index) in listtrain" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/10.png')"/><span
                      @click="showdialog()" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/1.png')"/><span
                      style="margin-right:3px">编辑</span>
              </span><br>
            <training-from :from-data="list" :index="index"></training-from>
            <br>
          </li>
        </ul>
        <div v-if="showtraining">
          <training-experience/>
        </div>
        <div class="content-line"></div>
        <div ref="language" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/66.png')"/><span>语言能力</span></div>
          <div class="main-content-second" @click="language"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showlanguages" style="margin:-5px 0 10px 5px" @mouseover="over(5)" @mouseleave="leave(5)">
          <li v-for="(list,index) in listlanguages" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/10.png')"/><span
                      @click="showdialog()" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/1.png')"/><span
                      style="margin-right:3px">编辑</span>
              </span><br>
            <language-from :from-data="list" :index="index"></language-from>
            <br>
          </li>
        </ul>
        <div v-if="showlanguage">
          <language-experience/>
        </div>
        <div class="content-line"></div>
        <div ref="professional" class="main-content" @mouseover="over(4)" @mouseleave="leave(4)">
          <div class="main-content-first"><img :src="require('../assets/images/88.png')"/><span>职称等级</span></div>
          <div class="main-content-second" @click="professional()"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <div v-if="showprofessional">
          <professional-experience/>
        </div>
        <div class="content-line"></div>
        <div ref="personal_skill" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/99.png')"/><span>专业技能</span></div>
          <div class="main-content-second" @click="personal_skill()"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showpersonalskills" style="margin:-5px 0 10px 5px" @mouseover="over(3)" @mouseleave="leave(3)">
          <li v-for="(list,index) in listpersonalskill" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/10.png')"/><span
                      @click="showdialog()" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/1.png')"/><span
                      style="margin-right:3px" @click="editskill">编辑</span>
              </span><br>
            <personalskill-from :from-data="list" :index="index"></personalskill-from>
            <br>
          </li>
        </ul>
        <div v-if="showpersonalskill">
          <personal-skill @skill='skill(arguments)'/>
        </div>
        <div class="content-line"></div>
        <div ref="awards" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/0.png')"/><span>荣誉奖项</span></div>
          <div class="main-content-second" @click="awards"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showaward" style="margin:-5px 0 10px 5px" @mouseover="over(2)" @mouseleave="leave(2)">
          <li v-for="(list,index) in listaward" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/10.png')"/><span
                      @click="showdialog()" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/1.png')"/><span
                      style="margin-right:3px">编辑</span>
              </span><br>
            <awards-from :from-data="list" :index="index"></awards-from>
            <br>
          </li>
        </ul>
        <div v-if="showawards">
          <Aw-Ards/>
        </div>
        <div class="content-line"></div>
        <div ref="self-appraisal" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/1.png')"/><span>自我评价</span></div>
          <div class="main-content-second" @click="selfappraisal"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showpersonappraisal" style="margin:-5px 0 10px 5px" @mouseover="over(1)" @mouseleave="leave(1)">
          <li v-for="(list,index) in listpersonappraisal" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/10.png')"/><span
                      @click="showdialog()" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/1.png')"/><span
                      style="margin-right:3px">编辑</span>
              </span>
            <selfappraisal-from :from-data="list" :index="index"></selfappraisal-from>
            <br>
          </li>
        </ul>
        <div v-if="showselfappraisal">
          <self-appraisal/>
        </div>
      </div>
      <div class="aside-body">
        <div class="aside-foot">
          <div class="aside-foot-first">附件简历</div>
          <div class="aside-foot-second"><span>支持格式包括： 支持DOC，DOCX,PDF,JPG,PNG格式<br>文件,大小不超过2M</span></div>
          <div class="aside-foot-third">
            <el-button type="primary" @click="upload" size="medium">立即上传</el-button>
          </div>
        </div>
        <Affix :offset="60">
          <div class="aside">
            <div class="aside-nav">
              <div class="aside-nav-first">在线简历</div>
              <div class="aside-nav-second"><span>完整度</span><span><el-progress :percentage="10" class="progess"
                                                                               style="width:111px;padding:0 0 0 7px;height:9px"></el-progress></span>
              </div>
              <div class="aside-nav-third">最后更新：2019-02-03 18:30</div>
            </div>
            <div class="aside-tabulation">
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('personalinformation')"><img
                      :src="require('../assets/images/2.png')"/><span :style="active"
                                                                      class="tabulation-language">基本信息</span> </a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('jobintension')" href="#jobintension"><img
                      :src="require('../assets/images/44.png')"/> <span :style="activejobintension"
                                                                        class="tabulation-language">求职意向</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('educational')"><img
                      :src="require('../assets/images/55.png')"/><span :style="activeeducation"
                                                                       class="tabulation-language">教育经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('work')"><img :src="require('../assets/images/33.png')"/> <span
                      :style="activework" class="tabulation-language">工作经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('progect')"><img :src="require('../assets/images/66.png')"/>
                <span :style="activeproject" class="tabulation-language">项目经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('training')"><img
                      :src="require('../assets/images/77.png')"/><span :style="activetraining"
                                                                       class="tabulation-language">培训经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('language')"><img
                      :src="require('../assets/images/66.png')"/><span :style="activelanguage"
                                                                       class="tabulation-language">语言能力</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('professional')"><img :src="require('../assets/images/88.png')"/>
                <span :style="activeOne" class="tabulation-language">职称等级</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('personal_skill')"><img
                      :src="require('../assets/images/99.png')"/><span :style="activeprofessional"
                                                                       class="tabulation-language">专业技能</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('awards')"><img :src="require('../assets/images/0.png')"/> <span
                      :style="activeawards" class="tabulation-language">荣誉奖项</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('self-appraisal')"><img
                      :src="require('../assets/images/1.png')"/> <span :style="activeselfAppraisal"
                                                                       class="tabulation-language">自我介绍</span></a></div>
            </div>
          </div>
        </Affix>
      </div>
    </div>
  </Scroll>
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

  import PersonalinformationFrom from 'components/personalinformation_from.vue'
  import From from 'components/jobintension_from.vue'
  import EducationexperienceFrom from 'components/education_from.vue'
  import WorkFrom from 'components/work_from.vue'
  import ProgectFrom from 'components/progect_from.vue'
  import TrainingFrom from 'components/training_from.vue'
  import LanguageFrom from 'components/language_from.vue'
  import PersonalskillFrom from 'components/personal_skill_from.vue'
  import AwardsFrom from 'components/awards_from.vue'
  import SelfappraisalFrom from 'components/selfappraisal_from.vue'
  import Affix from 'components/affix.vue'

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
      PersonalinformationFrom,
      From,
      EducationexperienceFrom,
      WorkFrom,
      ProgectFrom,
      TrainingFrom,
      LanguageFrom,
      PersonalskillFrom,
      AwardsFrom,
      SelfappraisalFrom,
      Affix
    },
    data() {
      return {
        dialog: false,
        personalinformation: false,
        showPersonalinformation: true,
        showDemo: false,
        showJob: false,
        showadd: true,
        showeducation: '',
        showwork: false,
        showproject: false,
        showtraining: false,
        showlanguage: false,
        showprofessional: false,
        showpersonalskill: false,
        showawards: false,
        showselfappraisal: false,

        showjobintension: true,
        showeducational: true,
        showworkperience: true,
        showprogectperience: true,
        showtrain: true,
        showlanguages: true,
        showpersonalskills: true,
        showaward: true,
        showpersonappraisal: true,
        index:'a',
        listjobintension: [{
          postType: "产品经理",
          city: "上海/北京",
          trade: "互联网金融/公关",
          scope: "5k~10k",
          status: "随时到岗",
          jobType: "实习"
        }],
        listeducational: [{
          educationName: "华东理工大学",
          educationTime: "2018/12",
          educationDegree: "工业设计 | 硕士"
        },
        {
          educationName: "华东大学",
          educationTime: "2018/12",
          educationDegree: "工业设计 | 硕士"
        }],
        listwork: [{
          jobDescription: '公司名称',
          companyName: '2018/12',
          post: '工业设计 | 硕士',
          jobTime: '22电动车v发射点发射点犯得上犯得上发射点',
        }],
        listprogectperience: [{
          itemName: '项目名称',
          companyName: '2018/12',
          schoolTime: '担任角色',
          duty: '个人职责',
          project: '项目介绍',
        }],
        listtrain: [{
          trainCourse: '培训课程',
          trainTime: '培训机构',
        }],
        listlanguages: [{
          languages: "英语",
          listenAbility: "听说能力良好",
          readAbility: "读写能力良好",
        }],
        listpersonalskill: [{
          technicalName: '2',
          level: '2'
        },
        {
          technicalName: '4',
          level: '4'
        },],
        listaward: [{
          prizeName: "xxxx比赛三等奖",
          prizeTime: "2018/12",
        }],
        listpersonappraisal: [{
          personalDescription: "年轻有为",
        }],

        educationDegree:'',

        activejobintension: '',
        active: '',
        activeeducation: '',
        activework: '',
        activeproject: '',
        activetraining: '',
        activelanguage: '',
        activeprofessional: '',
        activeawards: '',
        activeselfAppraisal: '',
        activeOne: '',
      }
    },
    methods: {
      //上传附件简历
      upload() {
         this.$http.post(`/resume/${2}/file`,{skill:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
      //专业技能编辑
      editskill() {
        this.showpersonalskill = true
      },
      //专业技能
      skill(c) {
        console.log(c[1])
      },
      //专业技能删除
      deleteskill() {
        this.$http.delete(`/resume/${2}/skill/${1}`,{skill:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
      //工作经历删除
      deletework() {
        this.$http.delete(`/resume/${2}/work/${1}`,{beginTime:'',company:'',position:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
       //荣誉奖项删除
      deleteaward() {
        this.$http.delete(`/resume/${2}/award/${1}`,{acquiredTime:'',award:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
       //教育经历删除
      deleteaward() {
        this.$http.delete(`/resume/${2}/education/${1}`,{beginTime: "",degree: "",major: "",school:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
      //职称等级删除
      deleteaward() {
        this.$http.delete(`/resume/${2}/qualification/${1}`,{qual: ""}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
       //培训经历删除
      deleteaward() {
        this.$http.delete(`/resume/${2}/training/${1}`,{beginTime: "",institution:'',lesson:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
       //语言能力删除
      deleteaward() {
        this.$http.delete(`/resume/${2}/language/${1}`,{language:'',listenAndSpeak:'',readAndWrite:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
       //项目经历删除
      deleteaward() {
        this.$http.delete(`/resume/${2}/project/${1}`,{beginTime:'',project:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
      sendiptVal(c) {
        this.showeducation = c
      },
      showeducationalList(list) {
        this.showeducation = true
        this.educationDegree = list.educationDegree
         console.log(this.educationDegree) 
      },
      testRef(ref) {
        if (ref) {
          const y = this.$refs[ref].offsetTop - 100
          // alert(y)
          window.scrollTo({top: y, behavior: "smooth"});
        } else {
          // alert("222222")
          const y = this.$refs[ref].offsetTop - 600
          window.scrollTo({top: y, behavior: "smooth"});
          // alert(y)
        }
      },
      showdialog() {
        this.dialog = true
      },
      isshowpersonalinformation() {
        this.personalinformation = false
        this.showdemo = true
      },
      jobintension() {
        this.showadd = false;
        this.showJob = true;
        this.showjobintension = false
      },
      education() {
        this.showeducation = false;
        setTimeout(this.showeducation = true, 5000)
        
        this.showeducational = false
      },
      work() {
        this.showwork = true;
        this.showworkperience = false
      },
      project() {
        this.showproject = true;
        this.showprogectperience = false
      },
      training() {
        this.showtraining = true;
        this.showtrain = false
      },
      language() {
        this.showlanguage = true;
        this.showlanguages = false
      },
      professional() {
        this.showprofessional = true;
      },
      personal_skill() {
        this.showpersonalskill = true;
        this.showpersonalskills = false
      },
      awards() {
        this.showawards = true;
        this.showaward = false
      },
      selfappraisal() {
        this.showselfappraisal = true;
        this.showpersonappraisal = false
      },
      over(index) {
        if (index == 1) {
          this.activeselfAppraisal = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 2) {
          this.activeawards = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 3) {
          this.activeprofessional = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 4) {
          this.activeOne = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 5) {
          this.activelanguage = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 6) {
          this.activetraining = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 7) {
          this.activeproject = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 8) {
          this.activework = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 9) {
          this.activeeducation = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 10) {
          this.activejobintension = "font-weight:bold;line-height:41px;font-size:16px;color:black"
        }
        if (index == 11) {
          this.active = "font-weight:bold;line-height:41px;font-size:16px;color:black"
        }

      },
      leave(index) {
        if (index == 1) {
          this.activeselfAppraisal = ""
        }
        if (index == 2) {
          this.activeawards = ""
        }
        if (index == 3) {
          this.activeprofessional = ""
        }
        if (index == 4) {
          this.activeOne = ""
        }
        if (index == 5) {
          this.activelanguage = ""
        }
        if (index == 6) {
          this.activetraining = ""
        }
        if (index == 7) {
          this.activeproject = ""
        }
        if (index == 8) {
          this.activework = ""
        }
        if (index == 9) {
          this.activeeducation = ""
        }
        if (index == 10) {
          this.activejobintension = ""
        }
        if (index == 11) {
          this.active = ""
        }
      },

    },
    // created () {
    //   this.showeducation=this.showe
    //   alert(this.showeducation)
    // }

  }

</script>

<style lang="stylus" scoped>
  .resumes
    width 990px
    margin 90px 120px 0 140px
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

      .cancel:hover
        background #1f368d
        color white
        border-color #1f368d

      .cancel
        margin 0 20px 0 0

      .personalinformation div:nth-child(1) img
        width 80px
        height 80px
        margin 32px 0 0 42px

      .personalinformation div:nth-child(2)
        margin 0 75px 15px 0

      .content-line
        width 682px
        border 0.5px solid #eeeeee
        margin 0 44px 0 44px

      ul
        width 675px

      ul li
        list-style none

      .ul-a
        .actions-span
          float right
          margin 0 20px 0 0
          font-size 15px
          color #1f368d
          opacity 0

        &:hover
          background #f7f7f7

          .actions-span
            opacity 1

      .actions-span span:hover
        color #7d8dcb

      .actions-span span:active
        color #617dcb

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
          height 16px
          vertical-align middle
          margin 0 0 4px 0

        .main-content-second
          color #1f368d
          line-height 50px
          margin 0 74px 0 0

        .main-content-second span
          font-family PingFangSC-Regular
          color #111D4B
          font-size 14px
          margin 0 0 0 10px

        .main-content-second img
          height 12px
          vertical-align middle
          margin 0 0 2px 10px

        .main-content-second span:hover
          color #7d8dcd

        .main-content-second span:active
          color #617dcb

    .aside-body
      position relative

      .aside
        width 220px
        height 760px
        background #FFFFFF
        margin-top 10px

        .aside-nav
          display flex
          flex-direction column
          text-align left

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
            border 0.5px solid #eeeeee
            margin 0 27px 0 32px

          .tabulation
            line-height 42px
            margin 0 0 0 44px
            font-size 13px
            text-align left

          .tabulation a
            text-decoration none
            color #455379

            .tabulation-language
              margin 0 0 0 10px
              font-family PingFangSC-Regular
              color #455379 100%
              font-size 14px

            .tabulation-language:hover
              color #7d8dcd

            .tabulation-language:active
              color #617dcb

          .tabulation img
            height 16px
            vertical-align middle
            margin 0 0 4px 0

      .aside-foot
        width 220px
        background #FFFFFF
        /*margin 0 0 0 790px*/
        text-align left
        /*position fixed*/
        height 143px
        padding-top 11px

        .aside-foot-first
          font-family PingFangSC-Regular
          color #1F368D
          font-size 14px
          text-align left
          margin-left 30px

        .aside-foot-second
          font-famil PingFangSC-Regular
          color #909090
          font-size 12px
          margin 5px 0 0 30px

        .aside-foot-third
          margin 10px 57px 92px 55px


</style>
<style lang="stylus">
  .el-input__inner:hover
    border-color #7d8dcd
  .el-select .el-input__inner:hover
    border-color #7d8dcd
  .el-select-dropdown__item:hover
    color #7d8dcd
  .cancel:hover
    background #1f368d
    color white
    border-color #1f368d
  .el-button
    width 94px
    height 34px
    vertical-align middle
    padding 0px
  .keep:hover
    border-color #7d8dcd
  .el-textarea__inner:hover
    border-color #7d8dcd
  .el-cascader__inner:hover
    border-color #7d8dcd
  .el-button--primary:hover
    background #7d8dcd
    border-color #7d8dcd
  .el-button--primary:active
    background #617dcb
  .el-button.is-plain
    color #1f368d
    background white
    border-color #1f368d 
  .el-button.is-plain:hover 
    border-color #7d8dcd
    color #7d8dcd
    background white
  .el-button.is-plain:active 
    border-color #617dcb
    color #617dcb
    background white   
</style>
