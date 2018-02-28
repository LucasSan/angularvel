require('../../node_modules/angular/angular.min.js')
require('../../node_modules/angular-mocks/angular-mocks.js');
require('../../src/app/services/marvel.service.js')
require('../../src/app/app.js')

describe('\nFail Cases', () => {
  beforeEach(angular.mock.module('marvel'))
  let _marvelservice
  beforeEach(inject((MarvelService) => {
    _marvelservice = MarvelService
  }));

  test('should return false when user do not put the id for details correctly', (done) => {
    _marvelservice.getDetail()
      .catch((err) => {
        expect(err.xhrStatus).toBe('error')
      })
  })
})

describe('\nSuccess Cases', () => {
  beforeEach(angular.mock.module('marvel'))
  let _marvelservice
  beforeEach(inject((MarvelService) => {
    _marvelservice = MarvelService
  }));

  test('should return a list of characters correctly containing 10 characters', (done) => {
    _marvelservice.getCharacters()
      .then((item) => {
        expect(item.length).toBe(10)
        done()
      })
  })
})
