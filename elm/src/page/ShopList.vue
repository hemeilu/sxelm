<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="店铺名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="店铺介绍">
            <span>{{ props.row.description }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="评分">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="销售量">
            <span>{{ props.row.recent_order_num }}</span>
          </el-form-item>
          <el-form-item label="分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="店铺名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="店铺地址"
      prop="address">
    </el-table-column>
    <el-table-column
      label="店铺介绍"
      prop="description">
    </el-table-column>
    <el-table-column
      label="操作"
      prop="desc">
     <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		  <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">添加商品</el-button>
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
            num:0
        }
    },
    methods:{
        handleSizeChange(){

        },
        handleCurrentChange(val){
            this.num=val-1
            axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=${this.num*20}&limit=20`).then((res)=>{
                console.log(res.data)
                this.tableData=res.data
            })  
        },
      handleNodeClick(data) {
        console.log(data);
      }
    },
    
    mounted(){
      axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=${this.num}&limit=20`).then((res)=>{
        console.log(res.data)
        this.tableData=res.data
    })  
    }
}
</script>

<style>

</style>
