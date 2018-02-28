const MarvelService = require('../../src/app/services/marvel.service.js')

describe('Unit test for Marvel', () => {
  describe('\nFAIL Cases', () => {
    test('should return false when user do not answer correctly', (done) => {
      MarvelService.getCharacters()
        .then((item) => {
          expect(item.length).toBe(10)
          done()
        })
    })
  })

  describe('\nSuccess Cases', () => {
    test('should return a list of characters correctly containing 10 characters', (done) => {
      MarvelService.getCharacters()
        .then((item) => {
          expect(item.length).toBe(10)
          done()
        })
    })
  })
})
