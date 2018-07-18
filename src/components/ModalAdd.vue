<template>
    <div class="modal-backdrop">
        <div class="modal">
            <button
                    type="button"
                    class="btn btn-close"
                    @click="close"
            >
                <i class="far fa-times-circle"></i>
            </button>
            <div class="modal-header">
                sdfsdfsdfsd sdfsdfsdf
            </div>
            <div class="modal-body">
                <form action="" >
                    <div>
                        <input type="text" name=name-input class="comment__input" placeholder="Name">
                    </div>
                    <div>
                   <textarea name="textarea__comment" class="comment__textarea" id="" cols="30" rows="5" placeholder="Text Comment">

                   </textarea>
                    </div>

                    <button class="btn btn-plus" id="form-button">
                        Добавить cниппет
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModalAdd",
        methods: {
            close() {
                this.$emit('close');
            },
        },
    }
</script>

<style scoped lang="scss">
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.45);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: #FFFFFF;
        box-shadow: 0px 4px 17.64px 0.36px rgba(0, 0, 0, 0.27);
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 0;
        padding: 10px 20px;
        .btn-close{
            position: absolute;
            width: 46px;
            height: 46px;
            top: 0;
            right: 0;
            padding: 0;
            background: #2b2d3c;
            border-radius: 0;
            &:hover{
                background:#4AAE9B;
                color: white;
            }
        }
    }

    .modal-header,
    .modal-footer {
        padding: 15px;
        display: flex;
    }
    .modal-header{
        padding: 15px 0;
        text-align: left;
        margin-right: 50px;
    }
    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: space-between;
    }

    .modal-footer {
        border-top: 1px solid #eeeeee;
        justify-content: flex-end;
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
    }

    .btn-close {
        border: none;
        font-size: 20px;
        padding: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #4AAE9B;
        background: transparent;
    }

</style>