<template>
  <div class="from">
    <div style="margin:5px 0 0 50px;color:#61687c;line-height:10px;width:60px">{{fromData.skill}}</div>
    <div style="margin:0 0 0 76px;color:#61687c;width:60px">{{fromData.level}}</div>
    <div style="margin:0 0 0 141px">
      <a href="#" style="color:#61687c">{{fromData.cert}}<img style="margin:0 0 0 5px" :src="require('../assets/images/090.png')" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "progect_from",
  props: ["fromData"],
  data() {
    return {
      // ruleForm: {
      //    technicalName: '',
      //    level: ''
      // },
    };
  },
  created() {
      console.log(this.fromData.level)
    //如果后台有个人之前填的数据，需要先把数据格式化后复制给子组件，可以进行修改操作
    this.ruleForm = Object.assign({}, this.fromData);
    
    if (this.fromData.level == 1) {
      this.fromData.level = "一般";
    } else if (this.fromData.level == 2) {
      this.fromData.level = "良好";
    } else if (this.fromData.level == 3) {
      this.fromData.level = "熟练";
    } else if (this.fromData.level == 4) {
      this.fromData.level = "精通";
    }
  },
  methods: {
    onSubmit() {
      //如果每次保存都要存后台，就在这里写发送时间，如果需要整体保存，就在父组件整体操作
      const flag = {
        index: this.index,
        data: this.ruleForm
      };
      this.$emit("setFromList", flag);
    },
    on() {
      document.getElementById("a").style.color = "#8897d0";
    },
    out() {
      document.getElementById("a").style.color = "#551a8b";
    }
  },
  computed() {
      
  }
};
</script>

<style lang="stylus" scoped>
  .from
     display flex
     flex-direction row
     font-size 15px
     color #1f368d
     text-align left
</style>