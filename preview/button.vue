<template>
    <view class="page button-page">
        <p-nav
            bg-color="p-bg-green"
            content="button"
            left-text="返回"
            left-icon="ios-arrow-back"
            click-left-back-page
        />

        <view class="page-container">
            <text class="title">按钮类型</text>
            <view class="container-1">
                <p-button>Primary</p-button>
                <p-button type="p-bg-green">Success</p-button>
                <p-button type="p-bg-yellow">Warn</p-button>
                <p-button type="p-bg-red">Error</p-button>
                <p-button type="p-bg-default">Default</p-button>
                <p-button type="p-bg-content">Content</p-button>
                <p-button type="p-bg-white">White</p-button>
                <p-button type="p-bg-black">Black</p-button>
            </view>

            <text class="title">禁用类型</text>
            <view class="container-2">
                <p-button disabled>禁用状态</p-button>
            </view>

            <text class="title">类型尺寸</text>
            <view class="container-3">
                <p-button long>长按钮</p-button>
            </view>
        </view>
    </view>
</template>

<script>
export default {};
</script>

<style lang="scss">
.button-page {
    .p-btn {
        margin: 0 40upx 20upx 0;
        min-width: 180upx;
        width: auto;
    }

    .container-3 {
        .p-btn {
            margin-right: 0;
        }
    }
}
</style>
