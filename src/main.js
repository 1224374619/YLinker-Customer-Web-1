import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import vuescroll from 'vuescroll';
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.use(vuescroll, {
  ops: {
    bar: {
      onlyShowBarOnScroll: false,
      background: '#c1c1c1',
    }
  },
  name: 'Scroll'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
