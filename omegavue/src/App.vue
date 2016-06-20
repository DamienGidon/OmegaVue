<template>
<div id="navbar">
  <a class="navbar-brand" href="index.html">Ω</a>
  <a class="navbar-omega" href="index.html">Omega</a>
  <div class="navbar-items">
    <a class="navbar-item" href="#/modal">Commencer</a>
    <a class="navbar-item" href="#/start">Tutoriel</a>
  </div>
</div>
<router-view></router-view>
</template>

<style>
#navbar {
  background: #F5F5F5;
  height: 50px;
  display: block;
  border-bottom: 1px solid 2px;
}

.navbar-brand {
  font-family: calibri;
  float: left;
  height: 50px;
  font-size: 35px;
  padding-left: 22%;
  padding-top: 10px;
  line-height: 20px;
  text-decoration: none;
}

.navbar-brand:hover,
.navbar-brand:focus {
  color: grey;
}

.navbar-items {
  padding-right: 20%;
  padding-top: 10px;
  padding-right: 10px;
}

.navbar-item {
  font-family: calibri;
  font-size: 17px;
  text-align: right;
  margin-left: 20px;
  text-decoration: none;
  color: grey;
}

.navbar-omega {
  font-family: 'marguerite';
  src: url('assets/marguerite.ttf');
  float: left;
  color: white;
  margin-left: 44%;
  height: 50px;
  font-size: 35px;
  padding-top: 15px;
  line-height: 20px;
  text-decoration: none;
}

.navbar-item:hover,
.navbar-item:focus {
  color: black;
}
</style>
