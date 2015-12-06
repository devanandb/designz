(function() {
  'use strict';

  angular
    .module('designz')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1448623374240;
    vm.showToastr = showToastr;

    activate();

    $scope.products = [
    {
        "catname": "Apparel",
        "catdesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum consectetur facere ex totam, necessitatibus voluptatibus eaque id exercitationem repellendus modi consequatur fuga. Quia excepturi, consectetur itaque, nihil repellat consequatur.",
        "items": [
            {
                "name": "Item One",
                "price": "230.00",
                "imgpath": "products/apparel/polo/black.jpg",
                "code":"D32345",
                "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, praesentium eveniet, ad sed similique quod!"
            },
            {
                "name": "Item Two",
                "price": "230.00",
                "imgpath": "products/apparel/polo/red.jpg",
                "code":"D32345",
                "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores praesentium aliquam saepe, repudiandae fugiat. Eius."
            },
            {
                "name": "Item Three",
                "price": "230.00",
                "imgpath": "products/apparel/polo/green.jpg",
                "code":"D32345",
                "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laborum ipsa illum. Fuga architecto, ab?"
            },
            {
                "name": "Item One",
                "price": "230.00",
                "imgpath": "products/apparel/polo/blue.jpg",
                "code":"D32345",
                "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, minus delectus totam, suscipit quasi saepe."
            },
            {
                "name": "Item One",
                "price": "230.00",
                "imgpath": "products/apparel/polo/orange.jpg",
                "code":"D32345",
                "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, consequuntur, laudantium. Iusto ex accusantium quidem!"
            },
            {
                "name": "Item One",
                "price": "230.00",
                "imgpath": "products/apparel/polo/melenge-grey.jpg",
                "code":"D32345",
                "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam molestiae culpa distinctio ullam, voluptatibus voluptate!"
            },
            {
                "name": "Item One",
                "price": "230.00",
                "imgpath": "products/apparel/polo/purple.jpg",
                "code":"D32345",
                "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi totam animi, accusamus, culpa dolores voluptates."
            },
            {
                "name": "Item One",
                "price": "230.00",
                "imgpath": "products/apparel/polo/white.jpg",
                "code":"D32345",
                "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil sequi exercitationem magni rem temporibus!"
            },
            {
                "name": "Item One",
                "price": "230.00",
                "imgpath": "products/apparel/polo/pink.jpg",
                "code":"D32345",
                "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ex quisquam, tempora consequatur porro nobis!"
            },
            {
                "name": "Item One",
                "price": "230.00",
                "imgpath": "products/apparel/polo/yellow.jpg",
                "code":"D32345",
                "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quis assumenda, possimus delectus, odio corporis!"
            }
        ]
    },
    {
        "catname": "Acrylic Trophies",
        "catdesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum consectetur facere ex totam, necessitatibus voluptatibus eaque id exercitationem repellendus modi consequatur fuga. Quia excepturi, consectetur itaque, nihil repellat consequatur.",
        "items": [
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            }
        ]
    },
    {
        "catname": "Wooden Trophies",
        "catdesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum consectetur facere ex totam, necessitatibus voluptatibus eaque id exercitationem repellendus modi consequatur fuga. Quia excepturi, consectetur itaque, nihil repellat consequatur.",
        "items": [
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            }
        ]
    },
    {
        "catname": "Imported Trophies",
        "catdesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum consectetur facere ex totam, necessitatibus voluptatibus eaque id exercitationem repellendus modi consequatur fuga. Quia excepturi, consectetur itaque, nihil repellat consequatur.",
        "items": [
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            }
        ]
    },
    {
        "catname": "Stationery",
        "catdesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum consectetur facere ex totam, necessitatibus voluptatibus eaque id exercitationem repellendus modi consequatur fuga. Quia excepturi, consectetur itaque, nihil repellat consequatur.",
        "items": [
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            },
            {
                "name": "Item One",
                "price": "230.00"
            }
        ]
    },
    {
        "catname": "Desktop Accessories",
        "catdesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum consectetur facere ex totam, necessitatibus voluptatibus eaque id exercitationem repellendus modi consequatur fuga. Quia excepturi, consectetur itaque, nihil repellat consequatur.",
        "items": [
            {
                "name": "Item One",
                "price": "230.00"
            }
        ]
    },
    {
        "catname": "Home Accessories",
        "catdesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum consectetur facere ex totam, necessitatibus voluptatibus eaque id exercitationem repellendus modi consequatur fuga. Quia excepturi, consectetur itaque, nihil repellat consequatur.",
        "items": [
            {
                "name": "Item One",
                "price": "230.00"
            }
        ]
    },
    {
        "catname": "Home Appliances",
        "catdesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum consectetur facere ex totam, necessitatibus voluptatibus eaque id exercitationem repellendus modi consequatur fuga. Quia excepturi, consectetur itaque, nihil repellat consequatur.",
        "items": [
            {
                "name": "Item One",
                "price": "230.00"
            }
        ]
    },
    {
        "catname": "Flowers",
        "catdesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum consectetur facere ex totam, necessitatibus voluptatibus eaque id exercitationem repellendus modi consequatur fuga. Quia excepturi, consectetur itaque, nihil repellat consequatur.",
        "items": [
            {
                "name": "Item One",
                "price": "230.00"
            }
        ]
    },
    {
        "catname": "Cakes",
        "catdesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum consectetur facere ex totam, necessitatibus voluptatibus eaque id exercitationem repellendus modi consequatur fuga. Quia excepturi, consectetur itaque, nihil repellat consequatur.",
        "items": [
            {
                "name": "Item One",
                "price": "230.00"
            }
        ]
    },
    {
        "catname": "Confectionaries",
        "catdesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum consectetur facere ex totam, necessitatibus voluptatibus eaque id exercitationem repellendus modi consequatur fuga. Quia excepturi, consectetur itaque, nihil repellat consequatur.",
        "items": [
            {
                "name": "Item One",
                "price": "230.00"
            }
        ]
    },
    {
        "catname": "Others",
        "catdesc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum consectetur facere ex totam, necessitatibus voluptatibus eaque id exercitationem repellendus modi consequatur fuga. Quia excepturi, consectetur itaque, nihil repellat consequatur.",
        "items": [
            {
                "name": "Item One",
                "price": "230.00"
            }
        ]
    }
    

];

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
