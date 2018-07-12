<template>
    <div class="top-content">

        <div class="add-box">
            <v-btn class="red darken-3 add-box__btn">
                <i class="fas fa-plus"></i>
            </v-btn>
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
        background: white;
        padding: 0 15px;
    }

    .add-box{
        &__btn{
            margin: 0;
            color: white;
        }
    }

</style>