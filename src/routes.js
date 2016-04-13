import _ from 'lodash'
// import {loadingSet} from 'src/vuex/actions'

export default (router) => {
  router.map({
    '/': {
      name: 'app',
      component (resolve) {
        require(['./app.vue'], resolve)
      },
      subRoutes: {
        '/clients': {
          name: 'clients',
          component (resolve) {
            require(['./pages/gate.vue'], resolve)
          },
          subRoutes: {
            '/': {
              component (resolve) {
                require(['./pages/clients/index.vue'], resolve)
              }
            },
            '/:id': {
              name: 'client',
              currentObject: {
                statePath: 'clients.current',
                redirectPath: '/clients'
              },
              component (resolve) {
                require(['./pages/clients/single.vue'], resolve)
              }
            }
          }
        },
        '/features': {
          name: 'features',
          component (resolve) {
            require(['./pages/gate.vue'], resolve)
          },
          subRoutes: {
            '/': {
              component (resolve) {
                require(['./pages/features/index.vue'], resolve)
              }
            },
            '/:id': {
              name: 'feature',
              currentObject: {
                statePath: 'features.current',
                redirectPath: '/features'
              },
              component (resolve) {
                require(['./pages/features/single.vue'], resolve)
              }
            }
          }
        }
      }
    }
  })

  router.redirect({
    // redirect any not-found route to home
    '*': '/clients'
  })

  router.beforeEach((transition) => {
    router.app.$store.dispatch('LOADING_SET', Math.floor(Math.random() * 50) + 20)
    /**
     * For Client and Feature single views, if they come in through url
     * the current client/feature won't be set. Redirect to the index pages.
     */
    if (
        typeof transition.to.currentObject !== 'undefined' &&
        _.get(router.app.$store.state, transition.to.currentObject.statePath) === null
    ) {
      transition.redirect(transition.to.currentObject.redirectPath)
    } else {
      transition.next()
    }
  })

  router.afterEach((transition) => {
      /**
       * I'm dispatching these loading bar sets in kind of a round about way,
       * there's probably a better method for this.
       */
    router.app.$store.dispatch('LOADING_SET', 100)
  })
}
