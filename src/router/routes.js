const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/series',
        component: () => import('layouts/SerieLayout.vue'),
        children: [
          { path: '', component: () => import('pages/SeriesPage.vue') },
          { path: ':serie_id', component: () => import('pages/FoldersPage.vue') },
          {
            path: ':serie_id/folders/:folder_id',
            component: () => import('pages/VideosPage.vue'),
          },
        ],
      },
      {
        path: 'search',
        component: () => import('layouts/SearchLayout.vue'),
        children: [{ path: '', component: () => import('pages/VideoSearch.vue') }],
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

export default routes;
