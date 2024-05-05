import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import {router} from './router'


// Importa lo stile CSS di Font Awesome
import '@fortawesome/fontawesome-free/css/all.css';

// Importa il file JavaScript di Font Awesome
import '@fortawesome/fontawesome-free/js/all.js';


import * as bootstrap from 'bootstrap'

createApp(App).use(router).mount('#app')
