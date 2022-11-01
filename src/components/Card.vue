<template>
  <v-card variant="tonal" class="my-card">
    <v-img
      height="200"
      :src="article.urlToImage"
      cover
      class="image text-white"
    />
    <v-card-title class="title" :title="editableTitle">
      {{ editableTitle }}
    </v-card-title>
    <v-card-text class="description">
      {{props.article.description}}
    </v-card-text>
    <Toolbar :id="id" :title="props.article.title" @changeTitle="(str) => changeTitle(str)" class="toolbar"/>
  </v-card>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Toolbar from './Toolbar.vue'

interface Props {
  article: any,
  id: any
}

const props = defineProps<Props>()

const { t } = useI18n()

 const editableTitle: string = ref(props.article.title);

 function changeTitle(value: string){
  this.editableTitle = value;
 }

</script>

<style scoped>
.image{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: .8;
}

.my-card{
  position: relative;
}

.title{
  color: black;
  margin-right: 20px;
}

.description{
  color: white;
  margin-right: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  padding-bottom: 0;
  margin-bottom: 16px;
}

.toolbar{
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}
</style>