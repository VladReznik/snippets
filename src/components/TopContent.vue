<template>
    <div class="top-content">
        <h2>Some text</h2>
        <v-btn class="indigo darken-4">Add new snippet</v-btn>
    </div>

</template>

<script>
    export default {
        name: "TopContent"
    }
</script>

<style scoped lang="scss">
    .top-content{
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        padding: 0 25px;
    }
    button{
        height: 50px;
        color: white;
    }
</style>