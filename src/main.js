import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueApexCharts from 'vue-apexcharts'
import axios from 'axios'
Vue.use(VueApexCharts)

Vue.config.productionTip = false

if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://dsm.ds.do:8080/rest/";
} else {
  axios.defaults.baseURL = "http://dsm.ds.do:8080/rest/";
}

// вставляет заголовки с токеном в каждый запрос
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? 'Bearer ' + token : null;
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use(
  (response) => {
    if (response.status === 401 || response.status === 403) {
      // если хоть раз приходит "неавторизован" - разлогинить юзера
      store.dispatch("authorization/logout");
      // отправляем на стр входа
      router.push({ name: "Login" });
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      if (error.response.status === 401 || error.response.status === 403) {
        // если хоть раз приходит "неавторизован" - разлогинить юзера
        store.dispatch("authorization/logout");
        // отправляем на стр входа
        router.push({ name: "Login" });
      }
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
