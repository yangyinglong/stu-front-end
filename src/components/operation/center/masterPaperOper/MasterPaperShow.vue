<template>
  <div class="lab-main">
    <div class="content">
      <br>
      <el-form :inline="true" :model="masterPaperFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="masterPaperFrom.name" placeholder="姓名" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="masterPaperFrom.stuId" placeholder="学号" readonly="true"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="masterPaperFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="论文题目" prop="paperName">
          <el-input v-model="masterPaperFrom.paperName" placeholder="论文题目" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="masterPaperFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="论文摘要" prop="paperAbstract">
          <el-input type="textarea" v-model="masterPaperFrom.paperAbstract" placeholder="项目简介" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="masterPaperFrom" :rules="rules" ref="masterPaperFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="外审成绩1" prop="score1">
          <el-input v-model="masterPaperFrom.score1" placeholder="外审成绩1" style="width: 525px"></el-input>
        </el-form-item>   
      </el-form>
       <el-form :inline="true" :model="masterPaperFrom" :rules="rules" ref="masterPaperFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="外审意见1" prop="sugg1">
          <el-input v-model="masterPaperFrom.sugg1" placeholder="外审意见1" style="width: 525px"></el-input>
        </el-form-item>   
      </el-form>
      <br>
      <el-form :inline="true" :model="masterPaperFrom" :rules="rules" ref="masterPaperFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="外审成绩2" prop="score2">
          <el-input v-model="masterPaperFrom.score2" placeholder="外审成绩2" style="width: 525px"></el-input>
        </el-form-item>   
      </el-form>
       <el-form :inline="true" :model="masterPaperFrom" :rules="rules" ref="masterPaperFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="外审意见2" prop="sugg2">
          <el-input v-model="masterPaperFrom.sugg2" placeholder="外审意见2" style="width: 525px"></el-input>
        </el-form-item>   
      </el-form>
      <br>
      <el-form :inline="true" :model="masterPaperFrom" :rules="rules" ref="masterPaperFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="外审成绩" prop="score3">
          <el-input v-model="masterPaperFrom.score3" placeholder="外审成绩" style="width: 525px"></el-input>
        </el-form-item>   
      </el-form>
       <el-form :inline="true" :model="masterPaperFrom" :rules="rules" ref="masterPaperFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="外审意见" prop="sugg3">
          <el-input v-model="masterPaperFrom.sugg3" placeholder="外审意见" style="width: 525px"></el-input>
        </el-form-item>   
      </el-form>
      <br>
      <el-form :inline="true" :model="masterPaperFrom" :rules="rules" ref="masterPaperFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="获奖日期" prop="getDate">
          <div class="block">
              <el-date-picker
                v-model="masterPaperFrom.getDate"
                type="date"
                placeholder="选择日期"
                style="width: 525px">
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
      <el-form label-width="70px" :model="masterPaperFrom">
        <el-form-item style="margin-left: -40px">
          <el-button style="width: 100px" @click="deletes" type="warning">删除</el-button>
          <el-button style="width: 100px" @click="modify('masterPaperFrom')" type="info">确定</el-button>
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
      masterPaperFrom: {
        stuId: sessionStorage.getItem('userId'),
        name: sessionStorage.getItem('userName'),
        paperName: '',
        paperAbstract: '', //
        score1: '',
        sugg1: '',
        score2: '',
        sugg2: '',
        score3: '',
        sugg3: '',
        getDate: '',
        proofMaterialId: ''
      },
      loading: false,
      rules: {
        name: [
          {required: true, message: '姓名不能为空', trigger: 'blur'},
        ],
        paperName: [
          {required: true, message: '论文题目不能为空', trigger: 'blur'},
        ],
        paperAbstract: [
          {required: true, message: '论文摘要不能为空', trigger: 'blur'},
        ],
        score1: [
          {required: true, message: '外审成绩1不能为空，可填无', trigger: 'blur'},
        ],
        sugg1: [
          {required: true, message: '外审建议1不能为空，可填无', trigger: 'blur'},
        ],
        score2: [
          {required: true, message: '外审成绩2不能为空，可填无', trigger: 'blur'},
        ],
        sugg2: [
          {required: true, message: '外审建议2不能为空，可填无', trigger: 'blur'},
        ],
        score3: [
          {required: true, message: '外审成绩不能为空，可填无', trigger: 'blur'},
        ],
        sugg3: [
          {required: true, message: '外审建议不能为空，可填无', trigger: 'blur'},
        ],
        getDate: [
          {required: true, message: '时间不能为空', trigger: 'blur'},
        ],
      },
    }
  },
  created() {
    this.masterPaperFrom.id = sessionStorage.getItem('id')
    this.masterPaperFrom.name = sessionStorage.getItem('name')
    this.masterPaperFrom.stuId = sessionStorage.getItem('stuId')
    this.masterPaperFrom.paperName = sessionStorage.getItem('paperName')
    this.masterPaperFrom.paperAbstract = sessionStorage.getItem('paperAbstract')
    this.masterPaperFrom.score1 = sessionStorage.getItem('score1')
    this.masterPaperFrom.sugg1 = sessionStorage.getItem('sugg1')
    this.masterPaperFrom.sugg2 = sessionStorage.getItem('sugg2')
    this.masterPaperFrom.score2 = sessionStorage.getItem('score2')
    this.masterPaperFrom.score3 = sessionStorage.getItem('score3')
    this.masterPaperFrom.sugg3 = sessionStorage.getItem('sugg3')
    this.masterPaperFrom.getDate = sessionStorage.getItem('getDate')    
  },
  computed: {
      fileForm4() {
        return {fileName: this.masterPaperFrom.stuId +"_"+ this.masterPaperFrom.paperName, isFront: 0}
      },
    },
  methods: {
    cencel() {
      this.$router.push({name: 'Center', params:{tagP: 'masterPaperCenter'}})
    },
    modify(masterPaperFrom) {
      this.$refs[masterPaperFrom].validate((valid) => {
        if (valid) {
          if (this.masterPaperFrom.proofMaterialId == '') {
            this.$message.warning("请上传佐证材料")
            return
          }
          this.$http.EditMasterPaper(this.masterPaperFrom).then((result) => {
            if (result.c === 200) {
              this.$message({
                message: '修改成功！',
                type: 'success'
              });
              this.$emit('flushQuery')
              this.$router.push({name: 'Center', params:{tagP: 'masterPaperCenter'}})
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
        this.$http.DeleMasterPaper(this.masterPaperFrom.id).then((result) => {
          if (result.c === 200) {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.$emit('flushQuery')
            this.$router.push({name: 'Center', params:{tagP: 'masterPaperCenter'}})
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
      this.masterPaperFrom.proofMaterialId = this.masterPaperFrom.stuId +"_"+ this.masterPaperFrom.paperName+ "_0.pdf"
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
    min-height: 530px;
    text-align: center;
    margin: 0 auto;
  }
  .content {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    horiz-align: center;
    white-space: nowrap;
    margin: 0;
    border:1px solid #999999;
    margin-top: 50px;
  }
</style>