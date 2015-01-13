
/* FACTORY del modulo de BookingForm */

(function () {

	SWSPortal.factory('bookingsFilterService', ['$http', 'CONFIG', factory]);

    function factory($http, CONFIG) {
    	
    	// Configuración general.
    	var restBase = CONFIG.restBase;		
		var bookingsFilterService = {
				getBookings: getBookings
		};
		
		return bookingsFilterService;
		
		////////
		
		function getBookings(filterObj) {
			console.log(filterObj);
		}
		
    };
}());

