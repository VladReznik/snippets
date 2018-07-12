<template>
    <div class="product">
        <h2 class="product__title">TITLE</h2>
        <p class="product__description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum
        </p>
        <div class="code">
            <div class="code__item-preview">
                <img src="../assets/img/previews/1.jpg" class="card__preview-img">
            </div>
            <div class="code__code-blocks">
                <div class="code__item">
                    <h3 class="code__title">
                        HTML
                    </h3>
                    <div class="code__code">
                        Lorem ipsum dolor sit amet, consectetuer adipisc
                    </div>
                </div>
                <div class="code__item">
                    <h3 class="code__title">
                        CSS
                    </h3>
                    <div class="code__code">
                        Lorem ipsum dolor sit amet, consectetuer adipisc
                    </div>
                </div>
                <div class="code__item">
                    <h3 class="code__title">
                        JS
                    </h3>
                    <div class="code__code">
                        Lorem ipsum dolor sit amet, consectetuer adipisc
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContentProduct"
    }
</script>

<style scoped lang="scss">
    .product{
        padding: 15px 15px;
        box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        margin: 15px;
        background: white;
        &__title{
            text-align: left;
            margin-bottom: 10px;
            display: block;
        }
        &__description{
            text-align: left;
            line-height: 20px;
            padding-bottom: 15px;
            margin-bottom: 0;
        }
        .code__title{
            background: black;
            font-size: 20px;
            padding: 5px;
            text-align: left;
            color: #C5C8D4;
        }
        .code{
            background: #D9D9D9;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 10px;
            &__item{
                background: white;
                min-height: 150px;
                width: calc(33.33% - 5px);
                &-preview{
                    background: white;
                    min-height: 150px;
                    padding: 10px;
                    width: 100%;
                    margin-bottom: 10px;
                    max-height: 300px;
                    img{
                        object-fit: contain;
                        max-height: 100%;
                    }
                }
            }
            &__code-blocks{
                display: flex;
                justify-content: space-between;
                width: 100%;
                .code__item{
                    background-color: #2b343e;
                    color: white;
                }
            }
            &__code{
                padding: 10px 5px;
            }
        }
    }
</style>