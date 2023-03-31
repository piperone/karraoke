<template>
    <div class="q-px-sm q-py-md">
        <div class="row">
            <div class="text-h4">
                {{ song.title }}
            </div>
        </div>

        <div class="row">
            <span v-html="song.artist"
                  class="text-grey-6"></span>
        </div>

        <div class="row q-mt-md">
            <div class="lyrics" v-html="song.lyrics"></div>
        </div>

        <span class="text-sm text-grey-6">
            {{ song.album || '' }} ({{ song.year || '' }})
        </span>
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

.lyrics i
    font-size: .7rem

.footer
    font-size: .7rem
    color: #aaa
</style>
