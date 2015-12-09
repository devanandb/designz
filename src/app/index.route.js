(function() {
  'use strict';

  angular
    .module('designz')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/category/', {
        templateUrl: 'app/categories/categories.html',
        controller: 'CategoriesController',
        controllerAs: 'categories'
      })
      
      .otherwise({
        redirectTo: '/'
      });
  }

})();
