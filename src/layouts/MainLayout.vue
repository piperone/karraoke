<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title>
                    <Logo class="logo" />
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
    name: 'MainLayout',
    components: { Logo },
};
</script>

<style lang="sass">
.logo
    width: 100px
</style>
