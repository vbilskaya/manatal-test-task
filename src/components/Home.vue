<template>
  <v-container class="cards-container">
   <Card v-for="(article, idx) in topHeadlines" :article="article" :id="idx" :key="idx" />
  </v-container>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

// Logo
import logo from '../assets/logo.svg'
import Card from './Card.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Card
  },

  data () {
    return {
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify/tree/next',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      logo,
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Roadmap',
          href: 'https://vuetifyjs.com/en/introduction/roadmap/',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }
  },
  computed: {
    topHeadlines(){
      return this.$store.state.topHeadlines;
    },
    sources(){
      return this.$store.state.sources;
    }
  }
})
</script>

<style scoped>
.cards-container{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr) ) ;
  grid-gap: 10px;
}
</style>