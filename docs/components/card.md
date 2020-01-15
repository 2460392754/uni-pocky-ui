# Card 卡片

<template>

## base

<div class="p-card-base">
    <span>card base</span>
</div>

```html
<p-card type="base">
    <block>card base</block>
</p-card>
```

## lg

<div class="p-card-lg">
    <span>card lg</span>
</div>

```html
<p-card type="lg">
    <block>card lg</block>
</p-card>
```

## API

### p-card props

| 属性 |   说明    |   类型 | 默认值 |
| ---- | :-------: | -----: | -----: |
| type | card 类型 | String | `base` |

### p-card event

| 事件名 |   说明   |  返回值 |
| ------ | :------: | ------: |
| click  | 点击事件 | \$event |

</template>

<script>
export default {
    data() {
        return { }
    },
}
</script>

<style lang="scss" scoped>
.p-card-base{
    width: 375px;
    margin: 10px 0;
}
</style>
