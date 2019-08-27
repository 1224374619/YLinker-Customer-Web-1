<template>
  <div class="jobintension">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="语种" style="margin:0 0 0 20px">
                <el-input style="width:108px;height:36px" v-model="formInline.languages" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="听力能力">
                <el-select style="width:108px;height:36px" v-model="formInline.listenAbility" placeholder="">
                <el-option label="" value="一般"></el-option>
                <el-option label="" value="良好"></el-option>
                <el-option label="" value="熟练"></el-option>
                <el-option label="" value="精通"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="读写能力">
                <el-input style="width:108px;height:36px" v-model="formInline.readAbility" placeholder=""></el-input>
            </el-form-item><br>
            <el-form-item style="margin:0 0 20px 420px">
            <el-button @click='cancel' style="margin:0 10px 0 0" plain>取消</el-button>
            <el-button @click='keep' type="primary">保存</el-button>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>

export default {
  name: 'language',
  data() {
    return {
         formInline: {
          languages: '',
          listenAbility: '',
          readAbility:''
        }
    }
  },
  methods: {
    cancel() {
      this.$emit("languageEmit",false,true)
    },
    //新增
    keep() {
      // this.$emit("skill",this.formInline.technicalName,this.formInline.level)
      this.$emit("languageEmit",false,true)
      this.$http.post(`/resume/${2}/language`,{language:'',listenAndSpeak:'',readAndWrite:''}).then(res => {
        if (res.data.code == 200) {
          console.log(res);
        }
      });
    },
  //   //更新
  //   keep() {
  //     // this.$emit("skill",this.formInline.technicalName,this.formInline.level)
  //     this.$http.put(`/resume/${2}/language/${1}`,{language:'',listenAndSpeak:'',readAndWrite:''}).then(res => {
  //       if (res.data.code == 200) {
  //         console.log(res);
  //       }
  //     });
  // }
  }
}
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 54px
  .cancel:hover
     background #1f368d  
     color white
     border-color #1f368d
  .el-button
    width 94px 
    height 34px
    vertical-align middle
    padding 0px
  .keep:hover
    border-color #7d8dcd    
</style>