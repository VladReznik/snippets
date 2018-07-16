
<template>
    <div class="wrapper-page">
        <Aside/>
        <TopContent/>
        <div class="content">
            <ContentProduct/>
        </div>
    </div>
</template>

<script>

    import Aside from "@/components/Aside";
    import TopContent from "@/components/TopContent";
    import ContentProduct from "@/components/ContentProduct";

    export default {
        name: "product",
        components: {
            Aside,
            TopContent,
            ContentProduct
        }
    };
</script>

<style lang="scss">
</style>
