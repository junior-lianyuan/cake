import Vue from 'vue'
import Alert from './components/Alert.vue';
import Dialog from './components/Dialog.vue';
import SlideBar from './components/SlideBar.vue';
import SlidePage from './components/SlidePage.vue';
import Prompt from './components/Prompt.vue';

const PromptConstructor = Vue.extend(Prompt);
const Layer = {
    toast({msg, type, duration = 1000}) {
        const toastDom = new PromptConstructor({
            el: document.createElement("div"),
            data() {
                return {
                    msg: msg,
                    type: type
                }
            }
        });
        document.body.appendChild(toastDom.$el);
        setTimeout(function () {
            toastDom.$el.outerHTML = '';
        }, duration)
    }
};
Layer.install = function (Vue, options) {
    Vue.prototype.$toast = Layer.toast;
    // Vue.toast = Layer.toast;
};

export default Layer;