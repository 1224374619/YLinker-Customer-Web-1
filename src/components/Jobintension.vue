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
                <el-option label="" value="1千以下"></el-option>
                <el-option label="" value="1k-2k"></el-option>
                <el-option label="" value="2k-4k"></el-option>
                <el-option label="" value="4k-6k"></el-option>
                <el-option label="" value="6k-8k"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="求职状态">
                <el-select id="name" style="width:300px" v-model="formInline.aaa" placeholder="" @change="JobType()">
                <el-option label="" value="离职-随时到岗"></el-option>
                <el-option label="" value="离职-延时到岗"></el-option>
                <el-option label="" value="在职-考虑机会"></el-option>
                <el-option label="" value="在职-暂不考虑"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="工作类型">
                <el-select style="width:300px" v-model="formInline.region" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item><br>
            <el-form-item label="到岗时间" class="block" v-if="date_picker">
                <el-date-picker
                style="width:300px"
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="工作类型" v-if="date_picker" style="visibility:hidden">
                <el-select style="width:300px;" v-model="formInline.region" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item><br>
            <el-form-item>
            <el-button type="info" plain>取消</el-button>
            <el-button type="primary" @click="JobType">保存</el-button>
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
          region: '',
          aaa:'',
          date_picker:false,
        }
    }
  },
  methods:{
    JobType(){
      if(this.formInline.aaa=="离职-延时到岗"){
         this.date_picker=true
      }
    }
  }
}
</script>

<style lang="stylus" scoped> 
        .el-form-item
          padding 0 0 0 60px

</style>