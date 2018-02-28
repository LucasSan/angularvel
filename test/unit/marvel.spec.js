require('../../node_modules/angular/angular.min.js')
require('../../node_modules/angular-mocks/angular-mocks.js')
require('../../node_modules/angular-ui-router/release/angular-ui-router.js')
require('../../node_modules/angular-animate/angular-animate.min.js')
require('../../node_modules/angular-aria/angular-aria.min.js')
require('../../node_modules/angular-messages/angular-messages.min.js')
require('../../node_modules/angular-material/angular-material.js')
require('../../src/app/app.js')
require('../../src/app/config.js')
require('../../src/app/services/marvel.service.js')

describe('\nFail Cases', () => {
  beforeEach(angular.mock.module('marvel'))
  let _marvelservice
  beforeEach(inject((MarvelService) => {
    _marvelservice = MarvelService
  }))

  test('should return false when user do not put the id for details correctly', (done) => {
    _marvelservice.getDetail()
      .catch((err) => {
        expect(err.xhrStatus).toBe('error')
        done()
      })
  })
})

describe('\nSuccess Cases', () => {
  beforeEach(angular.mock.module('marvel'))
  let _marvelservice
  beforeEach(inject((MarvelService) => {
    _marvelservice = MarvelService
  }))

  test('should return a list of characters correctly containing 10 characters', (done) => {
    _marvelservice.getCharacters()
      .then((item) => {
        expect(item.length).toBe(10)
        done()
      })
  })
})
