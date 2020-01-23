<template>
    <text :class="getClass" @tap="tap" :style="{ color, fontSize: size + 'upx' }"></text>
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
        },

        // 自定义颜色
        color: {
            type: String,
            default: 'inherit'
        },

        size: {
            type: [String, Number],
            default: '50'
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
