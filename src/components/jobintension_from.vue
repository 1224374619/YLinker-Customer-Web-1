<template>
    <div class="from">
        <div class="fromfirst">
             <div class="fromfirst-one">职位类型：<span>{{fromData.positionCatalogs[0].tag}}</span></div>
             <div class="fromfirst-one">企业行业：<span>{{fromData.industries[0].tag}}</span></div>
             <div class="fromfirst-one">求职状态：<span>{{fromData.jobSearchStatus}}</span></div>
        </div>
        <div class="fromsecond">
            <div class="fromfirst-two">工作城市：<span>{{fromData.province}}/{{fromData.county}}</span></div>
            <div class="fromfirst-two">薪资范围：<span>{{fromData.salaryMin}}K-{{fromData.salaryMax}}K</span></div>
            <div class="fromfirst-two">工作类型：<span>{{fromData.jobType}}</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'from',
        props:['fromData'],
        data() {
            return {
                // ruleForm: {
                //    postType:"",
                //    city:"",
                //    trade:"",
                //    scope:"",
                //    status:"",
                //    jobType:""
                // },
            };
        },
        created () {
            //如果后台有个人之前填的数据，需要先把数据格式化后复制给子组件，可以进行修改操作
            this.ruleForm = Object.assign({},this.fromData)
        },
        methods: {
            onSubmit () {
                //如果每次保存都要存后台，就在这里写发送时间，如果需要整体保存，就在父组件整体操作
                const flag={
                    index:this.index,
                    data:this.ruleForm
                }
                this.$emit('setFromList',flag);
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .from
    display flex
    flex-direction row
    font-size 15px
    color #61687c
    text-align left
    margin 10px 0 -20px 0
    .fromfirst 
      margin 0 0 0 50px
      .fromfirst-one
        margin 10px 0 0 0 
    .fromsecond 
      margin 0 0 0 150px
      .fromfirst-two
        margin 10px 0 0 0     
</style>