<template>
    <div class="wrapper-page">
        <Header/>
        <div class="content">
            <div class="wrapper">
                 <h2>Style Guide</h2>
                <div>
                    Lorem
                </div>
                <div>
                    Lorem
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header";

    export default {
        name: "Article",
        components: {
            Header
        }
    };
</script>

<style lang="scss" scoped>
    .content {
        padding: 20px 10px;
        background: rgba(255,255,255,0.1);
        .wrapper{
            background: white;
            padding: 10px 5px;
            text-align: left;
            min-width: calc(100vh - 112px);
        }
    }
    h2{
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 20px;
    }

</style>
