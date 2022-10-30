import Vuex from 'vuex'
import { fetchData } from '@/api'

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
      try {
        const data = await fetchData('top-headlines', { country: 'us' });
        this.commit('setTopHeadlines', data.articles)
      } catch(e){
        console.log('getTopHeadlines error')
      }
     
    },
    async getSources(){
      try{
        const data = await fetchData('sources');
        this.commit('setSources', data.sources)
      } catch(e){
        console.log('getSources error')
      }
    }
  }
})

export default store