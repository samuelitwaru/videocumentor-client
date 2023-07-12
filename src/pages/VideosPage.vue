<!-- PageA.vue -->
<template>
  <q-page class="">
    <!-- Page A content goes here -->
    <q-list>
      <router-link
        :to="`/series/${$route.params['serie_id']}/folders/${video.id}/videos/${video.id}`"
        v-for="video in videos"
        :key="video.id"
      >
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="movie" />
          </q-item-section>
          <q-item-section>{{ video.name }}</q-item-section>
        </q-item>
      </router-link>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    videos: [
      { id: 1, name: 'Video 1' },
      { id: 2, name: 'Video 2' },
    ],
  }),
};
</script>
<style></style>
