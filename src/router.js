import { createRouter, createWebHistory } from 'vue-router';


// importo tutti i componenti che verranno utilizzati come pagina
import HomePage from './pages/HomePage.vue';
import SingleProject from './pages/SingleProject.vue'
import AppProjects from './pages/AppProjects.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';


const router = createRouter({
    history: createWebHistory(),

    // questo array conterrà tutte le rotte della nostra applicazione
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path:'/projects',
            name: 'app-projects',
            component: AppProjects
        },
        {
            path:'/chi-sono',
            name: 'about',
            component: About
        },
        {
            path:'/contatti',
            name:'contacts',
            component: Contacts
        }
    ]

})

export { router };