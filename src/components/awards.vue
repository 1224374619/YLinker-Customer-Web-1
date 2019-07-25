<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="奖项名称">
                <el-input style="width:300px;" v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="获奖时间">
                <el-select style="width:300px" v-model="formInline.region" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="获奖证书" style="margin-left:-60px">
                <el-upload
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-upload"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="语种" style="visibility:hidden">
                <el-input style="width:420px;" v-model="formInline.user" placeholder=""></el-input>
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
  name: 'awards',
  
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