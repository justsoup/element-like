import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from 'iview';
import 'iview/dist/styles/iview.css';


Vue.config.productionTip = false;
//阻止vue启动生产消息

Vue.use(VueRouter)
Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
  //h是createElement
}).$mount("#app");
