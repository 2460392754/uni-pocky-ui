<template>
    <view :class="getClass">
        <view class="left"><slot name="left"/></view>
        <input
            class="p-input"
            v-model="val"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            @focus="focus"
            @tap="tap"
            @blur="blur"
        />
        <view class="right"><slot name="right"/></view>
    </view>
</template>

<script>
export default {
    props: {
        // v-model
        value: String,

        // form submit
        name: String,

        // 空白占位符
        placeholder: String,

        // 是否禁用
        disabled: Boolean,

        // 自定义样式名称（用于组件的样式穿透）
        pClass: {
            type: Array,
            default: () => []
        },

        // input 的类型
        type: {
            type: String,
            default: 'text'
        },

        // 下边框颜色
        borderColor: {
            type: String,
            default: 'p-border-color-primary'
        },

        // 字体颜色
        fontColor: {
            type: String,
            default: 'p-color-content'
        }
    },

    data() {
        return {
            val: this.value
        };
    },

    computed: {
        getClass() {
            return ['p-input-wrapper', this.borderColor, this.fontColor, ...this.pClass].join(' ');
        }
    },

    methods: {
        tap(e) {
            this.$emit('click', e);
        },

        focus(e) {
            this.$emit('focus', e);
        },

        blur(e) {
            this.$emit('blur', e);
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
