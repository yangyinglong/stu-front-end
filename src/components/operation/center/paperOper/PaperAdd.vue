<template>
  <div>
    <b class="linked" @click="dialogLoginVisible = true">
      <el-button type="info" plain icon="el-icon-plus" size="mini"></el-button>
    </b>
    <el-dialog width="720px" title="添加学术论文" :visible.sync="dialogLoginVisible" class="content">
      <div style="width: 100%; margin-left: -15px">
      <el-form :inline="true" :model="paperFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="paperFrom.name" placeholder="姓名" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="paperFrom.stuId" placeholder="学号" readonly="true"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="paperFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="论文题目" prop="paperTitle">
          <el-input v-model="paperFrom.paperTitle" placeholder="论文题目" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="paperFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="发表期刊" prop="journalTitle">
          <el-input v-model="paperFrom.journalTitle" placeholder="发表期刊" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="paperFrom" :rules="rules" ref="paperFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="论文等级" prop="paperGrade">
          <el-select v-model="paperFrom.paperGrade" placeholder="请选择论文等级" style="width: 200px">
            <el-option
              v-for="item in paperGrades"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>

        <el-form-item label="论文状态" prop="paperState">
          <el-select v-model="paperFrom.paperState" placeholder="请选择荣誉级别" style="width: 200px">
            <el-option
              v-for="item in paperStates"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>
        
      </el-form>
      <br>
      <el-form :inline="true" :model="paperFrom" :rules="rules" ref="paperFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="作者排名" prop="ranking">
          <el-input v-model="paperFrom.ranking" placeholder="作者排名"></el-input>
        </el-form-item>
        <el-form-item label="作者人数" prop="totalNumber">
          <el-input v-model="paperFrom.totalNumber" placeholder="作者人数"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="paperFrom" :rules="rules" ref="paperFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="日期" prop="getDate">
          <div class="block">
              <el-date-picker
                v-model="paperFrom.getDate"
                type="date"
                placeholder="选择日期"
               style="width: 530px">
              </el-date-picker>
            </div>
        </el-form-item>
      </el-form>
      <br>
      <el-upload
        class="upload-demo"
        ref="upload"
        action="/api/file/upload"
        :data="fileForm2"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :limit = 1
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
        <el-button style="width: 120px" @click="dialogLoginVisible = false">取消</el-button>
        <el-button type="info" style="width: 120px" @click="addHonor('paperFrom')">增加</el-button>
      </el-row>
    </div>
    </el-dialog>
  </div>

</template>

<script>
  export default {
    name: 'AddPaper',
    data() {
      return {
        dialogLoginVisible: false,
        paperFrom: {
          stuId: sessionStorage.getItem('userId'),
          name: sessionStorage.getItem('userName'),
          paperTitle: '',
          paperGrade: '',
          journalTitle: '',
          ranking: '',
          totalNumber: '',
          paperState: '',
          getDate:'',
          proofMaterialId: '',
        },
        paperGrades: [{
          value: 1,
          label: "一般"
        },{
          value: 2,
          label: "核心"
        },{
          value: 3,
          label: "一级"
        },{
          value: 4,
          label: "EI"
        },{
          value: 5,
          label: "SCI一区"
        },{
          value: 6,
          label: "SCI二区"
        },{
          value: 7,
          label: "SCI三区"
        },{
          value: 8,
          label: "SCI四区"
        }],
        paperStates: [{
          value: 1,
          label: "投稿"
        },{
          value: 2,
          label: "初审"
        },{
          value: 3,
          label: "外审"
        },{
          value: 4,
          label: "复审"
        },{
          value: 5,
          label: "录用"
        },{
          value: 6,
          label: "在线"
        },{
          value: 7,
          label: "出版"
        }],
        loading: false,
        rules: {
          paperTitle: [
            {required: true, message: '学术论文题目不能为空', trigger: 'blur'},
          ],
          paperGrade: [
            {required: true, message: '级别不能为空', trigger: 'blur'},
          ],
          journalTitle: [
            {required: true, message: '发表期刊不能为空', trigger: 'blur'},
          ],
          ranking: [
            {required: true, message: '作者排名不能为空', trigger: 'blur'},
          ],
          totalNumber: [
            {required: true, message: '总作者人数不能为空', trigger: 'blur'},
          ],
          paperState: [
            {required: true, message: '论文状态不能为空', trigger: 'blur'},
          ],
          getDate: [
            {required: true, message: '时间不能为空', trigger: 'blur'},
          ],
        },
        checkCode: '',
      }
    },
    created(){
      // this.createCode()
    },
    mounted() {
    },
    computed: {
    },
    computed: {
      fileForm2() {
        return {fileName: this.paperFrom.stuId +"_"+ this.paperFrom.paperTitle, isFront: 2}
      },
    },
    methods: {
      addHonor(paperFrom) {
        this.$refs[paperFrom].validate((valid) => {
          if (valid) {
            if (this.paperFrom.name == '') {
              this.$message.warning("请完善信息！")
              return
            }
            if (this.paperFrom.proofMaterialId == '') {
              this.$message.warning("请上传佐证材料")
              return
            }
            this.$http.EditPaper(this.paperFrom).then((result) => {
              if (result.c === 200) {
                this.$message({
                  message: '添加成功！',
                  type: 'success'
                });
                this.paperFrom.paperTitle = ''
                this.paperFrom.paperGrade = ''
                this.paperFrom.journalTitle = ''
                this.paperFrom.ranking = ''
                this.paperFrom.totalNumber = ''
                this.paperFrom.paperState = ''
                this.$emit('flushQuery')
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
        this.paperFrom.proofMaterialId = this.paperFrom.stuId +"_"+ this.paperFrom.paperTitle + "_2.pdf"
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
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
.content {
	display: inline-block;
	text-align: center;
	vertical-align: middle;
	horiz-align: center;
	white-space: nowrap;
	margin: 0;
}
</style>