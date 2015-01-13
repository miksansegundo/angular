(function () {

	var SWSPortal = angular.module("SWSPortal", ['ui.select', 'ui.bootstrap', 'ngRoute']);
	
	 // Configuracion de las Rutas
    SWSPortal.config(['$routeProvider', config]);
    
    function config ($routeProvider) {

        $routeProvider
	        .when('/:view',
	            {
	                templateUrl: function ($params) {
	                	return $params.view + ".html";
	                }
	            })
            .otherwise({ redirectTo: '/dashboard' });
    };
    
    // Alto jQuery
    SWSPortal.run(function ($rootScope) {
        $rootScope.$on('$viewContentLoaded', function () {
            equalheight('.column, .equal')
        });
    
    });
        
    // Accordion 
    SWSPortal.controller('AccordionDemoCtrl', function ($scope) {
      $scope.oneAtATime = true;

      $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
      };

      $scope.status = {
        open1: true,
        isFirstDisabled: false
      };
    });
    


}());




