<template>
  <Scroll ref="scroll">
    <div class="resumes">
      <div class="content">
        <!-- 教育经历删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialogedu"
                width="30%"
                :before-close="handleClose">
          <div style="display:flex;flex-direction:row;margin-left:150px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialog = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 160px 0 0" @click="deletedu()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
        <!-- 工作经历删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialogwork"
                width="30%"
                :before-close="handleClose">
          <div style="display:flex;flex-direction:row;margin-left:150px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialogwork = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 160px 0 0" @click="deletework()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
         <!-- 项目经历删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialogproject"
                width="30%"
                :before-close="handleClose">
          <div style="display:flex;flex-direction:row;margin-left:150px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialogproject = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 160px 0 0" @click="deleteproject()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
         <!-- 培训经历删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialogtrain"
                width="30%"
                :before-close="handleClose">
          <div style="display:flex;flex-direction:row;margin-left:150px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialogtrain = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 160px 0 0" @click="deletetrain()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
         <!-- 语言能力删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialoglanguage"
                width="30%"
                :before-close="handleClose">
          <div style="display:flex;flex-direction:row;margin-left:150px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialoglanguage = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 160px 0 0" @click="deletelanguage()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
         <!-- 专业技能删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialogskill"
                width="30%"
                :before-close="handleClose">
          <div style="display:flex;flex-direction:row;margin-left:150px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialogskill = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 160px 0 0" @click="deleteskill()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
         <!-- 职称等级删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialogprofession"
                width="30%"
                :before-close="handleClose">
          <div style="display:flex;flex-direction:row;margin-left:150px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialogprofession = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 160px 0 0" @click="deleteprofession()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
        <!-- 荣誉奖项删除确认 -->
        <el-dialog
                title=""
                :visible.sync="dialogaward"
                width="30%"
                :before-close="handleClose">
          <div style="display:flex;flex-direction:row;margin-left:150px">
            <img style="height:18px;" :src="require('../assets/images/222.png')"/>
            <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">删除后不能恢复，请确定删除？</span>
          </div>
          <div slot="footer" class="dialog-footer" style="margin-top:-30px">
            <el-button style="margin:0 20px 0 0" @click="dialogaward = false" plain>取 消</el-button>
            <el-button type="primary" style="margin:0 160px 0 0" @click="deleteawards()">确 定</el-button>
          </div>
          <div style="height:30px"></div>
        </el-dialog>
        <!-- 基本信息编辑 -->
        <el-dialog title="基本信息编辑" style="width:1150px;margin-left:15%" :visible.sync="informationouterVisible">
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="informationinnerVisible"
            append-to-body>
            <div style="display:flex;flex-direction:row;margin-left:120px">
              <img style="height:18px;" :src="require('../assets/images/222.png')"/>
              <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
            </div>
            <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="informationinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="informationouterVisible = false,informationinnerVisible = false">确定</el-button>
            </div>
          </el-dialog>
          <div>
            <el-form :model="formInformation" class="demo-form-inline" label-width="100px" :rules="personalrules"  ref="formInformation">
              <el-form-item label="姓名" prop='name'>
                <el-input style="width:400px;height:36px;margin-right:50px" v-model='formInformation.name'  placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="求职状态" prop='state'>
                <el-select style="width:400px;height:36px;margin-right:50px" v-model='formInformation.state'  placeholder>
                  <el-option label='离职-随时到岗' value="1"></el-option>
                  <el-option label='离职-延时到岗' value="2"></el-option>
                  <el-option label='在职-考虑机会' value="3"></el-option>
                  <el-option label='在职-暂不考虑' value="4"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="到岗时间" prop='dutyTime'>
                <el-date-picker
                  :disabled="formInformation.state === '2'?false:true"
                  v-model='formInformation.dutyTime'
                  style="width:400px;height:36px;margin-right:50px"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="性别" style="margin:0 285px 0 0" prop='sex'>
                <el-radio-group v-model='formInformation.sex'>
                  <el-radio-button  label="1" >男性</el-radio-button>
                  <el-radio-button  label="2" >女性</el-radio-button>
                </el-radio-group>
              </el-form-item><br>
              <el-form-item label="工作年限" prop='workAge'>
                <el-select style="width:400px;height:36px;margin-right:50px" v-model='formInformation.workAge'  placeholder>
                  <el-option label value="无工作年限"></el-option>
                  <el-option label value="1-3年"></el-option>
                  <el-option label value="3-5年"></el-option>
                  <el-option label value="5-10年"></el-option>
                  <el-option label value="手动输入"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="所在城市" prop='city'>
                <el-select style="width:400px;height:36px;margin-right:50px" v-model='formInformation.city'  placeholder>
                  <el-option label='上海' value="上海"></el-option>
                  <el-option label='天津' value="天津"></el-option>
                  <el-option label='北京' value="北京"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="最高学历" prop='educationLevel'>
                <el-select style="width:400px;height:36px;margin-right:50px" v-model='formInformation.educationLevel' placeholder>
                  <el-option label='初中及以下' value="1"></el-option>
                  <el-option label='职中' value="2"></el-option>
                  <el-option label='高中' value="3"></el-option>
                  <el-option label='大专' value="4"></el-option>
                  <el-option label='本科' value="5"></el-option>
                  <el-option label='硕士' value="6"></el-option>
                  <el-option label='博士' value="7"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="生日" prop='birthday'>
                <el-date-picker
                  v-model='formInformation.birthday'
                  style="width:400px;height:36px;margin-right:50px"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="邮箱" prop='email'>
                <el-input style="width:400px;height:36px;margin-right:50px" v-model='formInformation.email' placeholder></el-input>
              </el-form-item>
              <el-form-item label="手机" prop='phone'>
                <el-input  style="width:400px;height:36px;margin-right:50px" v-model='formInformation.phone' placeholder></el-input>
              </el-form-item>
              <el-form-item label="政治面貌" prop='politicCountenance'>
                <el-select style="width:400px;height:36px;margin-right:50px" v-model="formInformation.politicCountenance" placeholder="请选择政治面貌">
                  <el-option label='群众' value="1"></el-option>
                  <el-option label='团员' value="2"></el-option>
                  <el-option label='民主党派' value="3"></el-option>
                  <el-option label='预备党员' value="4"></el-option>
                  <el-option label='中共党员' value="5"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
           <div slot="footer" class="dialog-footer">
            <el-button style="margin:0 20px 0 0" @click="informationinnerVisible = true" plain>取 消</el-button>
            <el-button style="margin:0 35px 0 0" type="primary" @click="informationkeep('formInformation')">保存</el-button>
          </div>
        </el-dialog>
        <!-- 求职意向编辑 -->
        <el-dialog title="求职意向编辑" style="width:1150px;margin-left:15%" :visible.sync="jobintensionouterVisible">
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="jobintensioninnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
              <img style="height:18px;" :src="require('../assets/images/222.png')"/>
              <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
                <el-button style="margin:0 20px 0 0" @click="jobintensioninnerVisible = false" plain>取 消</el-button>
                <el-button style="margin:0 80px 0 0" type="primary" @click="jobintensionouterVisible = false,jobintensioninnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
          <div>
            <el-form :model="formJobintension" class="demo-form-inline" label-width="100px" :rules="jobintensionrules"  ref="formJobintension">
              <el-form-item label="职位类型" prop='postType'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formJobintension.postType" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="工作城市" prop='city'>
                  <el-cascader style="width:400px;height:36px;margin-right:50px"
                      :options="options"
                      :show-all-levels="false"
                      v-model="formJobintension.city"
                      >
                  </el-cascader>
              </el-form-item>
              <el-form-item label="企业行业" prop='trade'>
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formJobintension.trade" placeholder="">
                  <el-option label="" value=""></el-option>
                  <el-option label="" value=""></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="薪资范围" prop='scope'>
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formJobintension.scope" placeholder="">
                  <el-option label="1千以下" value="1"></el-option>
                  <el-option label="1k-2k" value="2"></el-option>
                  <el-option label="2k-4k" value="3"></el-option>
                  <el-option label="4k-6k" value="4"></el-option>
                  <el-option label="6k-8k" value="5"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="求职状态" prop='status'>
                  <el-select id="name" style="width:400px;height:36px;margin-right:50px" v-model="formJobintension.status" placeholder="" @change="JobType()">
                  <el-option label="离职-随时到岗" value="1"></el-option>
                  <el-option label="离职-延时到岗" value="2"></el-option>
                  <el-option label="在职-考虑机会" value="3"></el-option>
                  <el-option label="在职-暂不考虑" value="4"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="工作类型" prop='jobType'>
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formJobintension.jobType" placeholder="">
                  <el-option label="实习" value="1"></el-option>
                  <el-option label="全职" value="2"></el-option>
                  <el-option label="兼职" value="3"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="到岗时间" class="block" prop='reportTime'>
                  <el-date-picker
                  :disabled="formJobintension.status === '离职-延时到岗'?false:true"
                  v-model='formJobintension.reportTime'
                  style="width:400px;height:36px;margin-right:50px"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item>
                  <el-button style="margin:0 20px 0 175px" @click="jobintensioninnerVisible = true" plain>取 消</el-button>
                  <el-button style="margin:0 25px 0 0" type="primary" @click="jobintensionkeep('formJobintension')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-dialog>
        <!-- 工作经历编辑 -->
        <el-dialog title="工作经历编辑" style="width:1150px;margin-left:15%"  :visible.sync="workouterVisible">
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="workinnerVisible"
            append-to-body>
            <div style="display:flex;flex-direction:row;margin-left:120px">
              <img style="height:18px;" :src="require('../assets/images/222.png')"/>
              <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
                <el-button style="margin:0 20px 0 0" @click="workinnerVisible = false" plain>取 消</el-button>
                <el-button style="margin:0 80px 0 0" type="primary" @click="workouterVisible = false,workinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
          <div>
            <el-form :model="formWork" class="demo-form-inline" label-width="100px" :rules="workrules"  ref="formWork">
              <el-form-item label="公司名称" prop='companyName'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formWork.companyName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="职位名称" prop='postName'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formWork.postName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="行业" prop='trade'>
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formWork.trade" placeholder="">
                  <el-option label="" value="shanghai"></el-option>
                  <el-option label="" value="beijing"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="所在部门" prop='branch'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formWork.branch" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="工作描述" prop='jobDescription'>
                  <el-input type="textarea" v-model="formWork.jobDescription"  style="width:400px;margin-right:50px" ></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button style="margin:0 20px 0 175px" @click="workinnerVisible = true" plain>取 消</el-button>
                  <el-button style="margin:0 20px 0 0" type="primary" @click="workkeep('formWork')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-dialog>
        <!-- 教育经历编辑 -->
        <el-dialog title="教育经历编辑" style="width:1150px;margin-left:15%" :visible.sync="educationouterVisible">
          <div>
            <el-form :model="formEducation" class="demo-form-inline" label-width="100px" :rules="edurules" ref="formEducation">
              <el-form-item label="学校名称" prop='educationName'>
                  <el-input v-model="formEducation.educationName" style="width:400px;height:36px;margin-right:50px" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="在校时间" class="block" prop='educationTime'>
                  <el-date-picker
                  style="width:400px;height:36px;margin-right:50px"
                  v-model="formEducation.educationTime"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                  </el-date-picker>
              </el-form-item>
               <el-form-item label="专业" prop='educationSpecialty'>
                <el-input style="width:400px;height:36px;margin-right:50px" placeholder="" v-model="formEducation.educationSpecialty"></el-input>
              </el-form-item>
              <el-form-item label="学历" prop='educationDegree'>
                  <el-select style="width:400px;height:36px;margin-right:50px" placeholder="" v-model="formEducation.educationDegree">
                  <el-option label="初中及以下" value="0"></el-option>
                  <el-option label="职中" value="1"></el-option>
                  <el-option label="高中" value="2"></el-option>
                  <el-option label="大专" value="3"></el-option>
                  <el-option label="本科" value="4"></el-option>
                  <el-option label="硕士" value="5"></el-option>
                  <el-option label="博士" value="6"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item >
                  <el-button style="margin:0 20px 0 175px" @click="educationinnerVisible = true" plain>取 消</el-button>
                  <el-button style="margin:0 20px 0 0" type="primary" @click="educationkeep('formEducation')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="educationinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="educationinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="educationouterVisible = false,educationinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
        </el-dialog>
        <!-- 项目经历编辑 -->
        <el-dialog title="项目经历编辑" style="width:1150px;margin-left:15%" :visible.sync="progectouterVisible">
          <div>
            <el-form :model="formProject" class="demo-form-inline" label-width="100px" :rules="progectrules" ref="formProject">
              <el-form-item label="项目名称" prop='itemName'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formProject.itemName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="公司名称" prop='companyName'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formProject.companyName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="项目时间" class="block" prop='schoolTime'>
                  <el-date-picker
                  style="width:400px;height:36px;margin-right:50px"
                  v-model="formProject.schoolTime"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                  </el-date-picker>
              </el-form-item>
              <el-form-item label="个人职责" prop='duty'>
                  <el-input type="textarea" v-model="formProject.duty" style="width:400px;margin-right:50px" ></el-input>
              </el-form-item>
              <el-form-item label="项目介绍" prop='project'>
                  <el-input type="textarea" v-model="formProject.project" style="width:400px;margin-right:50px" ></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button style="margin:0 20px 0 175px" @click="progectinnerVisible = true" plain>取 消</el-button>
                  <el-button style="margin:0 25px 0 0" type="primary" @click="progectkeep('formProject')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="progectinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="progectinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="progectouterVisible = false,progectinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
        </el-dialog>
        <!-- 培训经历编辑 -->
        <el-dialog title="培训经历编辑" style="width:1150px;margin-left:15%" :visible.sync="trainingouterVisible">
          <div>
            <el-form :model="formtraining" class="demo-form-inline" label-width="100px" :rules="trainrules" ref="formtraining">
              <el-form-item label="培训课程" prop='trainCourse'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formtraining.trainCourse" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="培训机构" prop='trainCours'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formtraining.trainCours" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="培训时间" class="block" prop='trainTime'>
                  <el-date-picker
                  style="width:400px;height:36px;margin-right:50px"
                  v-model="formtraining.trainTime"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                  </el-date-picker>
              </el-form-item>
              <el-form-item>
                  <el-button style="margin:0 20px 0 175px" @click="traininginnerVisible = true" plain>取 消</el-button>
                  <el-button style="margin:0 25px 0 0" type="primary" @click="trainingkeep('formtraining')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="traininginnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="traininginnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="trainingouterVisible = false,traininginnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
        </el-dialog>
        <!-- 语言能力编辑 -->
        <el-dialog title="语言能力编辑" style="width:1150px;margin-left:15%" :visible.sync="languageouterVisible">
          <div>
            <el-form  :model="formlanguage" class="demo-form-inline" label-width="100px" :rules="languagerules" ref="formlanguage">
              <el-form-item label="语种" prop='languages'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formlanguage.languages" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="听力能力" prop='listenAbility'>
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formlanguage.listenAbility" placeholder="">
                  <el-option label="一般" value="0"></el-option>
                  <el-option label="良好" value="1"></el-option>
                  <el-option label="熟练" value="2"></el-option>
                  <el-option label="精通" value="3"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="读写能力" prop='readAbility'>
                <el-select style="width:400px;height:36px;margin-right:50px" v-model="formlanguage.readAbility" placeholder="">
                  <el-option label="一般" value="0"></el-option>
                  <el-option label="良好" value="1"></el-option>
                  <el-option label="熟练" value="2"></el-option>
                  <el-option label="精通" value="3"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item>
                  <el-button style="margin:0 20px 0 175px" @click="languageinnerVisible = true" plain>取 消</el-button>
                  <el-button style="margin:0 20px 0 0" type="primary" @click="languagekeep('formlanguage')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="languageinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 175px" @click="personalskillinnerVisible = true" plain>取 消</el-button>
              <el-button style="margin:0 20px 0 0" type="primary" @click="skillkeep('formPersonalskill')">保存</el-button>
             </div>
          </el-dialog>
        </el-dialog>
        <!-- 职称等级 -->
         <el-dialog title="职称等级编辑" style="width:1150px;margin-left:15%" :visible.sync="professionouterVisible">
          <div>
            <el-form :model="formProfession" class="demo-form-inline" label-width="120px" :rules="professionalrules" ref="formProfession">
              <el-form-item label="职称等级名称" prop='qual'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formProfession.qual" placeholder=""></el-input>
              </el-form-item>
              <el-form-item>
                   <el-button style="margin:0 20px 0 175px" @click="professioninnerVisible = true" plain>取 消</el-button>
                   <el-button style="margin:0 25px 0 0" type="primary" @click="professionkeep('formProfession')">保存</el-button>
              </el-form-item>
            </el-form>   
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="professioninnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="professioninnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="professionouterVisible = false,professioninnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
        </el-dialog>
        <!-- 专业技能 -->
         <el-dialog title="专业技能编辑" style="width:1150px;margin-left:15%" :visible.sync="personalskillouterVisible">
          <div>
            <el-form :model="formPersonalskill" class="demo-form-inline" label-width="100px" :rules="skillrules" ref="formPersonalskill">
              <el-form-item label="技能名称" prop='technicalName'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formPersonalskill.technicalName" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="掌握程度" prop='level'>
                  <el-select style="width:400px;height:36px;margin-right:50px" v-model="formPersonalskill.level" placeholder="">
                  <el-option label="一般" value="0"></el-option>
                  <el-option label="良好" value="1"></el-option>
                  <el-option label="熟练" value="2"></el-option>
                  <el-option label="精通" value="3"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item>
                  <el-button style="margin:0 20px 0 175px" @click="personalskillinnerVisible = true" plain>取 消</el-button>
                  <el-button style="margin:0 20px 0 0" type="primary" @click="skillkeep('formPersonalskill')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="personalskillinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="personalskillinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="personalskillouterVisible = false,personalskillinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
        </el-dialog>
         <!-- 荣誉奖项 -->
         <el-dialog title="荣誉奖项编辑" style="width:1150px;margin-left:15%" :visible.sync="awardsouterVisible">
          <div>
            <el-form :model="formAwards" class="demo-form-inline" label-width="100px" :rules="awardsrules" ref="formAwards">
              <el-form-item label="奖项名称" prop='prizeAward'>
                  <el-input style="width:400px;height:36px;margin-right:50px" v-model="formAwards.prizeAward" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="获奖时间" prop='prizeTime'>
                <el-date-picker
                  style="width:400px;height:36px;margin-right:50px"
                  v-model="formAwards.prizeTime"
                  type="month"
                  placeholder="选择月">
                </el-date-picker>
              </el-form-item>
              <el-form-item>
                   <el-button style="margin:0 20px 0 175px" @click="awardsinnerVisible = true" plain>取 消</el-button>
                   <el-button style="margin:0 25px 0 0" type="primary" @click="awardskeep('formAwards')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="awardsinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="awardsinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="awardsouterVisible = false,awardsinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
        </el-dialog>
         <!-- 自我评价 -->
         <el-dialog title="自我评价编辑" style="width:1150px;margin-left:15%" :visible.sync="selfappraisalouterVisible">
          <div>
            <el-form :model="formSelfappraisal" class="demo-form-inline" label-width="100px" :rules="selfappraisalrules" ref="formSelfappraisal">
              <el-form-item label="自我评价" prop='personalDescription'>
                  <el-input type="textarea" v-model="formSelfappraisal.personalDescription" style="width:400px;margin-right:50px" placeholder="资料完善程度高，被选中的几率越大呦" ></el-input>
              </el-form-item>
               <el-form-item>
                   <el-button style="margin:0 20px 0 175px" @click="selfappraisalinnerVisible = true" plain>取 消</el-button>
                   <el-button style="margin:0 25px 0 0" type="primary" @click="selfappraisalkeep('formSelfappraisal')">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog
            style="width:900px;margin-left:21%"
            :visible.sync="selfappraisalinnerVisible"
            append-to-body>
             <div style="display:flex;flex-direction:row;margin-left:120px">
               <img style="height:18px;" :src="require('../assets/images/222.png')"/>
               <span style="font-size:14px;line-height:20px;margin:0 0 0 20px">离开修改内容将不会保存</span>
             </div>
             <div slot="footer" class="dialog-footer">
              <el-button style="margin:0 20px 0 0" @click="selfappraisalinnerVisible = false" plain>取 消</el-button>
              <el-button style="margin:0 80px 0 0" type="primary" @click="selfappraisalouterVisible = false,selfappraisalinnerVisible = false">确定</el-button>
             </div>
          </el-dialog>
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
          <div class="img-add" @click="ispersonalinformation"><img :src="require('../assets/images/add.png')"/><span
                  class="add">添加个人信息</span></div>
        </div>
        <div class="showdemo" v-if="showDemo">
          <Basic-Info/>
        </div>
        <ul v-if="showPersonalinformation" style="margin:0 30px 10px 0" @mouseover="over(11)" @mouseleave="leave(11)">
          <li class='li-a'>
            <div style="width:90%;margin:0 0 0 -30px">
              <Personalinformation-From  :fromData="resumeIdList" @editsinformation='editsinformation(arguments)'/>
            </div>
            <div style="margin:40px 0 0 30px;height:12px;font-size:15px">
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      @click="showjpersonalList()">编辑</span>
              </div>
          </li>
        </ul>
        <!-- <div ref="personalinformation" @mouseover="over(11)" v-if="showPersonalinformation" @mouseleave="leave(11)">
          <div>
            <Personalinformation-From  :fromData="resumeIdList" @editsinformation='editsinformation(arguments)'/>
            <span class="actions-span">
                <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                    style="margin-right:3px" @click="showjobintensionList()">编辑</span>
            </span>
          </div>
        </div> -->
        <div class="content-line"></div>
        <!-- 求职意向 -->
        <div ref="jobintension" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/qiuzhi.png')"/><span>求职意向</span></div>
        </div>
        <ul v-if="showjobintension" style="margin:-15px 0 10px 5px" @mouseover="over(10)" @mouseleave="leave(10)">
          <li class="ul-a">
              <span class="actions-span" style='margin:8px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showjobintensionList()">编辑</span>
              </span>
            <div style="width:879px">
              <from :fromData="listjobintension"></from>
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
              <span class="actions-span" style='margin:10px 20px 0 0'>
                  <img class="img-first" style="margin-right:9px;height:12px"
                       :src="require('../assets/images/shan.png')"/><span @click="showedudialog(list)" style="margin-right:20px">删除</span>
                  <img class="img-second" style="margin-right:9px;height:12px"
                       :src="require('../assets/images/ziwo.png')"/><span style="margin-right:3px" @click="showeducationalList(list,index)">编辑</span>
              </span>
            <educationexperience-From :fromData="list" :index="index"></educationexperience-From>
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
              <span class="actions-span" style='margin:8px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showworkdialog(list)" style="margin-right:20px">删除</span>
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
              <span class="actions-span" style='margin:8px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showprojectdialog(list)" style="margin-right:20px">删除</span>
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
              <span class="actions-span" style='margin:20px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showtraindialog(list)" style="margin-right:20px">删除</span>
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
              <span class="actions-span" style='margin:20px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showlanguagedialog(list)" style="margin-right:20px">删除</span>
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
        <div ref="professional" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/zhicheng.png')"/><span>职称等级</span></div>
          <div class="main-content-second" @click="professional()"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showprofessionals" style="margin:-5px 0 10px 5px" @mouseover="over(4)" @mouseleave="leave(4)">
          <li v-for="(list,index) in listprofessional" :key="index" class="ul-a">
              <span class="actions-span" style='margin:15px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showprofessionaldialog(list)" style="margin-right:20px">删除</span>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                    @click="showprofessionalList(list)"  style="margin-right:3px" >编辑</span>
              </span><br>
            <professional-from :from-data="list" :index="index"></professional-from>
            <br>
          </li>
        </ul>
        <div v-if="showprofessional">
          <professional-experience @professionalEmit='professionalEmit(arguments)'/>
        </div>
        <div class="content-line"></div>
        <!-- 专业技术 -->
        <div ref="personal_skill" class="main-content">
          <div class="main-content-first"><img :src="require('../assets/images/zhuanye.png')"/><span>专业技能</span></div>
          <div class="main-content-second" @click="personal_skill()"><img :src="require('../assets/images/add.png')"/>
            <span>添加</span></div>
        </div>
        <ul v-if="showpersonalskills" style="margin:-5px 0 10px 5px" @mouseover="over(3)" @mouseleave="leave(3)">
          <li v-for="(list,index) in listpersonalskill" :key="index" class="ul-a">
              <span class="actions-span" style='margin:20px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showskilldialog(list)" style="margin-right:20px">删除</span>
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
              <span class="actions-span" style='margin:20px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/shan.png')"/><span
                      @click="showawardsdialog(list)" style="margin-right:20px">删除</span>
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
          <li class="ul-a">
              <span class="actions-span" style='margin:17px 20px 0 0'>
                  <img style="margin-right:9px;height:12px" :src="require('../assets/images/ziwo.png')"/><span
                      style="margin-right:3px" @click="showselfappraisalList()">编辑</span>
              </span>
            <selfappraisal-from :from-data="listpersonappraisal" :index="index"></selfappraisal-from>
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
  import ProfessionalFrom from 'components/professional_from.vue'
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
      ProfessionalFrom,
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
        awardsId:'',
        languageId:'',
        trainId:'',
        progectId:'',
        qualId:'',
        workId:'',
        educationId:'',
        resumeIdList:'',
        dialogedu: false,
        dialogwork:false,
        dialogproject:false,
        dialogtrain:false,
        dialoglanguage:false,
        dialogskill:false,
        dialogaward:false,
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
        showprofessionals:true,
        showpersonalskills: true,
        showaward: true,
        showpersonappraisal: true,
        file:true,
        languageouterVisible: false,
        languageinnerVisible: false,
        professionouterVisible:false,
        professioninnerVisible:false,
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
        awardsinnerVisible:false,
        selfappraisalinnerVisible:false,
        selfappraisalouterVisible:false,
        listjobintension: '',
        listeducational: [],
        listwork: [],
        listprogectperience: [],
        listtrain: [],
        listlanguages: [],
        listprofessional:[],
        listpersonalskill: [],
        listaward: [],
        listpersonappraisal: '',
        formEducation: {
          educationDegree:'',
          educationName:'',
          educationTime:'',
          educationSpecialty:''
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
          politicCountenance:'',
          dutyTime:''
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
          trainTime:'',
          trainCours:'',
        },
        formlanguage: {
          languages: '',
          listenAbility: '',
          readAbility:''
        },
        formProfession: {
          qual:''
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
        edurules: {
          educationName: [
            { required: true, message: "请输入学校名称", trigger: "blur" }
            // { min: 0, max: 24, message: '长度在 0 到 24 个字符', trigger: 'blur' },
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          educationTime: [
            { required: true, message: "请选择在校时间", trigger: "blur" }
          ],
          educationSpecialty: [
            {
              required: true,
              message: "请填写专业",
              trigger: "change"
            },
            { min: 0, max: 36, message: "长度在 0 到 36 个字符", trigger: "blur" }
          ],
          educationDegree: [
            { required: true, message: "请选择学历", trigger: "change" }
          ]
        },
        workrules: {
          companyName: [
            { required: true, message: "请输入公司名称", trigger: "blur" }
            // { min: 0, max: 24, message: '长度在 0 到 24 个字符', trigger: 'blur' },
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          postName: [
            {required: true, message: "请输入职位名称", trigger: "blur" },
            { min: 0, max: 50, message: '长度在 0 到 50 个字符', trigger: 'blur' },
          ],
          trade: [
          { required: true, message: "请输入行业名称", trigger: "blur" }
          ],
          branch: [
          { required: true, message: "请输入所在部门", trigger: "blur" }
          ],
          monthPay: [
            
          { min: 0, max: 7, message: '长度在 0 到 7 个字符', trigger: 'blur' },],
          jobDescription: [
            { min: 0, max: 800, message: '长度在 0 到 800 个字符', trigger: 'blur' },
            { required: true, message: "请填写工作描述", trigger: "change" }
          ]
        },
        progectrules: {
          itemName: [
            { required: true, message: "请输入项目名称", trigger: "blur" },
            { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          companyName: [
            { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
          ],
          schoolTime: [
            { required: true, message: "请选择项目时间", trigger: "blur" }
          ],
          record: [{ required: true, message: "请选择学历", trigger: "blur" }],
          duty: [
            { required: true, message: "请填写个人职责", trigger: "change" },
            {
              min: 0,
              max: 800,
              message: "长度在 0 到 800 个字符",
              trigger: "blur"
            }
          ],
          project: [
            {
              min: 0,
              max: 800,
              message: "长度在 0 到 800 个字符",
              trigger: "blur"
            },
            { required: true, message: "请填写项目介绍", trigger: "change" }
          ]
        },
        trainrules: {
          trainCourse: [
            { required: true, message: "请输入培训课程", trigger: "blur" },
            { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          trainCours: [
            { required: true, message: "请输入培训机构", trigger: "blur" },
            { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
          ],
          trainTime: []
        },
        languagerules: {
          languages: [
            { required: true, message: "请输入语种", trigger: "blur" },
            { min: 0, max: 30, message: "长度在 0 到 30 个字符", trigger: "blur" }
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          listenAbility: [
            { required: true, message: "请选择听力能力", trigger: "blur" },
          ],
          readAbility: [
            { required: true, message: "请选择读写能力", trigger: "blur" }
          ],
        },
        professionalrules:{
          qual: [
            { required: true, message: "请输入语种", trigger: "blur" },
            { min: 0, max: 30, message: "长度在 0 到 30 个字符", trigger: "blur" }
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
        },
        skillrules: {
          technicalName: [
            { required: true, message: "请输入技能名称", trigger: "blur" },
            { min: 0, max: 50, message: "长度在 0 到 50 个字符", trigger: "blur" }
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          level: [
            { required: true, message: "请选择掌握程度", trigger: "blur" },
          ],
        },
        awardsrules: {
          prizeAward: [
            { required: true, message: "请输入奖项名称", trigger: "blur" },
            { min: 0, max: 30, message: "长度在 0 到 30 个字符", trigger: "blur" }
            // { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          prizeTime: [
            { required: true, message: "请选择获奖时间", trigger: "blur" },
          ],
        },
        selfappraisalrules: {
          personalDescription: [
            { required: true, message: "请填写个人介绍", trigger: "blur" },
            { min: 0, max: 20000, message: "长度在 0 到 2000 个字符", trigger: "blur" }
          ]
        },
        personalrules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 0, max: 24, message: '长度在 0 到 24 个字符', trigger: 'blur' },
            { pattern:/^[a-zA-Z\u4e00-\u9fa5\s]{0,24}$/, message: '姓名仅支持中文汉字与英文字母', trigger: 'blur' },
          ],
          state: [
            { required: true, message: '请选择求职状态', trigger: 'change' },
          ],
          city: [
            { required: true, message: '请选择城市', trigger: 'change' },
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          birthday: [
            { required: true, message: '请选择日期', trigger: 'change' }
          ],
          educationLevel: [
            { required: true, message: '请选择学历', trigger: 'change' }
          ],
          workAge: [
            { required: true, message: '请选择工作年限', trigger: 'blur' }
          ],
          politicCountenance: [
            { required: true, message: '请选择政治面貌', trigger: 'change' }
          ],
          phone: [
            { required: true, message: '请填写手机号', trigger: 'change' },
            { pattern:/^[1][3578][0-9]{9}$/,message: '请输入正确的手机号', trigger: ['change','blur'] },
          ],
          email: [
            { required: true, message: '请填写邮箱', trigger: 'change' },
            { pattern:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,message: '请输入正确的邮箱', trigger: ['change','blur'] },
          ],
        },
        jobintensionrules: {
          postType: [
            { required: true, message: '请输入职位类型', trigger: 'blur' },
            { min: 0, max: 24, message: '长度在 0 到 24 个字符', trigger: 'blur' },
          ],
          status: [
            { required: true, message: '请选择求职状态', trigger: 'change' },
          ],
          reportTime: [
            { required: true, message: '请选择到岗时间', trigger: 'change' },
          ],
          trade: [
            { required: true, message: '请选择企业行业', trigger: 'change' },
          ],
          scope: [
            { required: true, message: '请选择薪资范围', trigger: 'change' }
          ],
          city: [
            { required: true, message: '请选择城市', trigger: 'change' }
          ],
          jobType: [
            { required: true, message: '请选择工作类型', trigger: 'change' }
          ],
        },
      }
    },
    methods: {
      //求职意向保存
      jobintensionkeep(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$http.put(`/resume/${2}/target`,{content:this.formSelfappraisal.personalDescription}).then(res => {
              if (res.data.code == 200) {
                // console.log(res);
                this.jobintensionouterVisible = false
              }
            });
           
          } else {
            // this.informationouterVisible = false
            return false;
          }
      });
      },
      //个人信息
      informationkeep(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$http.put(`/resume/${2}/base`,{
              fullName:this.formInformation.name,
              province:this.formInformation.city,
              politicalStatus:2,
              sex:this.formInformation.sex,
              birthday:23423423423,
              degree:1,
              email:this.formInformation.email,
              phone:this.formInformation.phone,
              isGraduate:false,
              workYear:23445423423,
              overseasAge:2

            }).then(res => {
              if (res.data.code == 200) {
                // console.log(res);
                this.jobintensionouterVisible = false
                this.resumeId()
              }
            });
            this.informationouterVisible = false
          } else {
            // this.informationouterVisible = false
            return false;
          }
      });
      },
      //自我介绍
      selfappraisalkeep(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$http.put(`/resume/${2}/evaluation`,{content:this.formSelfappraisal.personalDescription}).then(res => {
              if (res.data.code == 200) {
                // console.log(res);
                this.selfappraisalouterVisible = false
              }
            });
            
          } else {
            // this.selfappraisalouterVisible = false
            return false;
          }
      });
      },
      //荣誉奖项保存
      awardskeep(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$http.put(`/resume/${2}/award/${this.awardsId}`,{award:this.formAwards.prizeAward,acquiredTime:2323233233}).then(res => {
              if (res.data.code == 200) {
                // console.log(res);
                this.awardsouterVisible = false
                this.resumeId()
              }
            });
           
          } else {
            // this.awardsouterVisible = false
            return false;
          }
      });
      },
      //专业技能
      skillkeep(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            if(this.formPersonalskill.level == '一般') {
              this.formPersonalskill.level = 0
            }else if(this.formPersonalskill.level == '良好') {
              this.formPersonalskill.level = 1
            }
            else if(this.formPersonalskill.level == '熟练') {
              this.formPersonalskill.level = 2
            }
            else if(this.formPersonalskill.level == '精通') {
              this.formPersonalskill.level = 3
            }
             this.$http.put(`/resume/${2}/skill/${this.skillId}`,{level:this.formPersonalskill.level,skill:this.formPersonalskill.technicalName}).then(res => {
              if (res.data.code == 200) {
                // console.log(res);
               this.personalskillouterVisible = false
               this.resumeId()
              }
            });
          } else {
            // this.personalskillouterVisible = false
            return false;
          }
      });
      },
      //语言能力
      languagekeep(formName) {
         this.$refs[formName].validate(valid => {
          if (valid) {
            if(this.formlanguage.languages == '一般') {
              this.formlanguage.languages = 0
            }else if(this.formlanguage.languages == '良好') {
              this.formlanguage.languages = 1
            }
            else if(this.formlanguage.languages == '熟练') {
              this.formlanguage.languages = 2
            }
            else if(this.formlanguage.languages == '精通') {
              this.formlanguage.languages = 3
            }
             this.$http.put(`/resume/${2}/language/${this.languageId}`,{language:this.formlanguage.languages,listenAndSpeak:this.formlanguage.listenAbility,readAndWrite:this.formlanguage.readAbility}).then(res => {
              if (res.data.code == 200) {
                // console.log(res);
               this.languageouterVisible = false
               this.resumeId()
              }
            });
            
          } else {
            // this.languageouterVisible = false
            return false;
          }
      });
      },
       //职称等级
      professionkeep(formName) {
         this.$refs[formName].validate(valid => {
          if (valid) {
             this.$http.put(`/resume/${2}/qualification/${this.qualId}`,{qual:this.formProfession.qual}).then(res => {
              if (res.data.code == 200) {
                // console.log(res);
               this.professionouterVisible = false
               this.resumeId()
              }
            });
            
          } else {
            // this.languageouterVisible = false
            return false;
          }
      });
      },
      //培训经历保存
      trainingkeep(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
             this.$http.put(`/resume/${2}/training/${this.trainId}`,{lesson:this.formtraining.trainCourse,institution:this.formtraining.trainCours}).then(res => {
              if (res.data.code == 200) {
                // console.log(res);
               this.trainingouterVisible = false
               this.resumeId()
              }
            });
            
          } else {
            // this.trainingouterVisible = false
            return false;
          }
      });
      },
      //项目经历保存
      progectkeep(formName) {
         this.$refs[formName].validate(valid => {
          if (valid) {
            this.$http.put(`/resume/${2}/project/${this.progectId}`,{duty:this.formProject.duty,beginTime:654645646342,company:this.formProject.companyName,description: this.formProject.project,project:this.formProject.companyName}).then(res => {
              if (res.data.code == 200) {
                // console.log(res);
               this.progectouterVisible = false
               this.resumeId()
              }
            });
          } else {
            // this.progectouterVisible = false
            return false;
          }
      });
      },
      //工作保存
      workkeep(formName) {
         this.$refs[formName].validate(valid => {
          if (valid) {
            this.$http.put(`/resume/${2}/work/${this.workId}`,{beginTime:654645646342,company:this.formWork.companyName,description:this.formWork.jobDescription,position:this.formWork.postName}).then(res => {
              if (res.data.code == 200) {
                // console.log(res);
                this.workouterVisible = false
                this.resumeId()
              }
            });
          } else {
            // this.workouterVisible = false
            return false;
          }
      });
      },
      //教育保存
      educationkeep(formName) {
         this.$refs[formName].validate(valid => {
          if (valid) {
            if(this.formEducation.educationDegree == '高中') {
                this.formEducation.educationDegree = 2
            }else if(this.formEducation.educationDegree == '初中及以下') {
                this.formEducation.educationDegree = 0
            }else if(this.formEducation.educationDegree == '职中') {
                this.formEducation.educationDegree = 1
            }else if(this.formEducation.educationDegree == '大专') {
                this.formEducation.educationDegree = 3
            }else if(this.formEducation.educationDegree == '本科') {
                this.formEducation.educationDegree = 4
            }else if(this.formEducation.educationDegree == '硕士') {
                this.formEducation.educationDegree = 5
            }else if(this.formEducation.educationDegree == '博士') {
                this.formEducation.educationDegree = 6
            }
            this.$http.put(`/resume/${2}/education/${this.educationId}`,{beginTime:966517171000,endTime:null,degree:this.formEducation.educationDegree,major:this.formEducation.educationSpecialty,school:this.formEducation.educationName,isUnified:false}).then(res => {
              if (res.data.code == 200) {
                // console.log(res);
                this.educationouterVisible = false
              }
            });
            
          } else {
            // this.educationouterVisible = false
            return false;
          }
      });
      },
      //获取简历详情
      resumeId () {
        this.$http.get(`/resume/${2}`).then(res => {
          if (res.data.code == 200) {
            console.log(res.data.data)
            this.resumeIdList = res.data.data.base
            this.listjobintension = res.data.data.target
            this.listeducational = res.data.data.eduExpr
            this.listwork = res.data.data.workExpr
            this.listprogectperience = res.data.data.projects
            this.listtrain = res.data.data.training
            this.listlanguages = res.data.data.languages
            this.listpersonalskill = res.data.data.skills
            this.listprofessional = res.data.data.qualifications
            this.listaward = res.data.data.awards
            this.listpersonappraisal = res.data.data.evaluation

            if(this.listjobintension.jobSearchStatus == 2) {
                this.listjobintension.jobSearchStatus = '离职-延时到岗'  
              }else if(this.listjobintension.jobSearchStatus == 1) {
                this.listjobintension.jobSearchStatus = '离职-随时到岗'
              }else if(this.listjobintension.jobSearchStatus == 3) {
                this.listjobintension.jobSearchStatus = '在职-考虑机会'
              }else if(this.listjobintension.jobSearchStatus == 4) {
                this.listjobintension.jobSearchStatus = '在职-暂不到岗'
              }

            if(this.listjobintension.jobType == 1) {
                this.listjobintension.jobType = '实习'  
              }else if(this.listjobintension.jobType == 2) {
                this.listjobintension.jobType = '全职'
              }else if(this.listjobintension.jobType == 3) {
                this.listjobintension.jobType = '兼职'
              }

            if(this.resumeIdList.politicalStatus == 3) {
                this.resumeIdList.politicalStatus = '民主党派'
            }else if(this.resumeIdList.politicalStatus == 1) {
                this.resumeIdList.politicalStatus = '群众'
            }else if(this.resumeIdList.politicalStatus == 2) {
                this.resumeIdList.politicalStatus = '团员'
            }else if(this.resumeIdList.politicalStatus == 4) {
                this.resumeIdList.politicalStatus = '预备党员'
            }else if(this.resumeIdList.politicalStatus == 5) {
                this.resumeIdList.politicalStatus = '中共党员'
            }  

            
          }
        });
      },
      //获取简历简讯
      brief () {
        this.$http.get('/resume/brief').then(res => {
          if (res.data.code == 200) {
            if(res.data.data.target == null) {
              this.showPersonalinformation = false,
              this.isshowpersonalinformation = true,
              this.personalinformation = true
            }
            console.log(res.data.data.target);
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
        this.$http.delete(`/resume/${2}/skill/${this.skillId}`).then(res => {
          if (res.data.code == 204) {
            this.dialogskill = false
            this.resumeId()
          }
        });
      },
      //职称等级删除
      deleteprofession() {
        this.$http.delete(`/resume/${2}/qualification/${this.qualId}`).then(res => {
          if (res.data.code == 204) {
            this.dialogprofession = false
            this.resumeId()
          }
        });
      },
      //工作经历删除
      deletework() {
        this.$http.delete(`/resume/${2}/work/${this.workId}`).then(res => {
          if (res.data.code == 204) {
            this.dialogwork = false
            this.resumeId()
          }
        });
      },
       //荣誉奖项删除
      deleteawards() {
        this.$http.delete(`/resume/${2}/award/${this.awardsId}`).then(res => {
          if (res.data.code == 204) {
            this.dialogaward = false
            this.resumeId()
          }
        });
      },
       //教育经历删除
      deletedu() {
        this.$http.delete(`/resume/${2}/education/${this.educationId}`).then(res => {
          if (res.data.code == 204) {
            this.dialogedu = false
            this.resumeId()
            
          }
        });
      },
      //职称等级删除
      deleteaward() {
        this.$http.delete(`/resume/${2}/qualification/${1}`).then(res => {
          if (res.data.code == 200) {
            this.dialogedu = false
            this.resumeId()
            console.log(res);
          }
        });
      },
       //培训经历删除
      deletetrain() {
        this.$http.delete(`/resume/${2}/training/${this.trainId}`).then(res => {
          if (res.data.code == 204) {
            this.dialogtrain = false
            this.resumeId()
          }
        });
      },
       //语言能力删除
      deletelanguage() {
        this.$http.delete(`/resume/${2}/language/${this.languageId}`).then(res => {
          if (res.data.code == 204) {
            this.dialoglanguage = false
            this.resumeId()
          }
        });
      },
       //项目经历删除
      deleteproject() {
        this.$http.delete(`/resume/${2}/project/${this.progectId}`).then(res => {
          if (res.data.code == 204) {
            this.dialogproject = false
            this.resumeId()
          }
        });
      },
      //自我评价
      selfappraisalemit(c) {
        this.showpersonappraisal = c[1]
        this.showselfappraisal = c[0]
         this.resumeId()
      },
      //荣誉奖项（$emit）
      awardsEmit(c) {
        this.showpersonalskills = c[1]
        this.showpersonalskill = c[0]
         this.resumeId()
      },
      //专业技能（$emit）
      skillEmit(c) {
        this.showpersonalskills = c[1]
        this.showpersonalskill = c[0]
        this.resumeId()
      },
      //职称等级（$emit）
      professionalEmit(c) {
        this.showprofessional = c[0]
        this.showprofessionals = c[1]
         this.resumeId()
      },
      //语言能力（$emit）
      languageEmit(c) {
        this.showlanguage = c[0]
        this.showlanguages = c[1]
         this.resumeId()
      },
      //培训经历（$emit）
      trainEmit(c) {
        this.showtraining = c[0]
        this.showtrain = c[1]
         this.resumeId()
      },
      //项目经历（$emit）
      progectEmit(c) {
        this.showproject = c[0]
        this.showprogectperience = c[1]
         this.resumeId()
      },
      //教育经历（$emit）
      sendiptVal(c) {
        this.showeducation = c[0]
        this.showeducational = c[1]
         this.resumeId()
      },
      //工作经历
      workEmit(c) {
        this.showwork = c[0],
        this.showworkperience = c[1]
         this.resumeId()
      },
      //求职意向（$emit）
      jobintensionEmit(c) {
        this.showJob = c[0],
        this.showjobintension = c[1]
        this.showadd = c[1]
         this.resumeId()
      },
      //荣誉奖项（$emit）
      awardsemit(c) {
        this.showawards = c[0]
        this.showaward = c[1]
         this.resumeId()
      },
      //自我介绍
      showselfappraisalList() {
        this.selfappraisalouterVisible = true
        this.formSelfappraisal.personalDescription = this.listpersonappraisal.content
      },
      //荣誉奖项
      showawardList(list) {
        // console.log(list)
        this.awardsId = list.id
        this.awardsouterVisible = true
        this.formAwards.prizeAward = list.award
        this.formAwards.prizeTime = list.acquiredTime
      },
       //专业技能编辑
      editskill(list) {
        // console.log(list)
        this.personalskillouterVisible = true
        this.skillId = list.id 
        this.formPersonalskill.technicalName = list.skill
        if(list.level == 0) {
          this.formPersonalskill.level = '一般'
        }else if(list.level == 1) {
         this.formPersonalskill.level = '良好'
        }else if(list.level == 2) {
          this.formPersonalskill.level = '熟练'
        }else if(list.level == 3) {
          this.formPersonalskill.level = '精通'
        }
      },
      //语言能力
      
      showlanguagesList(list) {
        // console.log(list)
        this.languageouterVisible = true
        this.formlanguage.languages = list.language
        if(list.listenAndSpeak == 0) {
          this.formlanguage.listenAbility = '一般'
        }else if(list.listenAndSpeak == 1) {
          this.formlanguage.listenAbility = '良好'
        }else if(list.listenAndSpeak == 2) {
          this.formlanguage.listenAbility = '熟练'
        }else if(list.listenAndSpeak == 3) {
          this.formlanguage.listenAbility = '精通'
        }
        if(list.readAndWrite == 0) {
          this.formlanguage.readAbility = '一般'
        }else if(list.readAndWrite == 1) {
          this.formlanguage.readAbility = '良好'
        }else if(list.readAndWrite == 2) {
          this.formlanguage.readAbility = '熟练'
        }else if(list.readAndWrite == 3) {
          this.formlanguage.readAbility = '精通'
        }
        this.languageId = list.id
      },
      //培训经历
      showtrainList(list) {
        // console.log(list)
        this.trainingouterVisible = true
        this.trainId = list.id
        this.formtraining.trainCourse = list.lesson
        this.formtraining.trainCours = list.institution
        this.formtraining.trainTime = list.trainTime
        // formtraining: {
        //   trainCourse:'',
        //   trainTime:'',
        //   trainCours:'',
        // },

      },
      //项目经历编辑
      showprogectperienceList(list) {
        console.log(list,'2312313123111111')
        this.progectouterVisible = true
        this.progectId = list.id
        this.formProject.itemName = list.project
        this.formProject.companyName = list.company
        this.formProject.schoolTime = list.schoolTime
        this.formProject.duty = list.duty
        this.formProject.project = list.description
      },
      showprofessionalList(list) {
        this.qualId = list.id
        this.formProfession.qual = list.qual
        this.professionouterVisible = true
      },
      //工作经历编辑
      showworkperienceList(list) {
        // console.log(list,"22323232323")
        this.workouterVisible = true
        this.workId  = list.id
        this.formWork.companyName = list.company
        this.formWork.postName = list.position
        this.formWork.jobDescription = list.description  
      },
      //个人信息编辑
      editsinformation(c) {
        // // console.log(c)
        // this.informationouterVisible = c[0]
        // this.formInformation.name = c[2]
        // this.formInformation.city = c[3]
        // this.formInformation.workAge = c[4]
        // this.formInformation.age = c[5]
        // this.formInformation.phone = c[6]
        // this.formInformation.email = c[6]
        // this.personalinformation = true
      },
      //教育经历编辑
      showeducationalList(list,index) {
        console.log(list)
        this.educationId = list.id
        this.educationouterVisible = true
        this.formEducation.educationSpecialty = list.major
        this.formEducation.educationName = list.school
        if(list.degree == 2) {
          this.formEducation.educationDegree = '高中'
      }else if(list.degree == 0) {
          this.formEducation.educationDegree = '初中及以下'
      }else if(list.degree == 1) {
          this.formEducation.educationDegree = '职中'
      }else if(list.degree == 3) {
          this.formEducation.educationDegree = '大专'
      }else if(list.degree == 4) {
          this.formEducation.educationDegree = '本科'
      }else if(list.degree == 5) {
          this.formEducation.educationDegree = '硕士'
      }else if(list.degree == 6) {
          this.formEducation.educationDegree = '博士'
      }
       
        // this.formEducation.educationDegree = list.degree
        // this.formEducation.educationTime = list.major
        
        
      },

      //求职意向编辑
      // formJobintension: {
      //     postType: '',
      //     trade: '',
      //     scope:'',
      //     status:'',
      //     jobType:'',
      //     reportTime:'', 
      //   },
      showjobintensionList () {
        console.log(this.listjobintension.jobSearchStatus)
        this.jobintensionouterVisible = true
        // this.formJobintension.postType = this.listjobintension.postType
        // this.formJobintension.trade = list.trade
        // this.formJobintension.scope = list.scope
        this.formJobintension.status = this.listjobintension.jobSearchStatus
        this.formJobintension.jobType = this.listjobintension.jobType
        // this.formJobintension.reportTime = list.reportTime
      },
      // formInformation: {
      //     name:'',
      //     state:'',
      //     sex:'',
      //     workAge:'',
      //     city:'',
      //     educationLevel:'',
      //     birthday:'',
      //     email:'',
      //     phone:'',
      //     politicCountenance:'',
      //     dutyTime:''
      //   },
      // resumeIdList
      showjpersonalList() {
//         age: 48
// birthday: 23423423000
// county: "徐汇区"
// degree: 2
// email: "3738281@qq.com"
// fullName: "张三"
// graduate: false
// overseasAge: 2
// phone: "15618322777"
// politicalStatus: "团员"
// province: "1"
// sex: 1
// updatedTime: 1568285151000
// workAge: 48
// workYear: 23445423000
        console.log(this.resumeIdList)
        this.informationouterVisible = true
        this.formInformation.name = this.resumeIdList.fullName
        this.formInformation.sex = this.resumeIdList.sex
        if(this.resumeIdList.degree == 2) {
                this.formInformation.educationLevel = '高中'
            }else if(this.resumeIdList.degree == 0) {
                this.formInformation.educationLevel = '初中及以下'
            }else if(this.resumeIdList.degree == 1) {
                this.formInformation.educationLevel = '职中'
            }else if(this.resumeIdList.degree == 3) {
                this.formInformation.educationLevel = '大专'
            }else if(this.resumeIdList.degree == 4) {
                this.formInformation.educationLevel = '本科'
            }else if(this.resumeIdList.degree == 5) {
                this.formInformation.educationLevel = '硕士'
            }else if(this.resumeIdList.degree == 6) {
                this.formInformation.educationLevel = '博士'
            }
            
        this.formInformation.birthday = this.$moment(this.resumeIdList.birthday).format("YYYY-DD-MM") 
        this.formInformation.email = this.resumeIdList.email 
        this.formInformation.phone = this.resumeIdList.phone
        this.formInformation.politicCountenance = this.resumeIdList.politicalStatus
        // if(this.resumeIdList.politicalStatus == 3) {
        //         this.formInformation.politicCountenance = '民主党派'
        //     }else if(this.resumeIdList.politicalStatus == 1) {
        //         this.formInformation.politicCountenance = '群众'
        //     }else if(this.resumeIdList.politicalStatus == 2) {
        //         this.formInformation.politicCountenance = '团员'
        //     }else if(this.resumeIdList.politicalStatus == 4) {
        //         this.formInformation.politicCountenance = '预备党员'
        //     }else if(this.resumeIdList.politicalStatus == 5) {
        //         this.formInformation.politicCountenance = '中共党员'
        //     }
        // console.log(this.$moment(1568205123).format("YYYY"))
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
      showedudialog(list) {
        this.educationId = list.id
        this.dialogedu = true
      },
      showworkdialog(list) {
        this.workId  = list.id
        this.dialogwork = true
      },
      showprojectdialog(list) {
        this.progectId  = list.id
        this.dialogproject = true
      },
      showtraindialog(list) {
        this.trainId  = list.id
        this.dialogtrain = true
      },
      showlanguagedialog(list) {
        this.languageId  = list.id
        this.dialoglanguage = true
      },
      showskilldialog(list) {
        this.skillId  = list.id
        this.dialogskill = true
      },
      showawardsdialog(list) {
        this.awardsId  = list.id
        this.dialogaward = true
      },
      showprofessionaldialog(list) {
        this.qualId  = list.id
        this.dialogprofession = true
      },
      ispersonalinformation() {
        this.isshowpersonalinformation = true
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
        this.showprofessionals = false
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
      this.brief(),
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
      .li-a
        display flex
        flex-direction row
      .ul-a
        .actions-span
          float right
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