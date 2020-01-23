# Button 按钮

<preview path="button"/>

## 按钮类型

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

## 禁用类型

```html
<p-button disabled>禁用类型</p-button>
```

## 类型尺寸

```html
<p-button long>长按钮</p-button>
```

## 表单

```html
<form>
    <p-button form-type="submit">提交</p-button>
    <p-button form-type="reset">重置</p-button>
</form>
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

<!-- #ifdef MP-QQ -->
<p-button type="p-bg-green" open-type="getUserInfo" @click="onLoginQQ">登录</p-button>
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
        return { }
    },

    mounted(){
        console.log(this)
    }
}
</script>

<!-- <style lang="scss" scoped>
.btn-container{
    margin: 10px 0;

    &.margin{
        .p-btn{
            margin: 0 10px;
        }
    }
}
</style> -->
