<template>
    <view class="page icon-page">
        <p-nav bg-color="p-bg-green" is-back>
            <block slot="back">返回</block>
            <block slot="content">icon</block>
        </p-nav>

        <view> </view>

        <view class="page-container">
            <text class="title">基础用法</text>
            <view class="container-1">
                <p-icon type="md-add" />
                <p-icon type="md-add-circle" />
                <p-icon type="md-add-circle-outline" />
                <p-icon type="ios-add" />
                <p-icon type="ios-add-circle" />
                <p-icon type="ios-add-circle-outline" />
            </view>

            <text class="title">图标颜色</text>
            <view class="container-2">
                <p-icon type="md-add" color="#2d8cf0" />
                <p-icon type="md-add-circle" color="#19be6b" />
                <p-icon type="md-add-circle-outline" color="#ff9900" />
                <p-icon type="ios-add" color="#ed4014" />
                <p-icon type="ios-add-circle" color="#f8f8f9" />
                <p-icon type="ios-add-circle-outline" color="#000000" />
            </view>

            <text class="title">图标大小</text>
            <view class="container-3">
                <p-icon type="md-add" size="40" />
                <p-icon type="md-add-circle" size="50" />
                <p-icon type="md-add-circle-outline" size="60" />
            </view>

            <text class="title">图标搜索</text>
            <p-input v-model="fileterIcons" placeholder="输入图标名称" />
            <view class="container-4">
                <div
                    v-for="(icon, index) of iconList"
                    v-show="icon.includes(fileterIcons)"
                    :key="index"
                    class="icon-item"
                >
                    <p-icon :type="icon" />
                    <div>{{ icon }}</div>
                </div>
            </view>
        </view>
    </view>
</template>

<script>
import iconList from './icon.js';

export default {
    data() {
        return {
            fileterIcons: '',
            iconList
        };
    }
};
</script>

<style>
.page-container .p-icon {
    margin: 0 15px;
}

.container-4 {
    display: flex;
    flex-wrap: wrap;
}

.container-4 .icon-item {
    text-align: center;
    width: 33%;
    height: 200upx;
}
</style>
