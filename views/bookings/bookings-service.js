
/* FACTORY del modulo de BookingList */

(function () {

	SWSPortal.factory('bookingsService', bookingsService);
	
	// Injección de dependencias.
	bookingsService.$inject = ['$http', 'CONFIG', 'mainService', 'httpService'];

    function bookingsService($http, CONFIG, mainService, httpService) {
    	
    	// Configuración general.
    	var restBase = CONFIG.restBase;
    	var dummiesBase = CONFIG.dummiesBase;
		var factory = {
				bookings: bookings,
				getTotalBookingsPerRoom: getTotalBookingsPerRoom
		};

		return factory;  
		
		/* Métodos del service */
		
		// Permite hacer la lectura de reservas(llamada al controlador Java), teniendo en cuenta los filtros. 
		function bookings(filterObj) {
			// Se adjuntan los filtros aplicados en el cliente.
			var filters = filterObj || {};
			return httpService.post({name: 'bookings', params: '', postData: filterObj, dummy: true});
		};		               
		
		// Permite calcular la totalización de reservas por tipo de habitación.
        function getTotalBookingsPerRoom(bookings) {
        	var roomTotalMap = {};
        	var total = 0;
			if (bookings != null) {				
				angular.forEach(bookings, function(book) {
					angular.forEach(book.rooms, function(room) {
						if (roomTotalMap[room.code] != null) {
							// Si existe la habitación en la hash, se incrementa el contador.
							roomTotalMap[room.code] += parseInt(room.roomNumber);
						} else {
							roomTotalMap[room.code] = 1;
						}
						total += parseInt(room.roomNumber);
					});
				});
				roomTotalMap["TOTAL"] = total;
			}
			return roomTotalMap;
		};
    };
}());

