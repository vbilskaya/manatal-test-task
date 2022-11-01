<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import { useStore } from 'vuex'

const store = useStore();

store.dispatch('getTopHeadlines');
store.dispatch('getSources');
</script>
