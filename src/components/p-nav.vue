<template>
    <view :class="getClass" :style="[{ height: customBar + 'px' }]">
        <view class="body" :style="styles" :class="[bgColor]">
            <view class="left" @tap="onClickLeft" :style="statusBarStyles">
                <p-icon v-if="leftIcon" :type="leftIcon" size="40" />
                <block>{{ leftText }}</block>
                <slot name="left" />
            </view>

            <view class="content" :style="statusBarStyles">
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
            return ['p-nav', ...this.pClass].join(' ');
        },

        // css样式
        styles() {
            return `height:${this.customBar}px;`;
        },

        statusBarStyles() {
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
