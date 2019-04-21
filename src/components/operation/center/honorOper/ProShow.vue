<template>
  <div>
    <b class="linked" @click="dialogLoginVisible = true">
      <el-button type="text" size="small">查看材料</el-button>
    </b>
    <el-dialog width="720px" title="材料" :visible.sync="dialogLoginVisible" class="content">
      <div id="xxx">
        <img :src="imgPath1" width="500px" height="300px">
      </div>
    <div style="margin: 0 auto">
      <el-row>
        <el-button style="width: 120px" @click="dialogLoginVisible = false">取消</el-button>
      </el-row>
    </div>
    </el-dialog>
  </div>

</template>

<script>
  export default {
    name: 'ProShow',
    data() {
      return {
        dialogLoginVisible: false,
        honorFrom: {
          stuId: sessionStorage.getItem('userId'),
          name: sessionStorage.getItem('userName'),
          honorType: '',
          honorLevel: '',
          honorGrade: '',
          getDate: '',
          proofMaterialId: '',
        },
      }
    
    },
    created(){
    },
    mounted() {
    },
    computed: {
      imgPath1() {
        return 'http://localhost:7070/api/file/printImg?fileName=15200123_1_1_1—1.jpg' 
      }
    },
    methods: {
    }
  }

</script>

<style scoped>
.content {
	display: inline-block;
	text-align: center;
	vertical-align: middle;
	horiz-align: center;
	white-space: nowrap;
	margin: 0;
}
</style>