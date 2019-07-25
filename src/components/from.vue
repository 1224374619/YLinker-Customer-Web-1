<template>
    <div class="hello">
        <el-form :inline="true" :model="ruleForm" class="demo-form-inline">
            <el-form-item label="职位类型:">
                <el-input  v-model="ruleForm.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="工作城市:">
                <el-input  v-model="ruleForm.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="企业行业:">
                <el-input  v-model="ruleForm.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="薪资范围:">
                <el-input  v-model="ruleForm.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="求职状态:">
                <el-input  v-model="ruleForm.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="工作类型:">
                <el-input  v-model="ruleForm.user" placeholder=""></el-input>
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
                   region:"1",
                   user:"2"
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

<style lang="stylus"> 
        .el-input__inner
          border 0px solid #dcdfe6
          width 300px

</style>