<template>
<div id="home2Container">
	<div class="events">
		<a v-on:click="loadPlaylists()">Load Users</a>
	</div>
	<div class="playlists">
		<ul class="grid">
		  <li v-for="playlist in playlists">
			<!--<input type="checkbox" id="jack" value="{{playlist.id}}" v-model="checkedPlaylists" v-bind:src="playlist.image">-->
		  	<img v-on:click="selectPlaylist(playlist.id)" class="playlistImg" value="{{playlist.id}}" v-bind:src="playlist.image" v-model="checkedPlaylists"/>
		  </li>
		</ul>
	</div>
	<div class="equalisor">
		<a v-on:click="selectPlaylist()">Load Users</a>
		{{message}}
	</div>
	<div class="mix">
		<span>Checked names: {{ checkedPlaylists }}</span>
	</div>
</div>
</template>
<!--
<style>
#home2Container{
	width: 80%;
	height: 800px;
	margin: 0 auto;
	border: 1px solid black;
}

.events {
	height: 100px;
	border: 1px solid black;
}

.playlists {
	height: 700px;
	border: 1px solid black;
	width: 300px;
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
	padding: 5px;
	float: left;
	width: 120px;
	height: 120px;
}

ul.grid li imgz{
	width:120px;
	height:120px;
	object-fit: cover;
	display:block;
	border:none;
	opacity: 1;
}

.playlistImg:hover {
    opacity: 0.7;
}

.playlistImgSelected {
	opacity: 0.5;
}

.equalisor {
	height: 700px;
	border: 1px solid black;
	width: 930px;
	float: left;
}

.mix {
	height:700px;
	width: 300px;
	border: 1px solid black;
	float: left;
}
</style>

<script>
 export default {
   data () {
     return {
       message: 'test',
       playlists: [],
       checkedPlaylists: []
     }
   },
   methods: {
     loadPlaylists: function () {
       this.$http.get('https://api.myjson.com/bins/56nz2', function (data, status, request) {
         if (status === 200) {
           this.playlists = data
         }
       })
     },
     selectPlaylist: function (id) {
       this.checkedPlaylists += id
     }
   }
}
</script>