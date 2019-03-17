<template>
    <div class="play-list">
        <ul class="list">
            <li v-for="(song,index) of playList" :key="index">{{song.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "PlayList",
        props: ['playList']
    }
</script>

<style scoped>

</style>