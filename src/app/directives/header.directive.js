angular
  .module('marvel')
  .directive('headermarvel', () => ({
    restrict: 'E',
    scope: {
      title: '@',
      pathOne: '@',
      pathTwo: '@',
      pathThree: '@'
    },
    link (scope) {
      scope.contentUrl = 'src/app/components/common/header/header.html'
    },
    template: '<div ng-include="contentUrl"></div>'
  }))
