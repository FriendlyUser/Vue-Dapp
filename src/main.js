// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 * A quite wonderful function.
 * @file  main.js
 * @param {object} - privacy gown
 * @param {object} - security
 * @returns {survival}
 * @summary Using information from https://codepen.io/wernerm/pen/LjggoV
 */
import Vue from 'vue'
import App from './App.vue'
import Web3 from 'web3'
import router from './router'
import Vuetify from 'vuetify'
import { store } from './store/'
// Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify)

window.addEventListener('load', function () {
  if (typeof web3 !== 'undefined') {
    console.log('Web3 injected browser: OK.')
    window.web3 = new Web3(window.web3.currentProvider)
  } else {
    console.log('Web3 injected browser: Fail. You should consider trying MetaMask.')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  }

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
})

