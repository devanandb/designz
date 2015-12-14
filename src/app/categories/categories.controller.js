(function() {
  'use strict';

  angular
    .module('designz')
    .controller('CategoriesController', CategoriesController);

  /** @ngInject */
  function CategoriesController($timeout, webDevTec,$scope, toastr, $http, $routeParams) {

    
    var vm = this;
    vm.route = $routeParams.category;
    $scope.products = [];
    $http.get("http://skilledgeek.com/products/all")
    .then(function(response) {
        $scope.products = response.data;
        
        

        $scope.products = groupBy($scope.products, 'category', 'tid', 'cat_desc');
        //console.log($scope.products);
        
      });


    function groupBy(arr, key, id, cat_desc) {
        var newArr = [],
            types = {},
            newItem, i, j, cur;
        for (i = 0, j = arr.length; i < j; i++) {
            cur = arr[i];
            if (!(cur[key] in types)) {
                types[cur[key]] = { category: cur[key], cat_id: cur[id], cat_desc: cur[cat_desc], items: [] };
                newArr.push(types[cur[key]]);
            }
            types[cur[key]].items.push(cur);
        }
        return newArr;
    }

    
    $scope.cart = [];
    

    $scope.addToCart = function (item)
    {
        $scope.total=0;
        $scope.flag=0;

        if ($scope.cart.length>0) {

            for(var i=0; i<$scope.cart.length; i++)
            {
                console.log(item.nid, $scope.cart[i].nid);
                if(item.nid==$scope.cart[i].nid)
                    {
                        console.log('Exists');
                        $scope.flag=1;

                    } 

            }
            if($scope.flag==0){
                $scope.cart.push(item);
            }

        } else{
            $scope.cart.push(item);
        }

        for(var i=0; i<$scope.cart.length; i++)
        {

            $scope.total=$scope.total+parseInt($scope.cart[i].price);

        }
        //console.log($scope.cart);
        //console.log($scope.total);

        
    }

    $scope.deleteFromCart = function (index)
    {
        $scope.total=0;
        if(index>=-1) { $scope.cart.splice(index,1); };
        for(var i=0; i<$scope.cart.length; i++)
        {
            $scope.total=$scope.total+parseInt($scope.cart[i].price);

        }
    }
    
  

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1448623374240;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
