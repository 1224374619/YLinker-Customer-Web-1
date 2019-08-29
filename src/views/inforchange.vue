<template>
  <div class="inforchange">
    <div class="inforchange-left" v-if="inforchangeLeft">
      <div class="left">
        <a href="#" :class="{active:active===1}" class="password" @click="handleActive(1)">修改密码</a>
        <span class="left-line"></span>
        <a href="#" :class="{active:active===2}" class="phone" @click="handleActive(2)">换绑手机</a>
      </div>
    </div>
    <div class="inforchange-right" v-if="active===1">
      <el-form :model="ruleForm" :rules="rules" style="width:400px;margin-left:150px" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="手机号" style="margin:20px 0 10px 0">
          <span style="font-size:14px;color:#1f368d;margin-left:-180px">15513779331</span>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
            <captcha v-model="ruleForm.code" />
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <password-input v-model="ruleForm.newPassword" placeholder="请输入新密码（6-24位数字和字母）" />
        </el-form-item>
        <el-form-item label="确认密码" prop="checknewPassword">
          <password-input v-model="ruleForm.checknewPassword" placeholder="请确认输入新密码" />
        </el-form-item>
        <el-form-item>
          <el-button style="width:270px;height:43px" @click="submitForm('ruleForm')" type="primary">重置密码</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="inforchange-right" v-if="active===2">
      <el-form :model="newRuleForm" :rules="newRules" style="width:400px;margin-left:150px" ref="newRuleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="手机号" style="margin:20px 0 10px 0">
          <span style="font-size:14px;color:#1f368d;margin-left:-180px">15513779331</span>
        </el-form-item>
         <el-form-item label="当前登录密码" prop="nowPassword">
            <password-input v-model="newRuleForm.nowPassword" />
          </el-form-item>
        <el-form-item label="新手机号" prop="newPhone">
          <span><el-input style="width:270px;height:43px" v-model="newRuleForm.newPhone" placeholder="请确认输入新手机号"></el-input></span>
        </el-form-item>
        <el-form-item label="验证码" prop="newCode">
            <captcha v-model="newRuleForm.newCode" />
        </el-form-item>
        <el-form-item>
          <el-button  @click="phoneSubmitForm('newRuleForm')" style="width:270px;height:43px" type="primary">换绑手机</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="inforchangeback" v-if="inforchangeBack">
      <span><i class="el-icon-success"></i></span>
      <span>换绑成功，请用新手机号重新登陆</span>
      <span><el-button class="button" type="primary">重新登陆</el-button></span>
    </div>
  </div>

</template>

<script>

import Captcha from 'components/captcha.vue';
import PasswordInput from 'components/password-input.vue';
  export default {
    name: 'inforchange',
    components: {
    Captcha,
    PasswordInput,
  },
    data() {
      return {
        phone: '',
        password: '',
        active: 1,
        inforchangeLeft: true,
        inforchangeBack: false,
        ruleForm:{
          code:'',
          newPassword:'',
          checknewPassword:'',
        },
        newRuleForm:{
          newCode:'',
          nowPassword:'',
          newPhone:'',
        },
        rules: {
          code: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
          ],
          newPassword: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
          ],
          checknewPassword: [
            { required: true, message: '请输入正确的密码', trigger: 'blur' },
          ],
        },
        newRules: {
          newCode: [
            { required: true, message: '请输入验证码', trigger: 'change' }
          ],
          nowPassword: [
            { required: true, message: '请输入正确的密码', trigger: 'blur' },
          ],
          newPhone: [
            { required: true, message: '请选择新手机号', trigger: 'blur' },
            { pattern:/^[1][3578][0-9]{9}$/,message: '请输入正确的手机号', trigger: ['change','blur'] },
          ],
        }
      }
    },
    methods: {
      //获取验证码
      codeclick() {
        this.$http.post('/account/vcode').then(res => {
              if (res.data.code == 200) {
                console.log(res);
              }
            });
      },
      handleActive(index) {
        this.active = index
      },
      //重置密码
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            // this.$http.put('/account/password', { password: "", phone: "", vcode: "" }).then(res => {
            //   if (res.data.code == 200) {
            //     console.log(res);
            //   }
            // });
             alert('submit!');
          } else {
            // this.active = 0
            // this.inforchangeLeft = false
            // this.inforchangeBack = true
            // return false;
          }
        });
      },
      //修改手机号
      phoneSubmitForm(aa) {
        this.$refs[aa].validate((valid) => {
          if (valid) {
            // this.$http.put('/account/phone', { password: "", phone: "", vcode: "" }).then(res => {
            //   if (res.data.code == 200) {
            //     console.log(res);
            //   }
            // });
            alert('submit!');
          } else {
            // this.active = 0
            // this.inforchangeLeft = false
            // this.inforchangeBack = true
            // return false;
          }
        });
      },
    },
    created() {
    },
  }
</script>

<style lang="stylus" scoped>
  .inforchange
    display flex
    flex-direction row
    .inforchange-left
      margin 90px 0 0 0
      .left
        width 180px
        height 122px
        background white
        display flex
        flex-direction column
        font-family PingFangSC-Semibold
        color #1f368d
        font-size 16px
        font-weight 550
        .left-line
          width 180px
          border 0.5px solid #eeeeee
          margin 8px 0 0 0
        .password
          margin 32px 0 0 0
          color #1f368d
          text-decoration none
          border 1px solid white
        .phone
          margin 8px 0 0 0
          color #1f368d
          text-decoration none
        .active
          color #617dcb
    .inforchange-right
      width 784px
      margin 90px 0 0 36px
      background white
      color #1f368d
      .cancel:hover
        background #1f368d
        color white
        border-color #1f368d
    .inforchangeback
      width 656px
      height 360px
      margin 90px 348px 0 436px
      display flex
      flex-direction column
      .button
        margin 25px 0 0 0
        width 270px
        height 43px
    .inforchangeback span:nth-child(1)
      margin 61px 0 0 0
      font-size 37px
      color green
    .inforchangeback span:nth-child(2)
      margin 25px 0 0 0
      font-family PingFangSC-Regular
      color #1f368d
      font-size 14px
</style>
<style lang="stylus">
  .el-input:hover
    border-color #7d8dcd
  .el-form-item__label
    color #1f368d
</style>
