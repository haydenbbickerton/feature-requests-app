window.breadcrumbsData = ['Home']

const breadcrumbsMixin = {
  methods: {
    setBreadcrumb (text) {
      Vue.set(breadcrumbsData, this._breadcrumbIndex, text)
    }
  },
  route: {
    activate (transition) {
      console.log('what')
      this._breadcrumbIndex = breadcrumbsData.length
      breadcrumbsData.length++
      transition.next()
    },
    deactivate (transition) {
      breadcrumbsData.splice(this._breadcrumbIndex, 1)
      transition.next()
    }
  }
}

export default breadcrumbsMixin
