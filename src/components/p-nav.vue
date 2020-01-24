<template>
    <view :class="getClass" :style="getStyles">
        <view :class="getBodyClass">
            <view class="p-nav-body" :style="getStatusBarStyles">
                <view class="left" @tap="onClickLeft">
                    <p-icon v-if="leftIcon" :type="leftIcon" size="40" />
                    <block>{{ leftText }}</block>
                    <slot name="left" />
                </view>

                <view class="content">
                    <block>{{ content }}</block>
                    <slot name="content" />
                </view>

                <view class="right" @tap="onClickRight">
                    <block>{{ rightText }}</block>
                    <slot name="right" />
                    <p-icon v-if="rightIcon" :type="rightIcon" size="40" />
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import { setCustomBar } from '@pocky/uni-core';
import PIcon from './p-icon';

export default {
    props: {
        // 左侧图标
        leftIcon: String,

        // 左侧文案
        leftText: String,

        // 点击左侧文案返回页面
        clickLeftBackPage: Boolean,

        // 标题
        content: String,

        // 右侧文案
        rightText: String,

        // 右侧图标
        rightIcon: String,

        // 是否固定在顶部
        fixed: Boolean,

        // 定位 层级
        zIndex: {
            type: [Number, String],
            default: 9
        },

        // 背景颜色
        bgColor: {
            type: String,
            default: 'p-bg-primary'
        },

        // 自定义样式名称（用于组件的样式穿透）
        pClass: {
            type: Array,
            default: () => []
        }
    },

    components: {
        PIcon
    },

    data() {
        return {
            statusBar: 0,
            customBar: 0
        };
    },

    computed: {
        getClass() {
            return ['p-nav-wrapper', ...this.pClass].join(' ');
        },

        getBodyClass() {
            return ['p-nav', this.bgColor].join(' ');
        },

        // css样式
        getStyles() {
            return `height: ${this.customBar}px; z-index: ${this.zIndex}`;
            // return {
            //     height: `${this.customBar}px`,
            //     zIndex: this.zIndex
            // };
        },

        getStatusBarStyles() {
            return `transform: translateY(${this.statusBar / 2}px)`;
        }
    },

    methods: {
        // 设置 bar 参数
        async $_setCustomBar() {
            const result = await setCustomBar();

            this.statusBar = result.statusBar;
            this.customBar = result.customBar;
        },

        // 返回页面
        $_backPage() {
            uni.navigateBack({
                delta: 1
            });
        },

        onClickLeft(e) {
            if (this.clickLeftBackPage) {
                this.$_backPage();
                return;
            }

            this.$emit('left', e);
        },

        onClickRight(e) {
            this.$emit('right', e);
        }
    },

    created() {
        this.$_setCustomBar();
    }
};
</script>
