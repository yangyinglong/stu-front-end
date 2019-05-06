<template>
  <div class="lab-main">
    <div class="content">
      <br>
      <el-form :inline="true" :model="workFrom" :rules="rules" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="workFrom.name" placeholder="姓名" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="workFrom.stuId" placeholder="学号" readonly="true"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="workFrom" :rules="rules" ref="workFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="单位名称" prop="companyName">
          <el-input v-model="workFrom.companyName" placeholder="单位名称" style="width: 525px"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="workFrom" :rules="rules" ref="workFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="单位性质" prop="companyType">
          <el-select v-model="workFrom.companyType" placeholder="请选择单位性质" style="width: 205px">
            <el-option
              v-for="item in companyTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
        </el-form-item>
        <el-form-item label="就业类型" prop="companyName">
          <el-input v-model="workFrom.workType " placeholder="就业类型" style="width: 205px"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <el-form :inline="true" :model="workFrom" :rules="rules" ref="workFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
        <el-form-item label="开始日期" prop="getDate">
          <div class="block">
              <el-date-picker
                v-model="workFrom.getDate"
                type="date"
                placeholder="选择日期"
                style="width: 525px">
              </el-date-picker>
            </div>
        </el-form-item>        
      </el-form>
      <br>
      <br>
      <!-- <el-upload
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
      </el-upload> -->
      <br><br><br>
      <el-form label-width="70px" :model="workFrom">
        <el-form-item style="margin-left: -40px">
          <el-button style="width: 100px" @click="deletes" type="warning">删除</el-button>
          <el-button style="width: 100px" @click="modify('workFrom')" type="info">确定</el-button>
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
        workFrom: {
          stuId: sessionStorage.getItem('userId'),
          name: sessionStorage.getItem('userName'),
          companyName: '',
          companyType: '',
          workType: '',
          getDate: '',
          proofMaterialId: '',
        },
        companyTypes: [{
          value: "国有企业",
          label: "国有企业"
        },{
          value: "事业单位",
          label: "事业单位"
        },{
          value: "高等院校",
          label: "高等院校"
        },{
          value: "研究院所",
          label: "研究院所"
        },{
          value: "国外高校",
          label: "国外高校"
        },{
          value: "合资企业",
          label: "合资企业"
        },{
          value: "外资企业",
          label: "外资企业"
        },{
          value: "民营企业",
          label: "民营企业"
        },{
          value: "私营企业",
          label: "私营企业"
        }],
        loading: false,
        rules: {
          companyName: [
            {required: true, message: '单位名称不能为空', trigger: 'blur'},
          ],
          companyType: [
            {required: true, message: '单位性质不能为空', trigger: 'blur'},
          ],
          workType: [
            {required: true, message: '就业性质不能为空', trigger: 'blur'},
          ],
          getDate: [
            {required: true, message: '时间不能为空', trigger: 'blur'},
          ]
        },
    }
  },
  created() {
    this.workFrom.id = sessionStorage.getItem('id')
    this.workFrom.name = sessionStorage.getItem('userName')
    this.workFrom.stuId = sessionStorage.getItem('stuId')
    this.workFrom.companyName = sessionStorage.getItem('companyName')
    this.workFrom.companyType = sessionStorage.getItem('companyType')
    this.workFrom.workType = sessionStorage.getItem('workType')
    this.workFrom.getDate = sessionStorage.getItem('getDate')    
  },
  computed: {
      fileForm4() {
        return {fileName: this.workFrom.stuId +"_"+ this.workFrom.companyName, isFront: 9}
      },
    },
  methods: {
    cencel() {
      this.$router.push({name: 'Center', params:{tagP: 'workCenter'}})
    },
    modify(workFrom) {
      this.$refs[workFrom].validate((valid) => {
        if (valid) {
          // if (this.workFrom.proofMaterialId == '') {
          //   this.$message.warning("请上传佐证材料")
          //   return
          // }
          this.$http.EditWork(this.workFrom).then((result) => {
            if (result.c === 200) {
              this.$message({
                message: '修改成功！',
                type: 'success'
              });
              this.$emit('flushQuery')
              this.$router.push({name: 'Center', params:{tagP: 'workCenter'}})
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
        this.$http.DeleWork(this.workFrom.id).then((result) => {
          if (result.c === 200) {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.$emit('flushQuery')
            this.$router.push({name: 'Center', params:{tagP: 'workCenter'}})
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
      this.workFrom.proofMaterialId = this.workFrom.stuId +"_"+ this.workFrom.companyName + "_9.jpg"
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