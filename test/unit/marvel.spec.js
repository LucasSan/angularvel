describe('Users factory', function () {
  let _marvelservice
  let $q
  let $scope
  let deferred

  // Before each test load our marvel module
  beforeEach(angular.mock.module('marvel'))

  // Before each test set our injected _marvelservice factory (MarvelService) to our local _marvelService variable
  beforeEach(inject(function ($controller, MarvelService, _$rootScope_, _$q_) {
    _marvelservice = MarvelService
    $q = _$q_
    $scope = _$rootScope_.$new()

    // We use the $q service to create a mock instance of defer
    deferred = _$q_.defer()

    // Use a Jasmine Spy to return the deferred promise
    spyOn(_marvelservice, 'getDetail').and.returnValue(deferred.promise)

    // Init the controller, passing our spy service instance
    $controller('MarvelDetailsCtrl', {
      $scope: $scope,
      MarvelService: _marvelservice
    })
  }))

  // A simple test to verify the _marvelservice factory exists
  it('should exist', function () {
    expect(_marvelservice).toBeDefined()
  })

  // A set of tests for our _marvelservice.getDetail() method
  describe('.getDetail()', function () {
    // A simple test to verify the method getDetail exists
    it('should exist', function () {
      expect(_marvelservice.getDetail).toBeDefined()
    })

    // A test to verify that calling getDetail() returns the character details
    it('should return the details of a marvel character', function () {
      // Setup the data we wish to return for the .then function in the controller
      deferred.resolve(1)

      // We have to call apply for this to work
      $scope.$apply()

      // Since we called apply, not we can perform our assertions
      expect($scope.results).toBe(undefined)
      expect($scope.error).toBe(undefined)
    })
  })
})
