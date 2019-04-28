<template>
    <div>
        <el-table :data="tableData">
        <el-table-column prop="registe_time" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="username" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="city" label="地址">
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
            tableData:[],
            currentPage1:1,
            num:0
        }
    },
    methods:{
        handleSizeChange(val){
        
        },
        handleCurrentChange(val){
            console.log(val)
            this.num=val-1
        axios.get(`https://elm.cangdu.org/v1/users/list?offset=${this.num*20}&limit=20`).then((res)=>{
                console.log(res.data)
                this.tableData=res.data
         })  
        }
    //     ,beforeRouteEnter (to, from, next) {
    // // 在渲染该组件的对应路由被 confirm 前调用
    // // 不能获取组件实例 `this`
    // // 因为当钩子执行前，组件实例还没被创建
    // axios.get(`https://elm.cangdu.org/v1/users/list?offset=0&limit=20`).then((res)=>{
    //     console.log(res.data)
    //     this.tableData=res.data
    // })
    // }
},
    mounted(){
      axios.get(`https://elm.cangdu.org/v1/users/list?offset=0&limit=20`).then((res)=>{
        console.log(res.data)
        this.tableData=res.data
    })  
}
}

</script>

<style>

</style>
