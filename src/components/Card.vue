<template>
  <v-card variant="tonal" :style="stylesBg">
    <v-img
      height="200"
      :src="article.urlToImage"
      cover
      class="text-white"
    />
    <v-card-title>
      {{article.title}}
    </v-card-title>
    <v-card-text>
      {{article.description}}
    </v-card-text>
     <v-btn
        class="ma-2"
        color="orange-darken-2"
      >
        <router-link :to="`/news/${id}`">
          More
        </router-link>
      </v-btn>
  </v-card>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Card',
  props: [ 'article', 'id' ],
  computed: {
    stylesBg(){
      return {
        'background-image': this.article.urlToImage,
      } 
    }
  },

  data () {
    return {
    }
  },
  
})
</script>


<!-- author:"https://www.facebook.com/bbcnews"
content:"Politics have moved at pace in recent days, but now the new prime minister and his chancellor have decided to take their time before delivering a statement key to our financial prospects. \nOur person… [+6309 chars]"
description:"Big decisions affecting your money will be announced in next month's Autumn Statement."
publishedAt:"2022-10-26T10:30:28Z"
source:Object
id:null
name:"BBC News"
title:"Rishi Sunak: What will the new PM and the autumn statement mean for my money? - BBC"
url:"https://www.bbc.com/news/business-63387955"
urlToImage:"https://ichef.bbci.co.uk/news/1024/branded_news/5AA3/production/_127330232_gettyimages-1167717541.jpg" -->
