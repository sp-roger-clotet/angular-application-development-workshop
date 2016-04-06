(function () {
  'use strict';

  angular
    .module('app.list', [])
    .config(config);

  /** @ngInject */
  function config($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'app/main/list/list.html',
        controller: 'ListController',
        controllerAs: 'vm'
      })
  }
}());
