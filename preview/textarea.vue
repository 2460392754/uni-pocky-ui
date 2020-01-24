<template>
    <view class="page textarea-page">
        <p-nav
            bg-color="p-bg-green"
            content="textarea"
            left-text="返回"
            left-icon="ios-arrow-back"
            click-left-back-page
        />

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
        return {};
    }
};
</script>
