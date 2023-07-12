<template>
  <q-btn color="primary" dense flat label="New Serie" @click="show = true" />
  <q-dialog v-model="show">
    <q-card style="width: 300px">
      <q-card-section class="row items-center">
        <q-avatar icon="play_circle" color="primary" text-color="white" />
        <h2 class="text-h6 q-ma-sm">New Serie</h2>
      </q-card-section>
      <div class="q-pa-sm">
        <q-input v-model="text" outlined dense type="text" label="Serie Name" />
        <q-input placeholder="Serie Description" v-model="text" outlined dense type="textarea" />
      </div>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Next" color="primary" @click="createSerie()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),

  methods: {
    createSerie() {
      this.$router.push('series/1');
    },
  },
};
</script>

<style></style>
