<template>
	<div style="margin: 0 auto">
		<div style="margin-top: 20px; margin-left: 120px; height: 64px">
			<el-form :inline="true" :model="queryData" class="demo-form-inline">
				<el-form-item style="margin-left: 800px">
					<AddAcadExch />
				</el-form-item>
			</el-form>
		</div>
		<div style="margin-left: 20px; min-height: 465px; width: 95%">
			<el-table :data="acadExchData" v-loading="isDisAble">
				<el-table-column prop="exchangeType" label="交流类别" width="100"></el-table-column>
				<el-table-column prop="conferenceName" label="组织结构/会议名称" width="200"></el-table-column>
				<!-- <el-table-column prop="proIntr" label="项目简介" width="100"></el-table-column> -->
				<!-- <el-table-column prop="conferenceName" label="会议名称" width="190"></el-table-column> -->
				<el-table-column prop="startTime" label="开始时间" width="100"></el-table-column>
				<el-table-column prop="endTime" label="结束时间" width="100"></el-table-column>
				<el-table-column prop="level" label="级别" width="80"></el-table-column>
				<el-table-column prop="result" label="交流成果" width="180"></el-table-column>
				<el-table-column prop="score" label="得分" width="100"></el-table-column>
				<el-table-column prop="status" label="状态" width="70"></el-table-column>
				<el-table-column fixed="right" label="操作" width="140">
				<template slot-scope="scope">
					<el-button type="text" size="small" @click="showProofMaterial(scope.$index, scope.row)"  v-if="scope.row.proofMaterialId != ''">下载材料</el-button>
					<el-button type="text" size="small" @click="showDetails(scope.$index, scope.row)" v-if="scope.row.status== '待审核'">修改/删除</el-button>
				</template>
				</el-table-column>
			</el-table>
		</div>
		<br>
	</div>
</template>

<script>
import AddAcadExch from "@/components/operation/center/acadExchOper/AcadExchAdd"
export default {
	name: 'AcadExchCenter',
	data () {
		return {
			isDisAble: false,
			loading: true,
			acadExchData: [
				{
					id:'',
					exchangeType: '交流类别',
					// organization: '组织机构', //
					conferenceName: '会议名称',
					startTime: '开始时间',
					endTime: '结束时间',
					level: '国家级',
					result: '交流论文',
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
			this.$http.ShowAcadExchs(sessionStorage.getItem("userId")).then((result) => {
				if (result.c == 200) {
					this.acadExchData = result.r
				} else {
					this.acadExchData = []
				}
				this.isDisAble = false
			}, (err) => {
	            this.$message.error(err.msg)
	        })
		},
		showProofMaterial(index, row){
			window.open('http://129.204.15.161:7070/api/file/downloadFile?fileName=' + row.proofMaterialId)
		},
		showDetails(index, row){
			sessionStorage.setItem('id', row.id)
			sessionStorage.setItem('name', row.name)
			sessionStorage.setItem('stuId', row.stuId)
			sessionStorage.setItem('exchangeType', row.exchangeType)
			sessionStorage.setItem('conferenceName', row.conferenceName)
			sessionStorage.setItem('startTime', row.startTime)
			sessionStorage.setItem('endTime', row.endTime)
			sessionStorage.setItem('level', row.level)
			sessionStorage.setItem('result', row.result)
			this.$router.push({name: 'AcadExchShow', params: {orderId: row.id}})
		},
	},
	components: {
		AddAcadExch
	},
}		
</script>

<style scoped>
	.labcenter-main{
		margin: 0 auto;
	}
</style>