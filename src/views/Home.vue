<template>
  <div class="home">
    <Aside/>
    <main class="indigo lighten-4">
      <TopContent/>
      <ContentSubcategory/>
    </main>
  </div>
</template>

<script>

import Aside from "@/components/Aside";
import ContentSubcategory  from "@/components/ContentSubcategory";
import TopContent from "@/components/TopContent";

export default {
  name: "home",
  components: {
    Aside,
    ContentSubcategory,
    TopContent
  }
};
</script>

<style lang="scss">
  .home{
    display: flex;
    flex-wrap: wrap;
  }
  main{
    padding-left: 300px;
    width: 100%;
    min-height: 100vh;
  }
</style>
-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
