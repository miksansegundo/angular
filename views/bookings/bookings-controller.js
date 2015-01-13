
/* CONTROLLER del modulo de BookingList */

(function () {

	SWSPortal.controller('BookingsController', BookingsController);

	// Inyección de dependecias.
	BookingsController.$inject = ['$http', '$location', 'bookingsService', 'bookingService', '$rootScope', 'globals'];
	
	function BookingsController($http, $location, bookingsService, bookingService, $rootScope, globals) {
		
		// Se asocia a la variable el scope, debido a que al añadir 'this' sobre otros contextos perdemos la referencia de este.
		var vm = this;
		vm.date;
		// Almacena todas las reservas recuperados del servico.
		vm.bookings = [];
		// Almacena las reservas para una página determinada.
		vm.bookingsCurrentPage = [];
		// Totalización de reservas, por tipo de habitación
		vm.totals = [];
		vm.filterObj = {};
		vm.date = getDailyDate();
		vm.totalBookings = null;
		// Constants.
		vm.itemsPerPage = 25;
		vm.currentPage = 1;
		vm.maxSize = 5;
		vm.roomTypes = {"DBL":"DBL", "SGL":"SGL", "DUS":"DUS", "TPL":"TPL"};

		// Public methods.
		vm.getClassBookingType = getClassBookingType;
		vm.getClassType = getClassType;
		vm.getBookingTypeLabel = getBookingTypeLabel;
		vm.getBookingDetail = getBookingDetail;
		vm.getBookingsNextDay = getBookingsNextDay;
		vm.changePage = changePage;
		// Se inicializa el controlador.
		init();
				
		/* Métodos del controller */		
		// Init.
		function init() {
			getBookings();
		}
		
		// Permite hacer la lectura de reservas teniendo en cuenta el filtro.
		function getBookings() {
			// Se recupera información global para ejecutar la RQ.
			//vm.filterObj.codeLanguage = globals.user.language;
			vm.filterObj.hotelCode = globals.user.hotel.hotelCode;
			vm.filterObj.userName = globals.user.username;
			vm.filterObj.stayDate = vm.date;
			bookingsService.bookings(vm.filterObj).then(function(response) {
				vm.bookings = response.data;
				vm.bookingsCurrentPage = setCurrentPage(vm.currentPage, vm.itemsPerPage);
				vm.totalBookings = vm.bookings.length;
				// Se recupera el total de las reservas.
				vm.totals = bookingsService.getTotalBookingsPerRoom(vm.bookings);
			});
		}

		// Permite hacer el cambio de página.
		function changePage() {
			vm.bookingsCurrentPage = setCurrentPage(vm.currentPage, vm.itemsPerPage);
		};

		// Permite recuperar las reservas para una determinada página.
		function setCurrentPage(currentPage, itemsPerPage) {
			var cPage = currentPage - 1;
			if (currentPage === 1) {
				cPage = 0;
			}
			return vm.bookings.slice(cPage * itemsPerPage,  (cPage * itemsPerPage) + itemsPerPage - 1);
		};

		// Permite establecer un formato a la fecha.
		function getFormatDate(date) {
			return date.getFullYear() + '-' +  (parseInt(date.getMonth()) + 1) + '-' +  date.getDate();
		}

		// Lectura de la fecha actual.
		function getDailyDate() {
			var date = new Date(new Date().valueOf());
			// Se le suma 1 al mes porque los meses empiezan desde el 0(Enero).
			return getFormatDate(date);
		};

		// Permite añadir n dias a una determinada fecha.
		function addDaysToDate(date, days) {
			var initDate = new Date(date);
    		dateStamp = initDate.valueOf();
    		// DAYS días después, como milisegundos ( días * horas * minutos * segundos * milisegundos )
    		daysToDate = dateStamp +  (parseInt(days) * 24 * 60 * 60 * 1000 );
    		endDate = new Date(daysToDate);
    		return getFormatDate(endDate);
		};
		
		// Permite aplicar al daily un día más, o menos.
		function getBookingsNextDay(days) {
			// Se modifica la fecha de petición.
			vm.bookings = null;
			vm.date = addDaysToDate(vm.date, days);
			vm.filterObj.stayDate = vm.date;
			getBookings();
		};
		
        // Función para definir la clase(css) en función del tipo de reserva.
		function getClassBookingType(bookingType) {
			if (bookingType != null && bookingType != '') {
				switch(bookingType) {
		    		case 'M':
		    			return 'text-modified';
		    			break;
		    		case 'C':
		    			return 'text-canceled';
		    			break;
		    		default:
		    			return 'text-available';
				}
			}
			return '';
		};
		
		// Permite identificar el estilo del tipo de reserva(CANCELLED, MODIFIED or BOOKED).
		function getClassType(bookingType) {
			if (bookingType != null) {
				switch(bookingType) {
			    	case 'M':
			    		return 'modified';
			    		break;
			    	case 'C':
			    		return 'canceled';
			    		break;
			    	default:
			        	return '';
				}
			}
		};
	
		// Permite devolver la etiqueta que corresponde al estado de la reserva.
		function getBookingTypeLabel(bookingType) {
			if (bookingType != null) {
				switch(bookingType) {
			    	case 'M':
			    		return $rootScope.translations['MODIFIED'];
			    		break;
			    	case 'C':
			    		return $rootScope.translations['CANCELLED'];
			    		break;
			    	default:
			    		return $rootScope.translations['BOOKED'];
				}
			}
		};
		
		// Redirecciona sobre la vista de detalles de la reserva.
		function getBookingDetail(book) {
			if (!book) {
				return false;
			}
			
			var search = {
				'bookingCode': book.bookingId, 
				'supplierCode': book.supplierCode, 
				'incoming': book.incoming,
				'hotelCode': globals.user.hotel.hotelCode,
				'token': globals.user.token,
				'languageCode': globals.user.language
			};
		
			
			// Option 1
			$location.path('/booking').search(search); // ?bookingCode=23232&supplierCode=d233232323
			// OPtion 2
			//bookingService.getBookingAndReload(search); 
			
		};

		// Redirecciona sobre la vista de detalles de la reserva.
		//vm.getBookingDetail = function(booking) {
		//	bookingService.loadBooking(booking);
		//};
			
	};	
}());