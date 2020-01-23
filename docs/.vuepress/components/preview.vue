<template>
    <iframe frameborder="0" :src="src"></iframe>
</template>

<script>
import { PREVIEW_BASH } from "../../config";
export default {
    props: {
        path: {
            type: String,
            default: "index"
        }
    },

    data() {
        return {
            src: PREVIEW_BASH + this.path
        };
    },

    created() {
        console.log(process.env.NODE_ENV);
    }
};
</script>

<style>
iframe {
    width: 375px;
    height: 667px;
    position: fixed;
    right: 70px;
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.2);
}
</style>
