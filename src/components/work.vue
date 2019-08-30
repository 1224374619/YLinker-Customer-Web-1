<template>
  <div class="jobintension">
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      :rules="rules"
      ref="formInline"
    >
      <el-form-item label="公司名称" style="margin:0 0 0 10px" prop="post">
        <el-input style="width:242px;height:36px" v-model="formInline.post" placeholder></el-input>
      </el-form-item>
      <el-form-item label="职位名称" prop="postName">
        <el-input style="width:242px;height:36px" v-model="formInline.postName" placeholder></el-input>
      </el-form-item>
      <el-form-item label="行业" style="margin:0 0 0 40px" prop="trade">
        <el-select style="width:242px;height:36px" v-model="formInline.trade" placeholder>
          <el-option label value="shanghai"></el-option>
          <el-option label value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所在部门" prop="branch">
        <el-input style="width:242px;height:36px" v-model="formInline.branch" placeholder></el-input>
      </el-form-item>
      <el-form-item label="税前月薪" style="margin:0 0 0 -16px" prop="monthPay">
        <el-input style="width:242px;height:36px" v-model="formInline.monthPay" placeholder></el-input>
      </el-form-item>
      <el-form-item label="学历" style="visibility:hidden">
        <el-select style="width:242px;height:36px" placeholder>
          <el-option label value="shanghai"></el-option>
          <el-option label value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作描述" style="margin-left:5px" prop="jobDescription"> 
        <el-input type="textarea" v-model="formInline.jobDescription" style="width:583px"></el-input>
      </el-form-item>
      <br />
      <el-form-item style="margin:0 0 20px 450px">
        <el-button @click="cancel" plain style="margin:0 10px 0 0">取消</el-button>
        <el-button @click="keep('formInline')" type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "work",

  data() {
    return {
      formInline: {
        jobDescription: "",
        monthPay: "",
        branch: "",
        trade: "",
        postName: "",
        post: ""
      },
      rules: {
        post: [
          { required: true, message: "请输入公司名称", trigger: "blur" }
          // { min: 0, max: 24, message: '长度在 0 到 24 个字符', trigger: 'blur' },
          // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
        ],
        postName: [
          {required: true, message: "请输入职位名称", trigger: "blur" },
          { min: 0, max: 50, message: '长度在 0 到 50 个字符', trigger: 'blur' },
        ],
        trade: [
         { required: true, message: "请输入行业名称", trigger: "blur" }
        ],
        branch: [
         { required: true, message: "请输入所在部门", trigger: "blur" }
        ],
        monthPay: [
          
        { min: 0, max: 7, message: '长度在 0 到 7 个字符', trigger: 'blur' },],
        jobDescription: [
          { min: 0, max: 800, message: '长度在 0 到 800 个字符', trigger: 'blur' },
          { required: true, message: "请填写工作描述", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    cancel() {
      this.$emit("workEmit", false, true);
    },
    //新增
    keep(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.$http
          //   .post(`/resume/${2}/work`, {
          //     beginTime: "",
          //     company: "",
          //     position: ""
          //   })
          //   .then(res => {
          //     if (res.data.code == 200) {
          //       console.log(res);
          //     }
          //   });
          // this.$emit("workEmit", false, true);
        } else {
          return false;
        }
      });
    }
    //   //更新
    //   keep() {
    //     this.$emit("skill",this.formInline.technicalName,this.formInline.level)
    //     this.$http.put(`/resume/${2}/work/${1}`,{beginTime:'',company:'',position:''}).then(res => {
    //       if (res.data.code == 200) {
    //         console.log(res);
    //       }
    //     });
    // },
  }
};
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