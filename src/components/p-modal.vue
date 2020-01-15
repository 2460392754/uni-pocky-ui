<template>
    <view :class="getClass">
        <view class="p-modal-body">
            <view class="header">
                <template v-if="title">{{ title }}</template>
                <slot v-else name="header" />
            </view>

            <view class="content">
                <template v-if="content">{{ content }}</template>
                <slot v-else name="content" />
            </view>

            <view class="footer">
                <template>
                    <text v-if="ok" class="ok p-color-primary" @tap="onOk">{{ ok }}</text>
                    <text v-if="cancel" class="cancel p-color-red" @tap="onCancel">{{
                        cancel
                    }}</text>
                </template>

                <slot name="footer" />
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'p-modal',

    props: {
        // v-model
        value: {
            type: Boolean,
            default: false
        },

        // 自定义样式名称（用于组件的样式穿透）
        pClass: {
            type: Array,
            default: () => []
        },

        // 标题 文字
        title: {
            type: String
        },

        // 描述性 文字
        content: {
            type: String
        },

        // 确认 文字
        ok: {
            type: String
        },

        // 取消 文字
        cancel: {
            type: String
        }
    },

    data() {
        return {
            visible: this.value
        };
    },

    computed: {
        getClass() {
            return ['p-modal-mask', this.visible ? 'show' : '', ...this.pClass].join(' ');
        }
    },

    methods: {
        onOk(e) {
            this.$emit('input', false);
            this.$emit('ok', e);
        },

        onCancel(e) {
            this.$emit('input', false);
            this.$emit('cancel', e);
        },

        $_change() {
            this.$emit('change', this.visible);
        }
    },

    watch: {
        value(val) {
            this.visible = val;
            this.$_change();
        }
    }
};
</script>
