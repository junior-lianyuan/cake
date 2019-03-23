<template>
    <div class="container">
        <div class="user"></div>
        <button @click="greet()">show msg</button>
    </div>
</template>

<script>
    export default {
        name: "Mine",
        methods: {
            greet() {
                this.$toast({msg: 'hello world', type: 'prompt'})
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/function";

</style>