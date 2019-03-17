<template>
    <div class="app">
        <Header/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'

    export default {
        name: 'app',
        components: {
            Header,
            Footer
        }
    }
</script>

<style lang="scss">
    @import "./assets/_v_color.scss";
    @import "./assets/flex_layout.scss";

    html, body {
        margin: 0 !important;
        padding: 0 !important;
        height: 100%;
        -webkit-tap-highlight-color: transparent;
    }

    .app {
        @include flex-flow-container;
        height: 100%;
        font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    }
</style>
