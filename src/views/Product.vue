<template>
    <div class="wrapper-page">
        <Header/>
        <div class="content">
            <Aside/>
            <main>
                <ContentProduct/>
            </main>
        </div>
    </div>
</template>

<script>

    import Aside from "@/components/Aside";
    import Header from "@/components/Header";
    import ContentProduct from "@/components/ContentProduct";

    export default {
        name: "product",
        components: {
            Aside,
            ContentProduct,
            Header
        }
    };
</script>

<style lang="scss">
</style>
