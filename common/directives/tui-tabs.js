
/* DIRECTIVA para renderizar un bloque de petañas de control y su funcionalidad */

(function() {
	
	SWSPortal.directive('tuiTabs', function () {
		return {
			restrict : 'A',
			controller: tabsController,
			template: tabsTemplate,
			link: function($scope, element, attrs) {
				// Para modificar el DOM (element) que un jqLite (peque�o jQuery)
				// Para escuchar cambios en el DOM
				$scope;
			}
		};
	});
	
	/* Métodos de la directiva. */
	
	// Contenedor HTML para renderizar las pestañas.
	function tabsTemplate() {	
		return [
				'<div class="container">',
				   '<div class="row block">',
					   '<ul class="nav navbar-nav nav-manage">',
							'<li ng-repeat="tab in vm.tabs" ng-class="{active: isActive(tab)}">',
								'<a ng-click="changeView(tab)">{{tab.label}}</a>',
							'</li>',
					   '</ul>',
				   '</div>',
				'</div>',
				'<div ng-include="tabSelected.viewName"/>'
			].join('');
	}
	
	// Injección de dependencias.
	tabsController.$inject = ['$scope', 'CONFIG', 'route'];
	
	// Controlador.
	function tabsController($scope, CONFIG, route) {

		// Permite cambiar el elemento seleccionado en el menu.
		$scope.changeView = function(tab) {			
			$scope.tabSelected = tab;
		};
		
		// Permite establecer el estilo sobre el bot�n seleccionado.
		$scope.isActive = function(tab) {
			if ($scope.tabSelected && $scope.tabSelected.label === tab.label) {
				return true;
			}
			return false;
		};
				
		// Permite establecer el item seleccionado por defecto del menu.
		setDefaultTab = function() {
			angular.forEach($scope.vm.tabs, function(tab) {
				if (tab.byDefault) {
					$scope.changeView(tab);
				}
			});
		};
		
		$scope.$watch('vm.tabs', function(newValue, oldValue) {	
			if ($scope.vm.tabs.length) {
				setDefaultTab()	
			}
		});
	}
})();
