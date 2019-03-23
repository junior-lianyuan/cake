import Vue from 'vue'
import VueRouter from 'vue-router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import router from './router/router.config.js'
import Layer from './plugins/vue-layer'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(Layer);
Vue.component('v-icon',Icon);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
