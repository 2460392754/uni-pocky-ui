<template>
    <view :class="getClass">
        <view class="left"><slot name="left"/></view>
        <textarea class="p-textarea" :placeholder="placeholder" :name="name" v-model="val" />
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

        // 为空时占位符
        placeholder: String,

        // 自定义样式名称（用于组件的样式穿透）
        pClass: {
            type: Array,
            default: () => []
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
            return ['p-textarea-wrapper', this.borderColor, this.fontColor, ...this.pClass].join(
                ' '
            );
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
