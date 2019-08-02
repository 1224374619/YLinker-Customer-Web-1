<template>
    <div class="hello">
        <el-form :inline="true" :model="ruleForm" class="demo-form-inline">
            <el-form-item label="职位类型:">
                <el-input  :disabled="true"  v-model="ruleForm.postType" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="工作城市:">
                <el-input :disabled="true"  v-model="ruleForm.city" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="企业行业:" >
                <el-input :disabled="true"  v-model="ruleForm.trade" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="薪资范围:" >
                <el-input :disabled="true"  v-model="ruleForm.scope" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="求职状态:">
                <el-input :disabled="true"  v-model="ruleForm.status" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="工作类型:">
                <el-input :disabled="true" v-model="ruleForm.jobType" placeholder=""></el-input>
            </el-form-item>
          </el-form>
    </div>
</template>

<script>
    export default {
        name:'from',
        props:['fromData','index'],
        data() {
            return {
                ruleForm: {
                   postType:"",
                   city:"",
                   trade:"",
                   scope:"",
                   status:"",
                   jobType:""
                },
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

<style lang="stylus" >
      .hello
       .el-form
         margin -20px 0 0 0
        .el-form-item
          height 20px
          margin 20px 0 0 0
          
         .el-input__inner
           border 0px solid #dcdfe6
           width 260px
           line-height 20px
         .el-textarea__inner
           padding 10px 0 0 15px
           border 0px solid #dcdfe6 
</style>