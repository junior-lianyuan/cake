import Alert from './components/Alert.vue';
import Dialog from './components/Dialog.vue';
import SlideBar from './components/SlideBar.vue';
import SlidePage from './components/SlidePage.vue';
import Toast from './components/Toast.vue';

const VueLayer = {};
VueLayer.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
        // 逻辑...
    };

    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind(el, binding, vnode, oldVnode) {
            // 逻辑...
        }

    });

    // 3. 注入组件
    Vue.mixin({
        created: function () {
            // 逻辑...
        }

    });

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        // 逻辑...
    };

    Vue.component(Alert.name, Alert);
    Vue.component(Toast.name, Toast);
    Vue.component(Dialog.name, Dialog);
    Vue.component(SlideBar.name, SlideBar);
    Vue.component(SlidePage.name, SlidePage);
};

export default VueLayer;