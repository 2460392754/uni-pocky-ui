<template>
    <view class="p-switch-wrapper">
        <switch
            :class="getClass"
            :checked="val"
            :name="name"
            :type="type"
            :disabled="disabled"
            :color="color"
            @change="change"
        />
        <slot />
    </view>
</template>

<script>
export default {
    props: {
        // v-model
        value: Boolean,

        // form name
        name: String,

        // 组件显示样式
        type: {
            type: String,
            default: 'switch'
        },

        // 是否禁用
        disabled: Boolean,

        // 组件样式为正方形
        square: Boolean,

        // switch 自定义背景颜色
        color: {
            type: String,
            default: '#2d8cf0'
        },

        // 自定义样式名称（用于组件的样式穿透）
        pClass: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            val: this.value
        };
    },

    computed: {
        getClass() {
            return [
                'p-switch',
                this.square ? 'square' : '',
                this.borderColor,
                this.fontColor,
                ...this.pClass
            ].join(' ');
        }
    },

    methods: {
        change(e) {
            this.val = !this.val;
            this.$emit('change', e);
        }
    },

    watch: {
        value(val) {
            this.val = val;
        },

        val(val) {
            this.$emit('input', val);
        }
    }
};
</script>
