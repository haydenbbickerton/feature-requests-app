/*eslint no-multiple-empty-lines: "off"*/
import vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import components from './components'
import plugins from './plugins'
import routes from './routes'
import config from '../config'

const Vue = vue
window.Vue = Vue
Vue.config.debug = true

/*
|------------------------------------------------
| Router
|------------------------------------------------
*/
Vue.use(Router)

const router = new Router({
  hashbang: false,
  history: true,
  saveScrollPosition: true,
  linkActiveClass: 'active'
})

// Inject our routes into the router
routes(router)

/*
|------------------------------------------------
| Plugins
|------------------------------------------------
*/
Vue.use(plugins, config)

/*
|------------------------------------------------
| Components
|------------------------------------------------
| Attaching them to the root instance so they can
| be used in all views without having to import
*/
Vue.use(components)


// The router needs a root
let root = Vue.extend({store})

sync(store, router)

// Liftoff
router.start(root, '#app')
