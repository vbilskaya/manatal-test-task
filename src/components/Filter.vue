<template>
  <v-container class="sources-container">
    <Multiselect
     :class="{tag: 'custom-tag'}"
      v-model="value"
      :options="items"
      mode="tags"
      placeholder="Select sources"
      @change="selectSources"
    />
  </v-container>
</template>

<script lang="ts" setup>
 import Multiselect from '@vueform/multiselect'
import { useStore } from 'vuex'
import { ref } from 'vue';

interface Props {
  sources: any,
}

const props = defineProps<Props>()

const store = useStore()

const items: string[] = props.sources.map((source: any) => source.id);
const value = ref(null);

function selectSources(sources: any){
  store.dispatch('getHeadlinesBySources', sources);
}

</script>

<style src="@vueform/multiselect/themes/default.css"></style>
