<template>
    <div class="from">
        <div class="fromfirst">
             <div class="fromfirst-one"><span>{{fromData.school}}</span></div>
             <div class="fromfirst-one"><span>{{fromData.major}}/{{fromData.degree}}</span></div>
        </div>
        <div class="fromsecond">
            <div class="fromfirst-two"><span>{{fromData.beginTime | formatDateOne}}/{{fromData.endTime | formatDateOne}}</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'from',
        props:['fromData'],
        data() {
            return {
            };
        },
        created () {
            // console.log(this.fromData+'2erwerwerwerwerwe')
            //如果后台有个人之前填的数据，需要先把数据格式化后复制给子组件，可以进行修改操作
            this.ruleForm = Object.assign({},this.fromData)
            if(this.fromData.degree == 3) {
                this.fromData.degree = '高中'
            }else if(this.fromData.degree == 1) {
                this.fromData.degree = '初中及以下'
            }else if(this.fromData.degree == 2) {
                this.fromData.degree = '职中'
            }else if(this.fromData.degree == 4) {
                this.fromData.degree = '大专'
            }else if(this.fromData.degree == 5) {
                this.fromData.degree = '本科'
            }else if(this.fromData.degree == 6) {
                this.fromData.degree = '硕士'
            }else if(this.fromData.degree == 7) {
                this.fromData.degree = '博士'
            }
        },
        methods: {
            onSubmit () {
                //如果每次保存都要存后台，就在这里写发送时间，如果需要整体保存，就在父组件整体操作
                const flag = {
                    index:this.index,
                    data:this.ruleForm
                }
                this.$emit('setFromList',flag);
            }
        },
        mounted() {
            
        }
    }
</script>

<style lang="stylus" scoped>
  .from
    display flex
    flex-direction row
    font-size 15px
    color #61687c
    text-align left
    margin 0 0 0 0
    .fromfirst
      margin 0 0 0 50px
      width 150px
      .fromfirst-one
        margin 10px 0 0 0
    .fromsecond
      margin 0 0 0 155px
      .fromfirst-two
        margin 10px 0 0 0
</style>
