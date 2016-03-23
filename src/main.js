/*eslint no-multiple-empty-lines: "off"*/
import vue from 'vue'
import app from './app'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Components from './components'
import Interceptors from './interceptors'
import routes from './routes'
import config from '../config'

const Vue = vue

/*
|------------------------------------------------
| Assets
|------------------------------------------------
*/
import './assets'

/*
|------------------------------------------------
| Router
|------------------------------------------------
*/
Vue.use(Router)

const router = new Router({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  linkActiveClass: 'active'
})

// Inject our routes into the router
routes(router)


/*
|------------------------------------------------
| Resource
|------------------------------------------------
*/
Vue.use(Resource)
Vue.http.options = config.http.options
Vue.http.headers.common = config.http.headers.common
Vue.use(Interceptors, config)

/*
|------------------------------------------------
| Components
|------------------------------------------------
| Attaching them to the root instance so they can
| be used in all views without having to import
*/
Vue.use(Components)

// Liftoff
router.start(app, 'app')
