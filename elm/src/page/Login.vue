<template>
<div id="box">
    <div id="tran">
        <h1>elm后台管理系统</h1>
        <div id="content">
            <el-input v-model="input" placeholder="用户名"></el-input>
            <el-input v-model="psd" placeholder="密码"></el-input>
            <el-button type="primary" id="btn" @click="login">登录</el-button>
            <div id="warn">
            <p>温馨提示：</p>
            <p>未登录过的新用户，自动注册</p>
            <p>注册过的用户可凭账号密码登录</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from "axios"
  export default {
    data() {
      return {
          input:"",
         psd:""
      }
    },
    methods:{
      login(){
         let data={user_name:this.input,password:this.psd}
		      console.log(data)
			 axios.post("https://elm.cangdu.org/admin/login",data).then((res)=>{
					  console.log(res.data)
					  if(res.data.status==1){
							setTimeout(()=>{
								 this.$router.push("/manage")
							},2000)
        this.$notify({
          title: '成功',
          message: '登录成功',
          type: 'success'
        })
					  }else{
							this.$notify.error({
          title: '密码错误',
          message: '密码错误'
        });
						}
					 
				 })
				
      }
    }
  };
</script>
<style lang="scss" >
    @import '../style/animate.css'; 
  *{
      margin: 0;
      padding: 0;
  }
  body{
      font-family: Microsoft Yahei,sans-serif;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
  #box{
    width: 100%;
    height:800px;
     background: #324057;
  }
  #box #content{
    width: 320px;
    height: 210px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -105px;
    margin-left: -160px;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
  }
  h1{
      color:white;
      
      position: absolute;
    top: 20%;
    left: 42%;
  }
  input{
      margin-bottom: 15px;
  }
  #btn{
      width: 100%;
  }
  p{
      color: red;
      font-size: 12px;
  }
  #warn{
      margin-top: 20px;
  }
</style>