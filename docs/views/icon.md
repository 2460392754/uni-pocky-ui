# Icon 图标

<preview path="icon"/>

## 介绍

开源项目 [ioncions](https://ionicons.com/)的[4.5.10 版本](https://unpkg.com/ionicons@4.5.10-0) <br />
目前图标库里有 696 个图标

## 基础用法

```vue
<p-icon type="md-add" />
<p-icon type="md-add-circle" />
<p-icon type="md-add-circle-outline" />
<p-icon type="ios-add" />
<p-icon type="ios-add-circle" />
<p-icon type="ios-add-circle-outline" />
```

## 图标颜色

```vue
<p-icon type="md-add" color="#2d8cf0" />
<p-icon type="md-add-circle" color="#19be6b" />
<p-icon type="md-add-circle-outline" color="#ff9900" />
<p-icon type="ios-add" color="#ed4014" />
<p-icon type="ios-add-circle" color="#f8f8f9" />
<p-icon type="ios-add-circle-outline" color="#000000" />
```

## 图标大小

```vue
<p-icon type="md-add" size="40" />
<p-icon type="md-add-circle" size="50" />
<p-icon type="md-add-circle-outline" size="60" />
```

## API

### props

| 属性    |          说明          |   类型 |    默认值 |
| ------- | :--------------------: | -----: | --------: |
| p-class |        样式穿透        |  Array |         - |
| type    |       图标的名称       | String |         - |
| color   |       图标的颜色       | Number | `inherit` |
| size    | 图标的大小，单位是 upx | Number |        50 |

### event

| 属性  |   说明   |  返回值 |
| ----- | :------: | ------: |
| click | 点击事件 | \$event |
