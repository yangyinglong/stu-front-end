<template>
	<div class="labcenter-main">
		<el-tabs type="border-card" style="min-height: 530px; min-width: 11
		00px" :value="tagPage">
			<!-- <el-tab-pane label="实验室管理" name="labadmincenter" v-if="this.$store.state.loginStatus === 2">增加实验室</el-tab-pane>
			<el-tab-pane label="订单管理" name="orderadmincenter" v-if="this.$store.state.loginStatus === 2">点单处理</el-tab-pane> -->
			<el-tab-pane label="基本信息" name="baseInfo"><BaseInfo /></el-tab-pane>
			<el-tab-pane label="成绩中心" name="scoreCenter"><ScoreCenter /></el-tab-pane>
			<el-tab-pane label="荣誉与奖项" name="honorCenter"><HonorCenter /></el-tab-pane>
			<el-tab-pane label="学术论文" name="paperCenter"><PaperCenter /></el-tab-pane>
			<el-tab-pane label="奖项得分" name="prizeCenter"><PrizeCenter /></el-tab-pane>
			<!-- <el-tab-pane label="订单中心" name="ordercenter"><OrderCenter /></el-tab-pane> -->
		</el-tabs>
	</div>
</template>

<script>
import BaseInfo from '@/components/operation/center/BaseInfo'
import ScoreCenter from '@/components/operation/center/ScoreCenter'
import HonorCenter from '@/components/operation/center/HonorCenter'
import PrizeCenter from '@/components/operation/center/PrizeCenter'
import PaperCenter from '@/components/operation/center/PaperCenter'
export default {
	name: 'Center',
	data () {
		return {
			tagPage: 'baseInfo'
		}
	},
	created(){
		if (this.$route.params.tagP) {
			this.tagPage = this.$route.params.tagP
		}
	},
	methods: {
	},
	components: {
		BaseInfo,
		ScoreCenter,
		HonorCenter,
		PrizeCenter,
		PaperCenter
	},
}		
</script>

<style scoped>
	.labcenter-main{
		width: 70%;
		min-width: 1100px;
		margin: 0 auto;
	}
</style>