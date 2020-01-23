<template>
    <view class="page index-page">
        <p-nav bg-color="p-bg-green">
            <block slot="content">index</block>
        </p-nav>

        <view class="page-container">
            <view>
                <image class="logo p-shadow-1" src="../static/logo.png" mode="widthFix" />
                <text>uni-pocku-ui</text>
            </view>

            <view v-for="(childList, index) of list" :key="index" class="container">
                <text class="title">{{ childList.title }}</text>
                <p-card
                    type="lg"
                    v-for="(item, itemKey) of childList.list"
                    :key="itemKey"
                    @click="redirect(itemKey)"
                >
                    <text>{{ item }}</text>
                    <p-icon type="ios-arrow-forward" />
                </p-card>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    title: '基础组件',
                    list: {
                        button: 'Button 按钮',
                        icon: 'Icon 图标'
                    }
                },
                {
                    title: '表单组件',
                    list: {
                        input: 'Input 输入框',
                        textarea: 'Textarea 多行输入框',
                        label: 'Label 标签',
                        checkbox:"Checbox 多选框",
                        switch:"Switch 开关选项",
                    }
                },
                {
                    title: '反馈组件',
                    list: {
                        modal: 'Modal 弹出层'
                    }
                },
                {
                    title: '导航组件',
                    list: {
                        nav: 'Nav 导航栏'
                    }
                },
                {
                    title: '展示组件',
                    list: {
                        card: 'Card 卡片'
                    }
                }
            ]
        };
    },

    methods: {
        redirect(path) {
            uni.navigateTo({ url: '/preview/' + path });
        }
    }
};
</script>

<style lang="scss">
.index-page {
    .logo {
        width: 100upx;
        margin-right: 40upx;
        vertical-align: middle;
        border-radius: 100%;
    }

    .container {
        margin: 40upx 0;

        .p-card-lg {
            margin-bottom: 20upx;
            width: auto;
            cursor: pointer;
            padding: 20upx;

            .p-icon {
                font-size: 40upx;
                float: right;
            }
        }
    }
}
</style>
