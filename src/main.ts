import { createApp } from 'vue';
import 'normalcss';
import App from './App';
import pinia from './store';
import router from './router';
import '@/assets/elements/index.scss';
import { ElLoading } from 'element-plus';

const app = createApp(App);

app.directive('loading', ElLoading.directive);

app.use(pinia);
app.use(router);

app.mount('#app');
