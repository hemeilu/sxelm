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
          <el-form-item label="食品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="餐馆名称">
            <span>{{ obj.name }}</span>
          </el-form-item>
          <el-form-item label="食品 ID">
            <span>{{ props.row.item_id }}</span>
          </el-form-item>
          <el-form-item label=" 餐馆 ID">
            <span>{{ props.row.restaurant_id }}</span>
          </el-form-item>
          <el-form-item label="食品介绍">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="餐馆地址">
            <span>{{ obj.address }}</span>
          </el-form-item>
          <el-form-item label="食品评分">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="食品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="月销量">
            <span>{{ props.row.month_sales }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="食品名称"
      prop="name"
      >
    </el-table-column>
    <el-table-column
      label="食品介绍"
      prop="address">
    </el-table-column>
    <el-table-column
      label="评分"
      prop="rating">
    </el-table-column>
    <el-table-column
      label="操作"
      prop="desc">
     <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
        .get(`https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined`).then((res)=>{
        this.tableData=res.data
        console.log(res.data,this.tableData[0].restaurant_id)
    })  
    }
}
</script>

<style>

</style>

