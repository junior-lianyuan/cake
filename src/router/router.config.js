import VueRouter from 'vue-router'
import Mine from '../components/Mine.vue';
import Index from '../components/Index.vue';
import Find from '../components/Find.vue';
const routes =  [
    { path: '/mine', component: Mine },
    { path: '/index', component: Index },
    { path: '/find', component: Find }
];
export default new VueRouter({
    routes // (缩写) 相当于 routes: routes
})