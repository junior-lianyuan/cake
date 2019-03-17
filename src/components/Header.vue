<template>
    <header>
        <nav class="nav">
            <v-icon name="bars" class="nav-icon"></v-icon>
            <div class="tabs">
                <router-link v-for="(nav,index) of nav" :key="index" :to="nav.link">{{nav.name}}</router-link>
            </div>
            <v-icon name="plus" class="nav-icon"></v-icon>
        </nav>
        <SearchBar/>
    </header>
</template>

<script>
    import SearchBar from './toolBar/SearchBar.vue'

    export default {
        name: "Header",
        data() {
            return {
                nav: [
                    {name: '我的', link: '/mine'},
                    {name: '音乐馆', link: '/index'},
                    {name: '发现', link: '/find'}
                ]
            }
        },
        components: {
            SearchBar
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/_v_color.scss";
    @import "../assets/_flex_layout.scss";

    .nav {
        @include flex-row-container;
        height: 25px;
        padding: 10px;
        color: #fff;
        background: $MAIN;
        a {
            display: block;
            flex-grow: 1;
            text-align: center;
            color: #fff;
            text-decoration: none;
        }
        .tabs {
            @include flex-row-container;
            width: 80%;
        }
    }
</style>