<template>
    <div class="search-bar">
        <div class="search">
            <v-icon name="search" class="search-icon"></v-icon>
            <span>&nbsp;搜索</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchBar"
    }
</script>

<style scoped lang="scss">
    @import "../../assets/scss/v_color";
    @import "../../assets/scss/flex_layout";
    @import "../../assets/scss/function";

    .search-bar {
        height: rem(26);
        padding:0 rem(8) rem(8) rem(8);
        color: #fff;
        background-color: $MAIN;
        .search{
            @include flex-align-center;
            width: 100%;
            height: rem(26);
            line-height: rem(26);
            font-size: rem(14);
            background-color: rgba(0,0,0,0.2);
            .search-icon{
                width: rem(14);
                height: rem(14);
            }
        }
    }
</style>