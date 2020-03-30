import App from './App.vue'
import AppIndex from './components/AppIndex'
import Post from './components/Post/Post'

import Vue from 'vue'
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../src/lib/ionicons/css/ionicons.min.css"
import "../src/lib/owlcarousel/assets/owl.carousel.css"

Vue.config.productionTip = false


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/index',
      component: AppIndex
    },
    {

      path: '/post/:id',
      name: 'post',
      component: Post
    }
  ]
})


new Vue({
  el: "#app",
  router,
  render: h => h(App)
})