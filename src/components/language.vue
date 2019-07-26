<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="语种">
                <el-input style="width:100px;" v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="听力能力">
                <el-select style="width:100px" v-model="formInline.region" placeholder="">
                <el-option label="" value="一般"></el-option>
                <el-option label="" value="良好"></el-option>
                <el-option label="" value="熟练"></el-option>
                <el-option label="" value="精通"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="读写能力">
                <el-input style="width:100px" v-model="formInline.user" placeholder=""></el-input>
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
  name: 'language',
  
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