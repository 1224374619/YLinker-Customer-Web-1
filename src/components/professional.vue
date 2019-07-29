<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="职称等级">
                <el-input style="width:300px;" v-model="formInline.professional" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="语种" style="visibility:hidden">
                <el-input style="width:330px;" v-model="formInline.languages" placeholder=""></el-input>
            </el-form-item><br>
            <el-form-item>
            <el-button type="info" plain>取消</el-button>
            <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>
export default {
  name: 'professional',
  data() {
    return {
         formInline: {
          professional: '',
          languages: ''
        }
    }
  }
}
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 60px
</style>