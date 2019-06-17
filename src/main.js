import Vue from 'vue'
// import { Button, Label, Input, Field  } from '@blibli/dls/dist/components'
// import '@blibli/dls/dist/blue.css'
import App from './App.vue'
import store from './store/index.js'
import Blue from '@blibli/dls'
import '@blibli/dls/dist/blue.css'

Vue.use(Blue);

Vue.config.productionTip = false

// Vue.use(Button)
// Vue.use(Input)
// Vue.use(Label)
// Vue.use(Field)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
  // components: {App},
  // template: '<App/>'

});
