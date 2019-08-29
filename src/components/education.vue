<template>
  <div class="education">
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      :rules="rules"
      ref="formInline"
      label-width="80px"
    >
      <el-form-item label="学校名称" style="margin:0 0 0 20px" prop="schoolName">
        <el-input style="width:202px;height:36px" v-model="formInline.schoolName" placeholder></el-input>
      </el-form-item>
      <el-form-item label="在校时间" prop="endDate">
            <!-- <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" style="width:140px;height:36px" v-model="startDate"></el-date-picker>
            </el-form-item>
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" style="width:140px;height:36px" v-model="endDate"></el-time-picker>
            </el-form-item> -->
      <el-form-item prop="date1">      
        <el-date-picker
          prop="startDate"
          style="width:140px;height:36px"
          v-model="startDate"
          type="date"
          placeholder="选择日期"
        ></el-date-picker>
      </el-form-item>  
        <span>--</span>
      <el-form-item prop="date1">       
        <el-date-picker
          prop="endDate"
          style="width:140px;height:36px"
          v-model="endDate"
          type="date"
          :picker-options="endDateOpt"
          placeholder="选择日期"
        ></el-date-picker>
      </el-form-item>
      </el-form-item>
      <el-form-item label="专业" style="margin:0 0 0 0" prop="major">
        <el-input style="width:202px;height:36px" v-model="formInline.major" placeholder></el-input>
      </el-form-item>
      <el-form-item label="学历" style="margin:0 80px 0 0" prop="qualifications">
        <el-select style="width:202px;height:36px" v-model="formInline.qualifications" placeholder>
          <el-option label value="初中及以下"></el-option>
          <el-option label value="大专/职中"></el-option>
          <el-option label value="高中"></el-option>
          <el-option label value="大专"></el-option>
          <el-option label value="本科"></el-option>
          <el-option label value="硕士"></el-option>
          <el-option label value="博士"></el-option>
        </el-select>
      </el-form-item>
      <br />
      <el-form-item label="是否统招" style="width:355px;margin:10px 0 0 0" prop="general">
        <el-radio style="margin:0 30px 0 0;" v-model="formInline.general" label="1">是</el-radio>
        <el-radio style="margin:0 120px 0 0;" v-model="formInline.general" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="学历" style="visibility:hidden">
        <el-select style="width:242px;height:36px" placeholder>
          <el-option label value="shanghai"></el-option>
          <el-option label value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <br />
      <el-form-item style="margin:0 0 20px 450px">
        <el-button @click="cancel" style="margin:0 10px 0 0" plain>取消</el-button>
        <el-button @click="keep('formInline')" type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "education",
  props: ["educationDegree"],
  data() {
    return {
      startDate: "",
      endDate: "",
      formInline: {
        schoolName: "",
        schoolTime: "",
        major: "",
        general: "",
        qualifications: ""
      },
      rules: {
        schoolName: [
          { required: true, message: "请输入学校名称", trigger: "blur" }
          // { min: 0, max: 24, message: '长度在 0 到 24 个字符', trigger: 'blur' },
          // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
        ],
        endDate: [
          { required: true, message: "请选择在校时间", trigger: "blur" }
        ],
        major: [
          {
            type: "date",
            required: true,
            message: "请填写专业",
            trigger: "change"
          },
          { min: 0, max: 36, message: "长度在 0 到 36 个字符", trigger: "blur" }
        ],
        general: [{ required: true, message: "请选择性别", trigger: "change" }],
        qualifications: [
          { required: true, message: "请选择学历", trigger: "change" }
        ]
      },
      //设置当前日期之后不能选中
       endDateOpt: {
          disabledDate(time) {
            return time.getTime() > Date.now();
            return time.getTime() < this.startDate; 
          }
       }
    };
  },
  methods: {
    cancel() {
      this.$emit("sendiptVal", false, true);
    },
    //新增
    keep(formName) {
      // this.$emit("sendiptVal",false,true)
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.$router.push({path:'/resume'})
        } else {
          this.$router.push({ path: "/resume" });
          return false;
        }
      });
      // this.$http.post(`/resume/${2}/education`, { beginTime: "", degree: "", major: "",school:''}).then(res => {
      //     if (res.data.code == 200) {
      //       console.log(res);
      //     }
      //   });
    }
    //更新
    // keep() {
    //   this.$emit("skill", this.formInline.technicalName, this.formInline.level);
    //   this.$http
    //     .put(`/resume/${2}/education/${1}`,{beginTime: "",degree: "",major: "",school:''})
    //     .then(res => {
    //       if (res.data.code == 200) {
    //         console.log(res);
    //       }
    //     });
    // }
  },
  created() {
    this.formInline.major = this.educationDegree;
  }
};
</script>

<style lang="stylus" scoped> 
  .el-form-item
    padding 0 0 0 30px
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
