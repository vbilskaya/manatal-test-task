import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/styles' // Global CSS has to be imported
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  allowComposition: true,
  messages: {
    en: {
      hello: 'hello!',
      more: 'More',
    },
  }
})

const vuetify = createVuetify({
  components,
  directives,
})

loadFonts()

createApp(App)
  .use(vuetify)
  .use(i18n)
  .use(router)
  .use(store)
  .mount('#app')
