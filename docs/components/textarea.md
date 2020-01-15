# textarea 多行输入框

## 基本

<p-textarea placeholder="is textarea"/>

```vue
<template>
    <p-textarea v-model="value" placeholder="is textarea" />
</template>

<script>
export default {
    data() {
        return {
            value: ""
        };
    }
};
</script>
```
