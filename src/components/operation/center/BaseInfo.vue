<template>
	<div style="margin: 0 auto; min-height: 550px">
		<div style="text-align:center; margin-top: 20px;">
			<el-form :inline="true" :model="baseInfo" class="demo-form-inline" style="width: 100%" label-width="70px">
			  <el-form-item label="学号">
			    <el-input v-model="baseInfo.stuId" placeholder="学号" readonly="true" style="width: 150px"></el-input>
			  </el-form-item>
			  <el-form-item label="姓名">
			    <el-input v-model="baseInfo.name" placeholder="姓名"readonly="true" style="width: 150px"></el-input>
			  </el-form-item>
			  <el-form-item label="性别">
			    <el-input v-model="baseInfo.sex" placeholder="性别"readonly="true" style="width: 150px"></el-input>
			  </el-form-item>
			  <el-form-item label="手机号">
			    <el-input v-model="baseInfo.phone" placeholder="手机号"readonly="true" style="width: 150px"></el-input>
			  </el-form-item>
			</el-form>
			<hr style=" height:2px;width: 800px; border:none;border-top:2px dotted #D6D6D6	;" />
			<br>

			<el-form :inline="true" :model="baseInfo" class="demo-form-inline" style="width: 100%" label-width="70px">
			  <el-form-item label="身份证">
			    <el-input v-model="baseInfo.idCard" placeholder="6224241996888000837" :readonly="readonly1" style="width: 228px"></el-input>
			  </el-form-item>
			  <el-form-item label="政治面貌">
			    <el-input v-model="baseInfo.politicalOutlook" placeholder="政治面貌" :readonly="readonly1" style="width: 228px"></el-input>
			  </el-form-item>
			  <el-form-item label="生源地">
			    <el-input v-model="baseInfo.biogenicLand" placeholder="生源地" :readonly="readonly1" style="width: 228px"></el-input>
			  </el-form-item>
			</el-form>

			<el-form :inline="true" :model="baseInfo" class="demo-form-inline" style="width: 100%; margin-left: -6px" label-width="82px">
			  <el-form-item label="研究生专业">
			    <el-input v-model="baseInfo.masterMajor" placeholder="研究生专业" :readonly="readonly1" style="width: 228px"></el-input>
			  </el-form-item>
			  <el-form-item label="研究方向" style="margin-left: -10px">
			    <el-input v-model="baseInfo.masterDirection" placeholder="研究方向" :readonly="readonly1" style="width: 228px"></el-input>
			  </el-form-item>
			  <el-form-item label="邮箱" style="margin-left: -10px">
			    <el-input v-model="baseInfo.eMail" placeholder="邮箱" :readonly="readonly1" style="width: 228px"></el-input>
			  </el-form-item>
			</el-form>

			<el-form :inline="true" :model="baseInfo" class="demo-form-inline" style="width: 100%; margin-left: -15px" label-width="100px">
			  <el-form-item label="紧急联系人">
			    <el-input v-model="baseInfo.emergencyContact" placeholder="紧急联系人" :readonly="readonly1" style="width: 385px"></el-input>
			  </el-form-item>
			 <!--   <el-form-item label="  ">
			  </el-form-item> -->
			  <el-form-item label="电话号码" style="margin-left: -30px">
			    <el-input v-model="baseInfo.emergencyPhone" placeholder="电话号码" :readonly="readonly1" style="width: 385px"></el-input>
			  </el-form-item>
			</el-form>

			<el-form :inline="true" :model="baseInfo" class="demo-form-inline" style="width: 100%" label-width="70px">
			  <el-form-item label="本科学校">
			    <el-input v-model="baseInfo.uSchool" placeholder="本科学校" :readonly="readonly1" style="width: 385px"></el-input>
			  </el-form-item>
			  <el-form-item label="本科专业">
			    <el-input v-model="baseInfo.uMajor" placeholder="本科专业" :readonly="readonly1" style="width: 385px"></el-input>
			  </el-form-item>
			</el-form>
			<el-form :inline="true" :model="baseInfo" class="demo-form-inline" style="width: 100%" label-width="70px">
			  <el-form-item label="英语">
			    <el-input v-model="baseInfo.english" placeholder="入学考试英语成绩" :readonly="readonly1" style="width: 150px"></el-input>
			  </el-form-item>
			  <el-form-item label="数学">
			    <el-input v-model="baseInfo.math" placeholder="数学":readonly="readonly1" style="width: 150px"></el-input>
			  </el-form-item>
			  <el-form-item label="政治">
			    <el-input v-model="baseInfo.political" placeholder="政治":readonly="readonly1" style="width: 150px"></el-input>
			  </el-form-item>
			  <el-form-item label="专业课">
			    <el-input v-model="baseInfo.specialized" placeholder="专业课":readonly="readonly1" style="width: 150px"></el-input>
			  </el-form-item>
			</el-form>
			<el-form :inline="true" :model="baseInfo" class="demo-form-inline" style="width: 100%" label-width="70px">
			  <el-form-item label="外语类型">
			    <el-input v-model="baseInfo.languagesTypes" placeholder="如：英语六级" :readonly="readonly1" style="width: 385px"></el-input>
			  </el-form-item>
			  <el-form-item label="外语分数">
			    <el-input v-model="baseInfo.languagesScore" placeholder="分数" :readonly="readonly1" style="width: 385px"></el-input>
			  </el-form-item>
			</el-form>
			<el-form :inline="true" :model="baseInfo" class="demo-form-inline" style="width: 100%" label-width="70px">
			  <el-form-item style="margin-left: -40px">
					<el-button @click="readonly1=false" style="width: 100px" type="info">修改</el-button>
					<el-button style="width: 100px" @click="commit1" type="success">提交</el-button>
				</el-form-item>
			</el-form>
			
			
			<hr style=" height:2px;width: 800px; border:none;border-top:2px dotted #D6D6D6	;" />
			<br>
			<el-form :inline="true" :model="baseInfo" class="demo-form-inline" style="width: 100%; margin-left: -13px" label-width="85px">
			  <el-form-item label="导师">
			    <el-input v-model="baseInfo.tutor" placeholder="导师姓名" :readonly="readonly2" style="width: 217px"></el-input>
			  </el-form-item>
			  <el-form-item label="辅导员">
			    <el-input v-model="baseInfo.counsellor" placeholder="辅导员姓名" :readonly="readonly2" style="width: 217px"></el-input>
			  </el-form-item>
			  <el-form-item label="研究生秘书">
			    <el-input v-model="baseInfo.secretary" placeholder="研究生秘书" :readonly="readonly2" style="width: 217px"></el-input>
			  </el-form-item>
			</el-form>
			<el-form :inline="true" :model="baseInfo" class="demo-form-inline" style="width: 100%" label-width="70px">
			  <el-form-item style="margin-left: -40px">
					<el-button @click="readonly2=false" style="width: 100px" type="info">修改</el-button>
					<el-button style="width: 100px" @click="commit2" type="success">提交</el-button>
				</el-form-item>
			</el-form>
			<br>
			
		</div>
	</div>
</template>

<script>
export default {
	name: 'LabCenter',
	data () {
		return {
			baseInfo: {
				stuId: '',
				name: '',
				sex: '',
				phone: '',
				uSchool: '',
				uMajor: '',
				tutor: '',
				counsellor: '',
				languagesTypes: '',
				languagesScore: '',
				english: '',
				political: '',
				math: '',
				specialized: '',

				idCard: '',
			    masterMajor: '',
			    politicalOutlook: '',
			    biogenicLand: '',  // 生源地
			    masterDirection: '',  // 研究方向
			    eMail: '',
			    emergencyContact: '',
			    emergencyPhone: '',
			    secretary: '',  // 研究生秘书
			},
			readonly1: true,
			readonly2: true
		}
	},
	created(){
		this.getSession()
		this.getScore()
		this.getTuCoer()
	},
	computed: {
    },
	methods: {
		getSession() {
			if (sessionStorage.getItem('userId') != null) {
				this.baseInfo.stuId = sessionStorage.getItem('userId')
			} else {
				this.baseInfo.stuId = ''
			}
			if (sessionStorage.getItem('userName') != null) {
				this.baseInfo.name = sessionStorage.getItem('userName')
			} else {
				this.baseInfo.name = ''
			}
			if (sessionStorage.getItem('sex') != null) {
				this.baseInfo.sex = sessionStorage.getItem('sex') == 1 ? '男' : '女'
			} else {
				this.baseInfo.sex = ''
			}
			if (sessionStorage.getItem('phone') != null) {
				this.baseInfo.phone = sessionStorage.getItem('phone')
			} else {
				this.baseInfo.phone = ''
			}
		},
		getScore() {
			this.$http.GetEntrScore(this.baseInfo.stuId).then((result) => {
				if (result.c === 200) {
					this.baseInfo.uSchool = result.r.uSchool,
					this.baseInfo.uMajor = result.r.uMajor,
					this.baseInfo.english = result.r.english,
					this.baseInfo.political = result.r.political,
					this.baseInfo.math = result.r.math,
					this.baseInfo.specialized = result.r.specialized,
					this.baseInfo.languagesTypes = result.r.languagesTypes,
					this.baseInfo.languagesScore = result.r.languagesScore,
					this.baseInfo.idCard = result.r.idCard,
					this.baseInfo.masterMajor = result.r.masterMajor,
					this.baseInfo.politicalOutlook = result.r.politicalOutlook,
					this.baseInfo.biogenicLand = result.r.biogenicLand,
					this.baseInfo.masterDirection = result.r.masterDirection,
					this.baseInfo.eMail = result.r.eMail,
					this.baseInfo.emergencyContact = result.r.emergencyContact,
					this.baseInfo.emergencyPhone = result.r.emergencyPhone
				} else {
					this.readonly1 = false		    
				}
			}, (err) => {
				this.$message.error(err.msg)
			})  		
		},
		getTuCoer() {
			this.$http.GetTuCoer(this.baseInfo.stuId).then((result) => {
				if (result.c === 200) {
					this.baseInfo.tutor = result.r.tutor,
					this.baseInfo.counsellor = result.r.counsellor,
					this.baseInfo.secretary = result.r.secretary
				} else {
					this.readonly2 = false		    
				}
			}, (err) => {
				this.$message.error(err.msg)
			})
		},
		commit1() {
			if (this.baseInfo.uSchool == '' || this.baseInfo.uMajor == '' || this.baseInfo.english == '' || this.baseInfo.political == '' || this.baseInfo.math == '' || this.baseInfo.specialized == '' || this.baseInfo.languagesTypes == '' || this.baseInfo.languagesScore == '' || this.baseInfo.idCard == '' || this.baseInfo.masterMajor == '' || this.baseInfo.politicalOutlook == '' || this.baseInfo.biogenicLand == '' || this.baseInfo.masterDirection == '' || this.baseInfo.eMail == '' || this.baseInfo.emergencyContact == '' || this.baseInfo.emergencyPhone == '') {
				this.$message({
					message: "请完整填写信息！！",
					type: 'notify'
	            });
	            return;
			}
			this.readonly1 = true
			var entranceScore = {
				stuId: this.baseInfo.stuId,
				uSchool: this.baseInfo.uSchool,
				uMajor: this.baseInfo.uMajor,
				english: this.baseInfo.english,
				political: this.baseInfo.political,
				math: this.baseInfo.math,
				specialized: this.baseInfo.specialized,
				languagesTypes: this.baseInfo.languagesTypes,
				languagesScore: this.baseInfo.languagesScore,
				idCard: this.baseInfo.idCard,
				masterMajor: this.baseInfo.masterMajor,
				politicalOutlook: this.baseInfo.politicalOutlook,
				biogenicLand: this.baseInfo.biogenicLand,
				masterDirection: this.baseInfo.masterDirection,
				eMail: this.baseInfo.eMail,
				emergencyContact: this.baseInfo.emergencyContact,
				emergencyPhone: this.baseInfo.emergencyPhone
			}
			if (true) {
				this.$http.EditEntrScore(entranceScore).then((result) => {
				  if (result.c === 200) {
				    this.$message({
						message: result.r,
						type: 'success'
		            });
		            this.getScore()
				  } else {
				    this.$message.error(result.r);				    
				  }
				}, (err) => {
				  this.$message.error(err.msg)
				})  
			}

		},
		commit2() {
			if (this.baseInfo.tutor == '' || this.baseInfo.counsellor == '' || this.baseInfo.secretary == '') {
				this.$message({
					message: "请完整填写信息！！",
					type: 'notify'
	            });
	            return;
			}
			this.readonly2 = true
			var tuCoer = {
				stuId: this.baseInfo.stuId,
				tutor: this.baseInfo.tutor,
				counsellor: this.baseInfo.counsellor,
				secretary: this.baseInfo.secretary
			}
			if (true) {
				this.$http.EditTuCoer(tuCoer).then((result) => {
				  if (result.c === 200) {
				    this.$message({
						message: result.r,
						type: 'success'
		            });
		            this.getTuCoer()
				  } else {
				    this.$message.error(result.r);				    
				  }
				}, (err) => {
				  this.$message.error(err.msg)
				})
			}
		}
		
		
	},
	components: {
	},
}		
</script>

<style scoped>
	.labcenter-main{
		width: 70%;
		margin: 0 auto;
	}
</style>