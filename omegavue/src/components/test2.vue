<template>
<div class="container">
  <div class="events">
    &nbsp
  </div>
  <div class="leftContent">
    <div class="playlists">
      <div class="checkbox_wrapper">
        <ul class="grid">
          <li v-for="playlist in playlists">
            <input class="inputs" type="checkbox" value="{{playlist.id}}" v-model="checkdPlaylists">
            <img class="imgs" v-bind:src="playlist.image">
            <label></label>
          </li>
        </ul>
      </div>
    </div>
    <div class="player">
      <iframe src="https://embed.spotify.com/?uri=spotify:user:11125386571:playlist:{{checkdPlaylists}}&theme=white" width="330" height="300" frameborder="0" allowtransparency="true"></iframe>
    </div>
  </div>
  <div class="middleContent">
    <div class="equalizer">
      <div class="mixing">
        {{ checkdPlaylists | json }}
      </div>
      <div class="criterias" v-for="criteria in criterias">
        <input class="range" type="range" v-model="criteria.value" min="0" max="100">
        <label >{{criteria.label}}</label>
        <span>{{criteria.value}}</span>
      </div>
    </div>
  </div>
</div>
</template>

<style>
.leftContent {
  position: relative;
  float: left;
}

.middleContent {

}

.playlists {
  width: 365px;
  overflow: auto;
  height: 43%;
  padding-bottom: 10px;
}

.player {
  width: 345px;
  padding-left: 15px;

}

.equalizer {
  position: relative;
}

.mixing {
  height: 480px;
}

.criterias {
}

.range {
    -webkit-appearance: slider-vertical;
    width: 28px;
    height: 120px;
    margin-left: 40px;
    float: left;
}

ul.grid{
  list-style: none;
  width: 90%;
  margin: 0 auto;
  text-align: left;
  padding-left: 10px;
  padding-top: 10px;

}

ul.grid li{
  padding: 2px;
  float: left;
  width: 100px;
  height: 100px;
}

.events {
  height: 10%;
}

.inputs {
}

.grid {
  margin: 150px;
}

.container {
  width: 90%;
  height: 800px;
  margin: 0 auto;
}

.checkbox_wrapper{
  position: relative;
  height: 100%;
  width: 100%;
}

.imgs {
  height: 100px;
  width: 100px;
  display: block;
  position: absolute;
  z-index: 0;
}

input[type="checkbox"] {
    height: 102px;
    opacity: 0;
    width: 102px;
    position: absolute;
    z-index: 1;
    margin: 0px 0px 0px 0px;
}

.inputs:checked {
    opacity: 0.6;
}


</style>

<script>
 export default {
   data () {
     this.loadPlaylists()
     return {
       message: 'test',
       playlists: [],
       checkdPlaylists: [],
       criterias: [
      { label: 'energy', value: 100 },
      { label: 'loudness', value: 100 },
      { label: 'mode', value: 100 },
      { label: 'speechiness', value: 100 },
      { label: 'acousticness', value: 100 },
      { label: 'danceability', value: 100 },
      { label: 'tempo', value: 100 },
      { label: 'valence', value: 100 },
      { label: 'duration_ms', value: 100 }]
     }
   },
   methods: {
     loadPlaylists: function () {
       this.$http.get('https://api.myjson.com/bins/mg3a', function (data, status, request) {
         if (status === 200) {
           this.playlists = data
         }
       })
     },
     selectPlaylist: function (id) {
       this.checkedPlaylists += id
     },
     changeBack: function () {

     }
   }
}
</script>