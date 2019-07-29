<template>
    <div class="hello">
        <el-form :inline="true" :model="ruleForm" class="demo-form-inline">
                <el-input :disabled="true"  v-model="ruleForm.itemName" placeholder=""></el-input>
                <el-input :disabled="true"  v-model="ruleForm.companyName" placeholder=""></el-input>
                <el-input :disabled="true"  v-model="ruleForm.schoolTime" placeholder=""></el-input>
                <el-input :disabled="true"  v-model="ruleForm.duty" type="textarea" style="width:730px;margin:0 0 0 63px" placeholder="个人职责："></el-input>
                <el-input :disabled="true"  v-model="ruleForm.project" type="textarea" style="width:730px;margin:0 0 0 63px" placeholder="项目介绍："></el-input>
          </el-form>
    </div>
</template>

<script>
    export default {
        name:'progect_from',
        props:['fromData','index'],
        data() {
            return {
                ruleForm: {
                   itemName: '',
                   companyName: '',
                   schoolTime: '',
                   duty: '',
                   project: '',
                },
            };
        },
        created(){
            //如果后台有个人之前填的数据，需要先把数据格式化后复制给子组件，可以进行修改操作
            this.ruleForm=Object.assign({},this.fromData)
        },
        methods: {
            onSubmit(){
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
  .hello
    .el-form
      display flex
      flex-direction row
      flex-wrap wrap 
      margin -20px 0 0 
      .el-input
        margin 20px 0 0 60px
        border 0px solid #dcdfe6
        width 310px
        line-height 20px
      .el-textarea__inner
        padding 10px 0 0 15px
        border 0px solid #dcdfe6
</style>