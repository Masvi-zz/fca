import App from './App.vue'
import AppIndex from './components/AppIndex'
import Post from './components/Post/Post'
import Portfolio from './components/Portfolio/Portfolio'

import Vue from 'vue'
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../src/lib/ionicons/css/ionicons.min.css"
import "../src/lib/owlcarousel/assets/owl.carousel.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "font-awesome/css/font-awesome.css";
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AppIndex,
    },
    {

      path: '/post/:id',
      name: 'post',
      component: Post
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,

    },

  ]
})


new Vue({
  el: "#app",
  router,
  render: h => h(App)
})