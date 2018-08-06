import Vue from 'vue'
import App from './App'
var Fly=require("flyio/dist/npm/wx")
var fly=new Fly


Vue.config.productionTip = false
Vue.prototype.$http=fly
App.mpType = 'app'


const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarTitleText: '思思天气',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true,
      navigationBarBackgroundColor: '#6B003D',
      backgroundColor: '#6B003D'
   

    }
  }
}
