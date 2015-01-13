(function () {

	SWSPortal.factory('selectHotelService', selectHotelService);

	selectHotelService.$inject = [
		'dashBoardService',
		'mainService',
		'$http',
		'$window',
		'$location',
		'CONFIG',
		'globals',
		'$rootScope',
		'$route'
	];

	function selectHotelService(dashBoardService, mainService, $http, $window, $location, CONFIG, globals, $rootScope, $route) {

		var viewsFolder = CONFIG.viewsFolder;
		var factory = {
			selectHotelByDefault: selectHotelByDefault,
			isHotelSelectorPath: isHotelSelectorPath,
			isHotelSelected: isHotelSelected,
			redirectToHotelSelector: redirectToHotelSelector
		};

		return factory; 
		

		///////
        
        function isHotelSelected() {
        	selectHotelByDefault();

        	return !!globals.user.hotel
        }

	 	function isHotelSelectorPath() {
		 	return ($location.path() === CONFIG.view.selectHotel.path);
	 	}

	 	function redirectToHotelSelector() {
	 		$location.path(CONFIG.view.selectHotel.path)
	 	} 

        function selectHotelByDefault() {

            if (globals.user.hotelList.length === 1) {
                globals.user.hotel = globals.user.hotelList[0];
                console.log("Hotel Selected by default");
            }
        } 

	};

}());        