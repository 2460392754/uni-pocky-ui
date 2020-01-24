# Modal 对话框

<preview path="modal"/>

## 基础用法

```vue
<template>
    <p-modal
        v-model="value"
        title="is title"
        content="is content"
        ok="ok"
        cancel="cancel"
        @ok="onOk"
        @cancel="onCancel"
    />
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

## 自定义插槽

```vue
<template>
    <p-modal v-model="value">
        <block slot="header">is title</block>
        <block slot="content">is content</block>
        <block slot="footer">
            <p-button @click="onOk">ok</p-button>
            <p-button type="p-bg-red" @click="onCancel">cancel</p-button>
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

### props

| 属性    |   说明   |  类型 | 默认值 |
| ------- | :------: | ----: | -----: |
| p-class | 样式穿透 | Array |      - |

### event

| 事件名 |          说明          |  返回值 |
| ------ | :--------------------: | ------: |
| ok     |     点击确定的回调     | \$event |
| cancel |     点击取消的回调     | \$event |
| change | 显示状态发生变化时触发 | Boolean |

### slot

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
