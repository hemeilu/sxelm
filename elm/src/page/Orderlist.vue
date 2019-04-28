<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%"
     @expand-change="change"
    >
    <el-table-column type="expand" 
     >
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="用户名">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺名称">
            <span>{{ obj.name }}</span>
          </el-form-item>
          <el-form-item label="收货地址">
            <span>{{ props.row.item_id }}</span>
          </el-form-item>
          <el-form-item label=" 店铺 ID">
            <span>{{ props.row.restaurant_id }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="订单ID"
      prop="unique_id"
      >
    </el-table-column>
    <el-table-column
      label="总价格"
      prop="total_amount">
    </el-table-column>
    <el-table-column
      label="订单状态"
      prop="status_bar.title">
    </el-table-column>
    
  </el-table>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage1"
    :page-size="100"
  background
  layout="total,prev, pager, next"
  :total="1000"></el-pagination>
</div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            tableData: [],
            currentPage1:1,
            num:0,
            id:"",
            obj:{}
        }
    },
    methods:{
        handleSizeChange(){

        },
        handleCurrentChange(val){
            this.num=val-1
            axios.get(`https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined`).then((res)=>{
                console.log(res.data)
                this.tableData=res.data
            })  
        },
      handleNodeClick(data) {
        console.log(data);
      },
      tableRowClassName({row, rowIndex}) {
      // 把每一行的索引放进row
      row.index = rowIndex;
      console.log(row.index)
      },
      change(r,q){
        //   this.id=row.restaurant_id
          console.log(r.restaurant_id)
        axios
        .get("https://elm.cangdu.org/shopping/restaurant/"+r.restaurant_id).then((res)=>{
                console.log(res.data)
                this.obj=res.data
        })  
      }
    },
    
    mounted(){
      axios
        .get(`https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined`).then((res)=>{
        this.tableData=res.data
        console.log(res.data,this.tableData[0].restaurant_id)
    })  
    }
}
</script>

<style>

</style>

