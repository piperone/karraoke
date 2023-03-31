<template>
    <router-view />
</template>

<script>
import { useQuasar } from 'quasar';

export default {
    name: 'App',
    created() {
        const $q = useQuasar();

        $q.dark.set(true);
    },
};
</script>
