export default (router) => {
  router.map({
    '/': {
      name: 'home',
      component: function (resolve) {
        require(['./pages/home.vue'], resolve)
      },
      subRoutes: {
        '/': {
          component: function (resolve) {
            require(['./pages/home/index.vue'], resolve)
          }
        }
      }
    },
    '/clients': {
      name: 'clients',
      component: function (resolve) {
        require(['./pages/clients.vue'], resolve)
      },
      subRoutes: {
        '/': {
          component: function (resolve) {
            require(['./pages/clients/index.vue'], resolve)
          }
        }
      }
    },
    '/features': {
      name: 'features',
      component: function (resolve) {
        require(['./pages/features.vue'], resolve)
      },
      subRoutes: {
        '/': {
          component: function (resolve) {
            require(['./pages/features/index.vue'], resolve)
          }
        }
      }
    }
  })
}
