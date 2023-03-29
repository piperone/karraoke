<template>
    <q-list>
        <q-item v-for="song in songs"
                :key="`song-${song.id}`">
            <q-item-section avatar>
                <q-img :src="`../assets/images/covers/${song.art}`" />
            </q-item-section>

            <q-item-section>
                <template v-html="song.title"></template>
            </q-item-section>
        </q-item>
    </q-list>
</template>

<script>
import songs from '../songs';

export default {
    name: 'Index',
    data() {
        return {
            songs: [],
        };
    },

    created() {
        this.songs = songs;
    },
};
</script>
