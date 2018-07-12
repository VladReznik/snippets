<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--&lt;!&ndash;<router-link to="/">Home</router-link>&ndash;&gt;-->
      <!--&lt;!&ndash;<router-link to="/about">About</router-link>&ndash;&gt;-->
    <!--</div>-->
      <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

}
button{
  cursor: pointer;
}
body{
  margin: 0;
  min-width: 1200px;
}
</style>
