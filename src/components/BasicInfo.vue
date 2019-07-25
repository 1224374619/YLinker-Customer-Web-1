<template>
  <div class="basicinfo">
      <div class="basicinfo_1">
          <div class="basicinfo_left">
          <img :src="require('../assets/images/11.png')" />
          </div>
          <div class="basicinfo_right">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="姓名">
                <el-input v-model="formInline.user" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="求职状态">
                <el-select v-model="formInline.region" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="性别" >
               <el-radio-group v-model="radio3">
                <el-radio-button  label="上海"></el-radio-button>
                <el-radio-button  label="北京"></el-radio-button>
               </el-radio-group>
            </el-form-item>
            <el-form-item label="工作年限" style="margin-left:60px">
                <el-select v-model="formInline.region" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="所在城市" style="margin-left:-30px">
                <el-cascader style="width:200px"
                    :options="options"
                    :show-all-levels="false"
                    >
                </el-cascader>
            </el-form-item>
            <el-form-item label="最高学历" >
                <el-select v-model="formInline.region" placeholder="">
                <el-option label="" value="shanghai"></el-option>
                <el-option label="" value="beijing"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="生日">
                <el-date-picker style="width:200px;"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="邮箱" style="margin-left:30px" >
                <el-input v-model="formInline.user" style="width:220px" placeholder=""></el-input>
            </el-form-item>
             <el-form-item label="手机">
                <el-input v-model="formInline.user" style="width:200px" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="政治面貌">
                <el-input v-model="formInline.user" style="width:220px" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
            <el-button type="info" plain>取消</el-button>
            <el-button type="primary">保存</el-button>
            </el-form-item>
          </el-form>
      </div>
      </div>
      
  </div>
</template>

<script>

export default {
  name: 'basicinfo',
  
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
  .basicinfo
   width 800px
   .basicinfo_1
    width 800px
    display flex
    flex-direction row
    .basicinfo_left img
        width 80px
        height  80px
        margin 30px 0 0 20px
    .basicinfo_right
     margin 60px 0 0 130px 
        

</style>