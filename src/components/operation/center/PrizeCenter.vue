<template>
	<div style="margin: 0 auto; height: 550px">
		<div style="text-align:center; margin-top: 20px;">
			<br>
			<el-form :inline="true" :model="prizes" class="demo-form-inline" style="width: 100%" label-width="100px">
			  <el-form-item label="荣誉排名">
			    <el-input v-model="prizes.honorNum" placeholder="荣誉排名" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="荣誉总分">
			    <el-input v-model="prizes.honorScore" placeholder="荣誉总分" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="学术论文排名">
			    <el-input v-model="prizes.paperNum" placeholder="学术论文排名" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="学术论文总分">
			    <el-input v-model="prizes.paperSocre" placeholder="学术论文总分" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			</el-form>

			<el-form :inline="true" :model="prizes" class="demo-form-inline" style="width: 100%" label-width="100px">
			  <el-form-item label="专利数量">
			    <el-input v-model="prizes.patentNum" placeholder="专利数量" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="专利总分">
			    <el-input v-model="prizes.patentScore" placeholder="专利总分" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="学科竞赛排名">
			    <el-input v-model="prizes.competitionNum" placeholder="学科竞赛排名" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="学科竞赛总分">
			    <el-input v-model="prizes.competitionScore" placeholder="学科竞赛总分" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			</el-form>

			<!-- <el-form :inline="true" :model="prizes" class="demo-form-inline" style="width: 100%" label-width="100px">
			  <el-form-item label="创新项目排名">
			    <el-input v-model="prizes.innoNum" placeholder="创新项目排名" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="创新项目总分">
			    <el-input v-model="prizes.innoScore" placeholder="创新项目总分" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="创业项目排名">
			    <el-input v-model="prizes.entrNum" placeholder="创业项目排名" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="创业项目总分">
			    <el-input v-model="prizes.entrScore" placeholder="创业项目总分" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			</el-form> -->

			<el-form :inline="true" :model="prizes" class="demo-form-inline" style="width: 100%" label-width="100px">
			  

			  <el-form-item label="工程项目排名">
			    <el-input v-model="prizes.engiNum" placeholder="参与项目排名" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="工程项目总分">
			    <el-input v-model="prizes.engiScore" placeholder="参与项目总分" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>

			  <el-form-item label="学术交流排名">
			    <el-input v-model="prizes.exchNum" placeholder="学术交流排名" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="学术交流总分">
			    <el-input v-model="prizes.exchScore" placeholder="学术交流总分" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			</el-form>

			<el-form :inline="true" :model="prizes" class="demo-form-inline" style="width: 100%" label-width="100px">
			  <el-form-item label="就业深造排名">
			    <el-input v-model="prizes.workNum" placeholder="就业深造排名" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="就业深造总分">
			    <el-input v-model="prizes.workScore" placeholder="就业深造总分" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="硕士论文排名">
			    <el-input v-model="prizes.masterNum" placeholder="硕士论文排名" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			  <el-form-item label="硕士论文总分">
			    <el-input v-model="prizes.masterScore" placeholder="硕士论文总分" :readonly="readonly4" style="width: 130px"></el-input>
			  </el-form-item>
			</el-form>
			



		</div>
	</div>
</template>

<script>
export default {
	name: 'PrizeCenter',
	data () {
		return {
			prizes: {
				stuId: '',
				honorScore: '', // 荣誉总分
			    honorNum: '', // 荣誉数量
			    paperSocre: '', // 论文总分
			    paperNum: '', //  论文数量
			    patentScore: '', //  专利总分
			    patentNum: '', //  专利数量
			    competitionScore: '', //  学科竞赛
			    competitionNum: '',
			    engiScore: '', //  工程项目
			    engiNum: '',
			    entrScore: '', //  创业项目
			    entrNum: '',
			    innoScore: '', //  创新项目
			    innoNum: '',
			    exchScore: '', //  学术交流
			    exchNum: '',
			    workScore: '', //  就业深造
			    workNum: '',
			    masterScore: '', //  硕士论文
			    masterNum: '',
			},
			readonly4: true
		}
	},
	created(){
		this.getSession()
		this.getPrizes()
		// this.getTuCoer()
	},
	computed: {
    },
	methods: {
		getSession() {
			if (sessionStorage.getItem('userId') != null) {
				this.prizes.stuId = sessionStorage.getItem('userId')
			} else {
				this.prizes.stuId = ''
			}
		},
		getPrizes() {
			this.$http.GetAllPrizes(this.prizes.stuId).then((result) => {
				if (result.c === 200) {
					this.prizes = result.r					
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