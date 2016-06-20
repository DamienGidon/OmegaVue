<template>
<div class="backhello">
<div class="container">
  <div class="panels">
    <div class="fbPanel">
      <h3>Connexion via <span id="blueFacebook">Facebook</span></h3>
      <p>Vous profiterez de la fonctionnalité <span id="blueFacebook">Partage</span> dans vos <span id="blueFacebook">énèvements</span> ainsi que dans vos <span id="blueFacebook">groupes</span></p>
      <p>Vous pourrez <span id="blueFacebook">liker</span> les playlists des autres utilisateurs</p>
      <p>Ainsi que d'autres fonctionnalités à venir</p>
      <img src="../assets/facebookConnect.png">
      <a href="#/start">Commencer</a>
    </div>
  </div>
</div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
    }
  }
</script>

<style>

.panels .fbPanel {
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

.panels .fbPanel h3 {
  margin-left: 30px;
  padding-top: 7%;
}

.panels .fbPanel p {
  margin-left: 40px;
}

.panels .fbPanel img {
  display: block;
  bottom: 0;
  margin-bottom: 60px;
  margin-left: 21%;
  position: absolute;
}

.panels .fbPanel #blueFacebook {
  color: blue;
  font-weight: bolder;
}

</style>