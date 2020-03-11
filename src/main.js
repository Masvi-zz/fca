import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import "../src/lib/ionicons/css/ionicons.min.css"
import "../src/lib/owlcarousel/assets/owl.carousel.css"

// import jquery from 'jquery'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
