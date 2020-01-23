# Input 输入框

<preview path="input"/>

## 基础用法

```vue
<p-input placeholder="请输入内容" />
```

## 其他颜色

```vue
<p-input placeholder="请输入内容" font-color="p-color-green" border-color="p-border-color-green" />
```

## 输入类型

```vue
<p-input placeholder="number 类型" type="number" />
<p-input placeholder="password 类型" type="password" />
<p-input placeholder="digit 类型" type="digit" />
```

## 禁用状态

```vue
<p-input disabled placeholder="已禁用" />
```

## 自定义内容

```vue
<p-input placeholder="添加图标">
    <block slot="left"><p-icon type="ios-at"/></block>
</p-input>
<p-input placeholder="添加图标">
    <block slot="right"><p-icon type="ios-help-circle"/></block>
</p-input>
<p-input placeholder="添加图标">
    <block slot="right">
        <p-button>发送验证码</p-button>
    </block>
</p-input>
```

## API

### p-input props

| 属性         |        说明        |    类型 |                                可选值 |                 默认值 |
| ------------ | :----------------: | ------: | ------------------------------------: | ---------------------: |
| p-class      |      样式穿透      |   Array |                                     - |                      - |
| v-model      |      绑定的值      |  String |                                     - |                      - |
| name         | 表单提交回调的数据 |  String |                                     - |                      - |
| type         |     输入框类型     |  String | `text`、`number`、`password`、`digit` |                 `text` |
| placeholder  | 输入框为空时占位符 |  String |                                     - |                      - |
| disabled     |      是否禁用      | Boolean |                                     - |                `false` |
| font-color   |      字体颜色      |  String |                                     - |        p-color-content |
| border-color |     下边框颜色     |  String |                                     - | p-border-color-primary |

### p-input event

| 事件名 |   说明   |  返回值 |
| ------ | :------: | ------: |
| change | 内容输入 | \$event |
| click  | 点击事件 | \$event |
| focus  | 获取焦点 | \$event |
| blur   | 失去焦点 | \$event |
