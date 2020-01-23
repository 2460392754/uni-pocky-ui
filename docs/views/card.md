# Card 卡片

<preview path="card"/>

## 基本类型

### lg

```vue
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
```

### base

```vue
<p-card type="base">
    <block>base</block>
</p-card>

<p-card type="base" color="p-bg-white">
    <block>base</block>
</p-card>

<p-card type="base" color="p-bg-primary">
    <block>base</block>
</p-card>
```

## API

### p-card props

| 属性    |   说明    |   类型 |         默认值 |
| ------- | :-------: | -----: | -------------: |
| p-class | 样式穿透  |  Array |              - |
| type    | card 类型 | String |         `base` |
| color   |           | String | `p-bg-default` |

### p-card event

| 事件名 |   说明   |  返回值 |
| ------ | :------: | ------: |
| click  | 点击事件 | \$event |
