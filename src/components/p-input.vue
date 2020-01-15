<template>
    <input :class="getClass" v-model="val" :name="name" :placeholder="placeholder" />
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

        // 自定义样式名称（用于组件的样式穿透）
        pClass: {
            type: Array,
            default: () => []
        },

        // input 的类型
        type: {
            type: String,
            default: 'text'
        }
    },

    data() {
        return {
            val: this.value
        };
    },

    computed: {
        getClass() {
            return ['p-input', ...this.pClass].join(' ');
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
