# 如何使用

## 问题

[关于 uniapp 组件全局注册的问题](https://uniapp.dcloud.io/use?id=%e5%85%a8%e5%b1%80%e7%bb%84%e4%bb%b6)<br />
[关于 uniapp 组件动态注册的问题(目前只支持静态注册)](https://ask.dcloud.net.cn/question/71556)

https://www.cnblogs.com/qisi007/p/10701510.html

## 全部引入

```js
import Vue from "vue";
import UniPockyUi from "uni-pocky-ui";
import "uni-pocky-ui/dist/styles/index.css";

Vue.use(UniPockyUi);
```

## 按需引入

```js
import Vue from "vue";
import PButton from "uni-pocky-ui/src/components/p-button";
import PNav from "uni-pocky-ui/src/components/p-nav";
import "uni-pocky-ui/dist/styles/index.css";

Vue.component("PButton", PButton);
Vue.component("PNav", PNav);
```

## 引入 Icon 图标 CDN

国内常见的免费 cdn

-   [jsdelivr](https://www.jsdelivr.com/)
-   [staticfile](https://staticfile.org/)
-   [bootcdn](https://www.bootcdn.cn/)

## 组件列表

```js
import PButton from "uni-pocky-ui/src/components/p-button";
import PNav from "uni-pocky-ui/src/components/p-nav";
import PCard from "uni-pocky-ui/src/components/p-card";
import PIcon from "uni-pocky-ui/src/components/p-icon";
import PLabel from "uni-pocky-ui/src/components/p-label";
import PModal from "uni-pocky-ui/src/components/p-modal";
import PInput from "uni-pocky-ui/src/components/p-input";
import PTextarea from "uni-pocky-ui/src/components/p-textarea";
```
