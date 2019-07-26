<template>

    <div class="el-container">
        <div class="el-main">
            <Scroll ref="scroll">
                <div class="main">
                    <div class="personalinformation" v-if="shownav">
                        <img :src="require('../assets/images/11.png')"/>
                        <div class="from" style="flex-grow:2;"><Personalinformation-From></Personalinformation-From></div>
                        <div class="personalinformation_1" @click="isclick" onMouseOver="this.className='on'"
                             onMouseOut="this.className='out'"><i class="el-icon-edit-outline"></i> 编辑
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
                        <div class="main_content_2" v-if="showadd" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'" @click="jobintension"><i class="el-icon-edit-outline"></i> 添加
                        </div>
                    </div>
                    <ul v-if="showlist" class="ul_a" style="margin-left:-15px">
                        <li v-for="(list,index) in lists" :key="index" >
                            <From :from-data="list" :index="index"></From><br>
                        </li>
                    </ul>
                    <div class="showJob" v-if="showJob"><Job-Intension /></div>
                    <div class="main_line"></div>
                    <div ref="educational" class="main_content" >
                        <div class="main_content_1"><i class="el-icon-edit"></i> 教育经历</div>
                        <div class="main_content_2" @click="education" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加
                        </div>
                    </div>
                    <ul v-if="showlist_1" class="ul_a" style="margin-left:-15px">
                        <li v-for="(list,index) in lists_1" :key="index" >
                            <EducationExperience-From :from-data="list" :index="index"></EducationExperience-From><br>
                        </li>
                    </ul>
                    <div class="showeducation" v-if="showeducation"><Education-Experience /></div>
                    <div class="main_line"></div>
                    <div ref="work" class="main_content" >
                        <div class="main_content_1"><i class="el-icon-edit"></i> 工作经历</div>
                        <div class="main_content_2" @click="work" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加
                        </div>
                    </div>
                    <ul v-if="showlist_2" class="ul_a" style="margin-left:-15px">
                        <li v-for="(list,index) in lists_2" :key="index" >
                            <Work-From :from-data="list" :index="index"></Work-From><br>
                        </li>
                    </ul>
                    <div v-if="showwork"><Work-Experience /></div>
                    <div class="main_line"></div>
                    <div ref="progect" class="main_content" >
                        <div class="main_content_1"><i class="el-icon-edit"></i> 项目经历</div>
                        <div class="main_content_2" @click="project" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加
                        </div>
                    </div>
                    <ul v-if="showlist_3" class="ul_a" style="margin-left:-15px">
                        <li v-for="(list,index) in lists_3" :key="index" >
                            <Progect-From :from-data="list" :index="index"></Progect-From><br>
                        </li>
                    </ul>
                    <div v-if="showproject"><Project-Experience /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="training">
                        <div class="main_content_1"><i class="el-icon-edit"></i> 培训经历</div>
                        <div class="main_content_2" @click="training" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
                    <ul v-if="showlist_4" class="ul_a" style="margin-left:-15px">
                        <li v-for="(list,index) in lists_4" :key="index" >
                            <Training-From :from-data="list" :index="index"></Training-From><br>
                        </li>
                    </ul>
                    <div v-if="showtraining"><Training-Experience /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="language">
                        <div class="main_content_1"><i class="el-icon-edit"></i> 语言能力</div>
                        <div class="main_content_2" @click="language" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
                    <ul v-if="showlist_5" class="ul_a" style="margin-left:-15px">
                        <li v-for="(list,index) in lists_5" :key="index" >
                            <Language-From :from-data="list" :index="index"></Language-From><br>
                        </li>
                    </ul>
                    <div v-if="showlanguage"><Language-Experience /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="professional">
                        <div class="main_content_1"><i class="el-icon-edit"></i> 职称等级</div>
                        <div class="main_content_2" @click="professional" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
                    <div v-if="showprofessional"><Professional-Experience /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="personal_skill">
                        <div class="main_content_1"><i class="el-icon-edit"></i> 专业技能</div>
                        <div class="main_content_2" @click="personal_skill" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
                    <ul v-if="showlist_6" class="ul_a">
                        <li class="li_a" v-for="(list,index) in lists_6" :key="index" >
                           
                                <span style="opacity: 1;width:150px;margin-left:760px;font-size:10px;">
                                <i  class="el-icon-edit-outline"></i> 删除
                                <i  class="el-icon-edit-outline"></i> 编辑
                                </span>
                            
                            <Personalskill-From :from-data="list" :index="index"></Personalskill-From>
                           
                        </li>
                    </ul>
                    <div v-if="showpersonalskill"><Personal-Skill /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="awards">
                        <div class="main_content_1" ><i class="el-icon-edit"></i> 荣誉奖项</div>
                        <div class="main_content_2" @click="awards" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
                    <ul v-if="showlist_7" class="ul_a" style="margin-left:-15px">
                        <li v-for="(list,index) in lists_7" :key="index" >
                            <Awards-From :from-data="list" :index="index"></Awards-From><br>
                        </li>
                    </ul>
                    <div v-if="showawards"><Aw-Ards /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="self-appraisal">
                        <div class="main_content_1" ><i class="el-icon-edit"></i> 自我评价</div>
                        <div class="main_content_2" @click="selfappraisal" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
                    <ul v-if="showlist_8" class="ul_a" style="margin-left:-15px">
                        <li v-for="(list,index) in lists_8" :key="index" >
                            <Selfappraisal-From :from-data="list" :index="index"></Selfappraisal-From><br>
                        </li>
                    </ul>
                     <div v-if="showselfappraisal"><Self-Appraisal /></div>
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
                showlist:true,
                showlist_1:true,
                showlist_2:true,
                showlist_3:true,
                showlist_4:true,
                showlist_5:true,
                showlist_6:true,
                showlist_7:true,
                showlist_8:true,
                add:false,
                lists: [{
                    a: '产品经理',
                    b: '上海/北京',
                    c: '互联网金融/公关',
                    d: '5k~10k',
                    e: '随时到岗',
                    f: '实习'
                }],
                lists_1: [{
                    a: '华东理工大学',
                    b: '2018/12',
                    c: '工业设计 | 硕士',
                    d: '5k~10k',
                    e: '随时到岗',
                    f: '实习'
                }],
                lists_2: [{
                    a: '公司名称',
                    b: '2018/12',
                    c: '工业设计 | 硕士',
                    d: '22电动车v发射点发射点犯得上犯得上发射点',
                }],
                lists_3: [{
                    a: '项目名称',
                    b: '2018/12',
                    c: '担任角色',
                    d: '个人职责',
                    e: '项目介绍',
                }],
                 lists_4: [{
                    a: '培训课程',
                    b: '培训机构',
                    c: '2018/12-至今',
                }],
                 lists_5: [{
                    a: '英语',
                    b: '听说能力良好',
                    c: '读写能力良好',
                }],
                lists_6: [{
                    a: 'CET6',
                    b: '六级',
                    
                },],
                lists_7: [{
                    a: 'xxxx比赛三等奖',
                    b: '2018/12',
                    
                }],
                lists_8: [{
                    a: 'xxxx比赛三等奖',
                    b: '2018/12',
                    
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
            jobintension(){
                this.showadd = false;
                this.showJob = true;
                this.showlist= false
            },
            education(){
                this.showeducation = true;
                this.showlist_1= false
            },
            work(){
                this.showwork = true;
                this.showlist_2= false
            },
            project(){
                this.showproject = true;
                this.showlist_3= false
            },
            training(){
                this.showtraining = true;
                this.showlist_4= false
            },
            language(){
                this.showlanguage = true;
                this.showlist_5= false
            },
            professional(){
                this.showprofessional = true;
                this.showlist_6= false
            },
            personal_skill(){
                this.showpersonalskill = true;
                this.showlist_7= false
            },
            awards(){
                this.showawards = true;
                this.showlist_8= false
            },
            selfappraisal(){
                this.showselfappraisal = true;
                this.showlist_9= false
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
        .on
            font-weight bold
            line-height 17px

        .out
            font-size 13px

        .personalinformation div
            margin 80px 50px 40px 0

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
