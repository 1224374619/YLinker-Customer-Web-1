<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="岗位">
                <el-input style="width:300px;" v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="职位名称">
                <el-input style="width:300px" v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="行业">
                <el-select style="width:300px" v-model="formInline.region" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="所在部门">
                <el-input style="width:300px" v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="税前月薪" style="margin-left:-55px">
                <el-input style="width:300px;" v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="学历" style="visibility:hidden">
                <el-select style="width:300px" v-model="formInline.region" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="工作描述" style="margin-left:-30px" >
                <el-input type="textarea" style="width:730px" ></el-input>
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
         radio3: '上海',
         radio: '1',
         formInline: {
          user: '',
          region: ''
        }
    }
  }
}
</script>

<style lang="stylus" scoped> 
        .el-form-item
          padding 0 0 0 60px

</style>