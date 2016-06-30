<template>
<div class="back">
<hr class="hr1left">
<label class="eventLab" for="switch-2" >Events</label>
<label class="groupLab" for="switch-1">Groups</label><hr class="hr1right">
<input value="checked" id="switch-1" type="radio" name="tog">
<div><div class="globalgroup">
  <div class="listgroup" v-for="group in groups">
      <div class="content-group" >
      <div class="content-group-image"> 
        <img class="imggroup" v-bind:src="group.img" /> </div>
          <a class="aGroup" href="#/mix/{{group.id}}">{{ group.title }}<br>{{group.start_time}}</a>
    </div>
  </div>
</div></div>

<input id="switch-2" type="radio" name="tog" checked="checked">
<div><div class="globalevent">
  <div class="listevent" v-for="event in events">
      <div class="content-event " >
      <div class="content-event-image">
      <img class="imgevent"  v-bind:src="event.img" />
      </div>
      <a class="aEvent" href="#/mix/{{event.id}}">{{ event.title }}</a>
    </div>
  </div>
</div> </div>



<hr class="hr2left"><label class="playlistLab">Playlists</label><hr class="hr2right">
<div class="globalplaylist">
	<div class="listplaylist" v-for="playlist in playlists">
  		<div class="content-playlist " >
    	<div class="content-playlist-image"> <img class="imgplaylist" v-bind:src="playlist.image" /></div>
            <a class="aPlaylist" href="#/mix/{{playlist.id}}">{{ playlist.name }}</a>
  	</div>
  </div>
</div>


</div>
</template>

<script>
export default {
  data () {
    return {
      events: [],
      groups: [],
      playlists: []
    }
  },
  methods: {
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
    loadPlaylists: function () {
      this.$http.get('http://omega.itinet.fr/Facebook/group/' + this.caca + '/playlistsGroup', function (data, status, request) {
        this.playlists = data
      })
    }
  },
  ready: function () {
    this.loadPlaylists()
    this.loadEvents()
    this.loadGroups()
  }
}

</script>

<style>
.hr1left {
 width: 30%;
float: left;
position: relative;
margin-left: 10.4%;
margin-right: 1.2%;
margin-top: 1%;
}
.hr1right {
 width: 30%;
margin-top: 1%;
 margin-right: 9.4%;
float: right;
position: relative;
}
.hr2left {
 width: 32%;
float: left;
position: relative;
margin-left: 10.4%;
}
.hr2right {
 width: 32%;
 margin-right: 9.4%;
float: right;
position: relative;
}
.back {
  padding-top: 2%;
  background-color: #F8F8F8;
  position: absolute;
  height: 100%;
  width: 100%;
}
[id^=switch],
[id^=switch] + *{
  display:none;
}

[id^=switch]:checked + *{
  display:block;
}

.eventLab {

background: #F8F8F8 ;
  font-family: Montserrat-UltraLight;
  color: #000000;
  font-size: 20px;
  padding: 0px 0px 5px 0px;
  text-decoration: none;
  margin-left: 2%;
  margin-top: -0.2%;
  position: absolute;
  align-content: center;

}
.eventLab:hover {
  background-color: #E8E8E8;
}
.groupLab:hover {
  background-color: #E8E8E8;
}
.playlistLab {

background-color:#F8F8F8;
  font-family: Montserrat-UltraLight;
  font-size: 20px;
  padding: 5px 1% 5px 2%;
  text-decoration: none;
  margin-left: 3%;
  margin-top: -0.8%;
  border-color: transparent;
  position:relative;
}
.groupLab {
background:#F8F8F8;
  color: #000000;
    font-family: Montserrat-UltraLight;
  font-size: 20px;
  padding: 0px 0px 5px 0px;
  text-decoration: none;
  position: absolute;
  margin-left: 10%;
    margin-top: -0.2%;
}

/*Event*/
.globalevent{
  width:82%;
  max-height: 205px;
  margin-bottom: 1%;
  margin-left: 9%;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #F8F8F8 ; 
  position: relative;
   -webkit-transition: max-height 2s; 
    transition: max-height 2s;
        padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 1%;
}
.globalevent:hover{

max-height: 10000px;
}

.listevent {
  margin-left: 0.5%;
  display: inline-block;
  width: 150px;
  height: 220px;
  border-style:none;
  margin-bottom:-2.3%;

}

.aEvent {
  height: 35px;
  width: 150px;
  font-family: Montserrat-UltraLight ;
  color:black;  
  font-size: 11px;
  text-align: left;
  padding-top: 0px;
  padding-left: 20px;
  background-color: #E8E8E8 ;
  margin-top: 0%;
 text-decoration: none;
 overflow: hidden;
 white-space: nowrap;
 text-overflow: ellipsis;


}

.imgevent {
  width:150px;
  height:150px;
}
/*Group*/
.globalgroup{
  width:82%;
  max-height: 205px;
  margin-bottom: 1%;
  margin-left: 9%;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #F8F8F8; ;
  position: relative;
   -webkit-transition: max-height 2s; 
    transition: max-height 2s;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 1%;
}
.globalgroup:hover{

max-height: 10000px;
}

.listgroup {
  margin-left: 1%;
  padding-top: 0%;
  margin-left: 0.5%;
  display: inline-block;
  width: 150px;
  height: 220px;
  border-style:none;
  margin-bottom: -2.6%;
}
.aGroup {
  height: 35px;
  width: 150px;
  font-family: Montserrat-UltraLight ;
  color:black;  
  font-size: 11px;
  text-align: left;
  padding-top: 0px;
  padding-left: 20px;
  background-color: #E8E8E8 ;
  margin-top: 0%;
 text-decoration: none;
 overflow: hidden;
 white-space: nowrap;
 text-overflow: ellipsis;



}

.imggroup {

  width:150px;
  height:150px;
}

/*Playlist*/
.globalplaylist{
  width:82%;
  max-height:400px;
  margin-left: 9%;
  margin-top: 0%;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #F8F8F8;
  position: relative;
  margin-bottom: 5%;
  -webkit-transition: max-height 2s; 
  transition: max-height 2s;
      padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 1%;
}
.globalplaylist:hover{
max-height: 10000px;
}
.listplaylist {
  padding-top: 0%;
  margin-left: 0.5%;
  display: inline-block;
  width: 150px;
  height: 200px;
  border-style:none;
  margin-bottom: -0.5%;

}
.aPlaylist {
  height: 35px;
  width: 150px;
  font-family: Montserrat-UltraLight ;
  color:black;  
  font-size: 11px;
  text-align: left;
  padding-top: 0px;
  padding-left: 20px;
  background-color: #E8E8E8 ;
  margin-top: 0%;
 text-decoration: none;
 overflow: hidden;
 white-space: nowrap;
 text-overflow: ellipsis;

}



.imgplaylist {

  width:150px;
  height:150px;



}
</style>
