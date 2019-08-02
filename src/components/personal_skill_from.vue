<template>
    <div class="hello">
        <el-form :inline="true" :model="ruleForm" class="demo-form-inline">
                <el-input :disabled="true"   v-model="ruleForm.technicalName" placeholder=""></el-input>
                <el-input :disabled="true"   v-model="ruleForm.level" placeholder=""></el-input>
                <a id="a" href="" @mouseover="on()" @mouseout="out()"><a class="el-icon-picture">点击查看证书</a></a>
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
                   technicalName: '',
                   level: ''
                },
            };
        },
        created(){
            //如果后台有个人之前填的数据，需要先把数据格式化后复制给子组件，可以进行修改操作
            this.ruleForm = Object.assign({},this.fromData)
        },
        methods: {
            onSubmit () {
                //如果每次保存都要存后台，就在这里写发送时间，如果需要整体保存，就在父组件整体操作
                const flag = {
                    index:this.index,
                    data:this.ruleForm
                }
                this.$emit('setFromList',flag);
            },
            on () {
              document.getElementById("a").style.color = "#8897d0";
            },
            out () {
              document.getElementById("a").style.color = "#551a8b";
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
      margin -10px 0 0 
      .el-input
        margin 0 0 0 65px
        border 0px solid #dcdfe6
        width 210px
        line-height 20px
      .el-icon-picture  
        border 0px solid #dcdfe6
        width 300px
        line-height 40px
        font-size 14px  
      .el-textarea__inner
        padding 10px 0 0 15px
        border 0px solid #dcdfe6
</style>