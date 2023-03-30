<template>
    <q-header elevated class="bg-black text-white">
        <q-toolbar class="text-center">
            <div class="absolute-left q-pt-xs q-pl-md">
                <q-btn round
                       v-if="$route.path !== '/'"
                       @click="$router.go(-1)"
                       icon="navigate_before" />
            </div>

            <q-toolbar-title>
                <router-link to="/" class="no-underline">
                    KARRAOKE
                </router-link>
            </q-toolbar-title>

            <div class="absolute-right q-pt-xs q-pr-md">
                <q-btn flat
                       round
                       unelevated
                       icon="menu"
                       @click="$emit('open-drawer')" />
            </div>
        </q-toolbar>
    </q-header>
</template>

<script>
export default {
    name: 'Toolbar',
};
</script>
