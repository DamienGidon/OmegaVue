<template>
<div class="container">
  <div class="text">
    <p id="frontText">Connectez-vous</p>
    <p id="backText">Mixez vos playlists de Spotify et Deezer</p>
  </div>
  <div class="panels">
    <div class="leftPanel">
      <h3>Connexion via <span id="blueFacebook">Facebook</span></h3>
      <p>Vous profiterez de la fonctionnalité <span id="blueFacebook">Partage</span> dans vos <span id="blueFacebook">énèvements</span> ainsi que dans vos <span id="blueFacebook">groupes</span></p>
      <p>Vous pourrez <span id="blueFacebook">liker</span> les playlists des autres utilisateurs</p>
      <p>Ainsi que d'autres fonctionnalités à venir</p>
      <img src="../assets/facebookConnect.png">
    </div>
    <div class="rightPanel">
      <h3>Connexion via <span id="greenSpotify">Spotify</span> ou <span id="blackDeezer">Deezer</span></h3>
      <p>Importez vos <span id="whiteBold">playlists</span> depuis <span id="greenSpotify">Spotify</span> ou <span id="blackDeezer">Deezer</span>, et mixez les ensemble</p>
      <p>Ajustez les <span id="whiteBold">critères</span> de vos playlists pour en créer une <span id="whiteBold">unique</span> à votre goût</p>
      <p>Récuperez les playlists de vos amis pour les <span id="whiteBold">fusionner</span> aux votres</p>
      <div class="rightPanelImgs">
        <img src="../assets/spotifyConnect.png"><br>
        <img src="../assets/deezerConnect.png">
      </div>
    </div>
  </div>
</div>
</template>

<script>
</script>

<style>
.container {
  margin-top: 50px;
  background: ;
}

.text p {
  font-family: 'Montserrat-UltraLight';
  text-align: center;
  margin: 0;
}

.text #frontText {
  font-size: 45px;
  margin-bottom: 10px;
}

.text #backText {
  color: grey;
}

.panels {
  height: 500px;
  width:50%;
  margin: 0 auto;
  color: white;
  font-family: 'Montserrat-UltraLight';
  margin-top: 40px;
}

.panels h3, .panels p {
  margin: 20px;
}

.panels h3 {
  font-size: 20px;
  margin-bottom: 50px;
}

.panels .leftPanel {
  position: relative;
  float: left;
  width: 45%;
  height: 100%;
  background: #292929;
  box-shadow: -5px 5px 8px -2px rgba(0, 0, 0, 0.7); 
  border-radius: 4px 4px 4px 4px;
}

.panels .leftPanel h3 {
  margin-left: 30px;
}

.panels .leftPanel p {
  margin-left: 40px;
}

.panels .leftPanel img {
  display: block;
  bottom: 0;
  margin-bottom: 60px;
  margin-left: 50px;
  position: absolute;
}

.panels .leftPanel #blueFacebook {
  color: #2783eb;
  font-weight: bolder;
}

.panels .rightPanel {
  position: relative;
  float: right;
  width: 45%;
  height: 100%;
  background: #292929;
  box-shadow: 5px 5px 8px -2px rgba(0, 0, 0, 0.7); 
  border-radius: 4px 4px 4px 4px;
}

.panels .rightPanel h3 {
  margin-left: 50px;
}

.panels .rightPanel p {
  margin-left: 60px;
}

.panels .rightPanelImgs {
  display: block;
  margin-bottom: 30px;
  margin-left: 70px;
  position: absolute;
  bottom: 0;
}

.panels .rightPanel #greenSpotify {
  color: #7bb016;
  font-weight: bolder;
}

.panels .rightPanel #blackDeezer {
  color: grey;
  font-weight: bolder;
}

.panels .rightPanel #whiteBold {
  color: white;
  font-weight: bolder;
}
</style>