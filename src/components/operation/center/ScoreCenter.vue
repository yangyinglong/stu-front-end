<template>
	<div style="margin: 0 auto; height: 590px">
		<div style="text-align:center; margin-top: 20px;">
			<el-form :inline="true" :model="scores" class="demo-form-inline" style="width: 100%" label-width="250px">
			  <el-form-item label="已修课程数">
			    <el-input v-model="scores.currNumber" placeholder="课程数" readonly="true" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="平均分">
			    <el-input v-model="scores.averageScore" placeholder="平均分" readonly="true" style="width: 130px"></el-input>
			  </el-form-item>
			</el-form>
			<el-form :inline="true" :model="scores" class="demo-form-inline" style="width: 100%" label-width="250px">
			  <el-form-item label="已修学分数">
			    <el-input v-model="scores.hadCredit" placeholder="已修学分数" readonly="true" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="加权平均分">
			    <el-input v-model="scores.weightedAverageScore" placeholder="加权平均分" readonly="true" style="width: 130px"></el-input>
			  </el-form-item>
			</el-form>
			<hr style=" height:2px;width: 800px; border:none;border-top:2px dotted #D6D6D6	;" />
			<el-form :inline="true" :model="scores" class="demo-form-inline" style="width: 100%" label-width="250px">
			  <el-form-item label="工程数学">
			    <el-input v-model="scores.engineeringMathematics" placeholder="工程数学" :readonly="readonly3" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="第一外国语">
			    <el-input v-model="scores.firstForeignLanguage" placeholder="第一外国语" :readonly="readonly3" style="width: 130px"></el-input>
			  </el-form-item>
			</el-form>

			<el-form :inline="true" :model="scores" class="demo-form-inline" style="width: 100%" label-width="250px">
			  <el-form-item label="社会主义理论">
			    <el-input v-model="scores.characteristicSocialism" placeholder="社会主义理论" :readonly="readonly3" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="数值分析">
			    <el-input v-model="scores.numericalAnalysis" placeholder="数值分析" :readonly="readonly3" style="width: 130px"></el-input>
			  </el-form-item>
			</el-form>


			<el-form :inline="true" :model="scores" class="demo-form-inline" style="width: 100%" label-width="250px">
			  <el-form-item label="机械工程学科发展前沿专题讲座">
			    <el-input v-model="scores.jixiejiaozuo" placeholder="机械工程学科发展前沿专题讲座"  :readonly="readonly3" style="width: 130px"></el-input>
			  </el-form-item>
			  
			  <el-form-item label="纳米技术与应用">
			    <el-input v-model="scores.nami" placeholder="纳米技术与应用" :readonly="readonly3" style="width: 130px"></el-input>
			  </el-form-item>
			</el-form>

			<el-form :inline="true" :model="scores" class="demo-form-inline" style="width: 100%" label-width="250px">
			  <el-form-item label="机械加工精度理论与机械制造装备技术">
			    <el-input v-model="scores.jixiejiagong" placeholder="机械加工精度理论与机械制造装备技术"  :readonly="readonly3" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="机械制造方法理论与技术">
			    <el-input v-model="scores.jixiezhizao" placeholder="机械制造方法理论与技术" :readonly="readonly3" style="width: 130px"></el-input>
			  </el-form-item>
			</el-form>

			<el-form :inline="true" :model="scores" class="demo-form-inline" style="width: 100%" label-width="250px">
			  <el-form-item label="现代控制理论">
			    <el-input v-model="scores.xiandaililun" placeholder="现代控制理论"  :readonly="readonly3" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="计算流体力学软件及工程应用">
			    <el-input v-model="scores.jisuanyingyong" placeholder="计算流体力学软件及工程应用" :readonly="readonly3" style="width: 130px"></el-input>
			  </el-form-item>			  
			</el-form>

			<el-form :inline="true" :model="scores" class="demo-form-inline" style="width: 100%" label-width="250px">
			  <el-form-item label="典型企业制造案例研讨">
			    <el-input v-model="scores.dianyingyantao" placeholder="典型企业制造案例研讨" :readonly="readonly3" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="计算流体力学基础">
			    <el-input v-model="scores.jisuanjichu" placeholder="计算流体力学基础" :readonly="readonly3" style="width: 130px"></el-input>
			  </el-form-item>			  
			</el-form>

			<el-form :inline="true" :model="scores" class="demo-form-inline" style="width: 100%" label-width="250px">
			  <el-form-item label="机电系统动力学">
			    <el-input v-model="scores.jidianxue" placeholder="机电系统动力学" :readonly="readonly3" style="width: 130px"></el-input>
			  </el-form-item>

			   <el-form-item style="margin-left: 165px">
			    <el-button @click="readonly3=false" style="width: 100px">修改</el-button>
					<el-button style="width: 100px" @click="commit3">提交</el-button>
			  </el-form-item>
			</el-form>

			<br><br>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ScoreCenter',
	data () {
		return {
			scores: {
				stuId: '',
				currNumber: '',
				averageScore: '',
				
				engineeringMathematics: '',  // 工程数学
			    firstForeignLanguage: '',  // 第一外国语
			    characteristicSocialism: '',  // 中国特色社会主义理论与实践研究
			    numericalAnalysis: '',  // 数值分析

				jixiejiaozuo: '',  // 机械工程学科发展前沿专题讲座
			    jisuanyingyong: '',  // 计算流体力学软件及工程应用
			    jidianxue: '',  // 机电系统动力学
			    nami: '',  // 纳米技术与应用
			    jixiejiagong: '',  // 机械加工精度理论与机械制造装备技术
			    jixiezhizao: '',  // 机械制造方法理论与技术
			    dianyingyantao: '',  // 典型企业制造案例研讨
			    jisuanjichu: '',  // 计算流体力学基础
			    xiandaililun: '',  // 现代控制理论
			    weightedAverageScore: '',
			    hadCredit: '',
			},
			readonly3: true
		}
	},
	created(){
		this.getSession()
		this.getScores()
		// this.getTuCoer()
	},
	computed: {
    },
	methods: {
		getSession() {
			if (sessionStorage.getItem('userId') != null) {
				this.scores.stuId = sessionStorage.getItem('userId')
			} else {
				this.scores.stuId = ''
			}
		},
		getScores() {
			this.$http.GetAllScore(this.scores.stuId).then((result) => {
				if (result.c === 200) {
					this.scores.averageScore = result.r.averageScore
					this.scores.currNumber = result.r.currNumber
					this.scores.weightedAverageScore = result.r.weightedAverageScore
					this.scores.hadCredit = result.r.hadCredit
					if (result.r.engineeringMathematics != -1) {
						this.scores.engineeringMathematics = result.r.engineeringMathematics
					}
					if (result.r.firstForeignLanguage != -1) {
						this.scores.firstForeignLanguage = result.r.firstForeignLanguage
					}
					if (result.r.characteristicSocialism != -1) {
						this.scores.characteristicSocialism = result.r.characteristicSocialism
					}
					if (result.r.numericalAnalysis != -1) {
						this.scores.numericalAnalysis = result.r.numericalAnalysis
					}

					if (result.r.jixiejiaozuo != -1) {
						this.scores.jixiejiaozuo = result.r.jixiejiaozuo
					}
					if (result.r.jisuanyingyong != -1) {
						this.scores.jisuanyingyong = result.r.jisuanyingyong
					}
					if (result.r.jidianxue != -1) {
						this.scores.jidianxue = result.r.jidianxue
					}
					if (result.r.nami != -1) {
						this.scores.nami = result.r.nami
					}

					if (result.r.jixiejiagong != -1) {
						this.scores.jixiejiagong = result.r.jixiejiagong
					}
					if (result.r.jixiezhizao != -1) {
						this.scores.jixiezhizao = result.r.jixiezhizao
					}
					if (result.r.dianyingyantao != -1) {
						this.scores.dianyingyantao = result.r.dianyingyantao
					}
					if (result.r.jisuanjichu != -1) {
						this.scores.jisuanjichu = result.r.jisuanjichu
					}

					if (result.r.xiandaililun != -1) {
						this.scores.xiandaililun = result.r.xiandaililun
					}
					
					
				} else if(result.c === 305){
					this.$message({
						message: result.r,
						type: 'success'
		            });
				} else {
					this.$message.error(result.r)
				}
			}, (err) => {
				this.$message.error(err.msg)
			})  		
		},
		commit3() {
			this.readonly3 = true
			var allScore = {
				stuId: this.scores.stuId,
				engineeringMathematics: this.scores.engineeringMathematics != '' ? this.scores.engineeringMathematics : -1,
				firstForeignLanguage: this.scores.firstForeignLanguage != '' ? this.scores.firstForeignLanguage : -1,
				characteristicSocialism: this.scores.characteristicSocialism != '' ? this.scores.characteristicSocialism : -1,
				numericalAnalysis: this.scores.numericalAnalysis != '' ? this.scores.numericalAnalysis : -1,

				jixiejiaozuo: this.scores.jixiejiaozuo != '' ? this.scores.jixiejiaozuo : -1,
				jisuanyingyong: this.scores.jisuanyingyong != '' ? this.scores.jisuanyingyong : -1,
				jidianxue: this.scores.jidianxue != '' ? this.scores.jidianxue : -1,
				nami: this.scores.nami != '' ? this.scores.nami : -1,

				jixiejiagong: this.scores.jixiejiagong != '' ? this.scores.jixiejiagong : -1,
				jixiezhizao: this.scores.jixiezhizao != '' ? this.scores.jixiezhizao : -1,
				dianyingyantao: this.scores.dianyingyantao != '' ? this.scores.dianyingyantao : -1,
				jisuanjichu: this.scores.jisuanjichu != '' ? this.scores.jisuanjichu : -1,

				xiandaililun: this.scores.xiandaililun != '' ? this.scores.xiandaililun : -1,
				
			}
			if (true) {
				this.$http.EditAllScore(allScore).then((result) => {
				  if (result.c === 200) {
				    this.$message({
						message: result.r,
						type: 'success'
		            });
		            this.getScores()
				  } else {
				    this.$message.error(result.r);				    
				  }
				}, (err) => {
				  this.$message.error(err.msg)
				})  
			}

		},
		
		
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