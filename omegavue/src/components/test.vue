<template>
<iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:3rgsDhGHZxZ9sB9DQWQfuf&theme=white" width="640" height="720" frameborder="0" allowtransparency="true"></iframe>
	<a v-on:click="loadUsers()">Load Users</a>

	<ul>
	  <li v-for="user in users">
	    {{ user.name }} - {{ user.email }}
	  </li>
	</ul>


  <div class="checkbox_wrapper">
    <input type="checkbox" />
    <label></label>
</div>
</template>


<script>
 export default {
   data () {
     return {
       debug: true,
       users: []
     }
   },
   methods: {
     loadUsers: function () {
       this.$http.get('http://jsonplaceholder.typicode.com/users', function (data, status, request) {
         if (status === 200) {
           this.users = data
         }
       })
     }
   }
}
</script>

<style>
input[type="checkbox"] {
    opacity:0;
    height: 150px;
    width: 150px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
}

input[type="checkbox"] + label{
    background-image: url(http://cdn-images.deezer.com/images/playlist/7a0c9e914c3c3106549f1a31f569c9d5/250x250-000000-80-0-0.jpg);
    height: 150px;
    width: 150px;
    display:inline-block;
    padding: 0 0 0 0px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

input[type="checkbox"]:checked + label{
    background-image: url(http://cdn-images.deezer.com/images/playlist/7a0c9e914c3c3106549f1a31f569c9d5/250x250-000000-80-0-0.jpg);
    height: 150px;
    width: 150px;
    opacity: 0.7;
    display:inline-block;
    padding: 0 0 0 0px;
}
</style>