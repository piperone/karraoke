<template>
    <div>
        <h1>
            {{ song.title }}
            <small>
                {{ song.artist }}
            </small>
        </h1>

        {{ song.lyrics }}

        <div>
            {{ song.album || '' }}
            {{ song.year || '' }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Song',
    props: ['song'],
};
</script>
