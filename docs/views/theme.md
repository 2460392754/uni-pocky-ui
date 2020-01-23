# theme 主题样式

### font-size

```css
page {
    font-size: 28upx;
}
```

### primary-color

```scss
$p-color-white: #ffffff;
$p-color-bull: #2d8cf0;
$p-color-primary: $p-color-bull;

.p-color-primary {
    @include color-mixin($p-color-primary);
}

.p-color-white {
    @include color-mixin($p-color-white);
}

.p-bg-color-primary {
    @include bg-color-mixin($p-color-primary);
}

.p-bg-primary {
    @extend .p-color-white;
    @extend .p-bg-color-primary;
}
```
