<template>
    <div class="personalinformation">
        <div class="information">
            <div class="informationFloat"><span>李康</span><span>离职-随时到岗</span></div><br>
            <div class="informationSecond"><span>现居上海</span><span>|</span><span>1-3年海外工作经验</span><span>23岁(1996/09/09)</span></div><br>
            <div class="informationThird"><span>手机：1222112233</span><span>|</span><span>邮箱：2222222</span><span>政治面貌：党员</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'personalinformation_from',
        data() {
            return {
            };
        },
    }
</script>

<style lang="stylus" scoped>
  .personalinformation
    .information
      display flex
      flex-direction column
      margin -140px 0 -250px 0
      .informationFloat
        margin 0 230px 0 0
      .informationFloat span:nth-child(1)
        color #1f368d
        font-weight bold
        font-size 30px
      .informationFloat span:nth-child(2)
        padding 0 0 0 20px
        font-size 14px
      .informationSecond span
        float left
        font-size 14px
        color black
        padding 10px 20px 0 0
      .informationThird span
        float left
        font-size 14px
        color black
        padding 10px 20px 0 0
</style>