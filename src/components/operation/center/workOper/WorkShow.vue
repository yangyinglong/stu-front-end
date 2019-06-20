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
       <el-form-item label="就业深造" prop="workType">
         <el-select v-model="workFrom.workType" placeholder="请选择具体就业深造" style="width: 525px">
           <el-option
             v-for="item in workTypes"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>  
       </el-form-item>
     </el-form>
     <br>
     <el-form :inline="true" :model="workFrom" :rules="rules" ref="workFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
       <el-form-item label="单位名称" prop="companyName">
         <el-input v-model="workFrom.companyName" placeholder="单位名称/学校名称" style="width: 525px"></el-input>
       </el-form-item>
     </el-form>

     <br v-if="workFrom.workType == '国内升学'">
     <el-form :inline="true" :model="workFrom" :rules="rules" ref="workFrom" class="demo-form-inline" style="width: 100%" label-width="100px" v-if="workFrom.workType == '国内升学'">
       <el-form-item label="专业名称">
         <el-input v-model="workFrom.workClass" placeholder="专业名称" style="width: 525px"></el-input>
       </el-form-item>
     </el-form>

     <br v-if="workFrom.workType == '就业'">
     <el-form :inline="true" :model="workFrom" :rules="rules" ref="workFrom" class="demo-form-inline" style="width: 100%" label-width="100px" v-if="workFrom.workType == '就业'">
       <el-form-item label="是否专业对口" prop="isCmp">
         <el-select v-model="workFrom.isCmp" placeholder="请选择专业是否对口" style="width: 205px">
           <el-option
             v-for="item in isCmps"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>  
       </el-form-item>
       <el-form-item label="职位类别" prop="workClass">
         <el-select v-model="workFrom.workClass" placeholder="请选择职位类别" style="width: 205px">
           <el-option
             v-for="item in workClasses"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>  
       </el-form-item>
     </el-form>

     <br v-if="workFrom.workType == '就业' || workFrom.workType == '自主创业'">
     <el-form :inline="true" :model="workFrom" :rules="rules" ref="workFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
       <el-form-item label="单位性质" v-if="workFrom.workType == '就业'">
         <el-select v-model="workFrom.companyType" placeholder="请选择单位性质" style="width: 525px">
           <el-option
             v-for="item in companyTypes"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>  
       </el-form-item>
       <el-form-item label="创业内容" v-else-if="workFrom.workType == '自主创业'">
         <el-input type="textarea" v-model="workFrom.companyType" placeholder="请填写创业内容" style="width: 525px"></el-input>
       </el-form-item>
     </el-form>
     <br>
     <el-form :inline="true" :model="workFrom" :rules="rules" ref="workFrom" class="demo-form-inline" style="width: 100%" label-width="100px">
       <el-form-item label="地点" prop="address">
         <el-input v-model="workFrom.address" placeholder="请填写去向地址(国家/省/市)" style="width: 205px"></el-input>
       </el-form-item>
       <el-form-item label="开始日期" prop="getDate">
         <div class="block">
             <el-date-picker
               v-model="workFrom.getDate"
               type="date"
               placeholder="选择日期"
               style="width: 205px">
             </el-date-picker>
           </div>
       </el-form-item>        
     </el-form>
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
          workType: '',
          companyName: '',
          isCmp: '',
          companyType: '',
          workClass: '',
          address: '',
          getDate: '',
          proofMaterialId: '',
        },
       workTypes: [{
          value: '就业',
          label: '就业'
        },{
          value: '国内升学',
          label: '国内升学'
        },{
          value: '出国(境)留学',
          label: '出国(境)留学'
        },{
          value: '自主创业',
          label: '自主创业'
        }],

        isCmps: [{
          value: '是',
          label: '是'
        },{
          value: '否',
          label: '否'
        }],

        workClasses: [{
          value: '公务员',
          label: '公务员'
        },{
          value: '科学研究人员',
          label: '科学研究人员'
        },{
          value: '工程技术人员',
          label: '工程技术人员'
        },{
          value: '农林牧渔技术人员',
          label: '农林牧渔技术人员'
        },{
          value: '卫生专业技术人员',
          label: '卫生专业技术人员'
        },{
          value: '金融业务人员',
          label: '金融业务人员'
        },{
          value: '法律专业人员',
          label: '法律专业人员'
        },{
          value: '教学人员',
          label: '教学人员'
        },{
          value: '文艺艺术工作人员',
          label: '文艺艺术工作人员'
        },{
          value: '新闻出版和文化工作人员',
          label: '新闻出版和文化工作人员'
        },{
          value: '办事人员和有关人员',
          label: '办事人员和有关人员'
        },{
          value: '商业和服务业务人员',
          label: '商业和服务业务人员'
        },{
          value: '生产和运输设备设备操作人员',
          label: '生产和运输设备设备操作人员'
        },{
          value: '其他人员',
          label: '其他人员'
        }],

        companyTypes: [{
          value: "机关",
          label: "机关"
        },{
          value: "高等教育单位",
          label: "高等教育单位"
        },{
          value: "中初教育单位",
          label: "中初教育单位"
        },{
          value: "医疗卫生单位",
          label: "医疗卫生单位"
        },{
          value: "其他专业技术人员",
          label: "其他专业技术人员"
        },{
          value: "国有企业",
          label: "国有企业"
        },{
          value: "三资企业",
          label: "三资企业"
        },{
          value: "其他企业",
          label: "其他企业"
        },{
          value: "部队",
          label: "部队"
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
            {required: true, message: '就业深造性质不能为空', trigger: 'blur'},
          ],
          address: [
            {required: true, message: '省市不能为空', trigger: 'blur'},
          ],
          getDate: [
            {required: true, message: '时间不能为空', trigger: 'blur'},
          ]
        }
    }
  },
  created() {
    this.workFrom.id = sessionStorage.getItem('id')
    this.workFrom.name = sessionStorage.getItem('userName')
    this.workFrom.stuId = sessionStorage.getItem('stuId')

    this.workFrom.workType = sessionStorage.getItem('workType')
    this.workFrom.companyName = sessionStorage.getItem('companyName')
    this.workFrom.isCmp = sessionStorage.getItem('isCmp')
    this.workFrom.companyType = sessionStorage.getItem('companyType')
    this.workFrom.workClass = sessionStorage.getItem('workClass')
    this.workFrom.address = sessionStorage.getItem('address')
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