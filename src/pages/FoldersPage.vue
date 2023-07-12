<!-- PageA.vue -->
<template>
  <q-page class="">
    <!-- Page A content goes here -->
    <h2 class="text-h5 q-ma-sm">{{ serie?.title }} - Folders</h2>
    <q-list>
      <router-link
        :to="`/series/${serie.id}/folders/${folder.id}`"
        v-for="folder in folders"
        :key="folder.id"
      >
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="folder" />
          </q-item-section>
          <q-item-section>{{ folder.name }}</q-item-section>
        </q-item>
      </router-link>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    serie: {},
    folders: [
      { id: 1, name: 'Folder 1' },
      { id: 2, name: 'Folder 2' },
    ],
  }),
  created() {
    this.getSerie();
  },
  methods: {
    getSerie() {
      this.serie = { id: 1, title: 'Genexus Core', description: 'Low code platform' };
    },
  },
};
</script>
<style></style>
