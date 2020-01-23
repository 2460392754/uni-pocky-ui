<template>
    <view class="page nav-page">
        <p-nav bg-color="p-bg-green" is-back>
            <block slot="back">返回</block>
            <block slot="content">nav</block>
        </p-nav>

        <view class="page-container">
            <text class="title">基础用法</text>
            <view class="container-1">
                <p-nav>
                    <block slot="content">首页</block>
                </p-nav>
            </view>

            <text class="title">其他用法</text>
            <view class="container-1">
                <p-nav bg-color="p-bg-green" is-back>
                    <block slot="back">返回</block>
                    <block slot="content">其他</block>
                </p-nav>
            </view>
        </view>
    </view>
</template>
