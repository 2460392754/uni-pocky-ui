<template>
    <view :class="getClass" @tap="onTap">
        <slot />
    </view>
</template>

<script>
export default {
    props: {
        // card类型
        type: {
            type: String,
            default: 'base'
        },

        // 颜色
        color: {
            type: String,
            default: 'p-bg-default'
        },

        pClass: {
            type: Array,
            default: () => []
        }
    },

    computed: {
        getClass() {
            return [`p-card-${this.type}`, this.color, ...this.pClass].join(' ');
        }
    },

    methods: {
        onTap(e) {
            this.$emit('click', e);
        }
    }
};
</script>
