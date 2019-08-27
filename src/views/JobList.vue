<template>
  <div class="joblist">
    <div class="joblist-search">
        <el-select  v-model="value" @focus="next"  style="width:77px;height:44px;font-size:14px;" >
          <el-option label="上海" value=""></el-option>
        </el-select>
        <span class="joblist-after"></span>
        <el-select   slot="prepend"  v-model="company" @change="getVendorId" style="width:77px;height:44px;font-size:14px" :label-in-value="true">
          <el-option
            v-for="item in perList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
          <!-- <option v-for="item in perList" :value="item.value" :key="item.value">{{ item.label }}</option> -->
        </el-select>
        <span class="joblist-after"></span>
        <el-input style="width:600px;" placeholder="请输入内容"></el-input>
        <el-button class="search-button" style="border-radius:0 2px 2px 0" type="primary" @click="search"  icon="el-icon-search">搜索</el-button>
    </div>
    <div class="joblist-article">
        <div class="article" style="margin-top:-2px">
            <el-radio-group size="small" v-model="district">
            <span style="margin-left:-48px" class="article-title">行政区：</span>
            <el-radio-button class="article-content" label="1">黄埔区</el-radio-button>
            <el-radio-button class="article-content" label="2">徐汇区</el-radio-button>
            <el-radio-button class="article-content" label="3">长宁区</el-radio-button>
            <el-radio-button class="article-content" label="4">浦东新区</el-radio-button>
            <el-radio-button class="article-content" label="5">奉贤区</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article" style="margin-top:-42px">
            <el-radio-group size="small" v-model="workExperience">
            <span style="margin-left:-50px" class="article-title">工作经验：</span>
            <el-radio-button class="article-content" label="1">经验不限</el-radio-button>
            <el-radio-button class="article-content" label="2">应届生</el-radio-button>
            <el-radio-button class="article-content" label="3">1-3年</el-radio-button>
            <el-radio-button class="article-content" label="4">3-5年</el-radio-button>
            <el-radio-button class="article-content" label="5">10年以上</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article" style="margin-top:-42px">
            <el-radio-group size="small" v-model="Education">
            <span style="margin-left:-50px" class="article-title">学历要求：</span>
            <el-radio-button class="article-content" label="1">学历不限</el-radio-button>
            <el-radio-button class="article-content" label="2">本科</el-radio-button>
            <el-radio-button class="article-content" label="3">硕士</el-radio-button>
            <el-radio-button class="article-content" label="4">博士</el-radio-button>
            <el-radio-button class="article-content" label="5">大专</el-radio-button>
            <el-radio-button class="article-content" label="6">中技</el-radio-button>
            <el-radio-button class="article-content" label="7">中专</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article" style="margin-top:-42px">
            <el-checkbox-group size="small" v-model="monthPay">
            <span style="margin-left:-50px" class="article-title">月薪范围：</span>
            <el-checkbox-button class="article-content" label="1">3k以下</el-checkbox-button>
            <el-checkbox-button class="article-content" label="2">3k-5k</el-checkbox-button>
            <el-checkbox-button class="article-content" label="3">5k-10k</el-checkbox-button>
            <el-checkbox-button class="article-content" label="4">10k-15k</el-checkbox-button>
            <el-checkbox-button class="article-content" label="5">15k-20k</el-checkbox-button>
            <el-checkbox-button class="article-content" label="6">20k-30k</el-checkbox-button>
            <el-checkbox-button class="article-content" label="7">30k-50k</el-checkbox-button>
            <el-checkbox-button class="article-content" label="8">50k以上</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div class="article" style="margin-top:-42px">
            <el-radio-group size="small" v-model="workState">
            <span style="margin-left:-50px" class="article-title">工作类型：</span>
            <el-radio-button class="article-content" label="1">全职</el-radio-button>
            <el-radio-button class="article-content" label="2">兼职</el-radio-button>
            <el-radio-button class="article-content" label="3">实习</el-radio-button>
            <el-radio-button class="article-content" label="4">校园</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article" style="margin-top:-42px">
            <el-radio-group size="small" v-model="industry">
            <span style="margin-left:-50px" class="article-title">公司行业：</span>
            <el-radio-button class="article-content" label="1">行业</el-radio-button>
            <el-radio-button class="article-content" label="2">行业</el-radio-button>
            <el-radio-button class="article-content" label="3">行业</el-radio-button>
            <el-radio-button class="article-content" label="4">行业</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article" style="margin-top:-42px">
            <el-checkbox-group size="small" v-model="scale">
            <span style="margin-left:-50px" class="article-title">公司规模：</span>
            <el-checkbox-button  class="article-content" label="1">少于50人</el-checkbox-button>
            <el-checkbox-button class="article-content" label="2">50-150人</el-checkbox-button>
            <el-checkbox-button class="article-content" label="3">150-500人</el-checkbox-button>
            <el-checkbox-button class="article-content" label="4">500-1千人</el-checkbox-button>
            <el-checkbox-button class="article-content" label="5">1千-5千人</el-checkbox-button>
            <el-checkbox-button class="article-content" label="6">5千-1万人</el-checkbox-button>
            <el-checkbox-button class="article-content" label="7">1万人以上</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div class="article" style="margin-top:-42px">
            <el-checkbox-group size="small" v-model="releaseTime">
              <span style="margin-left:-50px" class="article-title">发布时间：</span>
              <el-checkbox-button class="article-content" label="1">一天以内</el-checkbox-button>
              <el-checkbox-button class="article-content" label="2">三天以内</el-checkbox-button>
              <el-checkbox-button class="article-content" label="3">五天以内</el-checkbox-button>
              <el-checkbox-button class="article-content" label="4">七天以内</el-checkbox-button>
              <el-checkbox-button class="article-content" label="5">十五天以内</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div class="article-button" v-if="articleButton">
            <el-button @click="cancelButton" class="button" type="primary" style="margin:0 0 16px 564px;width:105px;height:35px;line-height:3px;color:white;font-size:12px;padding:0px;">清除筛选条件</el-button>
            <el-button @click="keepButton" class="button" type="primary" style="margin:0 0 16px 30px;width:105px;height:35px;line-height:3px;color:white;font-size:12px;padding:0px;">立即筛选</el-button>
        </div>
    </div>
    <div class="joblist-content">
      <div class="content" v-for="item in companyList" :key='item'>
        <div class="content-img">
            <img :src="require('../assets/images/company1.jpg')"/>
        </div>
        <div class="content-infor">
            <span>{{item.companyName}}</span>
            <span>上海 | {{item.size}} | {{item.industry}}</span>
        </div>
        <div class="content-button">
            <span>
                <el-button @click.native="position"  class="button" type="primary">进入企业主页</el-button>
            </span>
        </div>
        <div class="content-job">
            <span>在招职位<br>{{item.recruitedPositionNum}}</span>
        </div>
        <div class="content-line"></div>
      </div>
    </div>
    <div class="joblist-footer">
      <div class="joblist-hover" style="border:1px solid white" v-for="item in positionList" :key='item'>
        <div class="footer-first" style="margin-top:-20px">
            <span>{{item.positionName}}</span>
            <span>{{item.salaryMin}}-{{item.salaryMax}}k</span>
            <span>{{item.companyName}}</span>
        </div>
        <div class="footer-second">
            <span>上海 徐汇区 | {{item.workAgeMin}}-{{item.workAgeMax}}年 | {{item.degreeMin}}</span>
            <span>今天 {{item.publishedTime}}</span>
            <span>{{item.positionCatalog}} | {{item.size}}</span>
        </div>
        <div class="footer-line"></div>
      </div>  
        <div class="footer-pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
    </div>
    <el-dialog
        class="dialog"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div class="dialog-title">
            <span>热门城市</span>
        </div>
        <div class="dialog-city-first">
            <span>北京</span>
            <span>天津</span>
            <span>大连</span>
            <span>上海</span>
            <span>南京</span>
            <span>苏州</span>
        </div>
        <div class="dialog-city-second">
            <span>杭州</span>
            <span>武汉</span>
            <span>广州</span>
            <span>深圳</span>
            <span>重庆</span>
            <span>成都</span>
        </div>
        <div class="dialog-province">
            <span>按省份选择</span>
        </div>
        <div class="dialog-cascader">
            <el-cascader
                :options="options"
                :show-all-levels="false"
                @change="handleItemChange"
                style="height:36px"
                >
            </el-cascader>
        </div>
        <div style="height:220px"></div>
    </el-dialog>
  </div>
</template>
<script>

export default {
  name: 'joblist',
  components: {
  },
  data() {
    return {
      articleButton:false,
      district:'0',
      workExperience:'0',
      Education:'0',
      monthPay:[],
      workState:'0',
      industry:'0',
      scale:[],
      releaseTime:[],
      value:'上海',
      company:'职位',
      dialogVisible:false,
      positionIdList:[],
      perList:[
        {
        value:'职位',
        label:'职位'
        },{
        value:'公司',
        label:'公司'
        }],
      companyList:[
        {
          companyName:"银领科技",
          industry:'IT',
          recruitedPositionNum:'12',
          size:'100'
        },
        {
          companyName:"银领科技",
          industry:'IT',
          recruitedPositionNum:'12',
          size:'100'
        },
        {
          companyName:"银领科技",
          industry:'IT',
          recruitedPositionNum:'12',
          size:'100'
        }
      ], 
      positionList:[
        {
          degreeMin:"本科",
          positionCatalog:'IT',
          positionName:'产品经理',
          publishedTime:'19:00',
          salaryMax:'7',
          salaryMin:'2',
          workAgeMax:'5',
          workAgeMin:'1',
          companyName:'迪卡侬',
          size:'300'
        },
        {
          degreeMin:"本科",
          positionCatalog:'IT',
          positionName:'产品经理',
          publishedTime:'19:00',
          salaryMax:'7',
          salaryMin:'2',
          workAgeMax:'5',
          workAgeMin:'1',
          companyName:'迪卡侬',
          size:'300'
        },
      ], 
      options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      };
      
  },
  methods: {
      cancelButton() {
        this.district = ''
        this.workExperience = ''
        this.Education = ''
        this.monthPay = ''
        this.workState = ''
        this.industry = ''
        this.scale = ''
        this.releaseTime = ''
        setTimeout(() => {
            this.articleButton = false
        }, 300);
      },
      search () {
        if(this.company =='职位') {
          this.$http.get('/searched/company').then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
        }else {
          this.$http.post('/searched/position').then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
        }
      },
      next() {
        this.dialogVisible = true
      },
      close() {
          this.dialogVisible = false
      },
      position() {
         this.$router.push({path:'/position'})
      },
      handleItemChange() {
           setTimeout(() => {
            this.close()
        }, 500);
      },
      //获取岗位详情（接口不能用）
      positionId() {
        this.$http.get(`/position/${2}`).then(res => {
          if (res.data.code == 200) {
            this.positionIdList = res.data
            console.log(this.positionIdList);
          }
        });
      },
      // getVendorId(val) {
      //       alert(val.label)
      //       // let that = this;
      //       // // that.addForm.vendorName=val.label;//获取label
      //       // that.company=val.label;//获取value
      //       // alert(that.company)
            
      //   }
 
    },
    watch: {
            //使用这个可以监听data中指定数据的变化,然后触发watch中对应的function的处理
            'monthPay': function () {
              this.articleButton = true
            },
            'district': function () {
              this.articleButton = true
            },
            'workExperience': function () {
              this.articleButton = true
            },
            'Education': function () {
              this.articleButton = true
            },
            'workState': function () {
              this.articleButton = true
            },
            'industry': function () {
              this.articleButton = true
            },
            'scale': function () {
              this.articleButton = true
            },
             'releaseTime': function () {
              this.articleButton = true
            },
        },
    created () {
      this.positionId();
      // console.log(this.monthPay+"78787877")
      // if(this.monthPay == ''&&this.district =='0'&&this.workExperience =='0'&&this.Education =='0'&&this.workState =='0'&&this.industry =='0'&&this.scale ==''&&this.releaseTime =='') {
      //   this.articleButton = false
      // }else{
      //   this.articleButton = true
      // }
    }
}
</script>

<style lang="stylus">
  .joblist
    width 880px
    margin 90px auto 0 
    .joblist-search
      width 880px
      height 44px
      background white
      .joblist-after                  
        border 0.5px solid #dbdbdb
      .el-icon-search:before
        color white
        font-size 17px 
      .el-input__inner
        border 0px solid red
      .search-button
        width 115px
        height 44px
        font-size 12px
        color white
      .search-button:hover
        border-color #7d8dcd   
    .joblist-article
      width 880px
      background white
      border 1px solid white
      margin 11px 0 0 0
      .article
        .article-content
        .article-content-first
          font-family PingFangSC-Regular
          color red 
          font-size 12px
          margin 0 0 0 20px
        .article-title
          font-family PingFangSC-Regular
          font-size 14px
        .el-radio-button__inner
          border 0px solid #617dcb
        .el-radio-button__orig-radio:checked+.el-radio-button__inner
          background-color #617dcb
          box-shadow -1px 0 0 0 #617dcb
          border-radius 0 0 0 0
          color white
        .el-radio-button--small .el-radio-button__inner
          padding 4px 6px 
          line-height 15px
          font-size 12px 
          color #1f368d     
    .joblist-article div:nth-child(1)
      margin 45px 0 0 51px
      text-align left
    .joblist-article div:nth-child(8)
      margin 6px 0 25px 39px
      text-align left  
    .joblist-article div
      margin 6px 0 0 39px
      text-align left
    .joblist-content
      width 880px
      margin 10px 0 0 0
      background white
      display flex
      flex-direction column
      .content  
        .content-line
          width 810px
          border 0.5px solid #f0f0f0
          margin 0 0 0 38px  
        .content-img img
          width 60px
          height 60px
          float left
          margin 10px 0 0 39px
        .content-infor 
          display flex
          flex-direction column 
          float left
          color  #1F368D
        .content-infor span:nth-child(1)
          text-align left
          font-family PingFangSC-Regular
          font-size 16px
          margin 13px 0 8px 8px
        .content-infor span:nth-child(2)
          text-align left
          font-family PingFangSC-Regular
          color #455379 100% 
          font-size 12px
          margin 0 0 8px 8px
        .content-job
          float right
          margin 20px 15px 20px 0
        .content-job span
          font-family PingFangSC-Regular
          color #455379
          font-size 14px  
        .content-button
          float right
          margin 25px 36px 0 0
          .button
            width 105px
            height 35px
            text-align center
            font-size 12px
            line-height 3px
            vertical-align middle
            padding 0px 
          .button:hover
            border-color #7d8dcd 
    .joblist-footer
      width 880px
      margin 10px 0 0 0
      background white
      .joblist-hover:hover 
        background #f7f7f7  
      .footer-first
        display flex
        flex-direction row
        justify-content space-between
      .footer-first span:nth-child(1)
        margin 36px 0 0 38px
        font-family PingFangSC-Regular
        color #1f368d
        font-size 16px
      .footer-first span:nth-child(2)
        margin 36px 425px 0 0
        font-family PingFangSC-Regular
        color #6EC5D2 
        font-size 16px
      .footer-first span:nth-child(3)
        margin 36px 196px 0 0 
        font-family PingFangSC-Regular
        color #1f368d
        font-size 16px 
        font-weight 550
      .footer-second
        display flex
        flex-direction row
        justify-content space-between
      .footer-second span:nth-child(1)
        margin 9px 0 0 38px
        font-family PingFangSC-Regular
        color #1f368d 
        font-size 14px
      .footer-second span:nth-child(2)
        margin 9px 215px 0 0
        font-family PingFangSC-Regular
        color #909090 
        font-size 14px  
      .footer-second span:nth-child(3)
        margin 9px 35px 0 0 
        font-family PingFangSC-Regular
        color #1f368d
        font-size 14px
        width 208px
        text-align left
      .footer-line
        width 810px
        border 0.5px solid #f0f0f0
        margin 10px 0 0 38px
      .footer-pagination
        margin 30px 0 0 0
        padding 0 0 20px 0
        color #1f368d
    .dialog
      display flex
      flex-direction column
      .el-icon-close:before
        font-size 24px
      .dialog-title span
        font-size 14.5px
        font-family PingFangSC-Regular
        color #959595
        float left
        margin -40px 0 0 0
      .dialog-city-first
        font-size 14px
        font-family PingFangSC-Regular
        color #1f368d
        float left
        margin -10px 0 0 0
      .dialog-city-first span
        padding 0 40px 0 0  
      .dialog-city-second
        font-size 14px
        font-family PingFangSC-Regular
        color #1f368d
        text-align left 
        margin 25px 0 0 0
      .dialog-city-second span
        padding 0 40px 0 0
      .dialog-province span
        font-size 14.5px
        font-family PingFangSC-Regular
        color #909090
        float left
        margin 18px 0 0 0
      .dialog-cascader
        float left
        margin 50px 0 0 -73px
</style>
<style lang="stylus">
  .el-icon-arrow-up:before
    color #617dcb
  .el-checkbox-button__inner
    border 0px solid #617dcb
  .el-checkbox-button.is-checked .el-checkbox-button__inner
    background-color #617dcb
    box-shadow -1px 0 0 0 #617dcb
    border-radius 0 0 0 0
    color white
  .el-checkbox-button--small .el-checkbox-button__inner
    padding 4px 6px 
    line-height 15px
    font-size 12px 
    color #1f368d   
</style>
