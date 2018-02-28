const MarvelService = require('../../src/app/services/marvel.service.js')

const marvelService = MarvelService()

describe('Unit test for Marvel', () => {
  describe('\nFAIL Cases', () => {
    test('should return false when user do not answer correctly', (done) => {
      marvelService.checkAnswer('a', 'b').catch(done)
    })
  })

  describe('\nSuccess Cases', () => {
    test('should return true when user has answer correctly', (done) => {
      marvelService.checkAnswer('a', 'a').catch(done)
    })
  })
})
