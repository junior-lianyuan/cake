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
    @import "../../assets/_v_color.scss";
    @import "../../assets/_flex_layout.scss";

    .search-bar {
        height: 25px;
        padding:0 8px 8px 8px;
        color: #fff;
        background-color: $MAIN;
        .search{
            @include flex-align-center;
            width: 100%;
            height: 25px;
            line-height: 25px;
            font-size: 14px;
            background-color: rgba(0,0,0,0.2);
            .search-icon{
                width: 14px;
                height: 14px;
            }
        }
    }
</style>