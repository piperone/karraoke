<template>
    <q-list separator style="min-width:300px">
        <q-item v-for="song in songs"
                :to="`song/${song.id}`"
                :key="`song-${song.id}`"
                class="q-py-md"
                style="min-height:75px"
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
        this.songs = songs.sort((song1, song2) => {
            const str1 = song1.title.toUpperCase();
            const str2 = song2.title.toUpperCase();

            return str1 < str2 ? -1 : (str1 > str2 ? 1 : 0);
        });
    },
};
</script>
