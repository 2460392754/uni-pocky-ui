# Textarea 多行输入框

<preview path="textarea"/>

## 基本

```vue
<p-textarea v-model="value" placeholder="is textarea" />
```

## API

### p-textarea props

| 属性         |        说明        |   类型 |                 默认值 |
| ------------ | :----------------: | -----: | ---------------------: |
| p-class      |      样式穿透      |  Array |                      - |
| v-model      |      绑定的值      | String |                      - |
| name         | 表单提交回调的数据 | String |                      - |
| placeholder  | 输入框为空时占位符 | String |                      - |
| font-color   |      字体颜色      | String |        p-color-content |
| border-color |     下边框颜色     | String | p-border-color-primary |

### p-textarea event

| 事件名 |   说明   |  返回值 |
| ------ | :------: | ------: |
| change | 内容输入 | \$event |
| click  | 点击事件 | \$event |
| focus  | 获取焦点 | \$event |
| blur   | 失去焦点 | \$event |
