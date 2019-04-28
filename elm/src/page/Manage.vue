<template>
    <el-container height="800px" style=" border: 1px solid #eee" >
  <el-aside width="200px" height="800px"  >
    <el-menu :default-openeds="['1', '3']" default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgb(50, 64, 87)"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-submenu index="4">
        <template slot="title"><i class="el-icon-menu"></i>首页</template>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-document"></i>数据管理</template>
        <el-menu-item-group>
        <router-link tag="div" :to="{name:'userlist'}">
          <el-menu-item index="1-1">用户列表</el-menu-item>
		</router-link>
        <router-link tag="div" :to="{name:'shoplist'}">
          <el-menu-item index="1-2">商家列表</el-menu-item>
		</router-link>
        <router-link tag="div" :to="{name:'foodlist'}">
          <el-menu-item index="1-3">食品列表</el-menu-item>
		</router-link>
        <router-link tag="div" :to="{name:'orderlist'}">
          <el-menu-item index="1-4">订单列表</el-menu-item>
		</router-link>
         <router-link tag="div" :to="{name:'adminlist'}">
          <el-menu-item index="1-5">管理员列表</el-menu-item>
		</router-link> 
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>添加数据</template>
        <el-menu-item-group>
          <router-link tag="div" :to="{name:'addshop'}">
            <el-menu-item index="2-1">添加商铺</el-menu-item>
		      </router-link> 
          <el-menu-item index="2-2">添加商品</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container id="right">
    <Header></Header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>
<style>
  #right{
      display: flex;
      flex-direction: column
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
import  Header from "../components/Header"
  export default {
    components:{
        Header
    },
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        
      }
    },
    methods:{
    head(index){
        console.log(index,"sfdagu")
    },
       handleOpen(){

       },
       handleClose(){

       }
    }
  };
</script>



