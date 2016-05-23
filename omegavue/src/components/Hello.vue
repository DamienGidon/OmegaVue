<template>
  <div id="container" class="container">
    <div class="row">
      <div class="col-lg-12">
        <div id="centered">
          <p id="Omega">Omega. </p>
          <p id="slogan">Mixez vos playlists de Spotify et Deezer
            <div class="fb-login-button" data-max-rows="1" data-size="medium" data-show-faces="false" data-auto-logout-link="false"></div>
          </p>
          <img id="logo" src="C:\Users\Bobby\Documents\Intech\S4\PI\Omega\OmegaVue\omegavue\src\assets\Test.gif">
          <div id="app">
            <p><button type="button" id="show-modal" class="btn btn-danger" v-on:click="showModal()">Commencer</button></p>
            <div id="modal" v-if="modal">
              <div style="height: 100%; width:100%" id="modal-mask">
                <div style="height: 40%; width:60%" id="custom-modal">
                  <button v-on:click="hideModal()">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr>
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
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  position: fixed;
  z-index: 1;
  top: 10%;
  left: ;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity .3s ease;
}

#modal-mask {
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 111;
  width: 100%;
  height: 100%;
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
}

#logo {
  width: 20%;
}

#btncommencer {
  width: 20%;
  font-size: 20px;
}
#centered { 
  text-align: center;
  height: 850px;
}



</style>