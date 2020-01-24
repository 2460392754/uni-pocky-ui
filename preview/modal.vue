<template>
    <view class="page modal-page">
        <p-nav
            bg-color="p-bg-green"
            content="modal"
            left-text="返回"
            left-icon="ios-arrow-back"
            click-left-back-page
        />

        <view class="page-container">
            <text class="title">基础用法</text>
            <view class="container-1">
                <p-modal
                    v-model="value1"
                    title="is title"
                    content="is content"
                    ok="ok"
                    cancel="cancel"
                />

                <p-button @click="value1 = true">弹出modal</p-button>
            </view>

            <text class="title">自定义插槽</text>
            <view class="container-1">
                <p-modal v-model="value2">
                    <block slot="header">is title</block>
                    <block slot="content">is content</block>
                    <block slot="footer">
                        <p-button @click="value2 = false">ok</p-button>
                        <p-button type="p-bg-red" @click="value2 = false">cancel</p-button>
                    </block>
                </p-modal>

                <p-button @click="value2 = true">弹出modal</p-button>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            value1: false,
            value2: false
        };
    }
};
</script>

<style></style>
