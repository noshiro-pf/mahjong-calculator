import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueClipboard from "vue-clipboard2";
import VueMeta from "vue-meta";
import App from "./App.vue";
//import VueSocialSharing from "vue-social-sharing"
import Vue from "vue";
import Ads from "vue-google-adsense";
import VueGtag from "vue-gtag";

// Google Adsense
Vue.use(require("vue-script2"));
Vue.use(Ads.AutoAdsense, { adClient: "ca-pub-9930040906284502" });
Vue.use(Ads.Adsense);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueClipboard);
Vue.use(VueMeta);
//Vue.use(VueSocialSharing)
Vue.config.productionTip = false;
Vue.use(VueGtag, {
  config: { id: "G-GDCFWZN645" },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
