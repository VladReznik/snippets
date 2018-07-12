<template>
    <div class="subcategory">
        <div class="cards">
            <div class="card__item">
                <div class="card__head">
                    <h3>Title</h3>
                    <button class="btn">Open</button>
                </div>
                <div class="card__preview">
                    <p class="card__description">Description</p>
                    <img src="../assets/img/previews/1.jpg" class="card__preview-img">
                </div>
            </div>
            <div class="card__item">
                <div class="card__head">
                    <h3>Title</h3>
                    <button class="btn">Open</button>
                </div>
                <div class="card__preview">
                    <p class="card__description">Description</p>
                    <img src="../assets/img/previews/1.jpg" class="card__preview-img">
                </div>
            </div>
            <div class="card__item">
                <div class="card__head">
                    <h3>Title</h3>
                    <button class="btn">Open</button>
                </div>
                <div class="card__preview">
                    <p class="card__description">Description</p>
                    <img src="../assets/img/previews/1.jpg" class="card__preview-img">
                </div>
            </div>
            <div class="card__item">
                <div class="card__head">
                    <h3>Title</h3>
                    <button class="btn">Open</button>
                </div>
                <div class="card__preview">
                    <p class="card__description">Description</p>
                    <img src="../assets/img/previews/1.jpg" class="card__preview-img">
                </div>
            </div>
            <div class="card__item">
                <div class="card__head">
                    <h3>Title</h3>
                    <button class="btn">Open</button>
                </div>
                <div class="card__preview">
                    <p class="card__description">Description</p>
                    <img src="../assets/img/previews/1.jpg" class="card__preview-img">
                </div>
            </div>
            <div class="card__item">
                <div class="card__head">
                    <h3>Title</h3>
                    <button class="btn">Open</button>
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
    .subcategory {
        padding: 25px 15px 0;
    }

    button {
        color: white;
    }

    .cards{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .card {
        &__item {
            background: white;
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            flex-direction: column;
            box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
            width: calc(33.33% - 10px);
            &:hover{
                .card__preview{
                    &:before{
                        opacity: 0.75;
                    }
                    .card__preview-img{
                        transform: scale(1.1);
                    }
                }
            }
        }
        &__head{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 15px;
            background: #253443;
            h3{
                color: white;
            }
        }
        &__preview {
            position: relative;
            height: 250px;
            overflow: hidden;
            &:before{
                content: "";
                position: absolute;
                height: 100%;
                width: 100%;
                left: 0;
                top: 0;
                background: black;
                z-index: 2;
                opacity: 0.5;
                transition: opacity 0.2s linear;
            }
        }

        &__preview-img{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            object-fit: cover;
            transition: transform 0.2s linear;
        }
        &__description{
            position: absolute;
            left: 0;
            top: 0;
            z-index: 3;
            width: 100%;
            text-align: left;
            height: 100%;
            padding: 10px 15px;
            margin: 0;
            color: white;
        }

    }
</style>