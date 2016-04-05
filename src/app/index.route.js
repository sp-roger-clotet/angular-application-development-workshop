(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }
})();