(function() {
	
	SWSPortal.run(initialize);

	initialize.$inject = ['$rootScope', 'mainService', 'runAfterViews', 'CONFIG']

	function initialize($rootScope, mainService, runAfterViews, CONFIG){
 		
		$rootScope.$on('$viewContentLoaded', function () {
			runAfterViews.init();
		});

		$rootScope.$on('$routeChangeStart', function(e, actual, previous) { 
			if (actual.$$route && actual.$$route.resolve) {
				mainService.showPreloaderAnimation(true);
			}
		});

		$rootScope.$on('$routeChangeSuccess', function(e, actual, previous) { 

			mainService.showPreloaderAnimation(false); 
		});
	}
}());    



