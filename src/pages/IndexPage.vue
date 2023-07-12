<template>
  <q-page class="flex flex-center">
    <router-link to="/series">
      <q-btn color="primary" label="Series" />
    </router-link>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
});
</script>
