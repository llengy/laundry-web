// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
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
  Field
} from 'mint-ui'

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
Vue.component(Field.name, Field);

Vue.config.productionTip = false
Vue.use(VueAxios, axios)


/* 路有拦截 */
router.beforeEach((to, from, next) => {
  // Indicator.open({
  //   spinnerType: 'fading-circle'
  // })
  next()
})

router.afterEach((to, from) => {
  // Indicator.close()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})