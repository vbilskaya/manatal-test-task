<template>
  <div class="wrapper">
    <Filter v-if="sources.length" :sources="sources"/>
    <v-container v-if="topHeadlines" class="cards-container">
      <Card v-for="(article, idx) in topHeadlines" :article="article" :id="idx" :key="idx" />
    </v-container>
    <div v-if="topHeadlines.length === 0" class="loader-container">
      <v-progress-circular 
        :size="70"
        indeterminate
        color="#b5e7a0"/>
    </div>
   
  </div>
 
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Card from './Card.vue'
import Filter from './Filter.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Card,
    Filter,
  },

  data () {
    return {
      
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

.custom-tag{
  background: #86af49;
}

.loader-container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}
.v-progress-circular {
  margin: 1rem;
}
</style>