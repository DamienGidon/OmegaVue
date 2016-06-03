<template>
  <div id="container" class="container">
    <div id="centered">
      <div id="Omega">Omega. </div>
      <p id="slogan">Mixez vos playlists de Spotify et Deezer
        <div class="fb-login-button" data-max-rows="1" data-size="medium" data-show-faces="false" data-auto-logout-link="false"></div>
      </p>
      <img id="logo" src="C:\Users\Bobby\Documents\Intech\S4\PI\Omega\OmegaVue\omegavue\src\assets\Logo.png">
      <div id="app">
        <p><button type="button" id="show-modal" class="btn btn-danger" v-on:click="showModal()">Commencer</button></p>
        <div id="modal" v-if="modal">
          <div style="height: 100%; width:100%" id="modal-mask">
            <div style="height: 80%; width:25%" id="custom-modal">
              <div id="modal-header">
               <a v-on:click="hideModal()">X</a>
              </div>
              <div id="modal-body">
                <p>Connexion</p>
                <img  id="facebookLogin" src="C:\Users\Bobby\Documents\Intech\S4\PI\Omega\OmegaVue\omegavue\src\assets\facebookConnect.png">
                <p>OU</p>
                <p>Connectez-vous sur votre plateforme de streaming</p>
                <img  id="spotifyLogo" src="C:\Users\Bobby\Documents\Intech\S4\PI\Omega\OmegaVue\omegavue\src\assets\Spotify.png">
                <img  id="deezerLogo" src="C:\Users\Bobby\Documents\Intech\S4\PI\Omega\OmegaVue\omegavue\src\assets\Deezer.png">
              </div>
              <div id="modal-footer">
              </div>
            </div>
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
        modal: false
      }
    },
    methods: {
      getQuote () {
        this.quote = 'data'
      },
      showModal () {
        this.modal = true
      },
      hideModal () {
        this.modal = false
      }
    }
  }
</script>

<style>
#custom-modal {
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  border-radius: 5px;
  position: fixed;
  z-index: 1;
  top: 10%;
  left: 37.5%;
  width: 100%;
  height: 100%;
  display: table;
}
  

#modal-mask {
  background-color: rgba(0, 0, 0, .8);
  font-family: calibri;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 111;
  width: 100%;
  height: 100%;
}

#modal-header {
  height: 30px;
  text-align: right;
  margin: 15px;

}

#modal-body {
  font-size: 30px;
  color: grey;
  height: 600px;
  margin: 15px;
}

#modal-footer {
  height: 30px;
  margin: 15px;
}

#front {
  height: 100%;
}

#tuto {
  height: 40%;
}

#Omega {
  font-size: 100px;
  font-family: calibri;
  font-weight: bold;
  color: #2c2c2c;
}

#slogan {
  font-size: 25px;
  font-family: calibri;
}

#logo {
  width: 14%;
  margin: 30px;
}

#btncommencer {
  width: 20%;
  font-size: 20px;
}
#centered { 
  text-align: center;
}

#facebookLogin {
  margin-top: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .33);
}

#spotifyLogo {
  height: 150px;
}

#deezerLogo {
  padding-left: 20px;
  height: 140px;
}

#container {
  margin-top: 50px;
}

</style>