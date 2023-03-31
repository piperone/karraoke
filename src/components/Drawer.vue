<template>
    <q-drawer v-model="drawerState"
              overlay
              bordered
              side="right"
              :width="300"
              :breakpoint="800">
        <div class="column fit">
            <div class="relative-position">
                <div class="text-h5 q-pa-md text-center">
                    KARRAOKE
                </div>
                <q-btn @click="$emit('close-drawer')"
                       flat
                       square
                       class="absolute-right"
                       color="negative"
                       icon="close" />
            </div>

            <q-list separator>
                <q-separator />

                <q-item clickable
                        :class="$route.path === '/' || $route.path.includes('song') ? 'text-primary' : 'text-black'"
                        class="q-py-lg"
                        to="/">
                    <q-item-section avatar>
                        <q-icon name="library_music" />
                    </q-item-section>

                    <q-item-section class="col-auto">
                        <q-item-label>
                            Låtutvalg
                        </q-item-label>
                        <q-item-label caption>
                            Noe for alle
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable
                        :class="$route.path === '/gutta' ? 'text-primary' : 'text-black'"
                        class="q-py-lg"
                        to="/gutta">
                    <q-item-section avatar>
                        <q-icon name="groups" />
                    </q-item-section>

                    <q-item-section class="col-auto">
                        <q-item-label>
                            Gutta
                        </q-item-label>
                        <q-item-label caption>
                            Karraoke-bandet
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable
                        class="text-black q-py-lg"
                        href="mailto:ola@reelnote.no?subject=Karraoke booking">
                    <q-item-section avatar>
                        <q-icon name="event" />
                    </q-item-section>

                    <q-item-section class="col-auto">
                        <q-item-label>
                            Booking
                        </q-item-label>
                        <q-item-label caption>
                            v/ Ola Wist Holmen
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-separator />
            </q-list>
        </div>

        <small class="absolute-bottom q-pa-md text-grey-5 text-center">
            <a href="mailto:fredrkr@me.com" class="text-grey-5">av Fredrik</a>
        </small>
    </q-drawer>
</template>

<script>
export default {
    name: 'Drawer',
    props: ['state'],
    computed: {
        drawerState: {
            get() {
                return this.state;
            },
            set() {
                this.$emit('close-drawer');
            },
        },
    },
};
</script>
