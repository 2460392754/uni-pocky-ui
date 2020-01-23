import Vue from 'vue';
import App from './App';
import UniPockyUi from './src';
import './src/styles/index.scss';

Vue.use(UniPockyUi);
Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue({
    ...App
});
app.$mount();
