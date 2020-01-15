# Color 颜色

<template>

## 概述

推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致

## 主色

<div class='card'>
    <div 
        v-for="(value, key) of list" 
        :key="value"
        class="p-card-lg p-color-white" 
        :class="[`p-bg-color-${key}`]"
    >{{key + ' - ' + value}}</div>
</div>

</template>

<script>
export default {
    data() {
        return {
            list:{
                primary:'#2d8cf0',
                green:'#19be6b',
                yellow:'#ff9900',
                red:'#ed4014',
                default:'#f8f8f9',
                white:'#ffffff',
                black:'#000000',
                content:'#515a6e',
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.card{
    display: flex;
    flex-wrap: wrap;

    > div{
        width: 230px;
        margin: 10px 20px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }

    .p-bg-color-white,
    .p-bg-color-default{
        color:#000;
    }
}
</style>
