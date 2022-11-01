<template>
  <div class="toolbar">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="400"
    >
      <template v-slot:activator>
        <div
          class="edit-title"
          @click.stop="dialog = true"
        >
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
          </svg>
        </div>
        </template>
          <v-card class="card">
            <v-card-title class="text-h5">
              {{ $t('change_title')}}
            </v-card-title>
            <v-text-field
            v-model="newTitle"
              label="Change title"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
            <div class="btns-wrapper">
              <v-btn color="error" @click.stop="dialog = false">Cancel</v-btn>
              <v-btn color="primary" @click.stop="saveTitle(); dialog = false">Save</v-btn>
            </div>
          </v-card>
    </v-dialog>
  
    <router-link :to="`/news/${id}`" class="svg-link">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="#fff" d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z" />
      </svg>
    </router-link>
     
  </div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

 
interface Props {
  id: any,
  title: string
}

const props = defineProps<Props>();

const emit = defineEmits(['changeTitle'])

let dialog: boolean = ref(false);
let newTitle: any = ref('');

const rules = [
  value => !!value || 'Required.',
  value => (value && value.length <=255) || 'Max 255 characters',
];

function saveTitle(){
   emit('changeTitle', newTitle.value);
}

const { t } = useI18n()

</script>

<style scoped>
.toolbar{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
}

.card{
  padding: 12px;
}

.btns-wrapper{
  display: flex;
  justify-content: space-around;
}

</style>