<template>
  <div class="joblist">
    <div class="joblist-search">
        <el-input v-model="provinceButton" @focus="next" suffix-icon="el-icon-arrow-down" style="width:77px;height:44px;font-size:14px;"></el-input>
        <span class="joblist-after"></span>
        <el-select   slot="prepend" suffix-icon="el-icon-arrow-down"  v-model="company" @change="getVendorId" style="width:77px;height:44px;font-size:14px" :label-in-value="true">
          <el-option
            v-for="item in perList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
          <!-- <option v-for="item in perList" :value="item.value" :key="item.value">{{ item.label }}</option> -->
        </el-select>
        <span class="joblist-after"></span>
        <el-input v-model="searchContent" style="width:600px;" placeholder="请输入内容"></el-input>
        <el-button class="search-button" style="border-radius:0 2px 2px 0" type="primary" @click="search"  icon="el-icon-search">搜索</el-button>
    </div>
    <div class="joblist-article">
        <div class="article" v-if="isshow" style="margin-top:10px">
            <el-radio-group size="small" v-model="district">
            <span style="margin-left:-48px" class="article-title">行政区：</span>
            <el-radio-button class="article-content" :label="index" v-for="(list,index) in sliceArr" :key="index">{{list.tag}}</el-radio-button>
            <!-- <span class="article-title">行政区：</span> -->
            </el-radio-group>
        </div>
        <div class="article"  v-if="isshow">
            <el-radio-group size="small" v-model="workExperience">
            <span style="margin-left:-50px" class="article-title">工作经验：</span>
            <el-radio-button class="article-content" :label="index" v-for="(list,index) in workExperienceList" :key="index">{{list.tag}}</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article"  v-if="isshow">
            <el-radio-group size="small" v-model="Education">
            <span style="margin-left:-50px" class="article-title">学历要求：</span>
            <el-radio-button class="article-content" :label="index" v-for="(list,index) in EducationList" :key="index">{{list.tag}}</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article"  v-if="isshow">
            <el-radio-group size="small" v-model="monthPay">
            <span style="margin-left:-50px" class="article-title">月薪范围：</span>
            <el-radio-button class="article-content" :label="index" v-for="(list,index) in monthPayList" :key="index">{{list.tag}}</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article"  v-if="isshow">
            <el-radio-group size="small" v-model="workState">
            <span style="margin-left:-50px" class="article-title">工作类型：</span>
            <el-radio-button class="article-content" :label="index" v-for="(list,index) in workStateList" :key="index">{{list.tag}}</el-radio-button>
            </el-radio-group>
        </div>
        <div></div>
        <div class="article"  >
            <el-radio-group size="small" v-model="scale">
            <span style="margin-left:-50px" class="article-title">公司规模：</span>
            <el-radio-button  class="article-content" :label="index" v-for="(list,index) in scaleList" :key="index">{{list.tag}}</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article"  style="margin-top:6px">
            <el-radio-group size="small" v-model="quality">
            <span style="margin-left:-50px;" class="article-title">企业性质：</span>
            <el-radio-button  class="article-content" :label="index" v-for="(list,index) in qualityList" :key="index">{{list.tag}}</el-radio-button>
            </el-radio-group>
        </div>
        <div class="article"  >
            <el-radio-group size="small" v-model="release">
              <span style="margin-left:-50px" class="article-title">发布时间：</span>
              <el-radio-button class="article-content" label="0">一天以内</el-radio-button>
              <el-radio-button class="article-content" label="1">三天以内</el-radio-button>
              <el-radio-button class="article-content" label="2">五天以内</el-radio-button>
              <el-radio-button class="article-content" label="3">七天以内</el-radio-button>
              <el-radio-button class="article-content" label="4">十五天以内</el-radio-button>
            </el-radio-group>
        </div>
         <div class="article">
           <span class="article-title">公司行业：</span>
            <el-radio-group size="small" v-model="duty" style="width:650px;margin-top:-1px;;margin-left:-2px;">
              <el-radio-button  class="article-content" :label="index" v-for="(list,index) in industryList" :key="index">{{list.tag}}</el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-bottom:10px;margin-top:0px;" v-if="isduty">
            <el-checkbox-group size="small" v-model="menu" style="width:770px;margin:0 0 0 -5px">
              <div>111</div>
              <el-checkbox-button  label="1">行业</el-checkbox-button>
              <el-checkbox-button  label="2">行业</el-checkbox-button>
              <el-checkbox-button  label="3">行业</el-checkbox-button>
              <el-checkbox-button  label="4">行业</el-checkbox-button>
              <el-checkbox-button  label="5">行业</el-checkbox-button>
              <el-checkbox-button  label="1">行业</el-checkbox-button>
              <el-checkbox-button  label="2">行业</el-checkbox-button>
              <el-checkbox-button  label="3">行业</el-checkbox-button>
              <el-checkbox-button  label="4">行业</el-checkbox-button>
              <el-checkbox-button  label="5">行业</el-checkbox-button>
              <el-checkbox-button  label="1">行业</el-checkbox-button>
              <el-checkbox-button  label="2">行业</el-checkbox-button>
              <el-checkbox-button  label="3">行业</el-checkbox-button>
              <el-checkbox-button  label="4">行业</el-checkbox-button>
              <el-checkbox-button  label="5">行业</el-checkbox-button>
            </el-checkbox-group>
        </div>
        
        <div class="article-button" v-if="articleButton">
            <el-button @click="cancelButton" class="button" type="primary" style="margin:0 0 16px 564px;width:105px;height:35px;line-height:3px;color:white;font-size:12px;padding:0px;">清除筛选条件</el-button>
            <el-button @click="keepButton" class="button" type="primary" style="margin:0 0 16px 30px;width:105px;height:35px;line-height:3px;color:white;font-size:12px;padding:0px;">立即筛选</el-button>
        </div>
    </div>
    <div class="joblist-content" v-if="joblistCompany">
      <div class="content" v-for="(item,index) in companyList" :key='index'>
        <div class="content-img">
            <img :src="require('../assets/images/company1.jpg')"/>
        </div>
        <div class="content-infor">
            <span>{{item.companyName}}</span>
            <span>{{item.address.province}}  {{item.address.county}} | {{item.size}}人 | {{item.industry-parseInt(item.industry/100)*100|industry}}</span>
        </div>
        <div class="content-button">
            <span>
                <el-button @click="compan(item.id)"  class="button" type="primary">进入企业主页</el-button>
            </span>
        </div>
        <div class="content-job">
            <span>在招职位<br>{{item.recruitedPositionNum}}</span>
        </div>
        <div class="content-line"></div>
      </div>
    </div>
    <div class="joblist-footer" v-if="joblistJob">
      <div class="joblist-hover" style="border:1px solid white" v-for="(item,index) in positionList" :key='index' @click="posion(item.id)">
        <div class="footer-first" style="margin-top:-20px">
            <span>{{item.positionName}}</span>
            <span>{{item.salaryMin}}-{{item.salaryMax}}k</span>
            <span>{{item.company.companyName}}</span>
        </div>
        <div class="footer-second">
            <span>{{item.workAddress.province}} {{item.workAddress.county}} | {{item.workAgeMin}}-{{item.workAgeMax}}年 | {{item.degreeMin|level}}</span>
            <span>{{item.publishedTime | formatDate}}</span>
            <span>{{item.company.industry-parseInt(item.company.industry/100)*100|industry}} | {{item.company.size}}人</span>
        </div>
        <div class="footer-line"></div>
      </div>  
        <div class="footer-pagination">
            <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="page.current"
                  :page-sizes="page.pageSizeOpts"
                  :page-size="page.pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="page.total"
                ></el-pagination>
        </div>
    </div>
    <div class="joblist-footer" v-if="contentNull" style="height:500px">
      <h5 style="padding:20% 0 0 0">未找到相关职位呦~~换个筛选条件试试呗</h5>
    </div>
    <el-dialog
        class="dialog"
        :visible.sync="dialogVisible"
        style="width:1150px;margin-left:15%"
        >
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
            <el-tooltip class="item" effect="light"  placement="bottom-start">
              <el-input
                placeholder="请选择省份"
                suffix-icon="el-icon-arrow-down"
                v-model="provinceButton"
               >
              </el-input>
              <div style="width:510px" slot="content"><span class="spanCity" @click="citys(item,index)" style="float:left;padding:10px 0 10px 10px" v-for="(item,index) in city" :key="index">{{item.tag}}</span></div>
            </el-tooltip>
            <el-tooltip  class="item" effect="light"  placement="bottom-end">
              <el-input
                placeholder="请选择城市"
                suffix-icon="el-icon-arrow-down"
                v-model="cityButton"
                style="margin:0 0 0 100px"
               >
              </el-input>
              <div style="width:510px" slot="content"><span class="spanCity" @click="citiss(item)" style="float:left;padding:10px 0 10px 10px" v-for="(item,index) in citis" :key="index">{{item.tag}}</span></div>
            </el-tooltip>
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
       page: {
                total: 0,
                pageSize: 5,
                current: 1,
                pageSizeOpts: [5,10,20]
            },
      curr: -1,
      sliceArr:[],
      industryList:[],
      qualityList:[],
      workExperienceList:[],
      scaleList:[],
      workStateList:[],
      monthPayList:[],
      EducationList:[],
      menu:[],
      contentNull:false,
      isduty:false,
      joblistCompany:false,
      joblistJob:false,
      isshow:true,
      searchContent:'',
      provinceButton:'上海',
      cityButton:'',
      duty:'',
      articleButton:false,
      district:'',
      workExperience:'',
      Education:'',
      monthPay:'',
      workState:'',
      industry:'',
      scale:"",
      salaryMin:'',
      salaryMax:'',
      workAgeMin:'',
      workAgeMax:'',
      quality:'',
      release:'',
      isGraduate:'',
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
      companyList:[], 
      positionList:[], 
      city:[],
      citis:[],
      };
      
  },
  methods: {
    handleSizeChange(val) {
      this.page.pageSize = val
      this.page.current = 1
    },
    handleCurrentChange(val) {
      this.page.current = val
    },
      more() {
        this.isduty = true
      },
      //城市
      citise() {
      this.$http.get('/constant/district')
      .then(res => {
          if (res.data.code == 200) {
            this.city = res.data.data
          }
        });
    },
      citys(item,index) {
        console.log(item,'232332323232')
          this.provinceButton = item.tag
          this.provincecode = item.code
          this.curr = index;
          this.citis = this.city[this.curr].children
          // this.sliceArr = item.children.slice(0,5)
          
        },
      citiss(item) {
        this.cityButton = item.tag
        this.citycode = item.code
        this.sliceArr.forEach(function(value) {
            if(value.tag == item.tag) {
              console.log(item) 
            }
          })
      },
      cancelButton() {
        this.district = ''
        this.workExperience = ''
        this.Education = ''
        this.monthPay = ''
        this.workState = ''
        this.industry = ''
        this.scale = ''
        this.release = ''
        this.quality = ''
        this.duty = ''
        setTimeout(() => {
            this.articleButton = false
        }, 300);
      },
      //立即筛选
      keepButton() {
        this.search()
      },
      search () {
        if(this.company =='公司') {
          this.$http.post('/searched/company',{county:this.citycode,industry:this.duty,keyword:this.searchContent,pageNum:0,
        pageSize:10,province:this.provincecode,size:this.scale,}).then(res => {
          if (res.data.code == 200) {
            this.joblistJob = false
            this.companyList = res.data.data.list
            if(res.data.data.total == 0) {
              this.joblistCompany = false
              this.contentNull = true
            }else{
              this.joblistCompany = true
            }
          }
        });
      }else if(this.company =='职位') {
        switch (this.monthPay){
          case 0:
            this.salaryMin = 0
            this.salaryMax = 1
            break;
          case 1:
            this.salaryMin = 1
            this.salaryMax = 2
            break;
          case 2:
            this.salaryMin = 2
            this.salaryMax = 4
            break;
          case 3:
            this.salaryMin = 4
            this.salaryMax = 6
            break;
          case 4:
            this.salaryMin = 6
            this.salaryMax = 8
            break; 
          case 5:
            this.salaryMin = 8
            this.salaryMax = 10
            break; 
          case 6:
            this.salaryMin = 10
            this.salaryMax = 15
            break; 
          case 7:
            this.salaryMin = 15
            this.salaryMax = 25
            break; 
          case 8:
            this.salaryMin = 25
            this.salaryMax = 35
            break;  
          case 9:
            this.salaryMin = 35
            this.salaryMax = null
            break;           
        }
        switch (this.workExperience){
          case 0:
            this.workAgeMin = 0
            this.workAgeMax = 0
            break;
          case 1:
            this.workAgeMin = 1
            this.workAgeMax = 3
            break;
          case 2:
            this.workAgeMin = 3
            this.workAgeMax = 5
            break;
          case 3:
            this.workAgeMin = 5
            this.workAgeMax = 10
            break;
          case 4:
            this.workAgeMin = 10
            this.workAgeMax = null
            break;      
        }
        switch (this.release){
          case '0':
            this.release = 1
            break;
          case '1':
            this.release = 3
            break;
          case '2':
            this.release = 5
            break;
          case '3':
            this.release = 7
            break;
          case '4':
            this.release = 15
            break;      
        }
        if(this.workExperience == 0) {
          this.isGraduate = false
        }else{
          this.isGraduate = true
        }
        this.$http.post('/searched/position',{county:this.citycode,degreeMin:this.Education,industry:this.duty,isGraduate:this.isGraduate,jobType:this.workState,keyword:this.searchContent,pageNum:0,
        pageSize:10,province:this.provincecode,publishedInterval:this.release,salaryMax:this.salaryMax,salaryMin:this.salaryMin,size:this.scale,workAgeMax:this.workAgeMax,workAgeMin:this.workAgeMin}).then(res => {
          if (res.data.code == 200) {
            this.joblistCompany = false
            this.positionList = res.data.data.list
            if(res.data.data.total == 0) {
              this.joblistCompany = false
              this.contentNull = true
            }else{
              this.joblistJob = true
            }
            
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
      compan(id) {
         this.$router.push({path:'/position',query:{
            id: id
          }})
      },
      posion(id) {
         this.$router.push({path:'/station',query:{
            id: id
          }})
      },
      handleItemChange() {
           setTimeout(() => {
            this.close()
        }, 500);
      },
      //获取所有企业行业
      allposition() {
        this.$http.get("/constant/positionCatalog").then(res => {
          if (res.data.code == 200) {
            this.industryList = res.data.data
          }
        });
      },
       //获取所有企业类别
      enterpriseForm() {
        this.$http.get("/constant/enterpriseForm").then(res => {
          if (res.data.code == 200) {
            // this.industryList = res.data.data
          }
        });
      },
       //获取所有职位类型
      positionCatalog() {
        this.$http.get("/constant/positionCatalog").then(res => {
          if (res.data.code == 200) {
            // this.industryList = res.data.data
          }
        });
      },
       //获取简单选项信息
      option() {
        this.$http.get("/option").then(res => {
          if (res.data.code == 200) {
            this.qualityList = res.data.data.companyNature
            this.scaleList = res.data.data.companySize
            this.workStateList = res.data.data.jobType
            this.monthPayList = res.data.data.salaryRange
            this.EducationList = res.data.data.eduDegree
           
            this.workExperienceList = res.data.data.workAgeRange
            
          }
        });
      },
      getVendorId() {
        if(this.company == '公司') {
          this.isshow = false
        }else{
          this.isshow = true
        }
        }
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
            'release': function () {
              this.articleButton = true
            },
            'quality': function () {
              this.articleButton = true
            },
            'duty': function () {
              this.articleButton = true
            },
        },
    created () {
      // this.positionId()
      this.allposition()
      this.enterpriseForm()
      this.positionCatalog()
      this.citise()
      this.option()
      this.$http.post('/searched/position',{county:this.citycode,degreeMin:this.Education,industry:this.duty,isGraduate:this.isGraduate,jobType:this.workState,keyword:this.searchContent,pageNum:0,
        pageSize:10,province:this.provincecode,publishedInterval:this.release,salaryMax:this.salaryMax,salaryMin:this.salaryMin,size:this.scale,workAgeMax:this.workAgeMax,workAgeMin:this.workAgeMin}).then(res => {
          if (res.data.code == 200) {
            this.joblistCompany = false
            this.positionList = res.data.data.list
            if(res.data.data.total == 0) {
              this.joblistJob = false
              this.contentNull = true
            }else{
              this.joblistJob = true
            }
          }
        });
    },
    filters:{
    level(level){
      const map=["初中及以下","职中","大专","本科",'硕士','博士']
      return map[level]
    },
    industry(industry){
      if(industry == 1) {
        const map=['',"酒店/餐饮","旅游/度假","医疗/护理/美容/保健/卫生服务"]
        return map[industry]
      }
      if(industry == 2) {
        const map=['',"计算机软件","网络游戏","IT服务(系统/数据/维护)","计算机硬件",'互联网/电子商务','电子技术/半导体/集成电路','通信、电信运营/增值服务','通信/电信/网络设备']
        return map[industry]
      }
      if(industry == 3) {
        const map=['',"保险","银行","信托/担保/拍卖/典当","基金/证券/期货/投资"]
        return map[industry]
      }
      if(industry == 4) {
        const map=['',"零售/批发","贸易/进出口","快速消费品（食品/饮料/烟酒/日化）","耐用消耗品",'租赁服务']
        return map[industry]
      }
      if(industry == 5) {
        const map=['',"文体教育|工艺美术","教育/培训/院校","礼品/玩具/工艺美术/收藏品/奢侈品"]
        return map[industry]
      }
      if(industry == 6) {
        const map=['',"办公用品及设备","航空/航天研究与制造","医疗设备/器械",'加工制造（原料加工/模具）','医药/生物工程','大型设备/机电设备/重工业','印刷/包装/造纸','汽车/摩托车','仪器仪表及工业自动化']
        return map[industry]
      }
      if(industry == 7) {
        const map=['',"房地产/建筑/建材/工程","物业管理/商业中心","家居/室内设计/装饰装潢"]
        return map[industry]
      }
      if(industry == 8) {
        const map=['',"专业服务/咨询(财会/法律/人力资源等)","广告/会展/公关","中介服务",'外包服务','检验/检测/认证']
        return map[industry]
      }
      if(industry == 9) {
        const map=['',"娱乐/体育/休闲","媒体/出版/影视/文化传媒"]
        return map[industry]
      }
      if(industry == 10) {
        const map=['',"跨领域经营","农/林/牧/渔",'其他']
        return map[industry]
      }
      if(industry == 11) {
        const map=['',"交通/运输",'物流/仓储']
        return map[industry]
      }
      if(industry == 12) {
        const map=['',"环保",'石油/石化/化工','能源/矿产/采掘/冶炼','电气/电力/水利']
        return map[industry]
      }
      if(industry == 13) {
        const map=['',"学术/科研",'政府/公共事业/非盈利机构']
        return map[industry]
      }
    }
  },
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
        display flex
        flex-direction row
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
      margin 0 0 0 51px
      text-align left
    .joblist-article div:nth-child(8)
      margin 0 0 0 39px
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
        margin 36px 178px 0 0 
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
        display flex
        flex-direction row
        float left
        margin 50px 0 0 -73px
</style>
<style lang="stylus">
  .el-icon-arrow-up:before
    color #617dcb
  .el-checkbox-button__inner
    border 0px solid #617dcb
  .el-checkbox-button:first-child .el-checkbox-button__inner
    border-left 0px solid #dcdfe6 
  .el-checkbox-button.is-checked .el-checkbox-button__inner
    background-color #617dcb
    box-shadow 0 0 0 0 white
    border-radius 0 0 0 0
    color white
    border 0px solid red
  .el-checkbox-button--small .el-checkbox-button__inner
    padding 4px 6px 
    line-height 15px
    font-size 12px 
    color #1f368d 
    border 0px solid red
  .spanCity:hover
    color #617dcb 
  .spanCity  
    font-size 13px
  .el-icon-arrow-up:before
    color #dbdbdb
</style>
