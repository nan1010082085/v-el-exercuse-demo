import { createApp } from 'vue';
import 'normalcss';
import App from './App';
import pinia from './store';
import router from './router';
// import ElementUi from 'element-plus';

const app = createApp(App);

app.use(pinia);
app.use(router);
// app.use(ElementUi);

app.mount('#app');
