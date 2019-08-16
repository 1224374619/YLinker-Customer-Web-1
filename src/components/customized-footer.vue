<template>
  <div class="footer">
    <div class="appendix" v-if="!showSimple">
      <div class="group">
        <span style="text-align:left">使用与帮助</span>
        <ul>
          <li>企业介绍</li>
          <li>投诉建议</li>
          <li>用户协议</li>
        </ul>
      </div>
      <div class="group">
        <span>联系方式</span>
        <ul>
          <li>公司：银领科技网络有限公司</li>
          <li>地址：上海市徐汇区梅陇路130号</li>
          <li>邮编：12345</li>
          <li>电话：123456789</li>
          <li>邮箱：123456789@qq.com</li>
        </ul>
      </div>
    </div>
    <!-- <div class="copyright">
      <p>©2019 银领人才网 | 沪ICP备xxxxxxx号-1</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'customized-footer',
  props: {
    showSimple: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  .footer
    background-color #f0f0f0
    margin 0 0 50px 0
    .appendix
      display flex
      width 760px
      margin auto
      flex-direction row
      .group
        display flex
        flex-direction column
        color #455379
        margin-right 140px
        margin-top 21px
        span
          font-size 15px
          font-weight 500
          color #455379
          text-align left 
        ul
          list-style-type none
          padding 0
          text-align left
          margin 0 0 0 0
          li
            margin 10px 0
            font-size 12px
            color #455379
    .copyright
      font-size 12px
      color #999
      padding 10px 0
</style>
