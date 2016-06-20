import Vue from 'vue'
import Router from 'vue-router'
import App from './App2.vue'
import StreamCo from './components/StreamCo.vue'
import Start from './components/Start.vue'
import Fb from './components/Fb.vue'
import Mix from './components/Mix.vue'
// install router
Vue.use(Router)
Vue.use(require('vue-resource'))
// routing
var router = new Router()

router.map({
  '/streamCo': {
    component: StreamCo
  },
  '/start': {
    component: Start
  },
  '/fb': {
    component: Fb
  },
  '/mix/:id': {
    component: Mix
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/streamCo'
})

router.start(App, '#app')
