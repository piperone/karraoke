<template>
    <q-drawer v-model="drawerState"
              style="background:#2C1E2B"
              overlay
              bordered
              side="right"
              :width="300"
              :breakpoint="800">
        <div class="column fit">
            <div class="relative-position row justify-center items-center q-py-md"
                 style="line-height: 1">
                <div class="q-py-md">
                    <img src="logo/logo.png"
                         alt="Logo"
                         style="height:25px">
                </div>

                <q-btn @click="$emit('close-drawer')"
                       flat
                       square
                       class="absolute-right"
                       color="amber-2"
                       icon="close" />
            </div>

            <q-list separator>
                <q-separator />

                <q-item clickable
                        class="q-py-lg text-amber-2"
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
                        class="q-py-lg text-amber-2"
                        to="/gutta">
                    <q-item-section avatar>
                        <q-icon name="groups" />
                    </q-item-section>

                    <q-item-section class="col-auto">
                        <q-item-label>
                            Gutta
                        </q-item-label>
                        <q-item-label caption>
                            Karraokes-bandet
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable
                        class="q-py-lg text-amber-2"
                        href="mailto:ola@reelnote.no?subject=Karraokes booking">
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
            <a href="mailto:fredrkr@me.com"
               class="text-amber-2">av Fredrik</a>
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
