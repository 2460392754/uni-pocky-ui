<template>
    <view class="page nav-page">
        <p-nav
            bg-color="p-bg-green"
            content="nav"
            left-text="返回"
            left-icon="ios-arrow-back"
            click-left-back-page
        />

        <view class="page-container">
            <text class="title">基础用法</text>
            <view class="container-1">
                <p-nav
                    content="商品"
                    left-text="返回"
                    left-icon="ios-arrow-back"
                    click-left-back-page
                />
            </view>

            <text class="title">其他用法</text>
            <view class="container-2">
                <p-nav
                    content="首页"
                    left-text="扫描"
                    left-icon="ios-qr-scanner"
                    right-text="设置"
                    right-icon="ios-settings"
                    bg-color="p-bg-green"
                    @left="onClickLeft"
                    @right="onClickRight"
                />
            </view>

            <text class="title">slot用法</text>
            <view class="container-3">
                <p-nav @left="onClickLeft" @right="onClickRight">
                    <block slot="left">
                        <p-icon type="ios-arrow-back" size="40" />
                        <text>返回</text>
                    </block>
                    <block slot="content">其他</block>
                    <block slot="right">
                        <text>设置</text>
                        <p-icon type="ios-settings" size="40" />
                    </block>
                </p-nav>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    methods: {
        onClickLeft(e) {
            console.log('onClickLeft');
        },
        onClickRight(e) {
            console.log('onClickRight');
        }
    }
};
</script>

<style lang="scss">
.nav-page .page-container {
    /deep/ .container-1 .p-nav {
        pointer-events: none;
    }

    /deep/ .p-nav {
        position: relative;
    }
}
</style>
