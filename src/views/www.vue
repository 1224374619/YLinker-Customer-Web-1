<template>

    <div class="el-container">
        <div class="el-main">
            <Scroll ref="scroll">
                <div class="main">
                    <div class="personalinformation" v-if="shownav">
                        <img :src="require('../assets/images/11.png')"/>
                        <div id="personalinformation" @click="isclick" onMouseOver="this.className='on'"
                             onMouseOut="this.className='out'"><i class="el-icon-edit-outline"></i> 添加个人信息
                        </div>
                    </div>
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
                    <ul v-if="showlist">
                        <li v-for="(list,index) in lists" :key="index" >
                            <From :from-data="list" :index="index"></From>
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
                    <div class="showeducation" v-if="showeducation"><Education-Experience /></div>
                    <div class="main_line"></div>
                    <div ref="work" class="main_content" >
                        <div class="main_content_1"><i class="el-icon-edit"></i> 工作经历</div>
                        <div class="main_content_2" @click="work" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加
                        </div>
                    </div>
                    <div v-if="showwork"><Work-Experience /></div>
                    <div class="main_line"></div>
                    <div ref="progect" class="main_content" >
                        <div class="main_content_1"><i class="el-icon-edit"></i> 项目经历</div>
                        <div class="main_content_2" @click="project" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加
                        </div>
                    </div>
                    <div v-if="showproject"><Project-Experience /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="training">
                        <div class="main_content_1"><i class="el-icon-edit"></i> 培训经历</div>
                        <div class="main_content_2" @click="training" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
                    <div v-if="showtraining"><Training-Experience /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="language">
                        <div class="main_content_1"><i class="el-icon-edit"></i> 语言能力</div>
                        <div class="main_content_2" @click="language" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
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
                    <div v-if="showpersonalskill"><Personal-Skill /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="awards">
                        <div class="main_content_1" ><i class="el-icon-edit"></i> 荣誉奖项</div>
                        <div class="main_content_2" @click="awards" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
                    <div v-if="showawards"><Aw-Ards /></div>
                    <div class="main_line"></div>
                    <div class="main_content" ref="self-appraisal">
                        <div class="main_content_1" ><i class="el-icon-edit"></i> 自我评价</div>
                        <div class="main_content_2" @click="selfappraisal" onMouseOver="this.className='onon'"
                             onMouseOut="this.className='outout'"><i class="el-icon-edit-outline"></i> 添加</div>
                    </div>
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
    import From from 'components/from.vue'
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
        From
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
                lists: [{
                    a: '1',
                    b: '2',
                    c: '2',
                    d: '2',
                    e: '2',
                },
                {
                    a: '1',
                    b: '2',
                    c: '2',
                    d: '2',
                    e: '2',
                },]
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
            },
            work(){
                this.showwork = true;
            },
            project(){
                this.showproject = true;
            },
            training(){
                this.showtraining = true;
            },
            language(){
                this.showlanguage = true;
            },
            professional(){
                this.showprofessional = true;
            },
            personal_skill(){
                this.showpersonalskill = true;
            },
            awards(){
                this.showawards = true;
            },
            selfappraisal(){
                this.showselfappraisal = true;
            }

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
