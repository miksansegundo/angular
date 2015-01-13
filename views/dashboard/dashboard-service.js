(function () {

	SWSPortal.factory('dashBoardService', dashBoardService);

	dashBoardService.$inject = [
		'$location',
		'CONFIG',
		'$route',
		'mainService'
	];

	function dashBoardService($location, CONFIG, $route, mainService) {

		var factory = {
			loadDashboard: loadDashboard
		};

		return factory; 
		

		///////

		
     	function loadDashboard(obj) {
     		var obj = obj || {};

			if (CONFIG.view.dashboard.path !== $location.path()) {
				$location.path(CONFIG.view.dashboard.path);
				return true;
			}

			if (obj.reload) {
				$route.reload();
			}
		};
	};

}());