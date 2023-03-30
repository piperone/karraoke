<template>
    <q-list separator>
        <q-item v-for="song in songs"
                :to="`song/${song.id}`"
                :key="`song-${song.id}`"
                class="q-py-md"
                clickable
                v-ripple>
            <q-item-section avatar>
                <q-img :src="`covers/${song.art}`" />
            </q-item-section>

            <q-item-section>
                <q-item-label>
                    <span v-html="song.title"></span>
                </q-item-label>

                <q-item-label caption>
                    <span v-html="song.artist"></span>
                </q-item-label>
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
