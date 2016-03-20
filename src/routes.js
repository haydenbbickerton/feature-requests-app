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
    }
  })
}
