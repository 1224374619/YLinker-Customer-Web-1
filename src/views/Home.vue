<template>
  <div class="home">
    <nav>
      <img src="https://sxsimg.xiaoyuanzhao.com/static/new_main/img/logo.png?v=ca7e7ee7a9339caf25d8e12d055eb1e8" />
      <div class="menu">
        <div class="btn-set">
          <button>登陆</button>
          <button>注册</button>
        </div>
        <div class="btn-single">
          <button>企业入口</button>
        </div>
      </div>
    </nav>
    <div class="header">
      <div class="map">asdfasdf</div>
      <div class="slogan">军工人才 领先世界</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      name: 11
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    margin 0
    nav
      display flex
      flex-direction row
      height 70px
      padding 10px
      align-content center
      align-items center
      img
        height 40
        margin 0 20px
      .menu
        display flex
        flex 1
        height 100%
        justify-content flex-end
        align-items center
        .btn-set
          margin 0 10px
          button 
            font-size 15px
            background none
            border none
            border-right solid 1px lightgrey
            &:last-child
              border none
        .btn-single
          margin 0 10px
          button 
            padding 10px 20px
            border solid 1px lightgrey
            font-size 14px
    .header
      border-bottom: solid 1px darkgray
      height 600px
      display flex
      flex-direction row
      justify-content center
      align-items center
      .map
        flex 3
      .slogan
        flex 2
            
</style>

