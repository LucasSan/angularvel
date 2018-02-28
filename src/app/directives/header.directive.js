angular
  .module('marvel')
  .directive('headermarvel', () => ({
    restrict: 'E',
    scope: {
      title: '@'
    },
    link (scope) {
      scope.contentUrl = 'src/app/components/common/header/header.html'
    },
    template: '<div ng-include="contentUrl"></div>'
  }))
