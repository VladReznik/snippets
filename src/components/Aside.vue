<template>
    <aside>
        <div class="aside-wrapper">
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
    a {
        color: white;
    }
    aside {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
        padding: 0;
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
        background: #2f3242;
    }
    .aside {
        &-wrapper {
            position: fixed;
            width: 300px;
            top: 80px;
            left: 0;
        }
        &-fixed {
            height: 115px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &-scroll {
            height: calc(100vh - 115px);
            padding-bottom: 30px;
            overflow-y: scroll;
        }
    }

    .search {
        border-radius: 10px;
        background-color: rgb(64, 67, 89);
        height: 50px;
        width: 270px;
        position: relative;
        &__input {
            width: 270px;
            height: 100%;
            border: none;
            color: white;
            background: transparent;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.9);
            border-radius: 10px;
            display: block;
            padding: 0 45px 0 15px;
            transition: box-shadow 0.15s linear;
            &:focus{
                outline:none;
                box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.9);
            }
        }
        &__btn{
            position: absolute;
            height: 100%;
            top: 0;
            right: 0;
            width: 40px;
            border-radius: 10px;
            background: transparent;
            border: none;
            opacity: 1;
            transition: opacity 0.15s linear;
            &:focus{
                outline:none;
                opacity: 0.85;
            }
            i{
                font-size: 20px;
                color: white;
            }
        }
    }
    .category{
        padding: 0 17px;

        &__title{
            font-size: 14px;
            font-weight: 600;
            color: white;
            text-align: left;
            text-transform: uppercase;
            margin-bottom: 15px;
        }
        &__item{
            margin-bottom: 30px;
        }
        &__link{
            text-decoration: none;
            display: block;
            margin-bottom: 10px;
            font-size: 12px;
            font-weight: 400;
            transition: font-weight 0.05s linear;
            &:hover{
                font-weight: 600;
            }
        }
        li{
            text-align: left;
            padding-left: 20px;
        }
    }

</style>