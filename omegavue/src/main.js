import Vue from 'vue'
import Router from 'vue-router'
import App from './App2.vue'
import Start from './components/Start.vue'
import Mix from './components/Mix.vue'
// install router
Vue.use(Router)
Vue.use(require('vue-resource'))
// routing
var router = new Router()

router.map({
  '/start': {
    component: Start
  },
  '/mix/:id': {
    component: Mix
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/start'
})

router.start(App, '#app')
