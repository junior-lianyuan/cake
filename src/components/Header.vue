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
    @import "../assets/scss/v_color";
    @import "../assets/scss/flex_layout";
    @import "../assets/scss/function";

    .nav {
        @include flex-row-container;
        height: rem(26);
        padding: rem(10);
        color: #fff;
        background: $MAIN;
        a {
            display: block;
            flex-grow: 1;
            text-align: center;
            font-size: rem(16);
            color: #fff;
            text-decoration: none;
        }
        .router-link-active{
            line-height: rem(16);
            font-size: rem(18);
            font-weight: 700;
        }
        .tabs {
            @include flex-row-container;
            width: 80%;
        }
    }
</style>