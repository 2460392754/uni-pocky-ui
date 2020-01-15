<template>
    <view :class="getClass" :style="[{ height: customBar + 'px' }]">
        <view class="body" :style="styles" :class="[bgColor]">
            <view class="back" @tap="backPage" v-if="isBack" :style="statusBarStyles">
                <p-icon type="ios-arrow-back" />
                <view><slot name="back"/></view>
            </view>

            <view class="content" :style="statusBarStyles">
                <slot name="content" />
            </view>

            <view class="right">
                <slot name="right" />
            </view>
        </view>
    </view>
</template>

<script>
import { setCustomBar } from 'uni-pocky-core';
import PIcon from './p-icon';

export default {
    props: {
        isBack: {
            type: Boolean,
            default: false
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
        backPage() {
            uni.navigateBack({
                delta: 1
            });
        }
    },

    created() {
        this.$_setCustomBar();
    }
};
</script>
