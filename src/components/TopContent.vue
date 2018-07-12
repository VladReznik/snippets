<template>
    <div class="top-content">
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
    .top-content{
        height: 80px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background: #253443;
        padding: 0 15px;
    }

    .add-box{
        &__btn{
            margin: 0;
            color: white;
        }
    }

</style>