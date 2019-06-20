<template>
  <div class="lab-main">
    <div class="content">
      <br>
      <el-form :inline="true" :model="engiProFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="engiProFrom.name" placeholder="姓名" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="engiProFrom.stuId" placeholder="学号" readonly="true"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="engiProFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目名称" prop="proName">
          <el-input v-model="engiProFrom.proName" placeholder="项目名称" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="engiProFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目简介" prop="proIntr">
          <el-input type="textarea" v-model="engiProFrom.proIntr" placeholder="项目简介" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="engiProFrom" :rules="rules" ref="engiProFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
          <el-form-item label="性能指标" prop="performance">
          <el-input v-model="engiProFrom.performance" placeholder="性能指标" style="width: 525px"></el-input>
        </el-form-item>   
      </el-form>
      <br>
      <el-form :inline="true" :model="engiProFrom" :rules="rules" ref="engiProFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="所做工作" prop="work">
          <el-input type="textarea" v-model="engiProFrom.work" placeholder="所做工作" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="engiProFrom" :rules="rules" ref="engiProFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="参与排名" prop="ranking">
          <el-input v-model="engiProFrom.ranking" placeholder="参与排名"></el-input>
        </el-form-item>
        <el-form-item label="参与人数" prop="totalNumber">
          <el-input v-model="engiProFrom.totalNumber" placeholder="参与人数"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="engiProFrom" :rules="rules" ref="engiProFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目状态" prop="proState">
          <el-select v-model="engiProFrom.proState" placeholder="请选择项目状态" style="width: 525px">
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
      <el-form :inline="true" :model="engiProFrom" :rules="rules" ref="engiProFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="企业名称" prop="enterpriseName">
          <el-input v-model="engiProFrom.enterpriseName" placeholder="企业名称"></el-input>
        </el-form-item>
        <el-form-item label="企业导师" prop="enterpriseTeacher">
          <el-input v-model="engiProFrom.enterpriseTeacher" placeholder="企业导师"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="engiProFrom" :rules="rules" ref="engiProFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="校内导师" prop="teacher">
          <el-input v-model="engiProFrom.teacher" placeholder="指导老师"></el-input>
        </el-form-item>
        <el-form-item label="日期" prop="getDate">
          <div class="block">
              <el-date-picker
                v-model="engiProFrom.getDate"
                type="date"
                placeholder="选择日期"
                style="width: 200px">
              </el-date-picker>
            </div>
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
      <el-form label-width="70px" :model="engiProFrom">
        <el-form-item style="margin-left: -40px">
          <el-button style="width: 100px" @click="deletes" type="warning">删除</el-button>
          <el-button style="width: 100px" @click="modify('engiProFrom')" type="info">确定</el-button>
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
        engiProFrom: {
          stuId: sessionStorage.getItem('userId'),
          name: sessionStorage.getItem('userName'),
          proName: '',
          proIntr: '',
          performance: '', // 性能指标
          work: '', // 个人所做的工作
          ranking: null,
          totalNumber: null,
          proState: '',
          enterpriseName: '', 
          enterpriseTeacher: '',
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
          value: "项目进行初期",
          label: "项目进行初期"
        },{
          value: "项目进行中期",
          label: "项目进行中期"
        },{
          value: "项目完成",
          label: "项目完成"
        }],
        loading: false,
        rules: {
          name: [
            {required: true, message: '姓名不能为空', trigger: 'blur'},
          ],
          proName: [
            {required: true, message: '项目名称不能为空', trigger: 'blur'},
          ],
          performance: [
            {required: true, message: '性能指标不能为空', trigger: 'blur'},
          ],
          proState: [
            {required: true, message: '项目状态不能为空', trigger: 'blur'},
          ],
          proIntr: [
            {required: true, message: '项目简介不能为空', trigger: 'blur'},
          ],
          work: [
            {required: true, message: '个人所做工作不能为空', trigger: 'blur'},
          ],
          enterpriseName: [
            {required: true, message: '企业名称不能为空', trigger: 'blur'},
          ],
          enterpriseTeacher: [
           {required: true, message: '企业导师不能为空', trigger: 'blur'},
          ],
          getDate: [
            {required: true, message: '时间不能为空', trigger: 'blur'},
          ],
          ranking: [
            {required: true, message: '参与排名不能为空', trigger: 'blur'},
          ],
          totalNumber: [
            {required: true, message: '参与人数不能为空', trigger: 'blur'},
          ],
          teacher: [
            {required: true, message: '指导老师不能为空', trigger: 'blur'},
          ]
        },
    }
  },
  created() {
    this.engiProFrom.id = sessionStorage.getItem('id')
    this.engiProFrom.name = sessionStorage.getItem('userName')
    this.engiProFrom.stuId = sessionStorage.getItem('stuId')
    this.engiProFrom.proName = sessionStorage.getItem('proName')
    this.engiProFrom.proIntr = sessionStorage.getItem('proIntr')
    this.engiProFrom.performance = sessionStorage.getItem('performance')
    this.engiProFrom.ranking = sessionStorage.getItem('ranking')
    this.engiProFrom.totalNumber = sessionStorage.getItem('totalNumber')
    this.engiProFrom.work = sessionStorage.getItem('work')
    this.engiProFrom.proState = sessionStorage.getItem('proState')
    this.engiProFrom.enterpriseName = sessionStorage.getItem('enterpriseName')
    this.engiProFrom.enterpriseTeacher = sessionStorage.getItem('enterpriseTeacher')
    this.engiProFrom.teacher = sessionStorage.getItem('teacher')
    this.engiProFrom.getDate = sessionStorage.getItem('getDate')
  },
  computed: {
      fileForm4() {
        return {fileName: this.engiProFrom.stuId +"_"+ this.engiProFrom.proName, isFront: 7}
      },
    },
  methods: {
    cencel() {
      this.$router.push({name: 'Center', params:{tagP: 'engiProCenter'}})
    },
    modify(engiProFrom) {
      this.$refs[engiProFrom].validate((valid) => {
        if (valid) {
          if (this.engiProFrom.proofMaterialId == '') {
            this.$message.warning("请上传佐证材料")
            return
          }
          this.$http.EditEngiPro(this.engiProFrom).then((result) => {
            if (result.c === 200) {
              this.$message({
                message: '修改成功！',
                type: 'success'
              });
              this.$emit('flushQuery')
              this.$router.push({name: 'Center', params:{tagP: 'engiProCenter'}})
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
        this.$http.DeleEngiPro(this.engiProFrom.id).then((result) => {
          if (result.c === 200) {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.$emit('flushQuery')
            this.$router.push({name: 'Center', params:{tagP: 'engiProCenter'}})
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
      this.engiProFrom.proofMaterialId = this.engiProFrom.stuId +"_"+ this.engiProFrom.proName+ "_7.pdf"
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