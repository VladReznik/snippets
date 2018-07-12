<template>
  <div class="home">
    <Aside/>
    <main class="indigo lighten-4">
      <TopContent/>
      <ContentSubcategory/>
      <!--<ContentProduct/>-->
    </main>
    <RightPanel/>
  </div>
</template>

<script>

import Aside from "@/components/Aside";
import ContentSubcategory  from "@/components/ContentSubcategory";
import TopContent from "@/components/TopContent";
import RightPanel from "@/components/RightPanel";
import ContentProduct  from "@/components/ContentProduct";
export default {
  name: "home",
  components: {
    Aside,
    ContentSubcategory,
    TopContent,
    RightPanel,
    ContentProduct

  }
};
</script>

<style lang="scss">
  .home{
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  main{
    padding-left: 240px;
    width: 100%;
    min-height: 100vh;
  }
</style>
