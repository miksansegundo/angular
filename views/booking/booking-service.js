(function () {

	SWSPortal.factory('bookingService' , bookingService );
	
	bookingService.$inject = ['$http', '$location', 'CONFIG', 'httpService', 'globals'];

	function bookingService ($http, $location, CONFIG, httpService, globals) {
		var viewsFolder = CONFIG.viewsFolder;
		var restBase = CONFIG.restBase;
		var dummiesBase = CONFIG.dummiesBase;
		var bookingSelected = {};
		
		var factory = {
				getBooking : getBooking,
				getBookingSelected: getBookingSelected,
				getBookingAndReload: getBookingAndReload
		};
		
		return factory;
		
		function getBookingAndReload(search) {
			getBooking(search).then(function () {
				$location.path('/booking')
			});
		}

		function getBooking(search) {

			var promise = httpService.post({
					name: 'booking',
					postData: search,
					dummy: false
				}).success(function(response) {
					bookingSelected = response;
				    return response;
				});

		    return promise;
		};

		function getBookingSelected() {
			return bookingSelected;
		};

	};

}());