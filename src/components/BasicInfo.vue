<template>
  <div class="basicinfo">
    <div class="basicinfo-first">
      <div class="basicinfo-left">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="basicinfo-right" style="margin:53px 0 0 0">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="姓名" style="margin:0 40px 0 0">
            <el-input style="width:168px;height:36px" v-model="formInline.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="求职状态">
            <el-select style="width:168px;height:36px" v-model="formInline.jobHunting" placeholder>
              <el-option label value="积极找工作"></el-option>
              <el-option label value="随便看看"></el-option>
              <el-option label value="暂时不换工作"></el-option>
            </el-select>
          </el-form-item><br>
          <el-form-item label="性别" style="margin:0 40px 0 0">
            <el-radio-group v-model="formInline.gender">
              <el-radio-button  label="男性"></el-radio-button>
              <el-radio-button  label="女性"></el-radio-button>
            </el-radio-group>
          </el-form-item>
           <el-form-item label="工作年限" style="margin-left:30px">
            <el-date-picker
              style="width:168px;height:36px"
              type="date"
              placeholder="选择日期"
             v-model="formInline.workingSeniority"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="所在城市" style="margin:0 40px 0 -30px">
            <el-select style="width:168px;height:36px" v-model="formInline.city" placeholder>
              <el-option label value="上海"></el-option>
              <el-option label value="天津"></el-option>
              <el-option label value="北京"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="最高学历">
            <el-select style="width:168px;height:36px" v-model="formInline.educationLevel" placeholder>
              <el-option label value="初中及以下"></el-option>
              <el-option label value="中专/职中"></el-option>
              <el-option label value="高中"></el-option>
              <el-option label value="大专"></el-option>
              <el-option label value="本科"></el-option>
              <el-option label value="硕士"></el-option>
              <el-option label value="博士"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="生日" style="margin:0 40px 0 0">
            <el-date-picker
              style="width:168px;height:36px"
              type="date"
              placeholder="选择日期"
              v-model="formInline.birthday"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="邮箱" style="margin-left:30px">
            <el-input v-model="formInline.email" style="width:168px;height:36px" placeholder></el-input>
          </el-form-item>
          <el-form-item label="手机" style="margin:0 40px 0 0">
            <el-input v-model="formInline.phone" style="width:168px;height:36px" placeholder></el-input>
          </el-form-item>
          <el-form-item label="政治面貌">
            <el-select style="width:168px;height:36px" v-model="formInline.politicCountenance" placeholder>
              <el-option label value="群众"></el-option>
              <el-option label value="团员"></el-option>
              <el-option label value="中共党员"></el-option>
            </el-select>
          </el-form-item><br>
          <el-form-item style="float:right;margin:0 100px 20px 0">
            <el-button  @click="cancel()" style="margin:0 10px 0 0" plain>取消</el-button>
            <el-button type="primary" @click="keep()">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "basicinfo",
  data() {
    return {
      formInline: {
        name: "",
        jobHunting: "",
        gender: "",
        workingSeniority: "",
        city: "",
        educationLevel: "",
        birthday: "",
        email: "",
        phone: "",
        politicCountenance: ""
      }
    };
  },
  methods: {
    keep() {
      this.$http.put(`/resume/${3}/base`,
      {overseasAge:2,workYear:966517171000,politicalStatus:2,birthday:965232000000,county:'徐汇区',fullName:'zhao',sex:1,province:'上海市',degree:4,email:'1224374619@qq.com',phone:'15516956795',isGraduate:false})
      .then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
    },
    cancel() {
      const h = this.$createElement;
      this.$msgbox({
        message: h(
          "div",
          {
            style: "height:200px"
          },
          [
            h(
              "p",
              {
                style: "font-size:20px;line-height:200px"
              },
              "当前编辑内容未完成，是否继续操作？ "
            ),
            h(
              "p",
              {
                style: "font-size:14px;margin-top:-80px"
              },
              "退出编辑后，更新的内容不会自动保存 "
            )
          ]
        ),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.basicinfo
  width 770px
  .basicinfo-first 
    width 800px
    display flex
    flex-direction row
    .basicinfo-left 
      .avatar-uploader 
        width 80px
        height 80px
        margin 32px 0 0 42px
    .cancel:hover
      background #1f368d  
      color white
      border-color #1f368d
    .keep:hover
      border-color #7d8dcd 
            
</style>
<style lang="stylus">
  .el-cascader__label:hover
    border-color blue
  .avatar-uploader .el-upload
    border 1px dashed #d9d9d9
    border-radius 39px
    cursor pointer
    position relative
    overflow hidden
  .avatar-uploader .el-upload:hover
    border-color #409EFF
  .avatar-uploader-icon
    font-size 28px
    color #8c939d
    width 78px
    height 78px
    line-height 78px
    text-align center
  .avatar
    width 78px
    height 78px
    display block
    
</style>