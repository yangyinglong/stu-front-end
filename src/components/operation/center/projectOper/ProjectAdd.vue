<template>
  <div>
    <b class="linked" @click="dialogLoginVisible = true">
      <el-button type="info" plain icon="el-icon-plus" size="mini"></el-button>
    </b>
    <el-dialog width="720px" title="添加参与项目" :visible.sync="dialogLoginVisible" class="content">
      <div style="width: 100%; margin-left: -15px">
      <el-form :inline="true" :model="projectFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="projectFrom.name" placeholder="姓名" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="projectFrom.stuId" placeholder="学号" readonly="true"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="projectFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目类型" prop="proClass">
          <el-select v-model="projectFrom.proClass" placeholder="请选择项目类型" style="width: 525px">
            <el-option
              v-for="item in proClasses"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="projectFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目名称" prop="proName">
          <el-input v-model="projectFrom.proName" placeholder="项目名称" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
      <br>

      <el-form :inline="true" :model="projectFrom" :rules="rules" ref="projectFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目类别" prop="proType">
          <el-select v-model="projectFrom.proType" placeholder="请选择项目类别" style="width: 525px" v-if="projectFrom.proClass === '创新项目'">
            <el-option
              v-for="item in proTypes1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="projectFrom.proType" placeholder="请选择项目类别" style="width: 525px" v-else-if="projectFrom.proClass === '创业项目'">
            <el-option
              v-for="item in proTypes2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="projectFrom.proType" placeholder="请选择项目类别" style="width: 525px"  disabled v-else-if="projectFrom.proClass === '工程项目'">
            <el-option
              v-for="item in proTypes3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="projectFrom.proType" placeholder="请选择项目类别" style="width: 525px" v-else>
            <el-option
              v-for="item in proTypes4"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>        
      </el-form>



      <br>
      <el-form :inline="true" :model="projectFrom" :rules="rules" ref="projectFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目级别" prop="proLevel">
          <el-select v-model="projectFrom.proLevel" placeholder="请选择项目级别" style="width: 200px">
            <el-option
              v-for="item in proLevels"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>
        <el-form-item label="项目状态" prop="proState">
          <el-select v-model="projectFrom.proState" placeholder="请选择项目状态" style="width: 200px">
            <el-option
              v-for="item in proStates"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>
        
      </el-form>
      <br>
      <el-form :inline="true" :model="projectFrom" :rules="rules" ref="projectFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="参与排名" prop="ranking">
          <el-input v-model="projectFrom.ranking" placeholder="项目中个人排名"></el-input>
        </el-form-item>
        <el-form-item label="参与人数" prop="totalNumber">
          <el-input v-model="projectFrom.totalNumber" placeholder="项目总参与人数"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="projectFrom" :rules="rules" ref="projectFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="指导老师" prop="proTeacher">
          <el-input v-model="projectFrom.proTeacher" placeholder="指导老师"></el-input>
        </el-form-item>
        <el-form-item label="日期" prop="proTime">
          <div class="block">
              <el-date-picker
                v-model="projectFrom.proTime"
                type="date"
                placeholder="选择日期"
                style="width: 200px">
              </el-date-picker>
            </div>
        </el-form-item>        
      </el-form>
      <br>
      <el-form :inline="true" :model="projectFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目成果" prop="proResult">
          <el-input type="textarea" v-model="projectFrom.proResult" placeholder="项目成果" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-upload
        class="upload-demo"
        ref="upload"
        action="/api/file/upload"
        :data="fileForm4"
        :limit = 1
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传pdf文件,请将表单信息填好之后上传文件</div>
      </el-upload>
    </div>
    <br><br>
    <div style="margin: 0 auto">
      <el-row>
        <el-button style="width: 120px" @click="dialogLoginVisible = false, fileList = []">取消</el-button>
        <el-button type="info" style="width: 120px" @click="addProject('projectFrom')">增加</el-button>
      </el-row>
    </div>
    </el-dialog>
  </div>

</template>

<script>
  export default {
    name: 'AddProject',
    data() {
      return {
        dialogLoginVisible: false,
        fileList: [],
        projectFrom: {
          stuId: sessionStorage.getItem('userId'),
          name: sessionStorage.getItem('userName'),

          proClass: '创新项目',

          proName: '',
          proType: '', //
          proLevel: '',
          ranking: null,
          totalNumber: null,
          proState: '',
          proResult: '',
         
          proTeacher: '',
          proTime: '',
          proofMaterialId: '',
        },
        proClasses: [{
          value: '创新项目',
          label: '创新项目'
        },{
          value: '创业项目',
          label: '创业项目'
        },{
          value: '工程项目',
          label: '工程项目'
        }],

        proTypes2: [{
          value: "新苗计划",
          label: "新苗计划"
        },{
          value: "创新创业孵化项目",
          label: "创新创业孵化项目"
        },{
          value: "科技成果推广项目",
          label: "科技成果推广项目"
        },{
          value: "科技推广项目",
          label: "科技推广项目"
        },{
          value: "优秀论文资助项目",
          label: "优秀论文资助项目"
        },{
          value: "其他项目",
          label: "其他项目"
        }],
        proTypes1: [{
          value: "创业孵化项目",
          label: "创业孵化项目"
        },{
          value: "互联网创业项目",
          label: "互联网创业项目"
        },{
          value: "个人创业项目",
          label: "个人创业项目"
        },{
          value: "其他项目",
          label: "其他项目"
        }],


        proStates: [{
          value: "申报",
          label: "申报"
        },{
          value: "在研",
          label: "在研"
        },{
          value: "结题",
          label: "结题"
        }],
        proLevels: [{
          value: "国家级",
          label: "国家级"
        },{
          value: "省级",
          label: "省级"
        },{
          value: "企业",
          label: "企业"
        },{
          value: "校级",
          label: "校级"
        }],
        loading: false,
        rules: {
          name: [
            {required: true, message: '姓名不能为空', trigger: 'blur'},
          ],
          proName: [
            {required: true, message: '项目名称不能为空', trigger: 'blur'},
          ],
          proClass: [
            {required: true, message: '项目大类不能为空', trigger: 'blur'},
          ],
          proType: [
            {required: true, message: '项目类型不能为空', trigger: 'blur'},
          ],
          proState: [
            {required: true, message: '项目状态不能为空', trigger: 'blur'},
          ],
          // proIntr: [
          //   {required: true, message: '项目简介不能为空', trigger: 'blur'},
          // ],
          proResult: [
            {required: true, message: '项目成果不能为空', trigger: 'blur'},
          ],
          proLevel: [
            {required: true, message: '项目级别不能为空', trigger: 'blur'},
          ],
          proTime: [
            {required: true, message: '项目时间不能为空', trigger: 'blur'},
          ],
          ranking: [
            {required: true, message: '参赛排名不能为空', trigger: 'blur'},
          ],
          totalNumber: [
            {required: true, message: '参赛人数不能为空', trigger: 'blur'},
          ],
          proTeacher: [
            {required: true, message: '指导老师不能为空', trigger: 'blur'},
          ]
        },
        checkCode: '',
      }
    },
    created(){
    },
    mounted() {
    },
    computed: {
      fileForm4() {
        return {fileName:this.projectFrom.proClass + "_"+ this.projectFrom.stuId +"_"+ this.projectFrom.proName, isFront: 6}
      },
    },
    methods: {
      addProject(projectFrom) {
        this.$refs[projectFrom].validate((valid) => {
          if (valid) {
            if (this.projectFrom.name == '') {
              this.$message.warning("请完善信息！")
              return
            }
            if (this.projectFrom.proofMaterialId == '') {
              this.$message.warning("请上传佐证材料")
              return
            }
            this.$http.EditProject(this.projectFrom).then((result) => {
              if (result.c === 200) {
                this.$message({
                  message: '添加成功！',
                  type: 'success'
                });
                this.projectFrom.proType = ''
                this.projectFrom.proName = ''
                // this.projectFrom.proIntr = ''
                this.projectFrom.ranking = ''
                this.projectFrom.totalNumber = ''
                this.projectFrom.proState = ''
                this.projectFrom.proResult = ''
                this.projectFrom.proLevel = ''
                this.projectFrom.proTime = ''
                this.projectFrom.proTeacher = ''
                this.projectFrom.proofMaterialId = ''
                this.$emit('flushQuery')
                this.fileList = []
                this.dialogLoginVisible = false
              } else {
                this.$message.warning(result.r)
              }
            }, (err) => {
              this.$message.error(err.msg)
            })
          } else {
            this.$message.warning("请完善信息！")
          }
        })
      },
      submitUpload() {
        this.$refs.upload.submit();
        this.projectFrom.proofMaterialId = this.projectFrom.proClass + "_"+ this.projectFrom.stuId +"_"+ this.projectFrom.proName+ "_6.pdf"
      },
      handleRemove(file, fileList) {
      },
      handlePreview(file) {
      }
    }
  }

</script>

<style scoped>
.content {
	display: inline-block;
	text-align: center;
	vertical-align: middle;
	horiz-align: center;
	white-space: nowrap;
	margin: 0;
}
</style>