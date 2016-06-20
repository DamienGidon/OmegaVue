<template>
<div class="backhello">
<div class="container">
      <a href="#/fb">Facebook Connection</a>
  <div class="panels">
    <div class="StreamPanel">
      <h3>Connexion via <span id="greenSpotify">Spotify</span> ou <span id="blackDeezer">Deezer</span></h3>
      <p>Importez vos <span id="whiteBold">playlists</span> depuis <span id="greenSpotify">Spotify</span> ou <span id="blackDeezer">Deezer</span>, et mixez les ensemble</p>
      <p>Ajustez les <span id="whiteBold">critères</span> de vos playlists pour en créer une <span id="whiteBold">unique</span> à votre goût</p>
      <p>Récuperez les playlists de vos amis pour les <span id="whiteBold">fusionner</span> aux votres</p>
      <div class="StreamPanelImgs">
        <img src="../assets/spotifyConnect.png"><br>
        <img src="../assets/deezerConnect.png">
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
</script>

<style>


.backhello {
  position: absolute;
  background-color: #F8F8F8;
  height: 89.5%;
  width: 100%;
}
.container {
  background-color: #F8F8F8;
  max-height: 100%;
  width: 100%;

}

.panels {
  margin: 0 auto;
  color: grey;
  font-family: 'Montserrat-UltraLight';
 width: 100%;
 height: 100%;
}

.panels h3, .panels p {
  margin: 30px;
  color: grey;
}

.panels h3 {
  font-size: 20px;
  margin-bottom: 50px;
}


.panels .StreamPanel {
  margin-top: 5%;
  position: relative;
  width: 40%;
  height: 500px;
  background: #E0E0E0;
  box-shadow: 5px 5px 8px -2px rgba(0, 0, 0, 0.7); 
  border-radius: 4px 4px 4px 4px;
  margin-left: 30%;
  text-align: center;
}

.panels .StreamPanel h3 {
  margin-left: 50px;
  padding-top: 7%;
}

.panels .StreamPanel p {
  margin-left: 60px;
}

.panels .StreamPanelImgs {
  display: block;
  margin-top: 20px;
  margin-bottom: 8%;
  margin-left: 22%;
  position: absolute;
  bottom: 0;
}

.panels .StreamPanel #greenSpotify {
  color: green;
  font-weight: bolder;
}

.panels .StreamPanel #blackDeezer {
  color: black;
  font-weight: bolder;
}

.panels .StreamPanel #whiteBold {
  color: #707070  ;
  font-weight: bolder;
}
</style>