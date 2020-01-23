<template>
    <checkbox :value="name" :name="name" :checked="value" />
</template>

<script>
export default {
    props: {
        // v-model
        value: Boolean,

        name: String
    }
};
</script>

<style></style>
