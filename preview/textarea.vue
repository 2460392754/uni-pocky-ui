<template>
    <view class="page textarea-page">
        <p-nav bg-color="p-bg-green" is-back>
            <block slot="back">返回</block>
            <block slot="content">textarea</block>
        </p-nav>

        <view class="page-container">
            <text class="title">基础用法</text>
            <view class="container-1">
                <p-textarea placeholder="is textarea" />
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            value: '123'
        };
    }
};
</script>
