<template>
  <header>
    <nav class="v-container">
      <router-link to="/" class="link">{{$t('home')}}</router-link>
      <span class="link" @click="showHistory = !showHistory">{{$t('history')}}</span>
    </nav>
    <History v-if="showHistory" @close="showHistory = false"/>
  </header>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import History from './History.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const showHistory = ref(false)


</script>

<style scoped>
header{
  background: #86af49;
  height: 56px;
  width: 100%;
}

.link{
  color: #fff;
  text-decoration: none;
  padding: 19px;
}

.link:hover{
  background-color: #b5e7a0;
}
</style>
