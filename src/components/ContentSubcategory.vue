<template>
    <div class="subcategory">
        <div class="cards">
            <div class="card__item">
                <div class="card__head">
                    <h3>Title</h3>

                        <router-link to="/product" class="btn">

                            Открыть

                        </router-link>

                </div>
                <div class="card__preview">
                    <p class="card__description">Description</p>
                    <img src="../assets/img/previews/1.jpg" class="card__preview-img">
                </div>
            </div>
            <div class="card__item">
                <div class="card__head">
                    <h3>Title</h3>

                    <router-link to="/product" class="btn">

                        Открыть

                    </router-link>

                </div>
                <div class="card__preview">
                    <p class="card__description">Description</p>
                    <img src="../assets/img/previews/1.jpg" class="card__preview-img">
                </div>
            </div>
            <div class="card__item">
                <div class="card__head">
                    <h3>Title</h3>

                    <router-link to="/product" class="btn">

                        Открыть

                    </router-link>

                </div>
                <div class="card__preview">
                    <p class="card__description">Description</p>
                    <img src="../assets/img/previews/1.jpg" class="card__preview-img">
                </div>
            </div>
            <div class="card__item">
                <div class="card__head">
                    <h3>Title</h3>

                    <router-link to="/product" class="btn">

                        Открыть

                    </router-link>

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
    .card{
        &__item{
            background-color: rgb(47, 50, 66);
            box-shadow: 0px 4px 17.64px 0.36px rgba(0, 0, 0, 0.27);
            transition: box-shadow 0.2s linear;
            display: inline-block;
            width: calc(33.33% - 20px);
            margin: 0 10px 20px;
            @media screen and (max-width: 1300px){
                width: calc(50% - 20px);
            }
            &:hover{
               box-shadow: 0px 8px 17.64px 0.36px rgba(0, 0, 0, 0.004);
                .card__preview:before{
                    background: #fff;
                    opacity: 0.8;
                }
                .card__description{
                    color: black;
                }
            }
            h3{
                color: white;
                font-size: 18px;
                font-weight: 400;
            }
        }
        &__head{
            display: flex;
            justify-content: space-between;
            padding: 20px 15px;
            align-items: center;
        }
        &__description{
            position: relative;
            z-index: 2;
            padding: 15px 15px 0;
            font-size: 16px;
            color: white;
            text-align: left;
        }
        &__preview{
            position: relative;
            height: 250px;
            &:before{
                content:"";
                position: absolute;
                width: 100%;
                height: 100%;
                background: #2f3242;
                opacity: 0.6;
                z-index: 1;
                left: 0;
                top: 0;
                transition: all 0.2s linear;
            }
            &-img{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                object-fit: cover;
            }

        }
    }
    .cards {
        display: flex;
        flex-wrap: wrap;
    }
</style>