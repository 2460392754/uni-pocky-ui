# Modal 对话框

## 基本

<div class='modal-container'>
    <button class="p-btn p-bg-primary" @click="modal1 = true">弹出基本 modal</button>
</div>

<div :class="['p-modal-mask', modal1 ? 'show' : '']">
    <div class="p-modal-body">
        <div class="header">is title basic</div>
        <div class="content">is content basic</div>
        <div class="footer">
            <span class="ok p-color-primary" @click="modal1 = false">ok</span>
            <span class="cancel p-color-red" @click="modal1 = false">cancel</span>
        </div>
    </div>
</div>

```vue
<template>
    <p-modal v-model="value" title="is title" content="is content" ok="ok" cancel="cancel" @ok="onOk" @cancel="onCancel" />
</template>

<script>
export default {
    data() {
        return {
            value: true
        };
    },

    methods: {
        onOk() {
            console.log("is ok");
        },

        onCancel() {
            console.log("is cancel");
        }
    }
};
</script>
```

## slot 插槽

<div class='modal-container'>
    <button class="p-btn p-bg-primary" @click="modal2 = true">弹出插槽 modal</button>
</div>

<div :class="['p-modal-mask', modal2 ? 'show' : '']">
    <div class="p-modal-body">
        <div class="header">is title slot</div>
        <div class="content">is content slot</div>
        <div class="footer">
            <button class="p-btn p-bg-primary" @click="modal2 = false">ok</button>
            <button class="p-btn p-bg-red" @click="modal2 = false">cancel</button>
        </div>
    </div>
</div>

```vue
<template>
    <p-modal v-model="value">
        <block slot="header">is title</block>
        <block slot="content">is content</block>
        <block slot="footer">
            <p-button @click="onOk">ok</p-button>
            <p-button @click="onCancel">cancel</p-button>
        </block>
    </p-modal>
</template>

<script>
export default {
    data() {
        return {
            value: true
        };
    },

    methods: {
        onOk() {
            this.value = false;
            console.log("is ok");
        },

        onCancel() {
            this.value = false;
            console.log("is cancel");
        }
    }
};
</script>
```

## API

### p-modal props

| 属性    |   说明   |  类型 | 默认值 |
| ------- | :------: | ----: | -----: |
| p-class | 样式穿透 | Array |      - |

### p-modal event

| 事件名 |          说明          |  返回值 |
| ------ | :--------------------: | ------: |
| ok     |     点击确定的回调     | \$event |
| cancel |     点击取消的回调     | \$event |
| change | 显示状态发生变化时触发 | Boolean |

### p-modal slot

| 名称    |      说明      |
| ------- | :------------: |
| header  |   自定义页头   |
| content | 对话框主体内容 |
| footer  | 自定义页脚内容 |

<script>
export default {
    data() {
        return {
            modal1: false,
            modal2: false
        };
    },

    methods: {
        onOk() {
            this.value = false;
        },

        onCancel() {
            this.value = false;
        },

        onBtnClick(){
            console.log('modal1 = true')
        }
    }
};
</script>

<style lang="scss">
.modal-container > .p-btn{
    margin-top: 15px;
}
</style>
