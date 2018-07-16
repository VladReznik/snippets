<template>
    <aside>
        <div class="aside-fixed">
            <div class="search">
                <input type=search name=search-input class="search__input" placeholder="Search">
                <button class="search__btn">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
        <div class="aside-scroll">
            <div class="category">
                <div class="category__item" v-for="(data, index) in categories" :key="index">
                    <h2 class="category__title">
                        {{data.name}}
                    </h2>
                    <ul v-for="(data, index) in subcategories" :key="index">
                        <li>
                            <a href="#" class="category__link">{{data.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <div class="category__item" v-for="(data, index) in categories" :key="index">
                    <h2 class="category__title">
                        {{data.name}}
                    </h2>
                    <ul v-for="(data, index) in subcategories" :key="index">
                        <li>
                            <a href="#" class="category__link">{{data.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="category">
                <div class="category__item" v-for="(data, index) in categories" :key="index">
                    <h2 class="category__title">
                        {{data.name}}
                    </h2>
                    <ul v-for="(data, index) in subcategories" :key="index">
                        <li>
                            <a href="#" class="category__link">{{data.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
    export default {
        name: "Aside",
        data() {
            return {
                categories: [
                    {
                        "name": "html/css"
                    },
                    {
                        "name": "svg"
                    },
                    {
                        "name": "other"
                    },
                ],
                subcategories: [
                    {
                        "name": "html/css"
                    },
                    {
                        "name": "svg"
                    },
                    {
                        "name": "other"
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>