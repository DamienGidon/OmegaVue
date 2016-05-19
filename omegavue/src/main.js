import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Hello from './components/Hello.vue'
import Start from './components/Start.vue'

// install router
Vue.use(Router)

// routing
var router = new Router()

router.map({
  '/hello': {
    component: Hello
  },
  '/start': {
    component: Start
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/hello'
})

router.start(App, '#app')
