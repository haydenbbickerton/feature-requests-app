window.breadcrumbsData = ['Home']

const breadcrumbsMixin = {
  methods: {
    setBreadcrumb: function (text) {
      Vue.set(breadcrumbsData, this._breadcrumbIndex, text)
    }
  },
  route: {
    activate: function (transition) {
      console.log('what')
      this._breadcrumbIndex = breadcrumbsData.length
      breadcrumbsData.length++
      transition.next()
    },
    deactivate: function (transition) {
      breadcrumbsData.splice(this._breadcrumbIndex, 1)
      transition.next()
    }
  }
}

export default breadcrumbsMixin
