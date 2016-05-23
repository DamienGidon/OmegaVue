<template>
<div id="navbar">
  <a class="navbar-brand" href="index.html">Ω</a>
  <div class="navbar-item">
    <a class="navbar-item" href="#/modal">Commencer</a>
    <a class="navbar-item" href="#/start">Tutoriel</a>
  </div>
</div>
<router-view></router-view>
</template>

<style>
#navbar {
  background: transparent;
  height: 50px;
}

.navbar-brand {
  font-family: calibri;
  float: left;
  height: 50px;
  font-size: 35px;
  padding-left: 30px;
  padding-top: 10px;
  line-height: 20px;
  text-decoration: none;
}

.navbar-brand:hover,
.navbar-brand:focus {
  color: grey;
}

.navbar-item {
  font-family: calibri;
  font-size: 17px;
  text-align: right;
  padding-top: 12px;
  margin-right: 25px;
  background: ;
  text-decoration: none;
  color: grey;
}

.navbar-item:hover,
.navbar-item:focus {
  color: black;
}
</style>
