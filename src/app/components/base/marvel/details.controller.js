(() => {
  angular
    .module('marvel')
    .controller('MarvelDetailsCtrl', List)

  function List ($http, $mdToast, $stateParams, $state, Config, MarvelService) {
    const vm = this

    vm.marvelForm = {}
    vm.marvelArray = {}
    vm.back = back

    getMarvelDetails($stateParams.id)

    // Call my Marvel Service, that returns a promisse with the results from the API.
    function getMarvelDetails (id) {
      MarvelService.getDetail(id)
        .then((item) => {
          vm.index = Math.floor(Math.random() * item.data.results.length)
          const [detail] = item.data.results
          vm.marvelArray = detail
          console.log('vm.marvelArray: ', vm.marvelArray)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    function back () {
      $state.go('main')
    }
  }
})()
