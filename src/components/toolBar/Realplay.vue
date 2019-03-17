<template>
    <div class="real-play">
        <div class="song-info">
            <div class="album"
                 :style="album"></div>
            <div class="item">
                <div class="song">{{curSong.song}}</div>
                <div class="singer">{{curSong.singer}}</div>
            </div>
        </div>
        <div class="play-bar">
            <v-icon name="play-circle" class="play-icon"></v-icon>
            <v-icon name="outdent" class="play-icon"></v-icon>
        </div>
        <PlayList v-show="showSongList" play-list=""/>
    </div>
</template>

<script>
    import PlayList from './PlayList.vue'
    import album from '../../assets/logo.png'

    export default {
        name: "Realplay",
        components: {
            PlayList
        },
        data() {
            return {
                album: 'background: url("' + album + '")center no-repeat;background-size: cover',
                curSong: {},
                showSongList: false
            }
        },
        created() {
            this.getCurSong();
        },
        methods: {
            getCurSong() {
                this.curSong = {
                    song: '知否知否',
                    singer: '胡夏/郁可唯'
                };
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/_v_color.scss";
    @import "../../assets/_flex_layout.scss";

    .real-play {
        @include flex-row-container;
        padding: 8px;
        border: solid #ddd;
        border-width: 1px 0 1px 0;
    }

    .album {
        width: 45px;
        height: 45px;
        margin-right: 10px;
        border-radius: 50%;
    }

    .song-info {
        @include flex-row-container;
        font-size: 14px;
        .singer {
            color: #ccc;
        }
    }

    .play-bar {
        color: $MAIN;
        .play-icon {
            margin-right: 10px;
        }
    }
</style>