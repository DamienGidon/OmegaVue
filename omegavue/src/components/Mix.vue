<template>
<html>
  <body>
    <div class="col-3" id="leftContent">
      <div class="eventPanel">
        <span v-for="event in events">
          <span v-if="event.Id == caca">
            <div class="eventWrapper">
              <img v-bind:src="event.Cover">
              <div class="eventText">
                {{event.Name}}
               </div>
            </div>
          </span>
        </span>
        <span v-for="group in groups">
          <span v-if="group.Id == caca">
            <div class="eventWrapper">
              <img v-bind:src="group.Cover">
              <div class="eventText">
                {{group.Name}}
               </div>
            </div>
          </span>
        </span>
      </div>
      <div class="moodsPanel">
        <span class="moodsText"><span class="value">{{moods.length}}</span> Ambiances</span>
        <ul class="moodUl">
          <li class="moodLi" v-for="mood in moods">
            <img v-bind:src="mood.image" id="{{mood.label}}" v-on:click="selectMood(mood.label)">
          </li>
        </ul>
      </div>

      <div class="playlistsPanel">
        <span class="playlistsText"><span class="value">{{playlists.length}}</span> Playlists trouvées</span>
        <ul class="playlistUl">
          <li class="playlistLi" v-for="p in playlists">
            <div class="playlist">
              <span v-if="p.check === false">
                <img v-bind:src="p.Cover" v-on:click="selectPlaylist(p)">
                <div class="playlistFooter">
                  <span class="playlistFooterText">{{p.Name}}<br>
                    {{p.Tracks.length}} Titre(s)
                  </span>
                </div>
              </span>
              <span v-else="p.check = true">
                <img class="checked" v-bind:src="p.Cover" v-on:click="selectPlaylist(p)">
                <div class="playlistFooter">
                  <span class="playlistFooterText">{{p.Name}}<br>
                    {{p.Tracks.length}} Titre(s)
                  </span>
                </div>
              </span>
            </div>
          </li>
        </ul>
      </div>

      <!-- <div class="mixesPanel"> -->
      <div class="moodsPanel">
        <span class="moodsText"><span class="value">{{mixes.length}}</span> Mixs</span>
        <ul class="moodUl">
          <li class="moodLi" v-for="mood in moods">
            <img v-bind:src="mood.image">
          </li>
        </ul>
      </div>

    </div>

    <div class="col-9" id="middleContent">
    <!-- {{provider}} -->
    <!-- {{currentTrack}} -->
    <!-- {{mixes | json}} -->
    <!-- {{caca}} -->
    <!-- {{checkedTracks | json}} -->
      <div class="col-12" style="margin-left: 2%">
        <span class="middleUl">
          <span v-for="p in playlists">
            <span v-if="p.check === true">
              <span v-for="track in p.Tracks">
                <span class="tracks">
                  <div class="trackWrapper">
                    <img class="checked" v-bind:src="p.Cover">
                    <div class="trackOverlay">
                      <img src="../assets/play.png" v-on:click="play(track.TrackId, track.RowKey)">
                    </div>
                  </div>
                  <div class="trackFooter">
                    <span class="trackFooterText">{{track.Title}}<br>{{track.AlbumName}}</span>
                  </div>
                </span>
              </span>
            </span>
          </span>
        </span>
        <div class="col-8" id="bottomContent">
          <div class="col-12">
            
          </div>

          <div class="col-6" id="players">
            <span v-if="provider === 'd'">
              <iframe class="deezerPlaayer" scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=false&width=700&height=350&color=007FEB&layout=dark&size=medium&type=playlist&id=30595446&app_id=1" width="700" height="350"></iframe>
            </span>
            <span v-else>
              <iframe src="" name="myFrame" style="visibility: hidden"></iframe>
              <iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:3rgsDhGHZxZ9sB9DQWQfuf" width="100%" height="80" frameborder="0" allowtransparency="true"></iframe>
            </span>
          </div>

          <div class="col-6" id="criterias">
            <div class="criterias" v-for="criteria in criterias">
              <input class="range" type="range" v-model="criteria.value" min="0" max="100">
              <label>{{criteria.label}}</label>
              <span>{{criteria.value}}</span>
            </div>
            <button v-on:click="createMix" name="btn" > test</button>
          </div>
        </div>
      </div>
    </div>

  </body>
</html>
</template>

<script>
 export default {
   data () {
     return {
       currentTrack: '',
       currentMood: '',
       playlists: [],
       tracks: [],
       events: [],
       groups: [],
       mixValue: [],
       mixes: [],
       test: [],
       checkedPlaylists: [],
       checkedTracks: [],
       provider: '',
       caca: '',
       moods: [
      { label: 'Soirée', image: 'http://image.noelshack.com/fichiers/2016/23/1465756669-party.png' },
      { label: 'Chill', image: 'http://image.noelshack.com/fichiers/2016/24/1465931485-moodchill.png' },
      { label: 'Sport', image: 'http://image.noelshack.com/fichiers/2016/24/1465931498-moodsport.png' },
      { label: 'Work', image: 'http://image.noelshack.com/fichiers/2016/24/1465931510-moodwork.png' }],
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
       this.$http.get('http://omega.itinet.fr/Facebook/group/' + this.caca + '/playlistsGroup', function (data, status, request) {
         this.playlists = data.map(p => { p.check = false; return p })
       })
     },
     loadEvents: function () {
       this.$http.get('http://omega.itinet.fr/Facebook/events', function (data, status, request) {
         this.events = data
       })
     },
     loadGroups: function () {
       this.$http.get('http://omega.itinet.fr/Facebook/groups', function (data, status, request) {
         this.groups = data
       })
     },
     createMix: function () {
       var datatest = this.criterias
       var mixedTracks
       var datajson = {}
       for (var i in datatest) {
         var a = datatest[i]
         datajson[a.label] = a.value
       }
       this.$http.post('/api/reset_waitlist_v2', datajson, function (data) {
       })
       this.$http.post('/api/reset_waitlist_v2', this.checkedTracks, function (data) {
         mixedTracks = data
       })
       this.mixes.push(mixedTracks)
       this.mixes.push(datajson)
       this.$http.post('/api/reset_waitlist_v2', this.mixes, function (data) {
       })
     },
     selectPlaylist: function (id) {
       id.check = !id.check
       if (id.check === false) {
         this.checkedTracks.splice(id, 1)
       } else {
         this.checkedTracks.push(id.Tracks)
       }
       // var index = this.checkedTracks.indexOf(id, 0)
       // if (index === -1) {
       //   this.checkedPlaylists.push(id)
       // } else {
       //   this.checkedPlaylists.splice(index, 1)
       // }
     },
     selectMood: function (id) {
       this.currentMood = id
     },
     play: function (id, RowKey) {
       this.currentTrack = id
       this.provider = RowKey.charAt(0)
     }
   },
   ready: function () {
     var currentEventOrGroup = this.$route.params.id
     this.$set('caca', currentEventOrGroup)
     this.loadPlaylists()
     this.loadEvents()
     this.loadGroups()
   }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}

* {
    box-sizing: border-box;
}

#criterias {
  font-size: 8px;
  position: relative;
  margin-left: 52%;
}

.row::after {
    content: "";
    clear: both;
    display: block;
}
.value {
  color: #58ACFA;
  font-weight: bold;
}

.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

#leftContent {
  background: white;
  height: 100%;
  float: left;
}

#middleContent {
  height: 100%;
  float: left;
  background: white; 
  padding: 2%;
}

#bottomContent {
  bottom: 10px;
  position: absolute;
  padding: 0px;
}

#bottomContent div {
  float: left;
}

#players {
  bottom: 0px;
  position: absolute;
}

.range {
  width: 10px;
  height: 100px;writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* WebKit */
}

.eventPanel {
  height: 10%;
  margin-bottom: 1%;
  min-height: 100px;
  padding: 1%;
}

.eventWrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.eventWrapper img {
  -webkit-filter: blur(5px);
  opacity: 1; 
  transition: filter 0.3s linear, opacity 0.3s linear;
  position: relative;
}

.eventText {
  height: 100%;
  width: 100%;
  font-family: 'Montserrat-UltraLight';
  color: white;
  font-size: 25px;
  line-height: 60px;
  text-align: center;
  position: absolute;
  top: 0;
  padding: 2%;
  z-index: 2;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.eventWrapper:hover img {
  -webkit-filter: blur(0px); 
  opacity: 0.9;
}

.moodsPanel {
  height: auto;
  text-align:center;
  margin-bottom: 1%;
  font-family: "Montserrat-UltraLight";
  font-size: 18px;
  padding-top: 1%;
  padding-bottom: 1%;
  overflow: hidden;
}

.moodUl {
  list-style: none;
  padding-left: 0px;
  padding-top: 0px;
  height: 100%;
  margin-top: 5px;
  padding: 1%;
}

.moodsPanel img {
  float: left;
  width: 25%;
  height: 23%;
  padding: 0.5%;
  cursor: pointer;
}

.playlistsPanel {
  padding-left: 1%;
  height: 54%;
  margin-bottom: 1%;
  text-align: center;
  font-family: "Montserrat-UltraLight";
  font-size: 18px;
  overflow-y: auto;
}

.playlistUl {
  padding-left: 0px;
  list-style: none;
}

.playlist {
  width: 24%;
  height: auto;
  float: left;
  margin: 0.5%;
  background: white;
  overflow-y: hidden;
  box-shadow: 0px 2px 7px 0px;
  cursor: pointer;
}

.playlistsPanel img {
  float: left;
  width: 100%;
}

.playlistsPanel .checked {
  border: 2px solid green;
  filter: grayscale(100%);
}

.playlistFooter {
  width: 100%;
  height: 40px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.mixesPanel {
  height: 15%;
}

.tracks {
  width: 7%;
  height: auto;
  float: left;
  margin: 0.2%;
  background: white;
  overflow-y: hidden;
  box-shadow: 0px 2px 7px 0px;
  cursor: pointer;
}

.tracks:hover {
}

.middleUl {
  height: 50%;
}

.trackFooter {
  margin-top: -5px;
  font-family: "Montserrat-UltraLight";
  padding-left: 3%;
  text-align: center;
  width: 100%;
  height: 40px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: white;
  background: #1E1E1E;
  -moz-animation-name: dropHeader;
  -moz-animation-iteration-count: 1;
  -moz-animation-timing-function: ease-in;
  -moz-animation-duration: 0.5s;

  -webkit-animation-name: dropHeader;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-timing-function: ease-in;
  -webkit-animation-duration: 0.5s;

  animation-name: dropHeader;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
}

.middleUl img {
  width: 100%;
  white-space: nowrap;
  position: relative;
  z-index: 1;
}

.trackWrapper {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  -moz-animation-name: dropHeader;
  -moz-animation-iteration-count: 1;
  -moz-animation-timing-function: ease-in;
  -moz-animation-duration: 0.7s;

  -webkit-animation-name: dropHeader;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-timing-function: ease-in;
  -webkit-animation-duration: 0.7s;

  animation-name: dropHeader;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.7s;
}

@-moz-keyframes dropHeader {
    0% {
        -moz-transform: translateY(-150px);
    }
    100% {
        -moz-transform: translateY(0);
    }
}
@-webkit-keyframes dropHeader {
    0% {
        -webkit-transform: translateY(-150px);
    }
    100% {
        -webkit-transform: translateY(0);
    }
}
@keyframes dropHeader {
    0% {
        transform: translateY(-150px);
    }
    100% {
        transform: translateY(0);
    }
}

.trackOverlay {
  width: 100%;
  height: 98%;
  opacity: 0;
  background: black;
  position: absolute;
  top: 0;
  visibility: hidden;
  z-index: 2;
  filter: alpha(opacity=80); /* For IE8 and earlier */;
  transition: visibility 0s, opacity 0.3s linear;
}

.trackOverlay img {
  width: 40%;
  position: absolute;
  top: 30%;
  left: 29%;
  height: auto;
  margin-left: auto;
}

.trackWrapper:hover .trackOverlay {
  visibility: visible;
  opacity: 0.7;
}


@media only screen and (max-width: 1500px) {
  .playlist {
    width: 32%;
  }
  .tracks {
    width: 8%;
  }
}

@media only screen and (max-width: 1225px) {
  .playlist {
    width: 49%;
  }
  .tracks {
    width: 9%;
  }
}
</style>