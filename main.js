import Vue from 'vue';
import App from './App';
import './dist/styles/index.css';

import PButton from './src/components/p-button.vue';
import PCard from './src/components/p-card.vue';
import PNav from './src/components/p-nav.vue';
import PModal from './src/components/p-modal.vue';
import PIcon from './src/components/p-icon.vue';
import PInput from './src/components/p-input.vue';
import PLabel from './src/components/p-label.vue';
import PTextarea from './src/components/p-textarea.vue';
import PCheckbox from './src/components/p-checkbox.vue';
import PSwitch from './src/components/p-switch.vue';

Vue.component('PButton', PButton);
Vue.component('PCard', PCard);
Vue.component('PNav', PNav);
Vue.component('PModal', PModal);
Vue.component('PIcon', PIcon);
Vue.component('PInput', PInput);
Vue.component('PLabel', PLabel);
Vue.component('PTextarea', PTextarea);
Vue.component('PCheckbox', PCheckbox);
Vue.component('PSwitch', PSwitch);

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue({
    ...App
});
app.$mount();
