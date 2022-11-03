<template>
  <div class="input-wrapper">
    <input
        v-model="search"
        solo
        placeholder="Search for news"
        class="input"
        @input="onSearchChange"
      />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const search: any = ref('');

function onSearchChange(){
  console.log('onSearchChange');
  console.log(search);
  store.dispatch('getHeadlinesBySearch', search.value);
}
</script>

<style scoped>
.input-wrapper{
  display: inline;
}

.input{
  background-color: #fff;
  padding: 2px 4px;
  border-radius: 4px;
  width: 100%;
}
</style>