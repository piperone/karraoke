<template>
    <q-layout view="lHh Lpr lFf">
        <Toolbar @toggle-drawer="drawerOpen = !drawerOpen" />

        <Drawer @close-drawer="drawerOpen = false"
                :state="drawerOpen" />

        <q-page-container>
            <router-view v-slot="{ Component }">
                <div class="row justify-center">
                    <div class="col col-sm-auto">
                        <component :is="Component" />
                    </div>
                </div>
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
    components: { Toolbar, Drawer },
    data() {
        return {
            drawerOpen: false,
        };
    },
};
</script>
