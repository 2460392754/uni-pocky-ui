# Switch 开关选择器

<preview path="switch"/>

## 基础用法

```vue
<p-switch v-model="value1" />
```

## 自定义颜色

```vue
<p-switch v-model="value2" color="#19be6b" />
<p-switch v-model="value2" color="#ff9900" />
<p-switch v-model="value2" color="#ed4014" />
<p-switch v-model="value2" color="#f8f8f9" />
```

## 自定义图标

```vue
<p-switch v-model="value3" color="#19be6b">
    <p-icon
        v-show="value3"
        :p-class="['left']"
        type="md-checkmark"
        size="30"
        color="#ffffff"
    />
    <p-icon
        v-show="!value3"
        :p-class="['right']"
        type="md-close"
        size="30"
        color="#ffffff"
    />
</p-switch>
```

## 禁用状态

```vue
<p-switch v-model="value41" disabled>
    <p-icon :p-class="['right']" type="md-close" size="30" color="#515a6e" />
</p-switch>
<p-switch v-model="value41" disabled>
    <p-icon :p-class="['left']" type="md-close" size="30" color="#ffffff" />
</p-switch>
<p-switch v-model="value42" disabled>
    <p-icon :p-class="['right']" type="md-close" size="30" color="#ffffff" />
</p-switch>
<p-switch v-model="value42" disabled>
    <p-icon :p-class="['left']" type="md-close" size="30" color="#515a6e" />
</p-switch>
```

## 其他形状

```vue
<p-switch v-model="value5" square />
```

## API

### p-switch props

| 属性     |        说明        |    类型 |  默认值 |
| -------- | :----------------: | ------: | ------: |
| p-class  |      样式穿透      |   Array |       - |
| v-model  |      绑定的值      |  String |       - |
| name     | 表单提交回调的数据 |  String |       - |
| color    |  选中后显示的颜色  |  String | #2d8cf0 |
| disabled |      是否禁用      | Boolean | `false` |
| square   |  组件形状为正方形  | Boolean | `false` |

### p-switch event

| 事件名 |   说明   |  返回值 |
| ------ | :------: | ------: |
| change | 内容输入 | \$event |
