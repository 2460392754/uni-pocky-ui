<template>
    <view class="page checkbox-page">
        <p-nav bg-color="p-bg-green" is-back>
            <block slot="back">返回</block>
            <block slot="content">checkbox</block>
        </p-nav>

        <view class="page-container">
            <text class="title">基础用法</text>
            <view class="container-1">
                <p-checkbox v-model="value1" name='asdasd' />
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            value1: false,
        };
    }
};
</script>
