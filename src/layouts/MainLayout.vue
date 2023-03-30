<template>
    <q-layout view="lHh Lpr lFf">
        <Toolbar @open-drawer="drawerOpen = true" />

        <Drawer @close-drawer="drawerOpen = false"
                :state="drawerOpen" />

        <q-page-container class="q-pa-sm q-mt-md">
            <router-view v-slot="{ Component }">
                <Fade>
                    <component :is="Component" />
                </Fade>
            </router-view>
        </q-page-container>
    </q-layout>
</template>

<script>
import Fade from '../components/transitions/Fade.vue';
import Toolbar from 'components/Toolbar.vue';
import Drawer from 'components/Drawer.vue';

export default {
    name: 'MainLayout',
    components: { Toolbar, Drawer, Fade },
    data() {
        return {
            drawerOpen: false,
        };
    },
};
</script>
