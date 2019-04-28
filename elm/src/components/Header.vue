<template>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span><img src="//elm.cangdu.org/img/default.jpg" width="50px" height="50px" class="avator" alt=""></span>
    </el-header>
</template>

<script>
export default {

}
</script>

<style>
    .el-header {
        width:100%;
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>
