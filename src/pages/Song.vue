<template>
    <div>
        <div class="text-h4">
            {{ song.title }}
            <br>
            <small v-html="song.artist"
                   class="artist"></small>
        </div>

        <div class="lyrics" v-html="song.lyrics"></div>

        <div class="footer">
            {{ song.album || '' }} | {{ song.year || '' }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Song',
    props: {
        song: {
            default: {
                title: '',
                artist: '',
                lyrics: '',
                album: '',
                year: '',
            },
        },
    },
};
</script>

<style lang="sass">
.artist
    font-size: .8rem
    color: #777

.lyrics

    i
        font-size: .7rem

.footer
    font-size: .7rem
    color: #aaa
</style>
