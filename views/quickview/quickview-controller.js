
/* CONTROLLER del modulo de DashBoard */

(function() {
	
	SWSPortal.controller('QuickViewController', QuickViewController);

	// Inyección de dependecias.
	QuickViewController.$inject = ['globals', 'quickViewService'];

	function QuickViewController (globals, quickViewService) {

		// Se asocia a la variable el scope, debido a que al añadir 'this' sobre otros contextos perdemos la referencia de este.
		var vm = this;
		// Se recuperan las etiqutas del submenu a partir de la información de usuario.
		vm.tabs = quickViewService.getTabs();
	};
	
}());