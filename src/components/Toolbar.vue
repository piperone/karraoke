<template>
    <q-header elevated class="bg-black text-white">
        <q-toolbar class="text-center">
            <div class="absolute-left q-pt-xs q-pl-md">
                <Fade>
                    <q-btn round
                           flat
                           color="amber-1"
                           v-if="$route.path !== '/'"
                           @click="$router.go(-1)"
                           icon="navigate_before" />
                </Fade>
            </div>

            <q-toolbar-title>
                <router-link to="/" class="no-underline">
                    <div class="single-line-height">
                        <img src="logo/logo.png" style="height:23px" />
                    </div>
                </router-link>
            </q-toolbar-title>

            <div class="absolute-right q-pt-xs q-pr-md">
                <q-btn flat
                       color="amber-1"
                       round
                       unelevated
                       icon="menu"
                       @click="$emit('open-drawer')" />
            </div>
        </q-toolbar>
    </q-header>
</template>

<script>
import Fade from 'components/transitions/Fade.vue';

export default {
    name: 'Toolbar',
    components: { Fade },
};
</script>
