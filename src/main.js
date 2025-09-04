import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Bootstrap CSS first
import 'bootstrap/dist/css/bootstrap.min.css'
// Optional JS (needs Popper for tooltips/dropdowns)
import 'bootstrap'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import 'primeicons/primeicons.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAK-0cHNSHF6kMlYVzllouQzbws4tfvOBE",
  authDomain: "fit5032-week6-fd434.firebaseapp.com",
  projectId: "fit5032-week6-fd434",
  storageBucket: "fit5032-week6-fd434.firebasestorage.app",
  messagingSenderId: "428927775539",
  appId: "1:428927775539:web:50d41c6662c3de9d7bc446"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    }
})

app.mount('#app')

