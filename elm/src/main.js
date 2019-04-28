import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios"
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);


//全局注册axios
Vue.config.productionTip = false
Vue.prototype.axios=axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
}).$mount("#app")