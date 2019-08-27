<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="技能名称" style="margin:0 0 0 20px">
                <el-input style="width:242px;height:36px" v-model="formInline.technicalName" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="掌握程度">
                <el-select style="width:242px;height:36px" v-model="formInline.level" placeholder="">
                <el-option label="shanghai" value="shanghai"></el-option>
                <el-option label="beijing" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="获奖证书" style="margin-left:-90px">
                <el-upload
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-upload"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="语种" style="visibility:hidden">
                <el-input style="width:242px;height:36px" placeholder=""></el-input>
            </el-form-item><br>
            <el-form-item style="margin:0 0 20px 450px">
            <el-button @click='cancel' plain style="margin:0 10px 0 0">取消</el-button>
            <el-button @click="keep" type="primary">保存</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>

export default {
  name: 'personal_skill',
  
  data() {
    return {
         formInline: {
          technicalName: '',
          level: ''
        }
    }
  },
  methods: {
    cancel() {
      this.$emit("skillEmit",false,true)
    },
    //新增
    keep() {
      this.$emit("skillEmit",false,true)
      this.$http.post(`/resume/${2}/skill`,{skill:this.formInline.technicalName,level:this.formInline.level}).then(res => {
        if (res.data.code == 200) {
          
          console.log(res);
        }
      });
    },
    //更新
    // keep() {
    //   this.$emit("skill",this.formInline.technicalName,this.formInline.level)
    //   this.$http.put(`/resume/${2}/skill/${1}`,{skill:this.formInline.technicalName,level:this.formInline.level}).then(res => {
    //     if (res.data.code == 200) {
    //       console.log(res);
    //     }
    //   });
    // },
  }
}
</script>
<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 30px
  .cancel:hover
    background #1f368d  
    color white
  .el-button
    width 94px 
    height 34px
    vertical-align middle
    padding 0px    
</style>