<template>
    <transition name="up">
        <div :class="type">
            <v-icon name="check" class="icon" v-if="type === 'prompt'"></v-icon>
            {{msg}}
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Prompt",
        data() {
            return {

            }
        },
        methods: {
            alignCenter: function () {
                this.$nextTick(function () {
                    this.$el.style.marginLeft = (document.body.offsetWidth - this.$el.offsetWidth) / 2 + "px";
                });
            }
        },
        mounted() {
            this.alignCenter();
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/function";

    .msg {
        position: absolute;
        max-width: 80%;
        min-height: rem(16);
        margin: 0 auto;
        padding: rem(5) rem(10);
        line-height: rem(16);
        font-size: rem(14);
        background-color: rgba(0, 0, 0, .7);
        border-radius: 2px;
        z-index: 999;
        color: #fff;
        bottom: 15%;
    }

    .prompt {
        position: absolute;
        width: rem(80);
        height: rem(80);
        line-height: rem(30);
        margin: - rem(40) auto 0;
        padding: rem(10);
        text-align: center;
        font-size: rem(14);
        background-color: rgba(0, 0, 0, .7);
        border-radius: 4px;
        z-index: 999;
        color: #fff;
        top: 50%;
        .icon{
            display: block;
            width: rem(35);
            height: rem(35);
            margin: rem(5) auto;
        }
    }

    .up-enter {
        bottom: 0;
    }
    .up-enter-alive{
        transition: bottom .5s ease;
    }
</style>