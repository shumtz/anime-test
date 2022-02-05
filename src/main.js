// Base
import { createApp } from 'vue';
import App from './App.vue';
import { DateTime } from 'luxon';
import './registerServiceWorker';

// Routes
import router from './router';

// Vuex
import store from './store';

// CSS
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import './scss/container.scss';

const app = createApp(App);

app.use(store);
app.use(router);

app.config.globalProperties.$luxonDateTime = DateTime;

app.use(Quasar, {
    plugins: {},
});

app.mount('#app');
