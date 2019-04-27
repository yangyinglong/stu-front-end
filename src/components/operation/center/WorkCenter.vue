<template>
	<div style="margin: 0 auto">
		<div style="margin-top: 20px; margin-left: 120px; height: 64px">
			<el-form :inline="true" :model="queryData" class="demo-form-inline">
				<el-form-item style="margin-left: 800px">
					<AddWork />
				</el-form-item>
			</el-form>
		</div>
		<div style="margin-left: 20px; min-height: 465px; width: 95%">
			<el-table :data="workData" v-loading="isDisAble">
				<el-table-column prop="companyName" label="单位名称" width="220"></el-table-column>
				<el-table-column prop="companyType" label="单位性质" width="180"></el-table-column>
				<el-table-column prop="workType" label="就业类型" width="120"></el-table-column>
				<el-table-column prop="getDate" label="日期" width="150"></el-table-column>
				<el-table-column prop="score" label="得分" width="100"></el-table-column>
				<el-table-column prop="status" label="状态" width="100"></el-table-column>
				<el-table-column fixed="right" label="操作" width="140">
				<template slot-scope="scope">
					<el-button type="text" size="small" @click="showProofMaterial(scope.$index, scope.row)">下载材料</el-button>
					<el-button type="text" size="small" @click="showDetails(scope.$index, scope.row)" v-if="scope.row.status== '待审核'">修改/删除</el-button>
				</template>
				</el-table-column>
			</el-table>
		</div>
		<br>
	</div>
</template>

<script>
import AddWork from "@/components/operation/center/workOper/WorkAdd"
export default {
	name: 'WorkCenter',
	data () {
		return {
			isDisAble: false,
			loading: true,
			workData: [
				{
					id:'',
					companyName: '单位名称',
					companyType: '单位性质',
					workType: '就业类型', // 个人所做的工作
					getDate: '2018-12-13',
	        		status: '待审核',
	        		score: 0,
	        		proofMaterialId: '',
				}			
			]
		}
	},
	created(){
		this.queryData()
	},
	computed: {
    },
	methods: {
		queryData(){
			this.isDisAble = true
			this.$http.ShowWorks(sessionStorage.getItem("userId")).then((result) => {
				if (result.c == 200) {
					this.workData = result.r
				} else {
					this.workData = []
				}
				this.isDisAble = false
			}, (err) => {
	            this.$message.error(err.msg)
	        })
		},
		showProofMaterial(index, row){
			
		},
		showDetails(index, row){
			sessionStorage.setItem('id', row.id)
			sessionStorage.setItem('name', row.name)
			sessionStorage.setItem('stuId', row.stuId)
			sessionStorage.setItem('companyName', row.companyName)
			sessionStorage.setItem('companyType', row.companyType)
			sessionStorage.setItem('workType', row.workType)
			sessionStorage.setItem('getDate', row.getDate)
			this.$router.push({name: 'WorkShow', params: {orderId: row.id}})
		},
	},
	components: {
		AddWork
	},
}		
</script>

<style scoped>
	.labcenter-main{
		margin: 0 auto;
	}
</style>