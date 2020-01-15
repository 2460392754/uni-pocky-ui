# Nav 导航栏

<template>

## 基本

<div class="p-nav" style="height: 45px;">
    <div class="body p-bg-primary" style="height: 45px;">
        <div class="content" style="transform: translateY(0px);">首页</div>
    </div>
</div>

<div class="p-nav" style="height: 45px;">
    <div class="body p-bg-green" style="height: 45px;">
        <div class="back" style="transform: translateY(0px);">
            <div>
                <i :class="['p-icon', 'ion-ios-arrow-back']"/>
            </div>
            <span>返回</span>
        </div>
        <div class="content" style="transform: translateY(0px);">商品</div>
    </div>
</div>

```html
<p-nav>
    <block slot="content">首页</block>
</p-nav>

<p-nav bg-color="p-bg-green" is-back>
    <block slot="back">返回</block>
    <block slot="content">首页</block>
</p-nav>
```

## API

### p-nav props

| 属性     |     说明     |    类型 |         默认值 |
| -------- | :----------: | ------: | -------------: |
| bg-color |   背景类型   |  String | `p-bg-primary` |
| is-back  | 显示返回按钮 | Boolean |        `false` |

</template>

<script>
export default {
    data() {
        return { }
    },
}
</script>

<style lang="scss" scoped>
.p-nav{
    width: 375px;
    margin: 10px 0;
}
</style>
