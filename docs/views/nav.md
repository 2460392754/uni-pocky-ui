# Nav 导航栏

<preview path="nav"/>

## 基础用法

```vue
<p-nav>
    <block slot="content">首页</block>
</p-nav>
```

## 其他用法

```vue
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
