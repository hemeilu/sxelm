<template>
	<div id="box1">
		<el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
		  property="user_name"
      label="姓名"
      style="width: 10%">
     
    </el-table-column>
    <el-table-column
		  property="create_time"
      label="注册日期"
      style="width: 10%">
    </el-table-column>
	<el-table-column
	   property="city"
      label="地址"
      style="width: 10%">
      
    </el-table-column>
	
	<el-table-column
	    property="admin"
      label="权限"
      style="width: 10%">
     
    </el-table-column>
	
   
  </el-table>
  <div class="block">
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage1"
    :page-size="100"
  background
  layout="total,prev, pager, next"
  :total="1000"></el-pagination>
   </div>
	</div>
</template>


<script>
	import axios from "axios"
	 export default {
      data() {
        return {
          tableData: [ 
		  ],
		  list:"",
		    currentPage1: 1,
				num:0
        }
      },
	  created() {
	  	  this.list=this.$route.params.headername
	  },
		mounted(){
			axios.get(`https://elm.cangdu.org/admin/all?offset=${this.num}&limit=20`).then((res)=>{
				  console.log(res.data.data)
					this.tableData=res.data.data
			})
		},
		
	   methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
	    handleSizeChange(val) {
	    console.log(`每页 ${val} 条`);
	  },
	  handleCurrentChange(val) {
	    console.log(`当前页: ${val}`);
			this.num=val-1
			axios.get(`https://elm.cangdu.org/admin/all?offset=${this.num*20}&limit=20`).then((res)=>{
				  console.log(res.data.data)
					this.tableData=res.data.data
			})
	  }
    }
    }
</script>


<style lang="scss">
	#box1{
		background: white;
		width: 100%;
	     height: 100%;
	}
</style>
