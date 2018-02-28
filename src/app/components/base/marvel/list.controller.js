(() => {
  angular
    .module('marvel')
    .controller('MarvelListCtrl', List)

  function List ($http, $mdToast, $state, Config, MarvelService) {
    const vm = this

    vm.marvelForm = {}
    vm.viewDetails = viewDetails
    vm.marvelArray = []

    getCharacters()

    function getCharacters () {
      MarvelService.getCharacters()
        .then((item) => {
          vm.marvelArray = item.data.results
          console.log('marvelArray: ', vm.marvelArray)
        })
        .catch((err) => {
          console.log('err: ', err)
        })
    }

    // When the user hits the Answer button, we check the name of the hero, if it's corrects, and the user didn't use the tip, 
    // we set the score with 1 point.
    function viewDetails (idMarvel) {
      $state.go('details', { id: idMarvel })
    }
  }
})()
