<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-grey-3 text-primary">
      <q-toolbar>
        <q-input v-model="text" type="text" outlined dense placeholder="Search Videos..." />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchLayout',

  components: {},
});
</script>
