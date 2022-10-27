import Vuex from 'vuex'

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
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e')
          .then((response) => response.json())
          .then((data) => {
            this.commit('setTopHeadlines', data.articles)
          });
      } catch(e){

      }
     
    },
    async getSources(){
      try{
        fetch('https://newsapi.org/v2/sources?apiKey=099148be22804e849a0c6fe022b7cf5e')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.commit('setSources', data.sources)
          });
      } catch(e){

      }
    }
  }
})

export default store