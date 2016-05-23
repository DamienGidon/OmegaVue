<template>
    <div class="col-sm-6 col-sm-offset-3">
      <h1>Get a Free Chuck Norris Quote!</h1>
      <button class="btn btn-primary" v-on:click="getQuote()">Get a Quote</button>
      <button class="btn btn-primary" v-on:click="hideDiv()">Hide div</button>
      <button class="btn btn-primary" v-on:click="showDiv()">Show div</button>
      <div class="quote-area" v-if="quote">
      	<div id="test"></div>
      	<div id="test2"></div>
        <h2><blockquote>{{ quote }}</blockquote></h2>      
      </div>
    </div>
  </template>

<script>
  export default {
    data () {
      return {
        quote: 'caca'
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
</script>

<style>
	#test {
		height: 100px;
		width: 100px;
		background: red;
		position: absolute;
		z-index: 1;
	}#test2 {
		height: 110px;
		width: 110px;
		background: blue;
		position: absolute;
		z-index: 0;
		margin-left: 10px;
	}
</style>