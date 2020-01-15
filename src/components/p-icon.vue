<template>
    <text :class="getClass" @tap="tap"></text>
</template>

<script>
export default {
    props: {
        // icon 类型名称
        type: String,

        // 自定义样式名称（用于组件的样式穿透）
        pClass: {
            type: Array,
            default: () => []
        }
    },

    computed: {
        getClass() {
            return ['p-icon', `ion-${this.type}`, ...this.pClass].join(' ');
        }
    },

    methods: {
        tap(e) {
            this.$emit('click', e);
        }
    }
};
</script>
