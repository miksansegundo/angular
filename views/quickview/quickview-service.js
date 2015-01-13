
/* FACTORY del modulo de Dashboard */

(function () {

	SWSPortal.factory('quickViewService', quickViewService);

	// Inyección de dependencias.
	quickViewService.$inject = ['globals', 'route'];
	
    function quickViewService(globals, route) {
    	
    	var tabs;

    	// Configuración general.    	
		var quickViewService = {
			getTabs: getTabs
		};
		
		return quickViewService;

		function getTabs() {
			if (tabs) {
				return tabs;
			}
			
			angular.forEach(globals.user.menu, function(menu) {
				if (menu.id === "quickview") {
					tabs = menu.tabs;
				}
			});
			angular.forEach(tabs, function(tab) {
				tab.viewName = route.getViewByName({viewName: tab.viewName});
			});

			return tabs;
		};				
    	
    };
    
}());