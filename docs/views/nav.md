# Nav 导航栏

<preview path="nav"/>

## 基础用法

```vue
<p-nav content="商品" left-text="返回" left-icon="ios-arrow-back" click-left-back-page />
```

## 其他用法

```vue
<p-nav
    content="首页"
    left-text="扫描"
    left-icon="ios-qr-scanner"
    right-text="设置"
    right-icon="ios-settings"
    @left="onClickLeft"
    @right="onClickRight"
/>
```

## slot 用法

```vue
<p-nav @left="onClickLeft" @right="onClickRight">
    <block slot="left">
        <p-icon type="ios-arrow-back" size="40" />
        <text>返回</text>
    </block>
    <block slot="content">其他</block>
    <block slot="right">
        <text>设置</text>
        <p-icon type="ios-settings" size="40" />
    </block>
</p-nav>
```

## API

### props

| 属性                 |         说明         |    类型 |         默认值 |
| -------------------- | :------------------: | ------: | -------------: |
| p-class              |       样式穿透       |   Array |              - |
| bg-color             |       背景类型       |  String | `p-bg-primary` |
| left-icon            |       左侧图标       |  String |              - |
| left-text            |       左侧文案       |  String |              - |
| content              |         标题         |  String |              - |
| right-icon           |       右侧图标       |  String |              - |
| right-text           |       右侧文案       |  String |              - |
| click-left-back-page | 点击左侧文案返回页面 | Boolean |          false |

### event

| 事件名 |      说明      |  返回值 |
| ------ | :------------: | ------: |
| left   | 点击左侧的回调 | \$event |
| right  | 点击右侧的回调 | \$event |

### slot

| 名称    |        说明        |
| ------- | :----------------: |
| left    | 自定义左侧区域内容 |
| content |     自定义标题     |
| right   | 自定义右侧区域内容 |
