<!--<template>
<div class="homeContainer">
	<div class="components">
		<div class="criterias" v-for="criteria in criterias">
		  <label>{{criteria.label}}</label>
		  <input class="range" type="range" v-model="criteria.value" min="0" max="100">
		  <span>{{criteria.value}}</span>
		</div>
		<div class="playlists">
			<ul class="grid">
				<li v-for="a in criterias">
					<img class="fb" src="../assets/Facebook.png">
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<style>
.homeContainer {
	background: #FAFAFA;
	margin-top: 50px;
}

.components {
	width: 80%;
	height: 700px;
	margin: 0 auto;
}

.criterias {
	width: 300px;
	background: red;
	text-align: right;
}

.playlists {
	position: relative;
	float: right;
	background: grey;
	height: 600px;
	width: 300px;
	padding-right: 30px;
	padding-top: 30px;
}

.fb {
	width: 50px;
}

ul.grid{
	list-style: none;
	width: 100%;
	margin: 0 auto;
	text-align: left;
}

ul.grid li{
	padding: 2px;
	float: left;
}

ul.grid li img{
	width:80px;
	height:80px;
	object-fit: cover;
	display:block;
	border:none;
}

</style>

<script>
  export default {
    data () {
      return {
        layout: 'grid',
        criterias: [
		{ label: 'energy', value: 100 },
		{ label: 'loudness', value: 100 },
		{ label: 'mode', value: 100 },
		{ label: 'speechiness', value: 100 },
		{ label: 'acousticness', value: 100 },
		{ label: 'instrumentalness', value: 100 },
		{ label: 'danceability', value: 100 },
		{ label: 'tempo', value: 100 },
		{ label: 'valence', value: 100 },
		{ label: 'duration_ms', value: 100 }],
        articles: [
          {
            title: 'test',
            url: '',
            image: {
              large: '',
              small: ''
            }
          },
          {
            title: 'test',
            url: '',
            image: {
              large: '',
              small: ''
            }
          }
        ]
      }
    },
    methods: {
      getQuote () {
        this.quote = 'data'
      },
      showDiv () {
        this.quote = true
      },
      hideDiv () {
        this.quote = false
      }
    }
  }
</script>-->
