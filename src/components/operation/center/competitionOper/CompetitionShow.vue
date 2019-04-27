<template>
  <div class="lab-main">
    <div class="content">
      <br>
      <el-form :inline="true" :model="competitionFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="competitionFrom.name" placeholder="姓名" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="competitionFrom.stuId" placeholder="学号" readonly="true"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="competitionFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目名称" prop="competitionName">
          <el-input v-model="competitionFrom.competitionName" placeholder="项目名称" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="competitionFrom" :rules="rules" ref="competitionFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目类别" prop="competitionType">
          <el-select v-model="competitionFrom.competitionType" placeholder="请选择项目类别" style="width: 200px">
            <el-option
              v-for="item in competitionTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>

        <el-form-item label="竞赛状态" prop="competitionState">
          <el-select v-model="competitionFrom.competitionState" placeholder="请选择竞赛状态" style="width: 200px">
            <el-option
              v-for="item in competitionStates"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>
        
      </el-form>
      <br>
      <el-form :inline="true" :model="competitionFrom" :rules="rules" ref="competitionFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目级别" prop="competitionLevel">
          <el-select v-model="competitionFrom.competitionLevel" placeholder="请选择项目级别" style="width: 200px">
            <el-option
              v-for="item in competitionLevels"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>
        <el-form-item label="获奖等级" prop="competitionPrize">
          <el-select v-model="competitionFrom.competitionPrize" placeholder="请选择获奖等级" style="width: 200px">
            <el-option
              v-for="item in competitionPrizes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>
        
      </el-form>
      <br>
      <el-form :inline="true" :model="competitionFrom" :rules="rules" ref="competitionFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="参赛排名" prop="ranking">
          <el-input v-model="competitionFrom.ranking" placeholder="参赛排名"></el-input>
        </el-form-item>
        <el-form-item label="参赛人数" prop="totalNumber">
          <el-input v-model="competitionFrom.totalNumber" placeholder="参赛人数"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="competitionFrom" :rules="rules" ref="competitionFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="指导老师" prop="teacher">
          <el-input v-model="competitionFrom.teacher" placeholder="指导老师"></el-input>
        </el-form-item>
        <el-form-item label="获奖日期" prop="getDate">
          <div class="block">
              <el-date-picker
                v-model="competitionFrom.getDate"
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
      <el-form label-width="70px" :model="competitionFrom">
        <el-form-item style="margin-left: -40px">
          <el-button style="width: 100px" @click="deletes" type="warning">删除</el-button>
          <el-button style="width: 100px" @click="modify('competitionFrom')" type="info">确定</el-button>
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
        competitionFrom: {
          stuId: sessionStorage.getItem('userId'),
          name: sessionStorage.getItem('userName'),
          competitionType: '',
          competitionName: '',
          ranking: null,
          totalNumber: null,
          competitionState: '',
          competitionPrize: '',
          competitionLevel: '',
          teacher: '',
          getDate: '',
          proofMaterialId: '',
        },
        competitionTypes: [{
          value: "大学生创新创业",
          label: "大学生创新创业"
        },{
          value: "互联网+",
          label: "互联网+"
        },{
          value: "挑战杯",
          label: "挑战杯"
        },{
          value: "创青春",
          label: "创青春"
        },{
          value: "机械设计大赛",
          label: "机械设计大赛"
        },{
          value: "数学建模",
          label: "数学建模"
        },{
          value: "力学竞赛",
          label: "力学竞赛"
        },{
          value: "智慧城市",
          label: "智慧城市"
        },{
          value: "华为杯",
          label: "华为杯"
        },{
          value: "飞行器创新设计大赛",
          label: "飞行器创新设计大赛"
        },{
          value: "企业类竞赛",
          label: "企业类竞赛"
        },{
          value: "其他竞赛",
          label: "其他竞赛"
        }],
        competitionStates: [{
          value: "申请",
          label: "申请"
        },{
          value: "比赛进行初期",
          label: "比赛进行初期"
        },{
          value: "比赛进行中期",
          label: "比赛进行中期"
        },{
          value: "比赛完成",
          label: "比赛完成"
        }],
        competitionPrizes:[{
          value: "一等奖",
          label: "一等奖"
        },{
          value: "二等奖",
          label: "二等奖"
        },{
          value: "三等奖",
          label: "三等奖"
        },{
          value: "比赛未完成或未获奖",
          label: "比赛未完成或未获奖"
        }],
        competitionLevels: [{
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
          competitionName: [
            {required: true, message: '项目名称不能为空', trigger: 'blur'},
          ],
          competitionType: [
            {required: true, message: '项目类型不能为空', trigger: 'blur'},
          ],
          competitionState: [
            {required: true, message: '比赛状态不能为空', trigger: 'blur'},
          ],
          competitionPrize: [
            {required: true, message: '获奖情况不能为空', trigger: 'blur'},
          ],
          competitionLevel: [
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
        checkCode: '',
    }
  },
  created() {
    this.competitionFrom.id = sessionStorage.getItem('id')
    this.competitionFrom.name = sessionStorage.getItem('userName')
    this.competitionFrom.stuId = sessionStorage.getItem('stuId')
    this.competitionFrom.competitionType = sessionStorage.getItem('competitionType')
    this.competitionFrom.competitionName = sessionStorage.getItem('competitionName')
    this.competitionFrom.competitionState = sessionStorage.getItem('competitionState')
    this.competitionFrom.ranking = sessionStorage.getItem('ranking')
    this.competitionFrom.totalNumber = sessionStorage.getItem('totalNumber')
    this.competitionFrom.competitionPrize = sessionStorage.getItem('competitionPrize')
    this.competitionFrom.competitionLevel = sessionStorage.getItem('competitionLevel')
    this.competitionFrom.teacher = sessionStorage.getItem('teacher')
    this.competitionFrom.getDate = sessionStorage.getItem('getDate')
    
  },
  computed: {
      fileForm4() {
        return {fileName: this.competitionFrom.stuId +"_"+ this.competitionFrom.competitionName, isFront: 4}
      },
    },
  methods: {
    cencel() {
      this.$router.push({name: 'Center', params:{tagP: 'competitionCenter'}})
    },
    modify(competitionFrom) {
      this.$refs[competitionFrom].validate((valid) => {
        if (valid) {
          if (this.competitionFrom.proofMaterialId == '') {
            this.$message.warning("请上传佐证材料")
            return
          }
          this.$http.EditCompetition(this.competitionFrom).then((result) => {
            if (result.c === 200) {
              this.$message({
                message: '修改成功！',
                type: 'success'
              });
              this.$emit('flushQuery')
              this.$router.push({name: 'Center', params:{tagP: 'competitionCenter'}})
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
        this.$http.DeleCompetition(this.competitionFrom.id).then((result) => {
          if (result.c === 200) {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.$emit('flushQuery')
            this.$router.push({name: 'Center', params:{tagP: 'competitionCenter'}})
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
    this.competitionFrom.proofMaterialId = this.competitionFrom.stuId +"_"+ this.competitionFrom.competitionName+ "_4.pdf"
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