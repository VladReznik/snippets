<template>
    <div class="subcategory">
        <div class="cards">
            <div class="card__item">
                <div>
                    <h3>Title</h3>
                    <p>Description</p>
                </div>
                <v-btn class="indigo darken-4">Add new snippet</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContentSubcategory"
    }
</script>

<style scoped lang="scss">
    .subcategory{
        padding: 25px 25px 0;
    }
    button{
        color: white;
    }
    .card{
        &__item{
            background: white;
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }
    }
</style>