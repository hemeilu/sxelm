<template>
    <div>
        店铺名称<el-input v-model="input"></el-input>
        详细地址<el-input v-model="address" placeholder="请输入地址"></el-input>
        联系电话<el-input v-model="phone" placeholder="请输入内容"></el-input>
        店铺简介<el-input v-model="note" placeholder="请输入内容"></el-input>
        店铺标语<el-input v-model="title" placeholder="请输入内容"></el-input>
        店铺分布<div class="block">
                <el-cascader
                    :options="options"
                    v-model="selectedOptions"
                   >
                </el-cascader>
                </div>
        店铺特点
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            input:"",
            selectedOptions: [],
             options: [],
             address:"",
             phone:"",
             note:"",
             title:""
        }
    },
    mounted(){
        axios.get("https://elm.cangdu.org/shopping/v2/restaurant/category").then((res)=>{
            console.log(res.data)
            this.options=res.data
        })
    }
}
</script>

<style>

</style>
