(() => {
  angular.module('marvel')
    .factory('MarvelService', ($http, $q, Config) => {
      function getCharacters () {
        const urlAddress = `characters?ts=1&limit=10&apikey=${Config.MARVEL.PUBLIC_KEY}&hash=${Config.MARVEL.MD5}`
        return request(urlAddress, 'GET')
      }

      function getDetail (id) {
        const urlAddress = `characters/${id}?ts=1&apikey=${Config.MARVEL.PUBLIC_KEY}&hash=${Config.MARVEL.MD5}`
        return request(urlAddress, 'GET')
      }

      function request (path, method) {
        const options = {
          method,
          url: `${Config.MARVEL.URL}${path}`
        }

        return $q((resolve, reject) => {
          $http(options)
            .then(success => resolve(success.data), (err) => {
              return reject(err)
            })
        })
      }

      return {
        getCharacters,
        getDetail
      }
    })
})()
