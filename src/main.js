import Vue from "vue";
import Vuex from "vuex";

import App from "./Chat.vue";

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  render: (h) => h(App),
  // store
}).$mount("#app");
