<template>
  <div>
    <nav>
      <div class="nav-body">
        <img @click="gotoHomeUI" :src="require('../assets/images/logo.png')" />
        <div class="menu">
          <div class="group" v-if="!ctlHideMenus">
                 <router-link to="/home" index="1">首页</router-link>
                        <router-link to="/joblist" index="2">职位</router-link>
                        <router-link to="/gap" index="3">简历</router-link>
                 <router-link to="/aboutus" index="4">联系我们</router-link>
          </div>
          <div class="btn-set" v-if="!hasLogin">
            <router-link tag="button" :to="{name:'login'}" index="1">登录</router-link>
            <router-link tag="button" :to="{name:'register'}" index="2">注册</router-link>
          </div>
          <div class="user-operations" v-else>
            <el-dropdown trigger="click">
              <el-badge class="item" style="margin:5px 10px 0 0">
                <img style="height:18px" :src="require('../assets/images/1111.png')" />
              </el-badge>
              <el-dropdown-menu slot="dropdown" style="width:372px;height:200px;">
                <div style="overflow:scroll;width:372px;height:180px;overflow-x:hidden">
                  <div class="badge" v-for="item in notificationlist" :key="item">
                    <span style="color:#4a4a4a;font-size:12px;margin-left:10px;">{{item.description}}</span>
                    <span style="color:#909090;font-size:10px;margin-left:35px;">昨天15：30</span>
                  </div>
                </div>
                <div>
                  <span
                    style="font-size:14px;color:#1f368d;margin-left:10px;line-height:30px"
                  >全部标为已读</span>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
            <span style="line-height:60px;color:white;padding:0 10px 0 0;font-size:15px;">李康</span>
            <el-dropdown placement="bottom-start" @command="dealMenuClick">
              <img :src="require('../assets/images/tou.png')" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="personal">个人信息</el-dropdown-item>
                <el-dropdown-item @click.native="inforchange">账号设置</el-dropdown-item>
                <el-dropdown-item @click.native="detrusion" divided command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'customized-nav',
        props: {
            ctlHideMenus: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
              notificationlist:[
              {
                description:'你投递的“产品经理”(xx公司) 已被查看简历'
              },
              {
                description:'你投递的“产品经理”(xx公司) 已被查看简历'
              },
              {
                description:'你投递的“产品经理”(xx公司) 已被查看简历'
              },
              ] 
            }
        },
        computed: mapState({
            hasLogin(state) {
                return state.hasLogin;
            }
        }),
        methods: {
          //退出
            detrusion() {
              this.$http.get('/logout').then(res => {
                if (res.data.code == 200) {
                  console.log(res);
                }
              });
            },
            gotoHomeUI() {
                this.$router.push({path: '/'});
            },
            gotoLoginUI() {
                this.$router.push({name: 'login'});
            },
            gotoRegisterUI() {
                this.$router.push({name: 'register'});
            },
            inforchange() {
                 this.$router.push({path:'/inforchange'})
            },
            personal() {
                 this.$router.push({path:'/personal'})
            },
            //用户通知
            notification() {
              this.$http.get('/notification/recent').then(res => {
                if (res.data.code == 200) {
                  console.log(res) 
                }
              });
            } 
        },
        created () {
          this.notification()
        }
    }
</script>

<style lang="stylus" scoped>
    nav
        z-index 100
        background-color #1f368d
        box-shadow 0px 1px 9px #ccc
        width 100%
        position fixed
        top 0
        display flex
        flex-direction row
        height 70px
        align-content center
        align-items center
        .nav-body
            display flex
            flex-direction row
            align-items center
            margin auto
            width 1280px
            min-width 1024px
            height 100%
            img
                height 40
                margin 0 20px
                cursor pointer  
            .menu
                display flex
                flex 1
                height 100%
                justify-content flex-end
                align-items center
                .group
                    display flex
                    height 100%
                    flex 1
                    margin 0 50px
                    a
                        width 100px
                        color white
                        text-decoration none
                        display flex
                        align-items center
                        justify-content center
                        &.router-link-exact-active
                            color #6EC5D2
                            border-bottom solid 3px #6EC5D2
                .user-operations
                    cursor pointer
                    display flex
                    flex-direction row
                    .badge
                      border 1px solid red  
                    img
                        width 26px
                        height 26px
                        border-radius 50%
                        margin 17px 0 0 0
                .btn-set
                    margin 0 15px
                    button
                        cursor pointer
                        font-size 15px
                        background none
                        border none
                        padding 0 13px
                        border-right solid 1px lightgrey
                        color white
                        &:last-child
                            border none
</style>
<style lang="stylus" scoped>
  .badge
    height 30px 
    line-height 30px 
  .badge:hover
    background #e5e8f5
</style>