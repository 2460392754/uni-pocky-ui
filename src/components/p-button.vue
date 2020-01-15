<template>
    <button
        :class="getClass"
        :openType="openType"
        :formType="formType"
        :scope="scope"
        @tap="tap"
        @getuserinfo="getuserinfo"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'p-bg-primary'
        },

        // 自定义样式名称（用于组件的样式穿透）
        pClass: {
            type: Array,
            default: () => []
        },

        // 是否为长按钮
        long: Boolean,

        // 是否禁用
        disabled: Boolean,
        
        // form
        formType: String,

        // wechat or alipay
        openType: String,

        // alipay
        scope: String
    },

    computed: {
        getClass() {
            return [
                'p-btn',
                this.type,
                this.long ? 'long' : '',
                this.disabled ? 'disabled' : '',
                ...this.pClass
            ].join(' ');
        }
    },

    methods: {
        tap(e) {
            this.$emit('click', e);
        },

        getuserinfo(e) {
            this.$emit('getuserinfo', e);
        }
    }
};
</script>
