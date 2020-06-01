<template>
  <div id="app">
<!--    <Header/>-->
    <router-view></router-view>
  </div>
</template>

<script>
  // import Header from "./components/Header/Header";
export default {
  name: 'App',
  components: {
    // Header,
  }
}
</script>

<style>
  body{
    padding:0;
    margin:0;
    background:#fff;
    font-family: 'Roboto Condensed', sans-serif;
  }
  a{
    text-decoration:none;
  }
  body a{
    transition:0.5s all;
    -webkit-transition:0.5s all;
    -moz-transition:0.5s all;
    -o-transition:0.5s all;
    -ms-transition:0.5s all;
    font-weight:400;
  }
  input[type="button"],input[type="submit"]{
    transition:0.5s all;
    -webkit-transition:0.5s all;
    -moz-transition:0.5s all;
    -o-transition:0.5s all;
    -ms-transition:0.5s all;
  }
  h1,h2,h3,h4,h5,h6{
    margin:0;
    font-weight:400;
    transition:0.5s all;
    -webkit-transition:0.5s all;
    -moz-transition:0.5s all;
    -o-transition:0.5s all;
    -ms-transition:0.5s all;
  }
  p{
    margin:0;
    font-family: 'Open Sans', sans-serif;
  }
  ul{
    margin:0;
    padding:0;
  }
  label{
    margin:0;
  }
</style>
