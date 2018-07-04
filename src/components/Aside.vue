<template>
    <aside class="blue-grey darken-4">
        <div class="blue-grey darken-4 logo">
            <img src="../assets/logo.png">
        </div>
        <div class="category">
            <div class="category__list">
                <h2>
                    Category
                </h2>
                <ul>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                </ul>
            </div>
            <div class="category__list">
                <h2>
                    Category
                </h2>
                <ul>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                </ul>
            </div>
            <div class="category__list">
                <h2>
                    Category
                </h2>
                <ul>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                </ul>
            </div>
            <div class="category__list">
                <h2>
                    Category
                </h2>
                <ul>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                    <li>
                        <a href="#">Subcategory</a>
                    </li>
                </ul>
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
        width:300px;
        height: 100vh;
        color: white;
        position: fixed;
        overflow-y: scroll;
    }
    a{
        color: white;
        text-decoration: none;
    }
    .category{
        padding-top: 50px;
    }
    .category__list{
        text-align: left;
    }
    ul{
        list-style: none;
        padding-left: 10px;
    }
    li{
        padding: 10px 0;
    }
    .logo{
        padding-top: 10px;
        width: 300px;
        position: fixed;
    }
    h2{
        text-align: center;
    }
</style>