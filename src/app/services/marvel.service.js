(() => {
  angular.module('marvel')
    .factory('MarvelService', ($http, $q, Config) => {
      /**
       * Get 10 characters from Marvel API.
       * @return {Object} Doc with all character recovered.
       */
      function getCharacters() {
        return request('', 'GET', { ts: 1, limit: 10, apikey: `${Config.MARVEL.PUBLIC_KEY}`, hash: `${Config.MARVEL.MD5}` })
      }

      /**
       * Get details from a characters by consulting the Marvel API.
       * @return {Object} Doc with detail character recovered.
       */
      function getDetail (id) {
        const urlAddress = `/${id}`
        return request(urlAddress, 'GET', { ts: 1, apikey: `${Config.MARVEL.PUBLIC_KEY}`, hash: `${Config.MARVEL.MD5}` })
      }

      /**
       * Responsible for request.
       * @return {Object} Doc with the returned promise.
       */
      function request (path, method, querystring) {
        const options = {
          method,
          url: `${Config.MARVEL.URL}${path}`,
          params: querystring
        }

        return $http(options)
          .then(success => { return success.data }, (err) => {
            return err
          })
      }

      return {
        getCharacters,
        getDetail
      }
    })
})()
