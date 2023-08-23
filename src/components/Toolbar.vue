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
                        <img src="logo/logo2.png" style="height:30px" />
                    </div>
                </router-link>
            </q-toolbar-title>

            <div class="absolute-right q-pt-xs q-pr-md">
                <q-btn round
                       @click="changeStyle"
                       icon="palette" />

                <q-btn flat
                       round
                       unelevated
                       icon="menu"
                       @click="$emit('toggle-drawer')" />
            </div>
        </q-toolbar>
    </q-header>
</template>

<script>
import Fade from 'components/transitions/Fade.vue';

export default {
    name: 'Toolbar',
    components: { Fade },
    data() {
        return {
            currentStyle: 0,
            bodyClasses: ['default', 'white-on-black', 'black-on-white'],
        };
    },

    methods: {
        changeStyle() {
            const body = document.querySelector('body');

            body.classList.remove(this.bodyClasses[this.currentStyle]);

            this.currentStyle = this.currentStyle === 2 ? 0 : this.currentStyle + 1;

            body.classList.add(this.bodyClasses[this.currentStyle]);
        },
    },
};
</script>
