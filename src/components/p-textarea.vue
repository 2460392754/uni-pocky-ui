<template>
    <textarea :class="getClass" :placeholder="placeholder" :name="name" v-model="val" />
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

        // input 的类型
        type: {
            type: String,
            default: 'text'
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
            return ['p-textarea', ...this.pClass].join(' ');
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
