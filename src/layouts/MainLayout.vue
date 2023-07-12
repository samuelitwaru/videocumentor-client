<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-grey-3 text-primary">
      <q-toolbar>
        <q-btn
          v-if="this.$router.currentRoute.value.fullPath != '/'"
          color="primary"
          flat
          icon="arrow_left"
          @click="$router.go(-1)"
        />
        <q-toolbar-title class="text-center"> VideoCumentor </q-toolbar-title>
        <router-link to="/search">
          <q-btn color="primary" icon="search" />
        </router-link>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},
  created() {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
