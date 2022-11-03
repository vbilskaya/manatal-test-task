import Vuex from 'vuex'
import { fetchData } from '@/api'
import { notify } from '@kyvg/vue3-notification'
import axios from 'axios'

const store = new Vuex.Store({
  state: {
    topHeadlines: [],
    sources: [],
  },
  mutations: {
   setTopHeadlines(state, data){
    state.topHeadlines = data
   },
   setSources(state, data){
    state.sources = data
   }
  },
  actions: {
    async getTopHeadlines(){
      this.commit('setTopHeadlines', []);
      try {
        const data = await fetchData('top-headlines', { country: 'us' });
        this.commit('setTopHeadlines', data.articles)
      } catch(e){
        notify({
          title: "Error",
          text: "getTopHeadlines error",
          type: 'error',
          duration: 10000,
        });
      }
    },
    async getSources(){
      this.commit('setTopHeadlines', []);
      try{
        const data = await fetchData('sources');
        this.commit('setSources', data.sources)
      } catch(e){
        notify({
          title: "Error",
          text: "getSources error",
          type: 'error',
          duration: 10000,
        });
      }
    },
    async getHeadlinesBySearch({}, query: string) {
      this.commit('setTopHeadlines', []);
      if(query.length){
        try {
          const data = await fetchData('top-headlines', { country: 'us', q: query });
          this.commit('setTopHeadlines', data.articles)
        } catch(e){
          notify({
            title: "Error",
            text: "getHeadlinesBySearch error",
            type: 'error',
            duration: 10000,
          });
        }
      } else {
        store.dispatch('getTopHeadlines');
      }
    },
    async getHeadlinesBySources({}, sources: string[]) {
      this.commit('setTopHeadlines', []);
      if(sources.length){
        try {
          const data = await fetchData('top-headlines', { sources: sources.join(',') });
          this.commit('setTopHeadlines', data.articles)
        } catch(e){
          notify({
            title: "Error",
            text: "getHeadlinesBySources error",
            type: 'error',
            duration: 10000,
          });
        }
      } else {
         store.dispatch('getTopHeadlines');
      }
    },
    async wrongApiCall(){
      try{
        const data = await axios.get('https://newsapi.org/v2/sources?apiKey');
      } catch(e){
        notify({
          title: "Error",
          text: "Wrong api call!",
          type: 'error',
          duration: 10000,
        });
      }
    }
  }
})

export default store