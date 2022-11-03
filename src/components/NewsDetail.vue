<template>
  <v-container>
   <main v-if="thisHeadline">
      <h1>{{thisHeadline.title}}</h1>
      <v-img :src="thisHeadline.urlToImage"/>
      <time :datetime="thisHeadline.publishedAt" class="published">
        {{ $t('publishedAt') }} {{getDate(thisHeadline.publishedAt)}}
      </time>
     
      <div class="description-container">
        <p class="description">{{thisHeadline.description}}</p>
      </div>
      <div class="author">{{$t('author')}} {{thisHeadline.author}}</div>
      <section class="content">
        {{cutContent(thisHeadline.content)}}
        <a target="_blank" :href="thisHeadline.url" class="link">{{ $t('source_link') }} {{ thisHeadline.source.name }}</a>
      </section>
   </main>
  </v-container>
</template>

<script lang='ts' setup>
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from "vue";

const store = useStore()
const route = useRoute()

const { t } = useI18n()

const thisHeadline = computed(() => {
  let headline = store.state.topHeadlines[Number(route.params.id)];
  if(headline){
    const history = localStorage.getItem('history');
    if(history){
      let parsedHistory = JSON.parse(history);
      parsedHistory.unshift(headline.title);
      localStorage.setItem('history', JSON.stringify(parsedHistory));
    } else {
      let newHistory = [];
      newHistory.push(headline.title);
      localStorage.setItem('history', JSON.stringify(newHistory));
    }
    return store.state.topHeadlines[Number(route.params.id)]
  }
   
});

function getDate(newsDate: string): string {
  let date = '';
  const dateObj = getDateFormatted(newsDate);
  date += `${dateObj.getHours()}:`;
  date += `${dateObj.getMinutes()} `;
  date += `${dateObj.getDate()}.`;
  date += `${dateObj.getMonth() + 1}.`;
  date += `${dateObj.getFullYear()}`;
  return date;
}

function getDateFormatted(date: string): any {
  return new Date(date);
}

function cutContent(content: string): string {
  for(let i = content.length; i >= 0; i--){
    if(content.charAt(i) === '['){
      return content.slice(0, i);
    }
  }
  return content;
}

</script>

<style scoped>
.source-container {
  padding: 12px 20px;
  border-radius: 4px;
}

.description-container {
  display: flex;
  justify-content: center;
}

.description {
  padding: 20px 40px;
  border-radius: 12px;
  background: #e3eaa7;
}

.published {
  padding: 12px 0 12px 20px;
  text-align: right;
  display: block;
  font-style: italic;
}

.content {
  background-color: #b5e7a0;
  padding: 20px 40px;
  border-radius: 12px;
}

.author {
  padding: 20px 0 20px 40px;
  text-align: right;
}

.link{
  color: #ada397;
}

@media screen and (max-width: 600px) {
  .author{
    padding: 20px 0;
  }
}
</style>