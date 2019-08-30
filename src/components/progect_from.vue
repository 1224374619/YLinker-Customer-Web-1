<template>
    <div class="from">
        <div style="display:flex;flex-direction:row">
            <div class="fromfirst">
                <div class="fromfirst-one"><span>{{companyName}} | {{itemName}}</span></div>
                <div class="fromfirst-one" style="color:#61687c"><span>产品经理</span></div>
            </div>
            <div class="fromsecond">
                <div class="fromfirst-two" style="color:#61687c"><span>{{schoolTime}}/至今</span></div>
            </div>
        </div>
        <div style="margin:10px 0 0 47px;color:#61687c">
            <span>个人职责：<span>{{duty}}</span></span>
        </div>
        <div style="margin:10px 0 0 47px;color:#61687c">
            <span>项目介绍：<span>{{project}}</span></span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'progect_from',
        props:['fromData','index'],
        data() {
            return {
                   itemName: '银领人才',
                   companyName: '银领',
                   schoolTime: '2018/09',
                   duty: '文案文案文案文案文案文案文案文案文案文案文案文案文案',
                   project: '文案文案文案文案文案文案文案文案文案文案文案文案文案',
            };
        },
        created(){
            //如果后台有个人之前填的数据，需要先把数据格式化后复制给子组件，可以进行修改操作
            this.ruleForm = Object.assign({},this.fromData)
        },
        methods: {
            onSubmit(){
                //如果每次保存都要存后台，就在这里写发送时间，如果需要整体保存，就在父组件整体操作
                const flag = {
                    index:this.index,
                    data:this.ruleForm
                }
                this.$emit('setFromList',flag);
            }
        }
    }
</script>

<style lang="stylus" scoped>
 .from
    display flex
    flex-direction column
    font-size 15px
    color #1f368d
    text-align left
    margin 0 0 0 0
    .fromfirst 
      margin 0 0 0 50px
      .fromfirst-one
        margin 10px 0 0 0 
    .fromsecond 
      margin 0 0 0 235px
      .fromfirst-two
        margin 8px 0 0 -16px   
</style>