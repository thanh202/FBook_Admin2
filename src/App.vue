<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.logo {
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
}
.register input,
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-right: auto;
  margin-bottom: 25px;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button,
.login button {
  width: 300px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
}
</style>
