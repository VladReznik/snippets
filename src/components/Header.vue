<template>
    <div class="header">
        <div class="wrapper">
            <router-link to="/" class="header__logo">
                <img src="../assets/logo.png">
            </router-link>
            <nav>
                <ul>
                    <li>
                        <router-link to="/templates">
                            Шаблоны
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/article">
                            Style Guide
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            Каталог
                        </router-link>
                    </li>
                </ul>
            </nav>
            <a href="#" class="btn btn-plus" @click="showModal">
                Добавить сниппет
            </a>
        </div>
        <ModalAdd v-show="isModalVisible" @close="closeModal" />
    </div>

</template>

<script>
    import ModalAdd from "@/components/ModalAdd";
    export default {
        name: "Header",
        components: {
            ModalAdd
        },
        data () {
            return {
                isModalVisible: false,
            };
        },
        methods: {
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
        },
    }
</script>

<style scoped lang="scss">
    .header{
        width: 100%;
        height: 80px;
        position: sticky;
        top: 0;
        z-index: 1020;
        background: #2f3242;
        box-shadow: 0px 3px 80px 0px rgba(23, 24, 32, 0.4);
        padding-right: 5px;
        .wrapper{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
        }
    }
    nav{
        margin-left: auto;
        ul{
            display: flex;
            margin-right: 30px;
            li {
                margin-right: 15px;
                a{
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }
</style>