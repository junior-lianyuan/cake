<template>
    <div :class="classObject">
        <v-icon :name="name" class="w-icon"></v-icon>
        <div class="label">{{iconLabel}}</div>
        <div class="count" v-if="blockCount!==null">{{blockCount}}</div>
    </div>
</template>

<script>
    export default {
        name: "word-icon",
        props: {
            iconName: String,
            label: {
                type: String,
                validator(value) {
                    return value.length < 6;
                }
            },
            count: {type: Number, default: null},
            notice: {type: Boolean, default: false}
        },
        data() {
            return {
                name: this.iconName,
                iconLabel: this.label,
                blockCount: this.count,
                classObject: {
                    "word-icon": true,
                    "notice": this.notice
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/scss/v_color";
    @import "../../assets/scss/function";

    .word-icon {
        position: relative;
        width: rem(80);
        height: rem(80);
        text-align: center;
    }

    .w-icon {
        color: $MAIN;
        width: rem(30);
        height: rem(30);
    }

    .label {
        margin: rem(5) 0;
        font-size: rem(16);
        color: #333;
    }

    .count {
        font-size: rem(12);
        color: #aaa;
    }

    .notice::after{
        position: absolute;
        content: "";
        display: block;
        width: rem(6);
        height: rem(6);
        background-color: #ff3300;
        border-radius: 50%;
        right: 0;
        top: 0;
    }
</style>