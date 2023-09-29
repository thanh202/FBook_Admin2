import { createApp } from 'vue'
import App from './App.vue'

import './assets/add.css'

import router from './router'

import PrimeVue from 'primevue/config';

import InputText from 'primevue/inputtext';

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
import 'primevue/resources/themes/tailwind-light/theme.css';

import 'primeicons/primeicons.css';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Button from 'primevue/button';
//tooltip iện tool show chức năng
import Tooltip from 'primevue/tooltip';
//store
import store from './store'
const app = createApp(App);
app.use(router)
app.use(PrimeVue)
app.use(store)
app.component('InputText',InputText)
app.component('Avatar',Avatar)
app.component('Menu',Menu)
app.component('Button',Button)

app.directive('tooltip', Tooltip);
app.mount('#app')
