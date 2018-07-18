<template>
   <div>
       <div class="product">
           <div class="product__head">
               <h2 class="product__title">TITLE</h2>
               <router-link to="/" class="btn btn-back">
                   Назад в категорию
               </router-link>
           </div>
           <p class="product__description">
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum
           </p>
           <div class="code">
               <div class="code__item-preview" v-bind:class="{ active: previewFull }">>
                   <div class="code__item-preview-content">
                       <img src="../assets/img/previews/1.jpg" class="card__preview-img">
                   </div>
                   <div class="code__item-preview-options">
                       <button class="btn-show" v-on:click="showFull">
                           <i class="fas fa-arrows-alt-v"></i>
                       </button>
                   </div>
               </div>
               <div class="code__code-blocks" v-for="(data, index) in tags" :key="index">
                   <div class="code__item">
                       <h3 class="code__title">
                           HTML
                       </h3>
                       <div class="code__code">
                        <pre v-highlightjs>
                            <code class="html">{{data.html}}</code>
                        </pre>

                       </div>
                   </div>
                   <div class="code__item">
                       <h3 class="code__title">

                           CSS
                       </h3>
                       <div class="code__code">
                         <pre v-highlightjs>
                            <code class="css">{{data.css}}</code>
                        </pre>
                       </div>
                   </div>
                   <div class="code__item">
                       <h3 class="code__title">
                           JS
                       </h3>
                       <div class="code__code">
                         <pre v-highlightjs>
                            <code class="javascript">{{data.js}}</code>
                        </pre>

                       </div>
                   </div>

               </div>
           </div>
       </div>
       <div class="product product-commentary">
           <div class="comment">
               <form action="" >
                   <div>
                       <input type="text" name=name-input class="comment__input" placeholder="Name">
                   </div>
                   <div>
                   <textarea name="textarea__comment" class="comment__textarea" id="" cols="30" rows="5" placeholder="Text Comment">

                   </textarea>
                   </div>

                   <button class="btn btn-plus btn-plus-reverse" id="form-button">
                       Добавить комментарий
                   </button>
               </form>
               <div class="comment__list">
                   <div class="comment__item">
                       <h3>Alex</h3>
                       <p>
                           Some text
                       </p>
                   </div>
                   <div class="comment__item">
                       <h3>Alex</h3>
                       <p>
                           Some text
                       </p>
                   </div>
                   <div class="comment__item">
                       <h3>Alex</h3>
                       <p>
                           Some text
                       </p>
                   </div>
               </div>
           </div>
       </div>

   </div>
</template>

<script>
    export default {
        name: "ContentProduct",

        data(){
            return {
                tags: [
                    {
                        "html":"" +
                        "<div>1231345345231</div>" +
                        "<div>asdasd</div>" +
                        "<div>asdasd</div>",
                        "css": ".div{background:red;}",
                        "js" : "var a == 3 \\n var n=2"
                    },
                ],
                previewFull:false
            }
        },
        methods: {
            showFull: function(){
                this.previewFull = !this.previewFull;
                // some code to filter users
            }
        }
    }

</script>

<style scoped lang="scss">
    .hljs{
        background:transparent;
        white-space: normal;
    }
    .product{
        padding: 20px 15px;
        box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        margin: 0 10px;
        background: #2f3242;
        margin-bottom: 30px;
        &__head{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            align-items: center;
        }
        &__title{
            text-align: left;
            margin-bottom: 10px;
            display: block;
            color: white;
            font-size: 18px;
            font-weight: 600;
        }
        &__description{
            text-align: left;
            line-height: 20px;
            padding-bottom: 15px;
            margin-bottom: 0;
            color: white;
            font-size: 14px;
        }
        .code{

            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0;
            &__item{
                background: #202a34;
                min-height: 150px;
                width: calc(33.33% - 5px);
                &-preview{
                    min-height: 150px;
                    padding: 0;
                    width: 100%;
                    margin-bottom: 25px;
                    max-height: 300px;
                    position: relative;
                    overflow: hidden;
                    &.active{
                        max-height: initial;
                        overflow: initial;
                    }
                    img{
                        object-fit: contain;
                        max-height: 100%;
                    }
                    &-options{
                        position: absolute;
                        top: 17px;
                        right: 0;
                    }
                    &-content{
                        height: 100%;
                        overflow-y: scroll;
                        margin-right: 45px;
                    }
                }
            }
            &__title{
                background: #3a3e52;
                font-size: 16px;
                padding: 10px;
                margin: 0;
                text-align: left;
                color: white;
                font-weight: 600;
            }
            &__code-blocks{
                display: flex;
                justify-content: space-between;
                width: 100%;
            }
            &__code{
                padding: 10px 5px;
            }
        }
    }
    .comment{
        &__list{
            padding: 5px;
        }
        &__item{
            color: white;
            padding: 10px 10px;
            text-align: left;
            background: rgba(255,255,255,0.2);
            margin-bottom: 20px;
            &:last-child{
                margin-bottom: 0;
            }
            h3{
                margin-bottom: 10px;
                font-size: 14px;
            }
            p{
                font-size: 12px;
            }
        }
        &__input{
            background: transparent;
            border: 2px solid #2196f3;
            color: white;
            padding: 10px 10px;
            border-radius: 4px;
            width: 100%;
            height: 50px;
            margin-bottom: 20px;
            &:focus{
                outline: none;
                border: 2px solid white;
            }
        }
        &__textarea{
            background: transparent;
            border: 2px solid #2196f3;
            color: white;
            padding: 10px 10px;
            border-radius: 4px;
            width: 100%;
            margin-bottom: 20px;
            &:focus{
                outline: none;
                border: 2px solid white;
            }
        }
    }
    #form-button{
        margin-left: auto;
        margin-bottom: 20px;
    }
</style>