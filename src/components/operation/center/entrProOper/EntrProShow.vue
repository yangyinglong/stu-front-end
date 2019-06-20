<template>
  <div class="lab-main">
    <div class="content">
      <br>
      <el-form :inline="true" :model="entrProFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="entrProFrom.name" placeholder="姓名" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="entrProFrom.stuId" placeholder="学号" readonly="true"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="entrProFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目名称" prop="proName">
          <el-input v-model="entrProFrom.proName" placeholder="项目名称" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="entrProFrom" :rules="rules" ref="entrProFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目类别" prop="proType">
          <el-select v-model="entrProFrom.proType" placeholder="请选择项目类别" style="width: 525px">
            <el-option
              v-for="item in proTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>        
      </el-form>
      <br>
      <el-form :inline="true" :model="entrProFrom" :rules="rules" ref="entrProFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目级别" prop="proLevel">
          <el-select v-model="entrProFrom.proLevel" placeholder="请选择项目级别" style="width: 200px">
            <el-option
              v-for="item in proLevels"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>
        <el-form-item label="竞赛状态" prop="proState">
          <el-select v-model="entrProFrom.proState" placeholder="请选择竞赛状态" style="width: 200px">
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
      <el-form :inline="true" :model="entrProFrom" :rules="rules" ref="entrProFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="参与排名" prop="ranking">
          <el-input v-model="entrProFrom.ranking" placeholder="参赛排名"></el-input>
        </el-form-item>
        <el-form-item label="参与人数" prop="totalNumber">
          <el-input v-model="entrProFrom.totalNumber" placeholder="参赛人数"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="entrProFrom" :rules="rules" ref="entrProFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="指导老师" prop="teacher">
          <el-input v-model="entrProFrom.teacher" placeholder="指导老师"></el-input>
        </el-form-item>
        <el-form-item label="日期" prop="getDate">
          <div class="block">
              <el-date-picker
                v-model="entrProFrom.getDate"
                type="date"
                placeholder="选择日期"
                style="width: 200px">
              </el-date-picker>
            </div>
        </el-form-item>        
      </el-form>
      <br>
      <el-form :inline="true" :model="entrProFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目成果" prop="proResult">
          <el-input type="textarea" v-model="entrProFrom.proResult" placeholder="项目成果" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <br>
      <el-upload
        class="upload-demo"
        ref="upload"
        action="/api/file/upload"
        :data="fileForm4"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :limit = 1
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传pdf文件,请将表单信息填好之后上传文件</div>
      </el-upload>
      <br><br><br>
      <el-form label-width="70px" :model="entrProFrom">
        <el-form-item style="margin-left: -40px">
          <el-button style="width: 100px" @click="deletes" type="warning">删除</el-button>
          <el-button style="width: 100px" @click="modify('entrProFrom')" type="info">确定</el-button>
          <el-button style="width: 100px" @click="cencel">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OrderCenter',
  data() {
    return {
        fileList: [],
        entrProFrom: {
          stuId: sessionStorage.getItem('userId'),
          name: sessionStorage.getItem('userName'),
          proName: '',
          proType: '', //
          ranking: null,
          totalNumber: null,
          proState: '',
          proResult: '',
          proLevel: '',
          teacher: '',
          getDate: '',
          proofMaterialId: '',
        },
        proTypes: [{
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
        proStates: [{
          value: "申请",
          label: "申请"
        },{
          value: "项目进行初期",
          label: "项目进行初期"
        },{
          value: "项目进行中期",
          label: "项目进行中期"
        },{
          value: "项目完成",
          label: "项目完成"
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
          proType: [
            {required: true, message: '项目类型不能为空', trigger: 'blur'},
          ],
          proState: [
            {required: true, message: '比赛状态不能为空', trigger: 'blur'},
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
          getDate: [
            {required: true, message: '时间不能为空', trigger: 'blur'},
          ],
          ranking: [
            {required: true, message: '参赛排名不能为空', trigger: 'blur'},
          ],
          totalNumber: [
            {required: true, message: '参赛人数不能为空', trigger: 'blur'},
          ],
          teacher: [
            {required: true, message: '参赛人数不能为空', trigger: 'blur'},
          ]
        },
    }
  },
  created() {
    this.entrProFrom.id = sessionStorage.getItem('id')
    this.entrProFrom.name = sessionStorage.getItem('userName')
    this.entrProFrom.stuId = sessionStorage.getItem('stuId')
    this.entrProFrom.proName = sessionStorage.getItem('proName')
    this.entrProFrom.proType = sessionStorage.getItem('proType')
    this.entrProFrom.proState = sessionStorage.getItem('proState')
    this.entrProFrom.ranking = sessionStorage.getItem('ranking')
    this.entrProFrom.totalNumber = sessionStorage.getItem('totalNumber')
    this.entrProFrom.proLevel = sessionStorage.getItem('proLevel')
    this.entrProFrom.proResult = sessionStorage.getItem('proResult')
    this.entrProFrom.teacher = sessionStorage.getItem('teacher')
    this.entrProFrom.getDate = sessionStorage.getItem('getDate')
    
  },
  computed: {
      fileForm4() {
         return {fileName: this.entrProFrom.stuId +"_"+ this.entrProFrom.proName, isFront: 6}
      },
    },
  methods: {
    cencel() {
      this.$router.push({name: 'Center', params:{tagP: 'entrProCenter'}})
    },
    modify(entrProFrom) {
      this.$refs[entrProFrom].validate((valid) => {
        if (valid) {
          if (this.entrProFrom.proofMaterialId == '') {
            this.$message.warning("请上传佐证材料")
            return
          }
          this.$http.EditEntrPro(this.entrProFrom).then((result) => {
            if (result.c === 200) {
              this.$message({
                message: '修改成功！',
                type: 'success'
              });
              this.$emit('flushQuery')
              this.$router.push({name: 'Center', params:{tagP: 'entrProCenter'}})
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
    deletes() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.DeleEntrPro(this.entrProFrom.id).then((result) => {
          if (result.c === 200) {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.$emit('flushQuery')
            this.$router.push({name: 'Center', params:{tagP: 'entrProCenter'}})
          } else {
            this.$message.warning(result.r)
          }
        }, (err) => {
          this.$message.error(err.msg)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });

    },
    submitUpload() {
      this.entrProFrom.proofMaterialId = this.entrProFrom.stuId +"_"+ this.entrProFrom.proName+ "_6.pdf"
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
    },
    handlePreview(file) {
    },
  }
}
</script>

<style scoped>
  .lab-main{
    margin-top: -20px;
    min-height: 530px;
    text-align: center;
    margin: 0 auto;
  }
  .content {

    min-width: 70%;
    min-height: 80%;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    horiz-align: center;
    white-space: nowrap;
    margin: 0;
    border:1px solid #999999;
    margin-top: 50px;
    background: #FFFFFF;
  }
</style>