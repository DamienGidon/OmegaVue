import Vue from 'vue'
import Router from 'vue-router'
import App from './App2.vue'
import Hello from './components/Hello2.vue'
import Home from './components/Home.vue'
import Start from './components/Start.vue'
import Modal from './components/Modal.vue'
import Test from './components/test2.vue'

// install router
Vue.use(Router)
Vue.use(require('vue-resource'))
// routing
var router = new Router()

router.map({
  '/hello': {
    component: Hello
  },
  '/start': {
    component: Start
  },
  '/test/:id': {
    component: Test
  },
  '/modal': {
    component: Modal
  },
  '/home': {
    component: Home
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/hello'
})

router.start(App, '#app')
