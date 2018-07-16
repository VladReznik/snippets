<template>
    <div class="top-content">
        <div class="logo">
            <img src="../assets/logo.png">
        </div>
        <div class="add-box">
            <button class="add-box__btn">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "TopContent"
    }
</script>

<style scoped lang="scss">
    .top-content {
        background-color: #2f3242;
        box-shadow: 0px 3px 80px 0px rgba(23, 24, 32, 0.4);
        z-index: 2;
        width: 100%;
        height: 108px;
        position: fixed;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        align-items: center;
        box-sizing: border-box;
    }
</style>