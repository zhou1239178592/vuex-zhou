import Vue from 'vue'
import App from './App.vue'
import store from "./store/index"
console.log(store)
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
