// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import VueAxios from 'vue-axios'
import store from '@/store/index'
import ajax from '@/utils/http'
import api from '@/utils/api'
import global from './components/global'//引用文件

import '@/utils/filters'
import './main.css'
import 'normalize.css'
import {
  Cell,
  Checklist,
  Toast,
  MessageBox,
  Popup,
  Button,
  Header,
  Tabbar,
  TabItem,
  Navbar,
  Search,
  Indicator,
  Swipe,
  SwipeItem,
  TabContainer,
  TabContainerItem,
  Field,
  Loadmore,
  DatetimePicker
} from 'mint-ui'

Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Cell.name, Cell)
Vue.component(Checklist.name, Checklist)
Vue.component(Toast.name, Toast)
Vue.component(MessageBox.name, MessageBox)
Vue.component(Popup.name, Popup)
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Search.name, Search)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Field.name, Field)
Vue.component(Loadmore.name, Loadmore)

Vue.config.productionTip = false
var axios_instance = axios.create({
  // baseURL:'http://localhost:8080', //自行修改url
  transformRequest: [function (data) {
    data = qs.stringify(data);
    return data;
  }],
  headers:{'Content-Type':'application/x-www-form-urlencoded'}
})
Vue.use(VueAxios, axios_instance)
Vue.prototype.$toast = Toast;
Vue.prototype.$global = global//挂载到Vue实例上面
Vue.prototype.$Api = api

/* 路有拦截 */
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
      if (JSON.stringify(store.state.session.currentUser)!='{}') {  // 通过vuex state获取当前的用户是否登录
        next();
      }
      else {
        next({
          path: '/login',
          query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    }
    else {
      next();
    }
})

router.afterEach((to, from) => {
  // Indicator.close()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
