<template>
    <view class="page checkbox-page">
        <p-nav
            bg-color="p-bg-green"
            content="checkbox"
            left-text="返回"
            left-icon="ios-arrow-back"
            click-left-back-page
        />

        <view class="page-container">
            <text class="title">基础用法</text>
            <view class="container-1">
                <p-checkbox v-model="value1" name="asdasd" />
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            value1: false
        };
    }
};
</script>

<style lang="scss">
.checkbox-page {
}
</style>
