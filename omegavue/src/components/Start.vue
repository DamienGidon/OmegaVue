<template>
<h2>Events</h2>
<div  class="globalevent">
   <div class="events">
  <div class="listevent" v-for="event in events">
      <div class="content-event marginRight" >
      <a href="#/test/{{event.id}}"><h3>{{ event.title }}</h3></a>
      <div class="content-event-image"> <img class="imgevent" v-bind:src="event.img" /></a> </div>
    </div>
  </div>
  </div>
</div>
<br><br>

	 <h2>Groups</h2>
<div class="globalgroup">
	 <div class="groups">
	<div class="listgroup" v-for="group in groups">
  		<div class="content-group marginRight" >
    	<a href="#/test/{{group.id}}"><h3>{{ group.title }}</h3></a>
    	<div class="content-group-image"> <img class="imggroup" v-bind:src="group.img" /></a> </div>
  	</div>
  </div>
  </div>
</div>
<br><br>
	 <h2>Playlists</h2>
<div class="globalplaylist">
	 <div class="startPlaylists">
	<div class="listplaylist" v-for="playlist in playlists">
  		<div class="content-playlist marginRight" >
    	<a href="#/test/{{playlist.id}}"><h3>{{ playlist.name }}</h3></a>
    	<div class="content-playlist-image"> <img class="imgplaylist" v-bind:src="playlist.image" /></div>
  	</div>
  </div>
  </div>
</div>

</template>

<script>
export default {
  data () {
    this.loadEvents()
    this.loadGroups()
    this.loadPlaylists()
    return {
      events: [],
      groups: [],
      playlists: []
    }
  },
  methods: {
    loadEvents: function () {
      this.$http.get('https://api.myjson.com/bins/4wzd2', function (data, status, request) {
        if (status === 200) {
          this.events = data
        }
      })
    },
    loadGroups: function () {
      this.$http.get('https://api.myjson.com/bins/1go1y', function (data, status, request) {
        if (status === 200) {
          this.groups = data
        }
      })
    },
    loadPlaylists: function () {
      this.$http.get('https://api.myjson.com/bins/2re5i', function (data, status, request) {
        if (status === 200) {
          this.playlists = data
        }
      })
    }
  }
}

</script>

<style>
h1{
	font-size:30px;
	color:grey;
	text-align: ;
	font-family: calibri;
}

h3{
  font-size:30px;
  color:grey;
  padding-left: 95px;
  text-align: center;
  font-family: calibri;
}
.globalevent{
  width:90%;
  height:210px;
  margin-left: 5%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  background-color: #d0d0c5;
}
.events{
  vertical-align: middle;
}
.globalgroup{
  width:90%;
  height:210px;
  margin-left: 5%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  background-color: #d0d0c5;

}
.groups{
  vertical-align: middle;
}
.globalplaylist{
	width:90%;
  height:210px;
  margin-left: 5%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  background-color: #d0d0c5;
}
.startPlaylists{
  display: inline-block;
	vertical-align: middle;
}

.listevent {
	display: inline-block;
  vertical-align: middle;
  margin-right: 3%;
  margin-left: -4%;
}
.listgroup {
	
  display: inline-block;
  vertical-align: middle;
  margin-right: 3%;
  margin-left: -4%;

}
.listplaylist {
	
  display: inline-block;
  vertical-align: middle;
}

.content-event h3 {
  font-size:20px;
  color:#41403b;
  text-align: center;
}
.content-group h3 {
  font-size:20px;
  color:#41403b;
  text-align: center;
}
.content-playlist h3 {
  font-size:20px;
  color:#41403b;
  padding-left: 50px;
}
.content-event-image {

	width:320px;
	height:120px;
	margin-left:90px;
	padding-top:0px;
	background:#d0d0c5;
}
.content-group-image {

  width:320px;
  height:120px;
  margin-left:90px;
  padding-top:0px;
  background:#d0d0c5;
}
.content-playlist-image {

  width:120px;
  height:120px;
  margin-left:70px;
  padding-top:0px;
  background:#d0d0c5;
}
.imgevent {

	width:300px;
	height:100px;
	padding-left:10px;
	padding-top:8px;
}
.imggroup {

  width:300px;
  height:100px;
  padding-left:10px;
  padding-top:8px;
}
.imgplaylist {

  width:100px;
  height:100px;
  padding-left:10px;
  padding-top:8px;

}
.content-event p {
	line-height:20px;
	margin-top:10px;
	text-align:left;
}
.content-group p {
  line-height:20px;
  margin-top:10px;
  text-align:left;
}
.content-playlist p {
  line-height:20px;
  margin-top:10px;
  text-align:left;
}
h2{
	font-family: calibri;
	font-size:25px;
	color:#41403b;
	padding-top: 2px;
	margin-left: 160px;
	color:grey;
}



</style>
