import songs from '../songs';

export default [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('pages/Index.vue'),
            },
            {
                path: 'gutta',
                component: () => import('pages/Gutta.vue'),
            },
            {
                path: 'song/:song',
                component: () => import('pages/Song.vue'),
                props: route => {
                    const song = songs.find(song => song.id === Number(route.params.song));

                    return { song };
                },
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];
