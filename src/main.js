import { createApp } from 'vue'
import App from './App.vue'
// Bootstrap CSS first
import 'bootstrap/dist/css/bootstrap.min.css'
// Optional JS (needs Popper for tooltips/dropdowns)
import 'bootstrap'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import 'primeicons/primeicons.css'

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    }
})

createApp(App).mount('#app')

