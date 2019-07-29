<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="岗位">
                <el-input style="width:300px;" v-model="formInline.post" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="职位名称">
                <el-input style="width:300px" v-model="formInline.postName" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="行业">
                <el-select style="width:300px" v-model="formInline.trade" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="所在部门">
                <el-input style="width:300px" v-model="formInline.branch" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="税前月薪" style="margin-left:-55px">
                <el-input style="width:300px;" v-model="formInline.monthPay" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="学历" style="visibility:hidden">
                <el-select style="width:300px" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="工作描述" style="margin-left:-30px" >
                <el-input type="textarea" v-model="formInline.jobDescription"  style="width:730px" ></el-input>
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
  name: 'work',
  
  data() {
    return {
         formInline: {
          jobDescription: '',
          monthPay: '',
          branch: '',
          trade: '',
          postName: '',
          post: '',
        }
    }
  }
}
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 60px
</style>