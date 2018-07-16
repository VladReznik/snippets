<template>
    <div class="subcategory">
        <div class="cards">
            <div class="card__item">
                <div class="card__head">
                    <h3>Title</h3>
                    <button class="btn">
                        <router-link to="/product">Перейти к Foo</router-link>
                    </button>
                </div>
                <div class="card__preview">
                    <p class="card__description">Description</p>
                    <img src="../assets/img/previews/1.jpg" class="card__preview-img">
                </div>
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
</style>