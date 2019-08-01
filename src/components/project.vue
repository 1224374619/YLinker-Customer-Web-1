<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="项目名称" style="margin-left:-25px">
                <el-input style="width:300px;" v-model="formInline.itemName" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="公司名称">
                <el-input style="width:300px" v-model="formInline.companyName" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="在校时间" class="block" style="margin-left:-80px">
                <el-date-picker
                style="width:300px;"
                v-model="formInline.schoolTime"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="学历" style="visibility:hidden;margin-left:-30px">
                <el-select style="width:300px" v-model="formInline.record" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="个人职责" style="margin-left:-30px" >
                <el-input type="textarea" v-model="formInline.duty" style="width:730px" ></el-input>
            </el-form-item><br>
            <el-form-item label="项目介绍" style="margin-left:-30px" >
                <el-input type="textarea" v-model="formInline.project" style="width:730px" ></el-input>
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
  name: 'project',
  data() {
    return {
         formInline: {
          itemName: '',
          companyName: '',
          schoolTime: '',
          record: '',
          duty: '',
          project: '',
        }
    }
  }
}
</script>

<style lang="stylus" scoped> 
        .el-form-item
          padding 0 0 0 60px

</style>