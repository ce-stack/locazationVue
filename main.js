import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material';
// import VeeValidate from 'vee-validate';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { formatDate } from './filters/formatDate';
import { capitalize } from './filters/capitalize';
import { VuejsDatatableFactory } from 'vuejs-datatable';
import * as VeeValidate from 'vee-validate';
import VueI18n from 'vue-i18n';
import { ENGLISH_TRANSLATIONS } from './translations/en';
import { FRENCH_TRANSLATIONS } from './translations/fr';
Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VeeValidate);
Vue.use(VueI18n);
Vue.filter('formatDate', formatDate);
Vue.filter('capitalize', capitalize);
const TRANSLATIONS = {
  en: ENGLISH_TRANSLATIONS,
  fr: FRENCH_TRANSLATIONS
}
const i18n = new VueI18n({
  locale: 'en',
  messages: TRANSLATIONS,
})
new Vue({
  router,
  store,
  i18n,
  VuejsDatatableFactory,
  render: h => h(App)
}).$mount('#app')