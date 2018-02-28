(() => {
  angular
    .module('marvel')
    .controller('MarvelDetailsCtrl', List)

  function List ($stateParams, $state, MarvelService) {
    const vm = this

    vm.marvelArray = {}
    vm.back = back

    getMarvelDetails($stateParams.id)

    /**
     * Get the details of character by consuming the Marvel API.
     * @param {Object} id
     * @return {Object} Doc with the character recovered.
     */
    function getMarvelDetails (id) {
      MarvelService.getDetail(id)
        .then((item) => {
          const [detail] = item.data.results
          vm.marvelArray = detail
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
