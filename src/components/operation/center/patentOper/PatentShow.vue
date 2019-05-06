<template>
  <div class="lab-main">
    <div class="content">
      <br>
      <el-form :inline="true" :model="patentFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="patentFrom.name" placeholder="姓名" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="patentFrom.stuId" placeholder="学号" readonly="true"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="patentFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="专利名称" prop="patentName">
          <el-input v-model="patentFrom.patentName" placeholder="专利名称" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="patentFrom" :rules="rules" ref="patentFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="专利类别" prop="patentType">
          <el-select v-model="patentFrom.patentType" placeholder="请选择专利类别" style="width: 200px">
            <el-option
              v-for="item in patentTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>

        <el-form-item label="专利状态" prop="patentState">
          <el-select v-model="patentFrom.patentState" placeholder="请选择专利状态" style="width: 200px">
            <el-option
              v-for="item in patentStates"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>
        
      </el-form>
      <br>
      <el-form :inline="true" :model="patentFrom" :rules="rules" ref="patentFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="作者排名" prop="ranking">
          <el-input v-model="patentFrom.ranking" placeholder="作者排名"></el-input>
        </el-form-item>
        <el-form-item label="作者人数" prop="totalNumber">
          <el-input v-model="patentFrom.totalNumber" placeholder="作者人数"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="patentFrom" :rules="rules" ref="patentFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="日期" prop="getDate">
          <div class="block">
              <el-date-picker
                v-model="patentFrom.getDate"
                type="date"
                placeholder="选择日期"
                style="width: 530px">
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
        :data="fileForm3"
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
      <el-form label-width="70px" :model="patentFrom">
        <el-form-item style="margin-left: -40px">
          <el-button style="width: 100px" @click="deletes" type="warning">删除</el-button>
          <el-button style="width: 100px" @click="modify('patentFrom')" type="info">确定</el-button>
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
     patentFrom: {
          stuId: sessionStorage.getItem('userId'),
          name: sessionStorage.getItem('userName'),
          patentName: '',
          patentType: '',
          ranking: '',
          totalNumber: '',
          patentState: '',
          getDate:'',
          proofMaterialId: '',
        },
        patentTypes: [{
          value: 1,
          label: "实用新型专利"
        },{
          value: 2,
          label: "发明专利"
        }],
        patentStates: [{
          value: 1,
          label: "申请"
        },{
          value: 2,
          label: "受理"
        },{
          value: 3,
          label: "审查中"
        },{
          value: 4,
          label: "一审"
        },{
          value: 5,
          label: "二审"
        },{
          value: 6,
          label: "三审"
        },{
          value: 7,
          label: "授权"
        }],
        loading: false,
        rules: {
          patentName: [
            {required: true, message: '专利名称不能为空', trigger: 'blur'},
          ],
          patentType: [
            {required: true, message: '专利类别不能为空', trigger: 'blur'},
          ],
          ranking: [
            {required: true, message: '作者排名不能为空', trigger: 'blur'},
          ],
          totalNumber: [
            {required: true, message: '总作者人数不能为空', trigger: 'blur'},
          ],
          patentState: [
            {required: true, message: '专利状态不能为空', trigger: 'blur'},
          ],
          getDate: [
            {required: true, message: '时间不能为空', trigger: 'blur'},
          ],
        }
    }
  },
  created() {
    this.patentFrom.id = sessionStorage.getItem('id')
    this.patentFrom.name = sessionStorage.getItem('userName')
    this.patentFrom.stuId = sessionStorage.getItem('stuId')
    this.patentFrom.patentName = sessionStorage.getItem('patentName')
    if (sessionStorage.getItem('patentType') == "实用新型专利") {
      this.patentFrom.patentType = 1
    } else {
      this.patentFrom.patentType = 2
    }
    if (sessionStorage.getItem('patentState') == "申请") {
      this.patentFrom.patentState = 1
    } else if (sessionStorage.getItem('patentState') == "受理") {
      this.patentFrom.patentState = 2
    } else if (sessionStorage.getItem('patentState') == "审查中") {
      this.patentFrom.patentState = 3
    } else if (sessionStorage.getItem('patentState') == "一审") {
      this.patentFrom.patentState = 4
    } else if (sessionStorage.getItem('patentState') == "二审") {
      this.patentFrom.patentState = 5
    } else if (sessionStorage.getItem('patentState') == "三审") {
      this.patentFrom.patentState = 6
    } else {
      this.patentFrom.patentState = 7
    }
    this.patentFrom.ranking = sessionStorage.getItem('ranking')
    this.patentFrom.totalNumber = sessionStorage.getItem('totalNumber')
    this.patentFrom.getDate = sessionStorage.getItem('getDate')
  },
  computed: {
      fileForm3() {
        return {fileName: this.patentFrom.stuId +"_"+ this.patentFrom.patentName, isFront: 3}
      },
    },
  methods: {
    cencel() {
      this.$router.push({name: 'Center', params:{tagP: 'patentCenter'}})
    },
    modify(patentFrom) {
      this.$refs[patentFrom].validate((valid) => {
        if (valid) {
          if (this.patentFrom.proofMaterialId == '') {
            this.$message.warning("请上传佐证材料")
            return
          }
          this.$http.EditPatent(this.patentFrom).then((result) => {
            if (result.c === 200) {
              this.$message({
                message: '修改成功！',
                type: 'success'
              });
              this.$emit('flushQuery')
              this.$router.push({name: 'Center', params:{tagP: 'patentCenter'}})
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
        this.$http.DelePatent(this.patentFrom.id).then((result) => {
          if (result.c === 200) {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.$emit('flushQuery')
            this.$router.push({name: 'Center', params:{tagP: 'patentCenter'}})
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
     this.patentFrom.proofMaterialId = this.patentFrom.stuId +"_"+ this.patentFrom.patentName + "_3.pdf"
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
      },
      handlePreview(file) {
      },
      createCode(){
           var code = "";    
           var codeLength = 4;//验证码的长度   
           var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
                       'S','T','U','V','W','X','Y','Z');//随机数   
           for(var i = 0; i < codeLength; i++) {
                 //循环操作   
                 var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）   
                 code += random[index];//根据索引取得随机数加到code上   
           }   
          this.checkCode = code;
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