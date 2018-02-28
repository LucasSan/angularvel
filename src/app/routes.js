(() => {
  const states = {
    base: [
      buildStates('main', false, '/', 'src/app/components/base/marvel/list.html', 'MarvelListCtrl', 'marvel'),
      buildStates('details', false, '/character/{id}', 'src/app/components/base/marvel/details.html', 'MarvelDetailsCtrl', 'detail')
    ]
  }

  angular.module('marvel')
    .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
      $locationProvider.html5Mode(true)
      setStates($stateProvider, $urlRouterProvider, $locationProvider, states.base)
    })
    .run(($trace, $transitions) => {
      setTransitions($trace, $transitions)
    })

  function setStates ($stateProvider, $urlRouterProvider, $locationProvider, array) {
    array.forEach((state) => {
      $stateProvider.state(state)
    })
    $urlRouterProvider.otherwise('/')
  }

  function setTransitions ($trace, $transitions) {
    $trace.enable('TRANSITION')
    $transitions.onStart({}, () => {
      return true
    })
  }

  function buildStates (name, abstract, url, templateUrl, controller, controllerAs, data) {
    return {
      name,
      abstract,
      url,
      templateUrl,
      controller,
      controllerAs,
      data
    }
  }
})()
