<template>

    <div class="el-container">
        <div class="el-main">
            <Scroll ref="scroll">
                <div class="main">
                    <div class="personalinformation" v-if="shownav">
                        <img :src="require('../assets/images/11.png')"/>
                        <div class="from" style="flex-grow:2;"><Personalinformation-From></Personalinformation-From></div>
                        <div class="personalinformation_1"  @click="isclick" @mouseover="mouseOver"
                         @mouseleave="mouseLeave" :style="active"><span ref="acp"><i class="el-icon-edit-outline"></i>编辑</span> 
                        </div>
                    </div>
                    <!-- <ul v-if="showlist_1">
                        <li v-for="(list,index) in lists_1" :key="index" >
                            <Personalinformation-From :from-data="list" :index="index"></Personalinformation-From><br>
                        </li>
                    </ul> -->
                    <div class="showdemo" v-if="showdemo">
                        <Basic-Info/>
                    </div>
                    <div class="main_line"></div>
                    <div ref="jobintension" class="main_content" >
                        <div class="main_content_1"><i class="el-icon-edit"></i> 求职意向</div>
                        <div class="main_content_2" v-if="showadd"  @click="jobintension"><i class="el-icon-edit-outline"></i> 添加
                        </div>
                    </div>
                    <ul v-if="showjobintension"  style="margin-left:-15px">
                        <li v-for="(list,index) in listjobintension" :key="index"  class="ul_a">
                        <span class="actions_span">
                            <i class="el-icon-edit-outline"></i> 删除
                            <i class="el-icon-edit-outline"></i> 编辑
                        </span>
                            <from :from-data="list" :index="index"></from><br><br>
                        </li>
                    </ul>
                    <div class="showJob" v-if="showJob"><job-intension /></div>
                    <div class="main_line"></div>
                    <div ref="educational" class="main_content" >
                        <div class="main_content_1"><i class="el-icon-edit"></i> 教育经历</div>
                        <div class="main_content_2" @click="education"><i class="el-icon-edit-outline"></i> 添加
                        </div>
                    </div>
                    <ul v-if="showeducational"  style="margin-left:-15px">
                        <li v-for="(list,index) in listeducational" :key="index" class="ul_a">
                        <span class="actions_span">
                            <i class="el-icon-edit-outline"></i> 删除
                            <i class="el-icon-edit-outline"></i> 编辑
                        </span>
                            <educationexperience-From :from-data="list" :index="index"></educationexperience-From><br>
                        </li>
                    </ul>
                    <div class="showeducation" v-if="showeducation"><Education-Experience /></div>
                    <div class="main_line"></div>
                    <div ref="work" class="main_content" >
                        <div class="main_content_1"><i class="el-icon-edit"></i> 工作经历</div>
                        <div class="main_content_2" @click="work" ><i class="el-icon-edit-outline"></i> 添加
                        </div>
                    </div>
                    <ul v-if="showworkperience" class="ul_a" style="margin-left:-15px">
                        
                        <li v-for="(list,index) in listwork" :key="index" class="ul_a">
                        <span class="actions_span">
                            <i class="el-icon-edit-outline"></i> 删除
                            <i class="el-icon-edit-outline"></i> 编辑
                        </span>
                            <work-from :from-data="list" :index="index"></work-from><br>
                        </li>
                    </ul>
                    <div v-if="showwork"><work-experience /></div>
                    <div class="main_line"></div>
                    <div ref="progect" class="main_content" >
                        <div class="main_content_1"><i class="el-icon-edit"></i> 项目经历</div>
                        <div class="main_content_2" @click="project" ><i class="el-icon-edit-outline"></i> 添加
                        </div>
                    </div>
                    <ul v-if="showprogectperience"  style="margin-left:-15px">
                        <li v-for="(list,index) in listprogectperience" :key="index" class="ul_a">
                        <span class="actions_span">
                            <i class="el-icon-edit-outline"></i> 删除
                            <i class="el-icon-edit-outline"></i> 编辑
                        </span>
                            <progect-from :from-data="list" :index="index"></progect-from><br>
                        </li>
                    </ul>
                    <div v-if="showproject"><project-experience /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="training">
                        <div class="main_content_1"><i class="el-icon-edit"></i> 培训经历</div>
                        <div class="main_content_2" @click="training" ><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
                    <ul v-if="showtrain" class="ul_a" style="margin-left:-15px">
                        <li v-for="(list,index) in listtrain" :key="index" class="ul_a">
                        <span class="actions_span">
                            <i class="el-icon-edit-outline"></i> 删除
                            <i class="el-icon-edit-outline"></i> 编辑
                        </span>
                            <training-from :from-data="list" :index="index"></training-from><br>
                        </li>
                    </ul>
                    <div v-if="showtraining"><training-experience /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="language">
                        <div class="main_content_1"><i class="el-icon-edit"></i> 语言能力</div>
                        <div class="main_content_2" @click="language" ><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
                    <ul v-if="showlanguages"  style="margin-left:-15px">
                        <li v-for="(list,index) in listlanguages" :key="index" class="ul_a">
                            <span class="actions_span">
                                <i class="el-icon-edit-outline"></i> 删除
                                <i class="el-icon-edit-outline"></i> 编辑
                            </span>
                            <language-from :from-data="list" :index="index"></language-from><br>
                        </li>
                    </ul>
                    <div v-if="showlanguage"><language-experience /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="professional">
                        <div class="main_content_1"><i class="el-icon-edit"></i> 职称等级</div>
                        <div class="main_content_2" @click="professional()" ><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
                    <div v-if="showprofessional"><professional-experience /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="personal_skill">
                        <div class="main_content_1"><i class="el-icon-edit"></i> 专业技能</div>
                        <div class="main_content_2" @click="personal_skill()" ><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
                    <ul v-if="showpersonalskills">
                        <li class="ul_a" v-for="(list,index) in listpersonalskill" :key="index" >
                            <span class="actions_span">
                                <i class="el-icon-edit-outline"></i> 删除
                                <i class="el-icon-edit-outline"></i> 编辑
                            </span>
                            <personalskill-from :from-data="list" :index="index"></personalskill-from>
                        </li>
                    </ul>
                    <div v-if="showpersonalskill"><personal-skill /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="awards">
                        <div class="main_content_1" ><i class="el-icon-edit"></i> 荣誉奖项</div>
                        <div class="main_content_2" @click="awards" ><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
                    <ul v-if="showaward" style="margin-left:-15px">
                        <li v-for="(list,index) in listaward" :key="index"  class="ul_a">
                            <span class="actions_span">
                                <i class="el-icon-edit-outline"></i> 删除
                                <i class="el-icon-edit-outline"></i> 编辑
                            </span>
                            <awards-from :from-data="list" :index="index"></awards-from><br>
                        </li>
                    </ul>
                    <div v-if="showawards"><Aw-Ards /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="self-appraisal">
                        <div class="main_content_1" ><i class="el-icon-edit"></i> 自我评价</div>
                        <div class="main_content_2" @click="selfappraisal" ><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
                    <ul v-if="showpersonappraisal"  style="margin-left:-15px">
                        <li v-for="(list,index) in listpersonappraisal" :key="index" class="ul_a">
                            <span class="actions_span">
                                <i class="el-icon-edit-outline"></i> 删除
                                <i class="el-icon-edit-outline"></i> 编辑
                            </span>
                            <selfappraisal-from :from-data="list" :index="index"></selfappraisal-from><br>
                        </li>
                    </ul>
                     <div v-if="showselfappraisal"><self-appraisal /></div>
                </div>
            </Scroll>
        </div>
        <div class="el-aside" id="aside">
            <div class="aside">
                <div class="aside_content">在线简历</div>
                <div class="aside_progress">
                    <span>完整度</span>
                    <el-progress :percentage="70" class="progess" style="width:90px;padding:0 0 0 5px"></el-progress>
                </div>
                <div class="aside_time">最后更新 : 2019-02-21 18:30</div>
            </div>
            <div class="aside_tabulation">
                <div class="aside_line"></div>
                <div class="tabulation"><a @click="testRef()"><i class="el-icon-edit"></i> 基本信息</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a @click="testRef('jobintension')"><i class="el-icon-edit"></i> 求职意向</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a @click="testRef('educational')"><i class="el-icon-edit"></i> 教育经历</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a @click="testRef('work')"><i class="el-icon-edit"></i> 工作经历</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a @click="testRef('progect')"><i class="el-icon-edit"></i> 项目经历</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a @click="testRef('training')"><i class="el-icon-edit"></i> 培训经历</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a @click="testRef('language')"><i class="el-icon-edit"></i> 语言能力</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a @click="testRef('professional')"><i class="el-icon-edit"></i> 职称等级</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a @click="testRef('personal_skill')"><i class="el-icon-edit"></i> 专业技能</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a @click="testRef('awards')"><i class="el-icon-edit"></i> 荣誉奖项</a></div>
                <div class="aside_line"></div>
                <div class="tabulation"><a @click="testRef('self-appraisal')"><i class="el-icon-edit"></i> 自我评价</a></div>
                <div class="aside_line"></div>
            </div>
            <div class="aside_foot">
                <div class="aside_foot_1">附件简历</div>
                <div class="aside_foot_2"><P>支持格式包括： 支持DOC，DOCX,PDF,JPG,PNG格式<br>文件,大小不超过2M</P></div>
                <div class="aside_foot_3">
                    <el-button type="primary" size="medium" plain>立即上传</el-button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
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
    import From from 'components/jobintension_from.vue'
    import PersonalinformationFrom from 'components/personalinformation_from.vue'
    import EducationExperienceFrom from 'components/education_from.vue'
    import WorkFrom from 'components/work_from.vue'
    import ProgectFrom from 'components/progect_from.vue'
    import TrainingFrom from 'components/training_from.vue'
    import LanguageFrom from 'components/language_from.vue'
    import PersonalskillFrom from 'components/personal_skill_from.vue'
    import AwardsFrom from 'components/awards_from.vue'
    import SelfappraisalFrom from 'components/selfappraisal_from.vue'
    export default {
        name: 'user-license',
        components: {
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
        From,
        PersonalinformationFrom,
        EducationExperienceFrom,
        WorkFrom,
        ProgectFrom,
        TrainingFrom,
        LanguageFrom,
        PersonalskillFrom,
        AwardsFrom,
        SelfappraisalFrom,
        },
        data() {
            return {
                active: "",
                activeOne: "",
                showdemo:false,
                shownav:true,
                showadd:true,
                showJob:false,
                showeducation:false,
                showwork:false,
                showproject:false,
                showtraining:false,
                showlanguage:false,
                showprofessional:false,
                showpersonalskill:false,
                showawards:false,
                showselfappraisal:false,
                showjobintension:true,
                showeducational:true,
                showworkperience:true,
                showprogectperience:true,
                showtrain:true,
                showlanguages:true,
                shpersonalskills:true,
                showaward:true,
                showpersonappraisal:true,
                add:false,
                listjobintension: [{
                    postType:"产品经理",
                    city:"上海/北京",
                    trade:"互联网金融/公关",
                    scope:"5k~10k",
                    status:"随时到岗",
                    jobType:"实习"
                },
                {
                    postType:"产品经理",
                    city:"上海/北京",
                    trade:"互联网金融/公关",
                    scope:"5k~10k",
                    status:"随时到岗",
                    jobType:"实习"
                }],
                listeducational: [{
                    educationName:"华东理工大学",
                    educationTime:"2018/12",
                    educationDegree:"工业设计 | 硕士"
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
                    languages:"英语",
                    listenAbility:"听说能力良好",
                    readAbility:"读写能力良好",
                }],
                listpersonalskill: [{
                   technicalName: '2',
                   level: '2'
                    
                },],
                listaward: [{
                    prizeName:"xxxx比赛三等奖",
                    prizeTime:"2018/12",
                }],
                listpersonappraisal: [{
                    personalDescription:"年轻有为",
                }],
            }
        },
        methods: {
            testRef(ref) {
                if(ref){
                    const y=this.$refs[ref].offsetTop-20
                    this.$refs.scroll.scrollTo({y}, 300);
                }else {
                    this.$refs.scroll.scrollTo({y: 0}, 300);
                }
            },
            isclick() {
                this.showdemo = true;
                this.shownav = false;
            },
            mouseOver() {
                this.active = "font-weight:bold;line-height:27px;font-size:16px"
                var acps = this.$refs.acp
                acps.style.color = "black"
            },
            mouseLeave() {
                this.active = "";
                this.$refs.acp.style=''
            },
            
            jobintension(){
                this.showadd = false;
                this.showJob = true;
                this.showjobintension= false
            },
            education(){
                this.showeducation = true;
                this.showeducational= false
            },
            work(){
                this.showwork = true;
                this.showworkperience= false
            },
            project(){
                this.showproject = true;
                this.showprogectperience= false
            },
            training(){
                this.showtraining = true;
                this.showtrain= false
            },
            language(){
                this.showlanguage = true;
                this.showlanguages= false
            },
            professional(){
                this.showprofessional = true;
            },
            personal_skill(){
                this.showpersonalskill = true;
                this.showpersonalskills= false
            },
            awards(){
                this.showawards = true;
                this.showaward= false
            },
            selfappraisal(){
                this.showselfappraisal = true;
                this.showpersonappraisal= false
            },
            


            // add() {
            //     //每次添加就往lists中添加数据，如果后台中已经存有个人数据，可以添加已有数据
            //     this.lists.push({
            //         pass: '',
            //         checkPass: '',
            //         age: ''
            //     })
            // },
            // setFromList(flag) {
            //     //数据集中到父组件进行管理
            //     this.lists[flag.index] = flag.data
            //     console.log(this.lists)
            // }
        },

    }


</script>

<style lang="stylus" scoped>
    .el-container
        margin 40px 0 0 0 
        padding-top 70px
        width 100%
        height 800px

    /*min-height 800px*/
    /*height 100vh*/
    .el-aside
        background-color white
        margin 0 0 0 10px
        width 280px

    .aside
        width 180px
        margin 10px 0 0 20px
        text-align left

    .aside_content
        font-size 14px
        padding 10px 0 0 0
        color #2e3961

    .aside_progress
        font-size 10px
        display flex
        padding 10px 0 0 0
        flex-direction: row

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
        width 240px
        border 0.5px solid #D8D8D8

    .tabulation
        line-height 40px
        margin-right 150px
        font-size 13px

    .tabulation a
        text-decoration none
        color #617dcb

    .tabulation a:active
        font-size 23px
        font-weight bold
        color #617dcb

    .aside_foot
        margin 10px 0 0 30px
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
        .personalinformation div
            margin 80px 55px 40px 0
            font-size 13px
        .personalinformation img
            width 80px
            height 80px
            margin 20px
        .main_line
            width 880px
            border 0.5px solid #D8D8D8
            margin 0 0 0 30px
        ul li
            list-style none
        .ul_a
            background-color #f5f7fa
            margin-left -15px
            .actions_span
                opacity 0
                width 150px
                margin-left 760px
                font-size 13px
                transition all 300ms ease
                color #617dcb
            &:hover
                .actions_span
                    opacity 1
        
        .showJob
            margin 0 0 0 0
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
                margin 0 50px 0 0

            .onon
                line-height 61px
                margin 0 50px 0 0
                font-weight bold

            .outout
                font-size 13px
                color #1f368d
                line-height 61px
                margin 0 50px 0 0
</style>
