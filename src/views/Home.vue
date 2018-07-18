<template>
    <div class="wrapper-page">
        <Header/>
        <div class="content">
            <Aside/>
            <main>
                <ContentSubcategory/>
            </main>
        </div>
    </div>
</template>

<script>

    import Aside from "@/components/Aside";
    import ContentSubcategory from "@/components/ContentSubcategory";
    import Header from "@/components/Header";

    export default {
        name: "home",
        components: {
            Aside,
            ContentSubcategory,
            Header
        }
    };
</script>

<style lang="scss">

</style>
