<template>
  <Scroll ref="scroll">
    <div class="resumes">
      <div class="content">
        <el-dialog
                title=""
                :visible.sync="dialog"
                width="30%"
                :before-close="handleClose">
          <div style="display:flex;flex-direction:row;margin-left:150px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialog = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 160px 0 0" @click="dialog = false">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
        <!-- 基本信息编辑 -->
        <el-dialog title="基本信息编辑" width="30%" :visible.sync="informationouterVisible">
          <el-dialog
            width="20%"
            :visible.sync="informationinnerVisible"
            append-to-body>
            <div style="display:flex;flex-direction:row;margin-left:80px">
              <img style="height:18px;" :src="require('../assets/images/222.png')"/>
              <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
            </div>
            <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="informationinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 60px 0 0" type="primary" @click="informationouterVisible = false,informationinnerVisible = false">确定</el-button>
            </div>
          </el-dialog>
          <div>
            <el-form :model="formInformation" class="demo-form-inline" label-width="100px">
              <el-form-item label="姓名">
                <el-input style="width:400px;height:36px;margin-right:50px" v-model='formInformation.name'  placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="求职状态">
                <el-select style="width:400px;height:36px;margin-right:50px" v-model='formInformation.state'  placeholder>
                  <el-option label value="积极找工作"></el-option>
                  <el-option label value="随便看看"></el-option>
                  <el-option label value="暂时不换工作"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="性别" style="margin:0 290px 0 0">
                <el-radio-group  v-model='formInformation.sex'>
                  <el-radio-button  label="男性"></el-radio-button>
                  <el-radio-button  label="女性"></el-radio-button>
                </el-radio-group>
              </el-form-item><br>
              <el-form-item label="工作年限">
                <el-select style="width:400px;height:36px;margin-right:50px" v-model='formInformation.workAge'  placeholder>
                  <el-option label value="无工作年限"></el-option>
                  <el-option label value="1-3年"></el-option>
                  <el-option label value="3-5年"></el-option>
                  <el-option label value="5-10年"></el-option>
                  <el-option label value="手动输入"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="所在城市">
                <el-select style="width:400px;height:36px;margin-right:50px" v-model='formInformation.city'  placeholder>
                  <el-option label value="上海"></el-option>
                  <el-option label value="天津"></el-option>
                  <el-option label value="北京"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="最高学历">
                <el-select style="width:400px;height:36px;margin-right:50px" v-model='formInformation.educationLevel' placeholder>
                  <el-option label value="初中及以下"></el-option>
                  <el-option label value="中专/职中"></el-option>
                  <el-option label value="高中"></el-option>
                  <el-option label value="大专"></el-option>
                  <el-option label value="本科"></el-option>
                  <el-option label value="硕士"></el-option>
                  <el-option label value="博士"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="生日">
                <el-date-picker
                  v-model='formInformation.birthday'
                  style="width:400px;height:36px;margin-right:50px"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input style="width:400px;height:36px;margin-right:50px" v-model='formInformation.email' placeholder></el-input>
              </el-form-item>
              <el-form-item label="手机">
                <el-input  style="width:400px;height:36px;margin-right:50px" v-model='formInformation.phone' placeholder></el-input>
              </el-form-item>
              <el-form-item label="政治面貌">
                <el-input style="width:400px;height:36px;margin-right:50px" v-model='formInformation.politicCountenance' placeholder></el-input>
              </el-form-item>
            </el-form>
          </div>
           <div slot="footer" class="dialog-footer">
            <el-button style="margin:0 20px 0 0" @click="informationinnerVisible = true" plain>取 消</el-button>
            <el-button style="margin:0 35px 0 0" type="primary" @click="informationouterVisible = false">保存</el-button>
          </div>
        </el-dialog>
        <!-- 求职意向编辑 -->
        <el-dialog title="求职意向编辑" width="30%" :visible.sync="jobintensionouterVisible">
          <el-dialog
            width="20%"
            :visible.sync="jobintensioninnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:80px">
              <img style="height:18px;" :src="require('../assets/images/222.png')"/>
              <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
                <el-button style="margin:0 20px 0 0" @click="jobintensioninnerVisible = false" plain>取 消</el-button>
                <el-button style="margin:0 60px 0 0" type="primary" @click="jobintensionouterVisible = false,informationinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
          <div>
            <el-form :model="formJobintension" class="demo-form-inline" label-width="100px">
              <el-form-item label="职位类型">
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formJobintension.postType" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="工作城市">
                  <el-cascader style="width:400px;height:36px;margin-right:50px"
                      :options="options"
                      :show-all-levels="false"
                      v-model="formJobintension.city"
                      >
                  </el-cascader>
              </el-form-item>
              <el-form-item label="企业行业">
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formJobintension.trade" placeholder="">
                  <el-option label="" value=""></el-option>
                  <el-option label="" value=""></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="薪资范围">
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formJobintension.scope" placeholder="">
                  <el-option label="" value="1千以下"></el-option>
                  <el-option label="" value="1k-2k"></el-option>
                  <el-option label="" value="2k-4k"></el-option>
                  <el-option label="" value="4k-6k"></el-option>
                  <el-option label="" value="6k-8k"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="求职状态">
                  <el-select id="name" style="width:400px;height:36px;margin-right:50px" v-model="formJobintension.status" placeholder="" @change="JobType()">
                  <el-option label="" value="离职-随时到岗"></el-option>
                  <el-option label="" value="离职-延时到岗"></el-option>
                  <el-option label="" value="在职-考虑机会"></el-option>
                  <el-option label="" value="在职-暂不考虑"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="工作类型">
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formJobintension.jobType" placeholder="">
                  <el-option label="" value="实习"></el-option>
                  <el-option label="" value="全职"></el-option>
                  <el-option label="" value="兼职"></el-option>
                  </el-select>
              </el-form-item><br>
              <el-form-item label="到岗时间" class="block" v-if="datePicker">
                  <el-date-picker
                  style="width:400px;height:36px;margin-right:50px"
                  v-model="formJobintension.reportTime"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                  </el-date-picker>
              </el-form-item>
            </el-form>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button style="margin:0 20px 0 0" @click="jobintensioninnerVisible = true" plain>取 消</el-button>
            <el-button style="margin:0 35px 0 0" type="primary" @click="jobintensionouterVisible = false">保存</el-button>
          </div>
        </el-dialog>
        <!-- 工作经历编辑 -->
        <el-dialog title="工作经历编辑" width="30%" :visible.sync="workouterVisible">
          <el-dialog
            width="20%"
            :visible.sync="workinnerVisible"
            append-to-body>
            <div style="display:flex;flex-direction:row;margin-left:80px">
              <img style="height:18px;" :src="require('../assets/images/222.png')"/>
              <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
                <el-button style="margin:0 20px 0 0" @click="workinnerVisible = false" plain>取 消</el-button>
                <el-button style="margin:0 60px 0 0" type="primary" @click="workouterVisible = false,workinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
          <div>
            <el-form :model="formWork" class="demo-form-inline" label-width="100px">
              <el-form-item label="公司名称">
                  <el-input style="width:400px;height:36px" v-model="formWork.companyName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="职位名称">
                  <el-input style="width:400px;height:36px" v-model="formWork.postName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="行业">
                  <el-select style="width:400px;height:36px" v-model="formWork.trade" placeholder="">
                  <el-option label="" value="shanghai"></el-option>
                  <el-option label="" value="beijing"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="所在部门">
                  <el-input style="width:400px;height:36px" v-model="formWork.branch" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="工作描述">
                  <el-input type="textarea" v-model="formWork.jobDescription"  style="width:400px" ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button style="margin:0 20px 0 0" @click="workinnerVisible = true" plain>取 消</el-button>
            <el-button style="margin:0 35px 0 0" type="primary" @click="workouterVisible = false">保存</el-button>
          </div>
        </el-dialog>
        <!-- 教育经历编辑 -->
        <el-dialog title="教育经历编辑" width="30%" :visible.sync="educationouterVisible">
          <div>
            <el-form :model="formEducation" class="demo-form-inline" label-width="100px">
              <el-form-item label="学校名称">
                  <el-input v-model="formEducation.educationName" style="width:400px;height:36px;margin-right:50px" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="在校时间" class="block">
                  <el-date-picker
                  style="width:400px;height:36px;margin-right:50px"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                  </el-date-picker>
              </el-form-item>
               <el-form-item label="专业">
                <el-input style="width:400px;height:36px;margin-right:50px" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="学历">
                  <el-select style="width:400px;height:36px;margin-right:50px" placeholder="">
                  <el-option label="" value="初中及以下"></el-option>
                  <el-option label="" value="大专/职中"></el-option>
                  <el-option label="" value="高中"></el-option>
                  <el-option label="" value="大专"></el-option>
                  <el-option label="" value="本科"></el-option>
                  <el-option label="" value="硕士"></el-option>
                  <el-option label="" value="博士"></el-option>
                  </el-select>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            width="20%"
            :visible.sync="educationinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:80px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="educationinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 60px 0 0" type="primary" @click="educationouterVisible = false,educationinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button style="margin:0 20px 0 0" @click="educationinnerVisible = true" plain>取 消</el-button>
            <el-button style="margin:0 35px 0 0" type="primary" @click="educationouterVisible = false">保存</el-button>
          </div>
        </el-dialog>
        <!-- 项目经历编辑 -->
        <el-dialog title="项目经历编辑" width="30%" :visible.sync="progectouterVisible">
          <div>
            <el-form :model="formProject" class="demo-form-inline" label-width="100px">
              <el-form-item label="项目名称">
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formProject.itemName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="公司名称">
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formProject.companyName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="项目时间" class="block">
                  <el-date-picker
                  style="width:400px;height:36px;margin-right:50px"
                  v-model="formProject.schoolTime"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                  </el-date-picker>
              </el-form-item>
              <el-form-item label="个人职责">
                  <el-input type="textarea" v-model="formProject.duty" style="width:400px;margin-right:50px" ></el-input>
              </el-form-item>
              <el-form-item label="项目介绍">
                  <el-input type="textarea" v-model="formProject.project" style="width:400px;margin-right:50px" ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            width="20%"
            :visible.sync="progectinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:80px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="progectinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 60px 0 0" type="primary" @click="progectouterVisible = false,progectinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button style="margin:0 20px 0 0" @click="progectinnerVisible = true" plain>取 消</el-button>
            <el-button style="margin:0 35px 0 0" type="primary" @click="progectouterVisible = false">保存</el-button>
          </div>
        </el-dialog>
        <!-- 培训经历编辑 -->
        <el-dialog title="培训经历编辑" width="30%" :visible.sync="trainingouterVisible">
          <div>
            <el-form :model="formtraining" class="demo-form-inline" label-width="100px">
              <el-form-item label="培训课程">
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formtraining.trainCourse" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="培训课程">
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formtraining.trainCourse" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="培训时间" class="block">
                  <el-date-picker
                  style="width:400px;height:36px;margin-right:50px"
                  v-model="formtraining.trainTime"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                  </el-date-picker>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            width="20%"
            :visible.sync="traininginnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:80px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="traininginnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 60px 0 0" type="primary" @click="trainingouterVisible = false,traininginnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button style="margin:0 20px 0 0" @click="traininginnerVisible = true" plain>取 消</el-button>
            <el-button style="margin:0 35px 0 0" type="primary" @click="trainingouterVisible = false">保存</el-button>
          </div>
        </el-dialog>
        <!-- 语言能力编辑 -->
        <el-dialog title="语言能力编辑" width="30%" :visible.sync="languageouterVisible">
          <div>
            <el-form  :model="formlanguage" class="demo-form-inline" label-width="100px">
              <el-form-item label="语种">
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formlanguage.languages" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="听力能力">
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formlanguage.listenAbility" placeholder="">
                  <el-option label="" value="一般"></el-option>
                  <el-option label="" value="良好"></el-option>
                  <el-option label="" value="熟练"></el-option>
                  <el-option label="" value="精通"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="读写能力">
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formlanguage.readAbility" placeholder=""></el-input>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            width="20%"
            :visible.sync="languageinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:80px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="languageinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 60px 0 0" type="primary" @click="languageouterVisible = false,languageinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button style="margin:0 20px 0 0" @click="languageinnerVisible = true" plain>取 消</el-button>
            <el-button style="margin:0 35px 0 0" type="primary" @click="languageouterVisible = false">保存</el-button>
          </div>
        </el-dialog>
        <!-- 专业技能 -->
         <el-dialog title="专业技能编辑" width="30%" :visible.sync="personalskillouterVisible">
          <div>
            <el-form :model="formPersonalskill" class="demo-form-inline" label-width="100px">
              <el-form-item label="技能名称">
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formPersonalskill.technicalName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="掌握程度">
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formPersonalskill.level" placeholder="">
                  <el-option label="shanghai" value="shanghai"></el-option>
                  <el-option label="beijing" value="beijing"></el-option>
                  </el-select>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            width="20%"
            :visible.sync="personalskillinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:80px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="personalskillinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 60px 0 0" type="primary" @click="personalskillouterVisible = false,personalskillinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button style="margin:0 20px 0 0" @click="personalskillinnerVisible = true" plain>取 消</el-button>
            <el-button style="margin:0 35px 0 0" type="primary" @click="personalskillouterVisible = false">保存</el-button>
          </div>
        </el-dialog>
         <!-- 荣誉奖项 -->
         <el-dialog title="荣誉奖项编辑" width="30%" :visible.sync="awardsouterVisible">
          <div>
            <el-form :model="formAwards" class="demo-form-inline" label-width="100px">
              <el-form-item label="奖项名称">
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formAwards.prizeAward" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="获奖时间">
                <el-date-picker
                  style="width:400px;height:36px;margin-right:50px"
                  v-model="formAwards.prizeTime"
                  type="month"
                  placeholder="选择月">
                </el-date-picker>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            width="20%"
            :visible.sync="awardsinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:80px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="awardsinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 60px 0 0" type="primary" @click="awardsouterVisible = false,awardsinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button style="margin:0 20px 0 0" @click="awardsinnerVisible = true" plain>取 消</el-button>
            <el-button style="margin:0 35px 0 0" type="primary" @click="awardsouterVisible = false">保存</el-button>
          </div>
        </el-dialog>
         <!-- 自我评价 -->
         <el-dialog title="自我评价编辑" width="30%" :visible.sync="selfappraisalouterVisible">
          <div>
            <el-form :model="formSelfappraisal" class="demo-form-inline" label-width="100px">
              <el-form-item label="奖项名称">
                  <el-input type="textarea" v-model="formSelfappraisal.personalDescription" style="width:400px;margin-right:50px" placeholder="资料完善程度高，被选中的几率越大呦" ></el-input>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            width="20%"
            :visible.sync="selfappraisalinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:80px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="selfappraisalinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 60px 0 0" type="primary" @click="selfappraisalouterVisible = false,selfappraisalinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button style="margin:0 20px 0 0" @click="selfappraisalinnerVisible = true" plain>取 消</el-button>
            <el-button style="margin:0 35px 0 0" type="primary" @click="selfappraisalouterVisible = false">保存</el-button>
          </div>
        </el-dialog>
        <!-- 添加个人信息 -->
        <div class="personalinformation" v-if="personalinformation">
          <div class="personalinformation-img">
            <el-upload
              style='width:80px;height:80px;margin:32px 0 0 42px'
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <div class="img-add" @click="isshowpersonalinformation"><img :src="require('../assets/images/add.png')"/><span
                  class="add">添加个人信息</span></div>
        </div>
        <div class="showdemo" v-if="showDemo">
          <Basic-Info/>
        </div>
        <div ref="personalinformation" @mouseover="over(11)" v-if="showPersonalinformation" @mouseleave="leave(11)">
          <Personalinformation-From @editsinformation='editsinformation(arguments)'/>
        </div>
        <div class="content-line"></div>
        <!-- 求职意向 -->
        <div ref="jobintension" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/qiuzhi.png')"/><span>求职意向</span></div>
        </div>
        <ul v-if="showjobintension" style="margin:-15px 0 10px 5px" @mouseover="over(10)" @mouseleave="leave(10)">
          <li v-for="(list,index) in listjobintension" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showjobintensionList(list)">编辑</span>
              </span>
            <div style="width:879px">
              <from :from-data="list" :index="index"></from>
              <br><br>
            </div>
          </li>
        </ul>
        <div @mouseover="over(10)" @mouseleave="leave(10)" class="showJob" v-if="showJob">
          <job-intension @jobintensionEmit='jobintensionEmit(arguments)'/>
        </div>
        <div class="content-line"></div>
        <!-- 教育经历 -->
        <div ref="educational" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/edu.png')"/><span>教育经历</span></div>
          <div class="main-content-second" @click="education"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showeducational" style="margin:-5px 0 10px 5px" @mouseover="over(9)" @mouseleave="leave(9)">
          <li v-for="(list,index) in listeducational" :key="index" class="ul-a">
              <span class="actions-span">
                  <img class="img-first" style="margin-right:9px;height:12px"
                       :src="require('../assets/images/shan.png')"/><span @click="showdialog()" style="margin-right:20px">删除</span>
                  <img class="img-second" style="margin-right:9px;height:12px"
                       :src="require('../assets/images/ziwo.png')"/><span style="margin-right:3px" @click="showeducationalList(list)">编辑</span>
              </span>
            <educationexperience-From :from-data="list" :index="index"></educationexperience-From>
            <br>
          </li>
        </ul>
        <div class="showeducation" v-if="showeducation" >
          <Education-Experience @sendiptVal='sendiptVal(arguments)' :educationDegree='educationDegree' />
        </div>
        <div class="content-line"></div>
        <!-- 工作经历 -->
        <div ref="work" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/work.png')"/><span>工作经历</span></div>
          <div class="main-content-second" @click="work"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showworkperience" style="margin:-5px 0 10px 5px" @mouseover="over(8)" @mouseleave="leave(8)">
          <li v-for="(list,index) in listwork" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showdialog()" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showworkperienceList(list)">编辑</span>
              </span>
            <work-from :from-data="list" :index="index"></work-from>
            <br>
          </li>
        </ul>
        <div v-if="showwork">
          <work-experience @workEmit='workEmit(arguments)'/>
        </div>
        <div class="content-line"></div>
        <!-- 项目经历 -->
        <div ref="progect" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/language.png')"/><span>项目经历</span></div>
          <div class="main-content-second" @click="project"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showprogectperience" style="margin:-5px 0 10px 5px" @mouseover="over(7)" @mouseleave="leave(7)">
          <li v-for="(list,index) in listprogectperience" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showdialog()" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showprogectperienceList(list)">编辑</span>
              </span>
            <progect-from :from-data="list" :index="index"></progect-from>
            <br>
          </li>
        </ul>
        <div v-if="showproject">
          <project-experience @progectEmit='progectEmit(arguments)' />
        </div>
        <div class="content-line"></div>
        <!-- 培训经历 -->
        <div ref="training" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/train.png')"/><span>培训经历</span></div>
          <div class="main-content-second" @click="training"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showtrain" style="margin:-5px 0 10px 5px;" @mouseover="over(6)" @mouseleave="leave(6)">
          <li v-for="(list,index) in listtrain" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showdialog()" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showtrainList(list)">编辑</span>
              </span><br>
            <training-from :from-data="list" :index="index"></training-from>
            <br>
          </li>
        </ul>
        <div v-if="showtraining">
          <training-experience @trainEmit='trainEmit(arguments)'/>
        </div>
        <div class="content-line"></div>
        <!-- 语言能力 -->
        <div ref="language" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/language.png')"/><span>语言能力</span></div>
          <div class="main-content-second" @click="language"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showlanguages" style="margin:-5px 0 10px 5px" @mouseover="over(5)" @mouseleave="leave(5)">
          <li v-for="(list,index) in listlanguages" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showdialog()" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showlanguagesList(list)">编辑</span>
              </span><br>
            <language-from :from-data="list" :index="index"></language-from>
            <br>
          </li>
        </ul>
        <div v-if="showlanguage">
          <language-experience @languageEmit='languageEmit(arguments)'/>
        </div>
        <div class="content-line"></div>
        <!-- 职称等级 -->
        <div ref="professional" class="main-content" @mouseover="over(4)" @mouseleave="leave(4)">
          <div class="main-content-first"><img :src="require('../assets/images/zhicheng.png')"/><span>职称等级</span></div>
          <div class="main-content-second" @click="professional()"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <div v-if="showprofessional">
          <professional-experience @professionalEmit='professionalEmit(arguments)'/>
        </div>
        <div class="content-line"></div>
        <div ref="personal_skill" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/zhuanye.png')"/><span>专业技能</span></div>
          <div class="main-content-second" @click="personal_skill()"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showpersonalskills" style="margin:-5px 0 10px 5px" @mouseover="over(3)" @mouseleave="leave(3)">
          <li v-for="(list,index) in listpersonalskill" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showdialog()" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="editskill(list)">编辑</span>
              </span><br>
            <personalskill-from :from-data="list" :index="index"></personalskill-from>
            <br>
          </li>
        </ul>
        <div v-if="showpersonalskill">
          <personal-skill @skillEmit='skillEmit(arguments)'/>
        </div>
        <div class="content-line"></div>
        <div ref="awards" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/rong.png')"/><span>荣誉奖项</span></div>
          <div class="main-content-second" @click="awards"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showaward" style="margin:-5px 0 10px 5px" @mouseover="over(2)" @mouseleave="leave(2)">
          <li v-for="(list,index) in listaward" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showdialog()" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showawardList(list)">编辑</span>
              </span><br>
            <awards-from :from-data="list" :index="index"></awards-from>
            <br>
          </li>
        </ul>
        <div v-if="showawards">
          <Aw-Ards @awardsemit='awardsemit(arguments)' />
        </div>
        <div class="content-line"></div>
        <div ref="self-appraisal" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/ziwo.png')"/><span>自我评价</span></div>
        </div>
        <ul v-if="showpersonappraisal" style="margin:-5px 0 10px 5px" @mouseover="over(1)" @mouseleave="leave(1)">
          <li v-for="(list,index) in listpersonappraisal" :key="index" class="ul-a">
              <span class="actions-span">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showselfappraisalList(list)">编辑</span>
              </span>
            <selfappraisal-from :from-data="list" :index="index"></selfappraisal-from>
            <br>
          </li>
        </ul>
        <div v-if="showselfappraisal">
          <self-appraisal @selfappraisalemit='selfappraisalemit(arguments)'/>
        </div>
      </div>
      <div class="aside-body">
        <div class="aside-foot">
          <div class="aside-foot-first">附件简历</div>
          <div class="aside-foot-second" v-if="file"><span>支持格式包括： 支持DOC，DOCX,PDF,JPG,PNG格式<br>文件,大小不超过2M</span></div>
          <div class="aside-foot-third">
            <el-upload
              style='width:220px;margin:0 0 15px 0'
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button style="margin:10px 0 0 60px" type="primary" @click="upload" size="medium">简历上传</el-button>
            </el-upload>
            <div style="height:5px"></div>
          </div>
        </div>
        <Affix :offset="60">
          <div class="aside">
            <div class="aside-nav">
              <div class="aside-nav-first">在线简历</div>
              <div class="aside-nav-second"><span>完整度</span><span><el-progress :percentage="10" class="progess"
                                                                               style="width:111px;padding:0 0 0 7px;height:9px"></el-progress></span>
              </div>
              <div class="aside-nav-third">最后更新：2019-02-03 18:30</div>
            </div>
            <div class="aside-tabulation">
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('personalinformation')"><img
                      :src="require('../assets/images/ji.png')"/><span :style="active"
                                                                      class="tabulation-language">基本信息</span> </a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('jobintension')" href="#jobintension"><img
                      :src="require('../assets/images/qiuzhi.png')"/> <span :style="activejobintension"
                                                                        class="tabulation-language">求职意向</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('educational')"><img class="tabulation-img"
                      :src="require('../assets/images/edu.png')"/><span :style="activeeducation"
                                                                       class="tabulation-language">教育经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('work')"><img :src="require('../assets/images/work.png')"/> <span
                      :style="activework" class="tabulation-language">工作经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('progect')"><img :src="require('../assets/images/language.png')"/>
                <span :style="activeproject" class="tabulation-language">项目经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('training')"><img
                      :src="require('../assets/images/train.png')"/><span :style="activetraining"
                                                                       class="tabulation-language">培训经历</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('language')"><img
                      :src="require('../assets/images/language.png')"/><span :style="activelanguage"
                                                                       class="tabulation-language">语言能力</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('professional')"><img :src="require('../assets/images/zhicheng.png')"/>
                <span :style="activeOne" class="tabulation-language">职称等级</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('personal_skill')"><img
                      :src="require('../assets/images/zhuanye.png')"/><span :style="activeprofessional"
                                                                       class="tabulation-language">专业技能</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('awards')"><img :src="require('../assets/images/rong.png')"/> <span
                      :style="activeawards" class="tabulation-language">荣誉奖项</span></a></div>
              <div class="aside-line"></div>
              <div class="tabulation"><a @click="testRef('self-appraisal')"><img
                      :src="require('../assets/images/ziwo.png')"/> <span :style="activeselfAppraisal"
                                                                       class="tabulation-language">自我介绍</span></a></div>
            </div>
          </div>
        </Affix>
      </div>
    </div>
  </Scroll>
</template>

<script>
  // import PersonalinformationFrom from 'components/personalinformation_from.vue'
  import datacenterBus from '../apis/datacenterBus.js';
  import BasicInfo from 'components/BasicInfo.vue';
  import JobIntension from 'components/Jobintension.vue';
  import EducationExperience from 'components/education.vue';
  import WorkExperience from 'components/work.vue';
  import ProjectExperience from 'components/project.vue';
  import TrainingExperience from 'components/training.vue';
  import LanguageExperience from 'components/language.vue';
  import ProfessionalExperience from 'components/professional.vue';
  import PersonalSkill from 'components/personal_skill.vue';
  import AwArds from 'components/awards.vue';
  import SelfAppraisal from 'components/self-appraisal.vue';

  import PersonalinformationFrom from 'components/personalinformation_from.vue'
  import From from 'components/jobintension_from.vue'
  import EducationexperienceFrom from 'components/education_from.vue'
  import WorkFrom from 'components/work_from.vue'
  import ProgectFrom from 'components/progect_from.vue'
  import TrainingFrom from 'components/training_from.vue'
  import LanguageFrom from 'components/language_from.vue'
  import PersonalskillFrom from 'components/personal_skill_from.vue'
  import AwardsFrom from 'components/awards_from.vue'
  import SelfappraisalFrom from 'components/selfappraisal_from.vue'
  import Affix from 'components/affix.vue'

  export default {
    name: 'Resumes',
    components: {
      // PersonalinformationFrom,
      BasicInfo,
      JobIntension,
      EducationExperience,
      WorkExperience,
      ProjectExperience,
      TrainingExperience,
      LanguageExperience,
      ProfessionalExperience,
      PersonalSkill,
      AwArds,
      SelfAppraisal,
      PersonalinformationFrom,
      From,
      EducationexperienceFrom,
      WorkFrom,
      ProgectFrom,
      TrainingFrom,
      LanguageFrom,
      PersonalskillFrom,
      AwardsFrom,
      SelfappraisalFrom,
      Affix
    },
    data() {
      return {
        dialog: false,
        personalinformation: false,
        showPersonalinformation: true,
        showDemo: false,
        showJob: false,
        showadd: true,
        showeducation: '',
        showwork: false,
        showproject: false,
        showtraining: false,
        showlanguage: false,
        showprofessional: false,
        showpersonalskill: false,
        showawards: false,
        showselfappraisal: false,

        showjobintension: true,
        showeducational: true,
        showworkperience: true,
        showprogectperience: true,
        showtrain: true,
        showlanguages: true,
        showpersonalskills: true,
        showaward: true,
        showpersonappraisal: true,
        index:'a',
        file:true,
        languageouterVisible: false,
        languageinnerVisible: false,
        educationouterVisible: false,
        educationinnerVisible: false,
        informationouterVisible: false,
        informationinnerVisible: false, 
        jobintensionouterVisible:false,
        jobintensioninnerVisible:false,
        workouterVisible:false,
        workinnerVisible:false,
        progectouterVisible:false,
        progectinnerVisible:false,
        traininginnerVisible:false,
        trainingouterVisible:false,
        personalskillouterVisible:false,
        personalskillinnerVisible:false,
        awardsouterVisible:false,
        selfappraisalinnerVisible:false,
        selfappraisalouterVisible:false,
        listjobintension: [{
          postType: "产品经理",
          city: "上海/北京",
          trade: "互联网金融/公关",
          scope: "5k~10k",
          status: "离职-随时到岗",
          jobType: "实习"
        }],
        listeducational: [{
          educationName: "华东理工大学",
          educationTime: "2018/12",
          educationDegree: "工业设计 | 硕士"
        },
        {
          educationName: "华东大学",
          educationTime: "2018/12",
          educationDegree: "工业设计 | 硕士"
        }],
        listwork: [{
          jobDescription: '22电动车v发射点发射点犯得上犯得上发射点',
          companyName: '银领',
          monthPay: '4-6k',
          postName: '产品经理',
          jobTime: '2018/12',
          branch: '技术部',
          trade: 'IT',
        }],
        listprogectperience: [{
          itemName: '银领人才',
          companyName: '银领',
          schoolTime: '2018/09',
          duty: '文案文案文案文案文案文案文案文案文案文案文案文案文案',
          project: '文案文案文案文案文案文案文案文案文案文案文案文案文案',
        }],
        listtrain: [{
          trainCourse: '培训课程',
          trainTime: '培训机构',
        }],
        listlanguages: [{
          languages: "英语",
          listenAbility: "听说能力良好",
          readAbility: "读写能力良好",
        }],
        listpersonalskill: [{
          technicalName: '2',
          level: '2'
        },
        {
          technicalName: '4',
          level: '4'
        },],
        listaward: [{
          prizeName: "xxxx比赛三等奖",
          prizeTime: "2018/12",
        }],
        listpersonappraisal: [{
          personalDescription: "年轻有为",
        }],
        formEducation: {
          educationDegree:'',
          educationName:'',
          educationTime:'',
        },
        formInformation: {
          name:'',
          state:'',
          sex:'',
          workAge:'',
          city:'',
          educationLevel:'',
          birthday:'',
          email:'',
          phone:'',
          politicCountenance:''
        },
        formJobintension: {
          postType: '',
          trade: '',
          scope:'',
          status:'',
          jobType:'',
          reportTime:'', 
        },
        formWork: {
          jobDescription: '',
          companyName: '',
          postName: '',
          branch: '',
          trade:''
        },
        formProject: {
          itemName: '',
          companyName: '',
          schoolTime: '',
          duty: '',
          project: '',
        },
        formtraining: {
          trainCourse:'',
          trainTime:''
        },
        formlanguage: {
          languages: '',
          listenAbility: '',
          readAbility:''
        },
        formPersonalskill: {
          technicalName: '',
          level: ''
        },
        formAwards: {
           prizeAward: "",
           prizeTime: ""
        },
        formSelfappraisal: {
          personalDescription:''
        },
        activejobintension: '',
        active: '',
        activeeducation: '',
        activework: '',
        activeproject: '',
        activetraining: '',
        activelanguage: '',
        activeprofessional: '',
        activeawards: '',
        activeselfAppraisal: '',
        activeOne: '',
      }
    },
    methods: {
      //获取简历详情
      resumeId () {
        this.$http.post(`/resume/${2}`).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
      //上传附件简历
      upload() {
         this.file = false
         this.$http.post(`/resume/${2}/file`).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
      //专业技能删除
      deleteskill() {
        this.$http.delete(`/resume/${2}/skill/${1}`,{skill:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
      //工作经历删除
      deletework() {
        this.$http.delete(`/resume/${2}/work/${1}`,{beginTime:'',company:'',position:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
       //荣誉奖项删除
      deleteaward() {
        this.$http.delete(`/resume/${2}/award/${1}`,{acquiredTime:'',award:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
       //教育经历删除
      deleteaward() {
        this.$http.delete(`/resume/${2}/education/${1}`,{beginTime: "",degree: "",major: "",school:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
      //职称等级删除
      deleteaward() {
        this.$http.delete(`/resume/${2}/qualification/${1}`,{qual: ""}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
       //培训经历删除
      deleteaward() {
        this.$http.delete(`/resume/${2}/training/${1}`,{beginTime: "",institution:'',lesson:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
       //语言能力删除
      deleteaward() {
        this.$http.delete(`/resume/${2}/language/${1}`,{language:'',listenAndSpeak:'',readAndWrite:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
       //项目经历删除
      deleteaward() {
        this.$http.delete(`/resume/${2}/project/${1}`,{beginTime:'',project:''}).then(res => {
          if (res.data.code == 200) {
            console.log(res);
          }
        });
      },
      //自我评价
      selfappraisalemit(c) {
        this.showpersonappraisal = c[1]
        this.showselfappraisal = c[0]
      },
      //荣誉奖项（$emit）
      awardsEmit(c) {
        this.showpersonalskills = c[1]
        this.showpersonalskill = c[0]
      },
      //专业技能（$emit）
      skillEmit(c) {
        this.showpersonalskills = c[1]
        this.showpersonalskill = c[0]
      },
      //职称等级（$emit）
      professionalEmit(c) {
        this.showprofessional = c[0]
      },
      //语言能力（$emit）
      languageEmit(c) {
        this.showlanguage = c[0]
        this.showlanguages = c[1]
      },
      //培训经历（$emit）
      trainEmit(c) {
        this.showtraining = c[0]
        this.showtrain = c[1]
      },
      //项目经历（$emit）
      progectEmit(c) {
        this.showproject = c[0]
        this.showprogectperience = c[1]
      },
      //教育经历（$emit）
      sendiptVal(c) {
        this.showeducation = c[0]
        this.showeducational = c[1]
      },
      //工作经历
      workEmit(c) {
        this.showwork = c[0],
        this.showtrain = c[1]
      },
      //求职意向（$emit）
      jobintensionEmit(c) {
        this.showJob = c[0],
        this.showjobintension = c[1]
        this.showadd = c[1]
      },
      //荣誉奖项（$emit）
      awardsemit(c) {
        this.showawards = c[0]
        this.showaward = c[1]
      },
      //自我介绍
      showselfappraisalList(list) {
        console.log(list)
        this.selfappraisalouterVisible = true
        this.formSelfappraisal.personalDescription = list.personalDescription
      },
      //荣誉奖项
      showawardList(list) {
        console.log(list)
        this.awardsouterVisible = true
        this.formAwards.prizeAward = list.prizeAward
        this.formAwards.prizeTime = list.prizeTime
      },
       //专业技能编辑
      editskill(list) {
        console.log(list)
        this.personalskillouterVisible = true
        this.formPersonalskill.technicalName = list.technicalName
        this.formPersonalskill.level = list.level
      },
      //语言能力
      showlanguagesList(list) {
        console.log(list)
        this.languageouterVisible = true
        this.formlanguage.listenAbility = list.listenAbility
        this.formlanguage.readAbility = list.readAbility
        this.formlanguage.languages = list.languages
      },
      //培训经历
      showtrainList(list) {
        console.log(list)
        this.trainingouterVisible = true
        this.formtraining.trainCourse = list.trainCourse
        this.formtraining.trainTime = list.trainTime

      },
      //项目经历编辑
      showprogectperienceList(list) {
        console.log(list)
        this.progectouterVisible = true
        this.formProject.itemName = list.itemName
        this.formProject.companyName = list.companyName
        this.formProject.schoolTime = list.schoolTime
        this.formProject.duty = list.duty
        this.formProject.project = list.project
      },
      //工作经历编辑
      showworkperienceList(list) {
        console.log(list)
        this.workouterVisible = true
        this.formWork.companyName = list.companyName
        this.formWork.postName = list.postName
        this.formWork.jobDescription = list.jobDescription  
      },
      //个人信息编辑
      editsinformation(c) {
        console.log(c)
        this.informationouterVisible = c[0]
        this.formInformation.name = c[2]
        this.formInformation.city = c[3]
        this.formInformation.workAge = c[4]
        this.formInformation.age = c[5]
        this.formInformation.phone = c[6]
        this.formInformation.email = c[7]
        // this.personalinformation = true
      },
      //教育经历编辑
      showeducationalList(list) {
        this.educationouterVisible = true
        this.formEducation.educationName = list.educationName 
      },
      //求职意向编辑
      showjobintensionList (list) {
        console.log(list)
        this.jobintensionouterVisible = true
        this.formJobintension.postType = list.postType
        this.formJobintension.trade = list.trade
        this.formJobintension.scope = list.scope
        this.formJobintension.status = list.status
        this.formJobintension.jobType = list.jobType
        this.formJobintension.reportTime = list.reportTime
      },
      testRef(ref) {
        if (ref) {
          const y = this.$refs[ref].offsetTop - 100
          window.scrollTo({top: y, behavior: "smooth"});
        } else {
          // alert("222222")
          const y = this.$refs[ref].offsetTop - 600
          window.scrollTo({top: y, behavior: "smooth"});
          // alert(y)
        }
      },
      showdialog() {
        this.dialog = true
      },
      isshowpersonalinformation() {
        this.personalinformation = false
        this.showDemo = true
      },
      jobintension() {
        this.showadd = false;
        this.showJob = true;
        this.showjobintension = false
      },
      education() {
        this.showeducation = false;
        setTimeout(this.showeducation = true, 5000)
        
        this.showeducational = false
      },
      work() {
        this.showwork = true;
        this.showworkperience = false
      },
      project() {
        this.showproject = true;
        this.showprogectperience = false
      },
      training() {
        this.showtraining = true;
        this.showtrain = false
      },
      language() {
        this.showlanguage = true;
        this.showlanguages = false
      },
      professional() {
        this.showprofessional = true;
      },
      personal_skill() {
        this.showpersonalskill = true;
        this.showpersonalskills = false
      },
      awards() {
        this.showawards = true;
        this.showaward = false
      },
      selfappraisal() {
        this.showselfappraisal = true;
        this.showpersonappraisal = false
      },
      over(index) {
        if (index == 1) {
          this.activeselfAppraisal = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 2) {
          this.activeawards = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 3) {
          this.activeprofessional = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 4) {
          this.activeOne = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 5) {
          this.activelanguage = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 6) {
          this.activetraining = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 7) {
          this.activeproject = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 8) {
          this.activework = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 9) {
          this.activeeducation = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 10) {
          this.activejobintension = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }
        if (index == 11) {
          this.active = "font-weight:bold;line-height:61px;font-size:16px;color:black"
        }

      },
      leave(index) {
        if (index == 1) {
          this.activeselfAppraisal = ""
        }
        if (index == 2) {
          this.activeawards = ""
        }
        if (index == 3) {
          this.activeprofessional = ""
        }
        if (index == 4) {
          this.activeOne = ""
        }
        if (index == 5) {
          this.activelanguage = ""
        }
        if (index == 6) {
          this.activetraining = ""
        }
        if (index == 7) {
          this.activeproject = ""
        }
        if (index == 8) {
          this.activework = ""
        }
        if (index == 9) {
          this.activeeducation = ""
        }
        if (index == 10) {
          this.activejobintension = ""
        }
        if (index == 11) {
          this.active = ""
        }
      },

    },
    created () {
      this.resumeId(),
      datacenterBus.$on("myFun",(message)=>{   //这里最好用箭头函数，不然this指向有问题
               this.informationouterVisible = false
            })
    }
  }

</script>

<style lang="stylus" scoped>
  .resumes
    width 990px
    margin 90px 120px 0 140px
    display flex
    flex-direction row
    .content
      width 770px
      background #FFFFFF
      margin 0 10px 0 0

      .personalinformation
        width 770px
        display flex
        flex-direction row
        font-size 14px

        .img-add img
          width 12px
          margin 111px 0 0 467px

        .img-add span
          margin 0 0 0 10px
          font-size 14px
          font-family PingFangSC-Regular
          color #111D4B 100%
          font-weight bold

      .cancel:hover
        background #1f368d
        color white
        border-color #1f368d

      .cancel
        margin 0 20px 0 0
      .personalinformation div:nth-child(2)
        margin 0 75px 15px 0
      .content-line
        width 682px
        border 0.5px solid #eeeeee
        margin 0 44px 0 44px
      ul
        width 675px
      ul li
        list-style none
      .ul-a
        .actions-span
          float right
          margin 0 20px 0 0
          font-size 15px
          color #1f368d
          opacity 0
        &:hover
          background #f7f7f7
          .actions-span
            opacity 1
      .actions-span span:hover
        color #7d8dcb
      .actions-span span:active
        color #617dcb
      .main-content
        display flex
        flex-direction row
        justify-content space-between
        .main-content-first
          font-weight bold
          line-height 50px
          margin 0 0 0 52px
        .main-content-first span
          font-size 18px
          font-family PingFangSC-Regular
          color #111D4B 100%
          margin 0 0 0 10px
        .main-content-first img
          height 16px
          vertical-align middle
          margin 0 0 4px 0
        .main-content-second
          color #1f368d
          line-height 50px
          margin 0 74px 0 0
        .main-content-second span
          font-family PingFangSC-Regular
          color #111D4B
          font-size 14px
          margin 0 0 0 10px
        .main-content-second img
          height 12px
          vertical-align middle
          margin 0 0 2px 10px
        .main-content-second span:hover
          color #7d8dcd
        .main-content-second span:active
          color #617dcb
    .aside-body
      position relative
      .aside
        width 220px
        height 760px
        background #FFFFFF
        margin-top 10px
        .aside-nav
          display flex
          flex-direction column
          text-align left
          .aside-nav-first
            font-family PingFangSC-Regular
            color #111D4B 100%
            font-size 14px
            font-weight bold
            margin 25px 0 0 32px
          .aside-nav-second
            display flex
            flex-direction row
            font-family PingFangSC-Regular
            color #455379 100%
            font-size 12px
            margin 10px 0 0 32px

          .aside-nav-third
            font-family PingFangSC-Regular
            color #455379 100%
            font-size 12px
            margin 10px 0 0 32px

        .aside-tabulation
          display flex
          flex-direction column
          margin 25px 0 0 0

          .aside-line
            width 160px
            border 0.5px solid #eeeeee
            margin 0 27px 0 32px

          .tabulation
            line-height 42px
            margin 0 0 0 44px
            font-size 13px
            text-align left
          .tabulation a
            text-decoration none
            color #455379
            .tabulation-language
              margin 0 0 0 10px
              font-family PingFangSC-Regular
              color #455379
              font-size 14px
            .tabulation-language:hover
              color #7d8dcd
            .tabulation-language:active
              color #617dcb
          .tabulation img
            height 16px
            vertical-align middle
            margin 0 0 4px 0
      .aside-foot
        width 220px
        background #FFFFFF
        /*margin 0 0 0 790px*/
        text-align left
        /*position fixed*/
        
        padding-top 11px

        .aside-foot-first
          font-family PingFangSC-Regular
          color #1F368D
          font-size 14px
          text-align left
          margin-left 30px

        .aside-foot-second
          font-famil PingFangSC-Regular
          color #909090
          font-size 12px
          margin 5px 0 0 30px

</style>
<style lang="stylus">
  .el-input__inner:hover
    border-color #7d8dcd
  .el-select .el-input__inner:hover
    border-color #7d8dcd
  .el-select-dropdown__item:hover
    color #7d8dcd
  .cancel:hover
    background #1f368d
    color white
    border-color #1f368d
  .el-button
    width 94px
    height 34px
    vertical-align middle
    padding 0px
  .keep:hover
    border-color #7d8dcd
  .el-textarea__inner:hover
    border-color #7d8dcd
  .el-cascader__inner:hover
    border-color #7d8dcd
  .el-button--primary:hover
    background #7d8dcd
    border-color #7d8dcd
  .el-button--primary:active
    background #617dcb
  .el-button.is-plain
    color #1f368d
    background white
    border-color #1f368d 
  .el-button.is-plain:hover 
    border-color #7d8dcd
    color #7d8dcd
    background white
  .el-button.is-plain:active 
    border-color #617dcb
    color #617dcb
    background white   
</style>
