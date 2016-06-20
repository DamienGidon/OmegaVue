<template>
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
    background-color: #F8F8F8 ;

}

#navbar {
  height: 70px;
  padding-left: 20%;
  padding-right: 10%;
  background-color: #F8F8F8 ;
}

.navbar-brand {
  font-family: 'Montserrat-UltraLight';
  font-size: 24px;
  color: grey;
  margin-top: 2.6%;
  float: left;
  text-decoration: none;
  margin-left: -60px;
}

.logo {
  width: 30px;
  margin-top: 2.6%;
  padding-right: 10px;
  margin-left: -100px;
  float: left;
}

.navbar-brand:hover,
.navbar-brand:focus {
  color: black;
}

.navbar-items, a {
  text-align: right;
  margin-top: 35px;
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
