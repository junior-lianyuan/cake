<template>
    <div class="container">
        <div class="grids">
            <div v-for="(grid,index) of grids" class="col-3" :key="index">
                <word-icon :icon-name="grid.iconName" :label="grid.label"
                           :count="grid.count" :notice="grid.isNotice"></word-icon>
            </div>
        </div>
    </div>
</template>

<script>
    import WIcon from "./widget/WIcon.vue"

    export default {
        name: "Mine",
        components: {
            "word-icon": WIcon
        },
        data() {
            return {
                grids: [{
                    iconName: "music",
                    label: "本地音乐",
                    count: 19,
                    isNotice: true
                }, {
                    iconName: "download",
                    label: "下载音乐",
                    count: 19
                },{
                    iconName: "clock",
                    label: "最近播放",
                    count: 49
                },{
                    iconName: "heart",
                    label: "我喜欢",
                    count: 1,
                    isNotice: false
                },{
                    iconName: "book",
                    label: "已购音乐"
                },{
                    iconName: "car",
                    label: "跑步电台"
                }]
            }
        },
        methods: {
            greet() {
                this.$toast({msg: 'hello world', type: 'prompt'})
            }
        },
        computed: {
            hasNotice() {
                return true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/function";

    .grids {
        display: flex;
        flex-wrap: wrap;
    }

    .col-3 {
        display: flex;
        width: 33%;
        margin-bottom: rem(20);
        justify-content: center;
    }
</style>