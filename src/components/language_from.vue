<template>
   <div class="from">
        <span style="margin:15px 0 0 50px;line-height:10px">英语</span>
        <span style="margin:15px 0 0 106px;color:#61687c">听说能力良好</span>
        <span style="margin:15px 255px 0 111px;color:#61687c">读写能力良好</span>
    </div>
</template>

<script>
    export default {
        name:'progect_from',
        props:['fromData','index'],
        data() {
            return {
                ruleForm: {
                   languages:"",
                   listenAbility:"",
                   readAbility:"",
                },
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
    font-size 15px
    color #1f368d
</style>