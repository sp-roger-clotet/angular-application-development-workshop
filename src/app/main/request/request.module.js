(function () {
  'use strict';

  angular
    .module('app.request', []) // Create a new module
    .config(config);

  /** @ngInject */
  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/request/request.html',
        controller: 'RequestController',
        controllerAs: 'vm'
      })
  }
}());
