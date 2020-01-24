<template>
    <view class="page card-page">
        <p-nav
            bg-color="p-bg-green"
            content="card"
            left-text="返回"
            left-icon="ios-arrow-back"
            click-left-back-page
        />

        <view class="page-container">
            <text class="title">基础用法</text>
            <view class="container-1">
                <p-card type="lg">
                    <block>lg</block>
                </p-card>

                <p-card type="lg" color="p-bg-primary">
                    <block>lg</block>
                </p-card>

                <p-card type="lg" color="p-bg-green">
                    <block>lg</block>
                </p-card>

                <p-card type="lg" color="p-bg-red">
                    <block>lg</block>
                </p-card>

                <p-card type="lg" color="p-bg-yellow">
                    <block>lg</block>
                </p-card>
            </view>

            <view>
                <p-card type="base">
                    <block>base</block>
                </p-card>

                <p-card type="base" color="p-bg-white">
                    <block>base</block>
                </p-card>

                <p-card type="base" color="p-bg-primary">
                    <block>base</block>
                </p-card>
            </view>
        </view>
    </view>
</template>

<style scoped>
.container-1 {
    display: flex;
    justify-content: space-between;
}
</style>
