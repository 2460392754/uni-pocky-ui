<template>
    <view class="page switch-page">
        <p-nav bg-color="p-bg-green" is-back>
            <block slot="back">返回</block>
            <block slot="content">switch</block>
        </p-nav>

        <view class="page-container">
            <text class="title">基础用法</text>
            <view class="container-1">
                <p-switch v-model="value1" />
                <!-- <p-switch v-model="value1" type="checkbox" /> -->
            </view>

            <text class="title">自定义颜色</text>
            <view class="container-2">
                <p-switch v-model="value2" color="#19be6b" />
                <p-switch v-model="value2" color="#ff9900" />
                <p-switch v-model="value2" color="#ed4014" />
                <p-switch v-model="value2" color="#f8f8f9" />
            </view>

            <text class="title">自定义图标</text>
            <view class="container-3">
                <p-switch v-model="value3" color="#19be6b">
                    <p-icon
                        v-show="value3"
                        :p-class="['left']"
                        type="md-checkmark"
                        size="30"
                        color="#ffffff"
                    />
                    <p-icon
                        v-show="!value3"
                        :p-class="['right']"
                        type="md-close"
                        size="30"
                        color="#ffffff"
                    />
                </p-switch>
            </view>

            <text class="title">禁用状态</text>
            <view class="container-4">
                <p-switch v-model="value41" disabled>
                    <p-icon :p-class="['right']" type="md-close" size="30" color="#515a6e" />
                </p-switch>
                <p-switch v-model="value41" disabled>
                    <p-icon :p-class="['left']" type="md-close" size="30" color="#ffffff" />
                </p-switch>
                <p-switch v-model="value42" disabled>
                    <p-icon :p-class="['right']" type="md-close" size="30" color="#ffffff" />
                </p-switch>
                <p-switch v-model="value42" disabled>
                    <p-icon :p-class="['left']" type="md-close" size="30" color="#515a6e" />
                </p-switch>
            </view>

            <text class="title">其他形状</text>
            <view class="container-5">
                <p-switch v-model="value5" square />
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            value1: true,
            value2: true,
            value3: true,
            value41: true,
            value42: false,
            value5: false,
        };
    }
};
</script>
