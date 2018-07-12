<template>
    <aside>
        <div class="aside-fixed">
            <div class="logo">
                <img src="../assets/logo.png">
            </div>
            <div class="search">
                <input type=search name=search-input class="search__input" placeholder="Search">
                <button class="search__btn">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
        <div class="aside-scroll">
            <div class="category">
                <div class="category__item">
                    <h2 class="category__title">
                        Category
                    </h2>
                    <ul>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                    </ul>
                </div>
                <div class="category__item">
                    <h2 class="category__title">
                        Category
                    </h2>
                    <ul>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                    </ul>
                </div>
                <div class="category__item">
                    <h2 class="category__title">
                        Category
                    </h2>
                    <ul>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                    </ul>
                </div>
                <div class="category__item">
                    <h2 class="category__title">
                        Category
                    </h2>
                    <ul>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                        <li>
                            <a href="#" class="category__link">Subcategory</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </aside>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped lang="scss">
    aside{
        width: 240px;
        height: 100vh;
        color: white;
        position: fixed;
        overflow-y: scroll;
        background-color: #253443;
    }
    a{
        color: white;
        text-decoration: none;
    }
    .category{

        &__item{
            padding: 10px 10px;
            border-bottom: 1px solid #202a34;
        }
        &__title{
            text-align:left;
            font-size: 14px;
            margin-bottom: 10px;
        }
        &__link{
            font-size: 12px;
            color: rgba(255,255,255,.5);
            padding: 5px 0;
            display: block;
            &:hover{
                color: rgba(255,255,255,.75);
            }
        }
    }
    .search{
        width: calc(100% - 20px);
        position: relative;
        height: 36px;
        background: white;
        margin: 0 10px;
        &__input{
            border: none;
            width: 100%;
            height: 36px;
            padding-right: 55px;
            color: black;
            padding-left: 5px;
            &:focus{
                border: 1px solid #1a237e;
                outline: none;
            }
        }
        &__btn{
            position: absolute;
            right: 1px;
            top: 1px;
            height: calc(100% - 2px);
            width: 44px;
            color: #1b1c1d;
            margin: 0;
            padding: 0;
            min-width: inherit;
            box-shadow: none;
            background: beige;
        }
    }
    ul{
        list-style: none;
        padding-left: 0;
        text-align: left;
    }

    .logo{
        padding-top: 10px;
        width: 240px;
        background-color: #1b1c1d;
        z-index: 2;
        margin-bottom: 5px;
    }
    .aside-scroll{
        padding-top: 100px;
    }
    .aside-fixed{
        position: fixed;
    }


</style>