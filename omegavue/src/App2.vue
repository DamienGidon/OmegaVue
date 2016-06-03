<template>
<div id="navbar">
  <img class="logo" src="assets/OmegaGreyLogo.png">
  <a class="navbar-brand" href="index.html">OMEGA</a>
  <span id="navbar-items">
    <a class="navbar-item" href="#/start">MENU</a>
    <a class="navbar-item" href="#/hello2">LOGIN</a>
  </span>
</div>
<router-view></router-view>
</template>

<style>

@font-face {
  font-family: 'Montserrat-Regular';
  src: url('assets/Montserrat-Regular.otf');
  font-family: 'Montserrat-Light';
  src: url('assets/Montserrat-Light.otf');
  font-family: 'Montserrat-SemiBold';
  src: url('assets/Montserrat-SemiBold.otf');
  font-family: 'Montserrat-UltraLight';
  src: url('assets/Montserrat-UltraLight.otf');
}

body {
  margin: 0px;
}

#navbar {
  height: 125px;
  padding-left: 20%;
  padding-right: 20%;
}

.navbar-brand {
  font-family: 'Montserrat-UltraLight';
  font-size: 24px;
  color: grey;
  margin-top: 70px;
  float: left;
  text-decoration: none;
}

.logo {
  width: 30px;
  margin-top: 70px;
  padding-right: 5px;
  float: left;
}

.navbar-brand:hover,
.navbar-brand:focus {
  color: black;
}

.navbar-items, a {
  text-align: right;
  margin-top: 75px;
  float: right;
  padding-right: 20px;
}

.navbar-item {
  font-family: 'Montserrat-UltraLight';
  text-decoration: none;
  color: grey;
}

.navbar-item:hover,
.navbar-item:focus {
  color: black;
}
</style>
