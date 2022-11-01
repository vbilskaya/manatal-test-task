<template>
  <div class="side-menu">
    <div class="wrapper">
      <h2>
        {{$t('history')}}
      </h2>
      <svg @click="closeHistory" style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
      </svg>
    </div>
    
    <ul v-if="history.length">
      <li v-for="(el, key) in history" :key="key">{{el}}</li>
    </ul>
    <div v-else>
      {{$t('no_history')}}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['close'])

const { t } = useI18n()
const history: string[] = JSON.parse(localStorage.getItem('history'));

console.log(history);

function closeHistory(){
   emit('close');
}

</script>

<style scoped>
.side-menu{
  padding: 12px 20px;
  height: 100%;
  max-width: 300px; 
  position: fixed; 
  z-index: 1; 
  top: 0; 
  left: 0;
  background-color: #b5e7a0; 
  overflow-x: hidden; 
  transition: 0.5s;
}

.wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>