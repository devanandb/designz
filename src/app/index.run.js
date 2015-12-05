(function() {
  'use strict';

  angular
    .module('designz')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
