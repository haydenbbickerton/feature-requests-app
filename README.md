# Feature Requests App (WIP)

Feature Requests is a API/SPA combo demonstrating some ways to piece together various pieces of the [Laravel](https://laravel.com/) and [Vue.js](http://vuejs.org/) ecosystems. A fictional app for helping a company create/view client profiles, creating feature requests from those clients, and prioritizing those feature requests.

This is the frontend, the ui. You can find the backend repo here - [feature-requests](https://github.com/haydenbbickerton/feature-requests).

#### [DEMO](https://feature-requests.haydenbickerton.com) - (The data is wiped every 24 hours)

### Frontend Tools
* [Vue](http://vuejs.org/) - MVVM javascript framework
* [vue-router](https://github.com/vuejs/vue-router) - Router for views
* [vue-resource](https://github.com/vuejs/vue-resource) - AJAX/Resource for communicating with API
* [Vuex](https://github.com/vuejs/vuex) - Centralized state management inspired by [Flux](https://facebook.github.io/flux/) 
* [vue-cli Scaffold](https://github.com/vuejs-templates/webpack) - For [Webpack](https://github.com/webpack/webpack) template
* [babel](https://github.com/babel/babel) - For ES2015 features including modules, promises, etc
* [eslint](https://github.com/eslint/eslint) - linting with [Javascript Standard Style](https://github.com/feross/standard)
* [AdminLTE](https://github.com/almasaeed2010/AdminLTE) - To make it look good 
* More

### Installation

```sh
$ git clone [git-repo-url] feature-requests-app
$ cd feature-requests-app
$ npm install
$ npm run dev #served at localhost:8080
$ npm run build #production build
```

#### Configuration
You'll want to change the urls to match your setup in `config/development.config.js` and `config/production.config.js`.

License
----
[MIT](opensource.org/licenses/MIT)

###Contributing
Pull requests are welcome :)