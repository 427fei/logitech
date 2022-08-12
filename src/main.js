import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './assets/js/router.js'
import './assets/css/first.css'
import './assets/css/index.css'
import './assets/css/find.css'
import './assets/css/detail.css'
import './assets/css/type.css'
import './assets/css/log.css'
import './assets/css/my.css'


import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
