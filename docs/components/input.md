# Input 输入框

## 基本

<p-input placeholder="is input"/>

```vue
<template>
    <p-input v-model="value" placeholder="is input" />
</template>

<script>
export default {
    data() {
        return {
            value: ""
        };
    }
};
</script>
```

## API

### p-input props

| 属性        |                        说明                         |    类型 |  默认值 |
| ----------- | :-------------------------------------------------: | ------: | ------: |
| v-model     |                      绑定的值                       |  String |       - |
| name        |                 表单提交回调的数据                  |  String |       - |
| type        | 类型, 可选值为`text`、`number`、`password`、`digit` |  String |  `text` |
| placeholder |                 输入框为空时占位符                  |  String |       - |
| disabled    |                      是否禁用                       | Boolean | `false` |

### p-input event

| 事件名 |   说明   |  返回值 |
| ------ | :------: | ------: |
| change | 点击事件 | \$event |
