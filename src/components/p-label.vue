<template>
    <view :class="getClass">
        <slot />
    </view>
</template>

<script>
export default {
    props: {
        // 自定义样式名称（用于组件的样式穿透）
        pClass: {
            type: Array,
            default: () => []
        }
    },

    computed: {
        getClass() {
            return ['p-label', ...this.pClass].join(' ');
        }
    }
};
</script>
