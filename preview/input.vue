<template>
    <view class="page input-page">
        <p-nav
            bg-color="p-bg-green"
            content="input"
            left-text="返回"
            left-icon="ios-arrow-back"
            click-left-back-page
        />

        <view class="page-container">
            <text class="title">基础用法</text>
            <view class="container-1">
                <p-input placeholder="请输入内容" />
            </view>

            <text class="title">其他颜色</text>
            <view class="container-2">
                <p-input
                    placeholder="is green"
                    font-color="p-color-green"
                    border-color="p-border-color-green"
                />
            </view>

            <text class="title">输入类型</text>
            <view class="container-3">
                <p-input placeholder="number 类型" type="number" />
                <p-input placeholder="password 类型" type="password" />
                <p-input placeholder="digit 类型" type="digit" />
            </view>

            <text class="title">禁用状态</text>
            <view class="container-4">
                <p-input disabled placeholder="已禁用" />
            </view>

            <text class="title">自定义内容</text>
            <view class="container-5">
                <p-input placeholder="添加图标">
                    <block slot="left"><p-icon type="ios-at"/></block>
                </p-input>
                <p-input placeholder="添加图标">
                    <block slot="right"><p-icon type="ios-help-circle"/></block>
                </p-input>
                <p-input placeholder="验证码">
                    <block slot="right">
                        <p-button>发送验证码</p-button>
                    </block>
                </p-input>
            </view>
        </view>
    </view>
</template>
