(() => {
  angular
    .module('marvel')
    .controller('MarvelListCtrl', List)

  function List ($state, MarvelService) {
    const vm = this

    vm.marvelForm = {}
    vm.viewDetails = viewDetails
    vm.marvelArray = []

    getCharacters()

    /**
     * Get 10 characters from Marvel API.
     * @return {Object} Doc with all character recovered.
     */
    function getCharacters () {
      MarvelService.getCharacters()
        .then((item) => {
          vm.marvelArray = item.data.results
        })
        .catch((err) => {
          console.log('err: ', err)
        })
    }

    /**
     * View details of a specific character.
     * @param {Object} idMarvel
     * @return {Object} redirect to specific controller.
     */
    function viewDetails (idMarvel) {
      $state.go('details', { id: idMarvel })
    }
  }
})()
