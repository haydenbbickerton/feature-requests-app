/* eslint indent:0 */

let components = {
  // Layout
  'navbar': './layout/navbar.vue',
  'sidebar': './layout/sidebar.vue',

  // Partials
  'spinner': './ui/partials/spinner.vue'
}

export function install (Vue) {
  // This lets us do dynamic requires
  let req = require.context('./', true, /^\.\/.*\.vue$/)

  // Attach each component
  _.forEach(components, function (file, directive) {
    Vue.component(directive, req(file))
  })
}
