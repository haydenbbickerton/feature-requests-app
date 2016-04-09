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
            }
          }
        }
      }
    }
  })
}
