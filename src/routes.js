import _ from 'lodash'

export default (router) => {
  router.map({
    '/': {
      name: 'app',
      component (resolve) {
        require(['./app.vue'], resolve)
      },
      subRoutes: {
        '/': {
          name: 'home',
          component (resolve) {
            require(['./pages/home.vue'], resolve)
          },
          subRoutes: {
            '/': {
              component (resolve) {
                require(['./pages/home/index.vue'], resolve)
              }
            }
          }
        },
        '/clients': {
          name: 'clients',
          component (resolve) {
            require(['./pages/clients.vue'], resolve)
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
            require(['./pages/features.vue'], resolve)
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
    '*': '/'
  })

  router.beforeEach((transition) => {
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
}
