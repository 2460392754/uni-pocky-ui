# Button 按钮

## basic 基本

<div class="btn-container margin">
    <p-button v-for="(value, key) of baseList" :type="value">{{key}}</p-button>
</div>

```html
<p-button>Primary</p-button>
<p-button type="p-bg-green">Success</p-button>
<p-button type="p-bg-yellow">Warn</p-button>
<p-button type="p-bg-red">Error</p-button>
<p-button type="p-bg-default">Default</p-button>
<p-button type="p-bg-content">Content</p-button>
<p-button type="p-bg-white">White</p-button>
<p-button type="p-bg-black">Black</p-button>
```

## long 长按钮

<div class="btn-container">
    <p-button long>btn</p-button>
</div>

```html
<p-button long>btn</p-button>
```

## disabled 禁用

<div class="btn-container">
    <p-button disabled>btn</p-button>
</div>

```html
<p-button disabled>btn</p-button>
```

## form 表单

```html
<p-button form-type="submit">提交</p-button> <br />
<p-button form-type="reset">重置</p-button>
```

## 登录(开放能力)

```html
<!-- #ifdef H5 -->
<p-button @click="onLoginH5">网页登录</p-button>
<!-- #endif -->

<!-- #ifdef MP-WEIXIN -->
<p-button open-type="getUserInfo" @getuserinfo="onLoginWechat">微信小程序登录</p-button>
<!-- #endif -->

<!-- #ifdef MP-ALIPAY -->
<p-button scope="userInfo" open-type="getUserInfo" @click="onLoginAlipay">支付宝小程序登录</p-button>
<!-- #endif -->

<!-- #ifdef MP-TOUTIAO -->
<p-button @click="onLoginToutiao">头条小程序登录</p-button>
<!-- #endif -->
```

## API

### p-button props

| 属性      |           说明            |    类型 |         默认值 |
| --------- | :-----------------------: | ------: | -------------: |
| p-class   |         样式穿透          |   Array |              - |
| type      |         颜色类型          |  String | `p-bg-primary` |
| long      | 开启后，按钮的长度为 100% | Boolean |        `false` |
| disabled  |    设置按钮为禁用状态     | Boolean |        `false` |
| form-type |                           |  String |              - |
| open-type |                           |  String |              - |
| scope     |                           |  String |              - |

### p-button event

| 事件名      |        说明        |  返回值 |
| ----------- | :----------------: | ------: |
| click       |      点击事件      | \$event |
| getuserinfo | 微信小程序登录事件 | \$event |

<script>
export default {
    data() {
        return {
            baseList:{
                Primary:'p-bg-primary',
                Success:'p-bg-green',
                Warn:'p-bg-yellow',
                Error:'p-bg-red',
                Default:'p-bg-default',
                Content:'p-bg-content',
                White:'p-bg-white',
                Black:'p-bg-black',
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.btn-container{
    margin: 10px 0;

    &.margin{
        .p-btn{
            margin: 0 10px;
        }
    }
}
</style>
