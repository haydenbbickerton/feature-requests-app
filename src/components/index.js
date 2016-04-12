/* eslint indent:0,key-spacing:0 */

let components = {
  // Layout
  'navbar':   './layout/navbar.vue',
  'sidebar':  './layout/sidebar.vue',

  // Partials
  'back-button':  './ui/partials/back-button.vue',
  'breadcrumbs':  './ui/partials/breadcrumbs.vue',
  'preloader':    './ui/partials/preloader.vue',
  'spinner':      './ui/partials/spinner.vue',
  'loading-bar':  './ui/partials/vue-loading-bar.vue',

  // Data
  'data-table':  './data/data-table.vue'
}

function install (Vue) {
  // This lets us do dynamic requires
  let req = require.context('./', true, /^\.\/.*\.vue$/)

  // Attach each component as a directive in Vue
  for (let directive in components) {
    Vue.component(directive, req(components[directive]))
  }
}

export default install
