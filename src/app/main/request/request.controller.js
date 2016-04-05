/**
 * Request Controller
 * @namespace Controllers
 */
(function() {
  'use strict';

  angular
    .module('app.request')
    .controller('RequestController', RequestController);

  /**
   * @namespace Request
   * @desc Request to physiotherapist
   * @memberOf Controllers
   * @ngInject
   */
  function RequestController() {
    var vm = this;

    // Data
    vm.data = {};

    // Methods
    vm.send = send;

    //////////

    /**
     * Send message
     */
    function send() {
      console.log(vm.data);
    }
  }
})();
