<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="职位类型">
                <el-input style="width:300px" v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="工作城市">
                <el-cascader style="width:300px"
                    :options="options"
                    :show-all-levels="false"
                    >
                </el-cascader>
            </el-form-item><br>
            <el-form-item label="企业行业">
                <el-select style="width:300px" v-model="formInline.region" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="薪资范围">
                <el-select style="width:300px" v-model="formInline.region" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="求职状态">
                <el-select style="width:300px" v-model="formInline.region" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="工作类型">
                <el-select style="width:300px" v-model="formInline.region" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
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
  name: 'jobintension',
  
  data() {
    return {
         radio3: '上海',
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