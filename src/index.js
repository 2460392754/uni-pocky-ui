// 该文件只用于 docs 生成组件

import PButton from './components/p-button.vue';
import PCard from './components/p-card.vue';
import PNav from './components/p-nav.vue';
import PModal from './components/p-modal.vue';
import PIcon from './components/p-icon.vue';
import PInput from './components/p-input.vue';
import PLabel from './components/p-label.vue';
import PTextarea from './components/p-textarea.vue';
import PCheckbox from './components/p-checkbox.vue';
import PSwitch from './components/p-switch.vue';

export const components = {
    PButton,
    PCard,
    PNav,
    PModal,
    PIcon,
    PInput,
    PLabel,
    PTextarea,
    PCheckbox,
    PSwitch
};

const install = function(Vue) {
    Object.entries(components).forEach((res) => {
        const [key, value] = res;

        Vue.component(key, value);
    });
};

// uniapp 目前支持者静态注册 https://ask.dcloud.net.cn/question/71556

const API = {
    install,
    ...components
};

module.exports.default = module.exports = API;
