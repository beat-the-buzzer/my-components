import Vue from 'vue'
import App from './App.vue'

import '../components/css/demo.scss'
import '../components/css/card.scss'
import Demo from '../components/lib/demo/index.js'
import Card from '../components/lib/card/index.js'

Vue.use(Demo) // Demo.install
Vue.use(Card) // Demo.install

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
