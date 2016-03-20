/*eslint no-multiple-empty-lines: "off"*/
import vue from 'vue'
import app from './app'
import Router from 'vue-router'
import configRouter from './routes'

const Vue = vue

/*
|------------------------------------------------
| Router Setup
|------------------------------------------------
*/
Vue.use(Router)

const router = new Router({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  linkActiveClass: 'active'
})

configRouter(router)

/*
|------------------------------------------------
| Components
|------------------------------------------------
| Have to use require() for the local file
*/
Vue.use(require('./components'))

// Liftoff
router.start(app, 'app')
