<template>
  <v-container>
   <main v-if="thisHeadline">
      <h1>{{thisHeadline.title}}</h1>
      <v-img :src="thisHeadline.urlToImage"/>
      <time :datetime="thisHeadline.publishedAt">{{getDateFormatted(thisHeadline.publishedAt)}}</time>
      <a :href="thisHeadline.url">{{thisHeadline.source.name}}</a>
      <p>{{thisHeadline.description}}</p>
      <div>{{thisHeadline.author}}</div>
      <section>{{thisHeadline.content}}</section>
   </main>
  </v-container>
</template>

<script lang='ts' setup>
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { computed } from "vue";
import { onMounted } from 'vue'

const store = useStore()
const router = useRouter()
const route = useRoute()

const { t } = useI18n()

const thisHeadline = computed(() => {
  let headline = store.state.topHeadlines[Number(route.params.id)];
  if(headline){
    const history = localStorage.getItem('history');
    if(history){
      let parsedHistory = JSON.parse(history);
      parsedHistory.push(headline.title);
      localStorage.setItem('history', JSON.stringify(parsedHistory));
    } else {
      let newHistory = [];
      newHistory.push(headline.title);
      localStorage.setItem('history', JSON.stringify(newHistory));
    }
    return store.state.topHeadlines[Number(route.params.id)]
  }
   
});

function getDateFormatted(date: string): any {
  return new Date(date);
}


</script>
