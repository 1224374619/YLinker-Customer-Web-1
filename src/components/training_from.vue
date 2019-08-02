<template>
    <div class="hello">
        <el-form :inline="true" :model="ruleForm" class="demo-form-inline">
                <el-input :disabled="true"  v-model="ruleForm.trainCourse" placeholder=""></el-input>
                <el-input :disabled="true"  v-model="ruleForm.trainCourse" placeholder=""></el-input>
                <el-input :disabled="true"  v-model="ruleForm.trainTime" placeholder=""></el-input>
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
                   trainCourse:"",
                   trainTime:"",
                },
            };
        },
        created () {
            //如果后台有个人之前填的数据，需要先把数据格式化后复制给子组件，可以进行修改操作
            this.ruleForm=Object.assign({},this.fromData)
        },
        methods: {
            onSubmit () {
                //如果每次保存都要存后台，就在这里写发送时间，如果需要整体保存，就在父组件整体操作
                const flag = {
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
        margin 25px 0 0 65px
        border 0px solid #dcdfe6
        width 210px
      .el-textarea__inner
        padding 10px 0 0 15px
        border 0px solid #dcdfe6
</style>