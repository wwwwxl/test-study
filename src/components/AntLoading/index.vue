<template>
    <div name="loadingVue" class="full-screen" id="loadMessage">
        <a-spin tip="Loading..."></a-spin>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {}
}
</script>
<style scoped>
.full-screen{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #333;
    opacity: 0.7;
    z-index: 999;
}
</style>
