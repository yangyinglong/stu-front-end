<template>
  <div class="lab-main">
    <div class="content">
      <br>
      <el-form :inline="true" :model="acadExchFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="acadExchFrom.name" placeholder="姓名" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="acadExchFrom.stuId" placeholder="学号" readonly="true"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="acadExchFrom" :rules="rules" ref="acadExchFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="交流类别" prop="exchangeType">
          <el-select v-model="acadExchFrom.exchangeType" placeholder="请选择交流类别" style="width: 205px">
            <el-option
              v-for="item in exchangeTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>   
        <el-form-item label="交流级别" prop="level">
          <el-select v-model="acadExchFrom.level" placeholder="请选择交流级别" style="width: 205px">
            <el-option
              v-for="item in levels"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>        
      </el-form>
      <br>
      <el-form :inline="true" :model="acadExchFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="项目/会议名称" prop="conferenceName">
          <el-input v-model="acadExchFrom.conferenceName" placeholder="项目名称" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
       <br>
      <el-form :inline="true" :model="acadExchFrom" :rules="rules" ref="acadExchFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="开始日期" prop="startTime">
          <div class="block">
              <el-date-picker
                v-model="acadExchFrom.startTime"
                type="date"
                placeholder="选择日期"
                style="width: 200px">
              </el-date-picker>
            </div>
        </el-form-item>   
        <el-form-item label="结束日期" prop="endTime">
          <div class="block">
              <el-date-picker
                v-model="acadExchFrom.endTime"
                type="date"
                placeholder="选择日期"
                style="width: 200px">
              </el-date-picker>
            </div>
        </el-form-item>        
      </el-form>
      <br>
      <el-form :inline="true" :model="acadExchFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="交流成果" prop="result">
          <el-input type="textarea" v-model="acadExchFrom.result" placeholder="交流成果" style="width: 525px"></el-input>
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
      <el-form label-width="70px" :model="acadExchFrom">
        <el-form-item style="margin-left: -40px">
          <el-button style="width: 100px" @click="deletes" type="warning">删除</el-button>
          <el-button style="width: 100px" @click="modify('acadExchFrom')" type="info">确定</el-button>
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
      acadExchFrom: {
        stuId: sessionStorage.getItem('userId'),
        name: sessionStorage.getItem('userName'),

        exchangeType: '',
        organization: '与组织机构合为一个字段', //
        conferenceName: '',
        startTime: '',
        endTime: '',
        level: '',
        result: '',
        proofMaterialId: '',
      },
      exchangeTypes: [{
        value: "夏令营",
        label: "夏令营"
      },{
        value: "国际会议",
        label: "国际会议"
      },{
        value: "国内会议",
        label: "国内会议"
      },{
        value: "研究生论坛",
        label: "研究生论坛"
      },{
        value: "其他",
        label: "其他"
      }],
      levels: [{
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
        exchangeType: [
          {required: true, message: '交流类别不能为空', trigger: 'blur'},
        ],
        organization: [
          {required: true, message: '组织机构不能为空，可填无', trigger: 'blur'},
        ],
        conferenceName: [
          {required: true, message: '会议名称不能为空，可填无', trigger: 'blur'},
        ],
        startTime: [
          {required: true, message: '开始时间不能为空', trigger: 'blur'},
        ],
        endTime: [
          {required: true, message: '结束时间不能为空', trigger: 'blur'},
        ],
        level: [
          {required: true, message: '交流级别不能为空', trigger: 'blur'},
        ],
        result: [
         {required: true, message: '交流成果不能为空', trigger: 'blur'},
        ]
      }
    }
  },
  created() {
    this.acadExchFrom.id = sessionStorage.getItem('id')
    this.acadExchFrom.name = sessionStorage.getItem('userName')
    this.acadExchFrom.stuId = sessionStorage.getItem('stuId')
    this.acadExchFrom.exchangeType = sessionStorage.getItem('exchangeType')
    this.acadExchFrom.conferenceName = sessionStorage.getItem('conferenceName')
    this.acadExchFrom.startTime = sessionStorage.getItem('startTime')
    this.acadExchFrom.endTime = sessionStorage.getItem('endTime')
    this.acadExchFrom.level = sessionStorage.getItem('level')
    this.acadExchFrom.result = sessionStorage.getItem('result')
  },
  computed: {
      fileForm4() {
        return {fileName: this.acadExchFrom.stuId +"_"+ this.acadExchFrom.conferenceName, isFront: 8}
      },
    },
  methods: {
    cencel() {
      this.$router.push({name: 'Center', params:{tagP: 'acadExchCenter'}})
    },
    modify(acadExchFrom) {
      this.$refs[acadExchFrom].validate((valid) => {
        if (valid) {
          if (this.acadExchFrom.proofMaterialId == '') {
            this.$message.warning("请上传佐证材料")
            return
          }
          this.$http.EditAcadExch(this.acadExchFrom).then((result) => {
            if (result.c === 200) {
              this.$message({
                message: '修改成功！',
                type: 'success'
              });
              this.$emit('flushQuery')
              this.$router.push({name: 'Center', params:{tagP: 'acadExchCenter'}})
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
        this.$http.DeleAcadExch(this.acadExchFrom.id).then((result) => {
          if (result.c === 200) {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.$emit('flushQuery')
            this.$router.push({name: 'Center', params:{tagP: 'acadExchCenter'}})
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
      this.acadExchFrom.proofMaterialId = this.acadExchFrom.stuId +"_"+ this.acadExchFrom.conferenceName+ "_8.jpg"
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
    },
    handlePreview(file) {
    }
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