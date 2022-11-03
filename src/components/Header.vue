<template>
  <header>
    <nav class="v-container navigation">
      <router-link to="/" class="link">
        <span class="icon">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
          </svg>
        </span>
        <span class="text">
          {{$t('home')}}
        </span>
      </router-link>
      <span class="link" @click="showHistory = !showHistory">
        <span class="icon">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" />
          </svg>
        </span>
         <span class="text">
          {{$t('history')}}
        </span>
      </span>
      <Search class="search search-big" />
      <v-btn @click="callWrongApi">{{$t('wrong_api')}}</v-btn>
      <Search class="search search-small" />
    </nav>
    <Transition name="slide">
      <History v-if="showHistory" @close="showHistory = false"/>
    </Transition>
   
   
  </header>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useStore } from 'vuex'
import History from './History.vue'
import Search from './Search.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const store = useStore()

const showHistory = ref(false)

function callWrongApi(){
  store.dispatch('wrongApiCall');
}
</script>

<style scoped>
header{
  background: #86af49;
  height: 56px;
  width: 100%;
}

.link{
  height: 56px;
  color: #fff;
  text-decoration: none;
  padding: 18px;
}

.link:hover{
  background-color: #b5e7a0;
}

.search{
  display: inline-grid;
  max-width: 200px;
}

.navigation{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
}

.icon{
  display: none;
}

.search-big{
  display: block;
}

.search-small{
  display: none;
}

@media screen and (max-width: 600px) {
  header{
    height: 112px;
  }

  .text{
    display: none;
  }
  .icon{
    display: inline;
  }

  .link{
    padding: 12px;
  }

  .search-big{
    display: none;
  }

  .search-small{
    display: block;
    flex-grow: 1;
    max-width: 400px;
  }

  .navigation{
    flex-wrap: wrap;
  }
}

.slide-leave-active {
  transition: transform .5s;
  transform: translateX(0)
}

.slide-enter-active {
  transition: transform .5s;
  transform: translateX(-100%)
}
.slide-leave-to {
  transform: translateX(-100%)
}

.slide-enter-to {
   transform: translateX(0)
}
</style>
