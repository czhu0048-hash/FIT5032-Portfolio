import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Bootstrap CSS first
import 'bootstrap/dist/css/bootstrap.min.css'
// Optional JS (needs Popper for tooltips/dropdowns)
import 'bootstrap'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
// Import the functions you need from the SDKs you need

// Initialize Firebase
// Your web app's Firebase configuration


// Initialize Firebase

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    }
})

app.mount('#app')

