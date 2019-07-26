<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="学校名称">
                <el-input style="width:300px;" v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="在校时间" class="block">
                <el-date-picker
                style="width:300px"
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="专业">
                <el-input style="width:300px" v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="专业" style="width:340px">
                <el-radio v-model="radio" label="1">备选项</el-radio>
                <el-radio v-model="radio" label="2">备选项</el-radio>
            </el-form-item>
            <el-form-item label="学历">
                <el-select style="width:300px" v-model="formInline.region" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="学历" style="visibility:hidden">
                <el-select style="width:300px" v-model="formInline.region" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <br>
            <el-form-item>
            <el-button type="info" plain>取消</el-button>
            <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>

export default {
  name: 'education',
  
  data() {
    return {
         radio3: '上海',
         radio: '1',
         value6:"",
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