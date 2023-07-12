<!-- PageA.vue -->
<template>
  <q-page>
    <!-- Page A content goes here -->
    <div class="flex">
      <h2 class="text-h5 q-ma-sm">Series</h2>
    </div>

    <q-list>
      <router-link v-for="serie in series" :key="serie.id" :to="`/series/${serie.id}`">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="play_circle" />
          </q-item-section>
          <q-item-section>{{ serie.title }}</q-item-section>
        </q-item>
      </router-link>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    series: [
      { id: 1, title: 'Genexus Core', description: 'Low code platform' },
      { id: 2, title: 'Genexus Advanced', description: 'Low code platform' },
    ],
  }),
};
</script>

<style></style>
