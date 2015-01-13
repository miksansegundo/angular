(function() {

    SWSPortal.controller('BookingController', BookingController);
    
    BookingController.$inject = ['$scope', '$http', 'bookingService', '$routeParams', 'CONFIG'];
    
    
       function BookingController ($scope, $http, bookingService, $routeParams, CONFIG) {
    	    var vm = this;
	        /* Page data model */
	        vm.booking  = null;
	        
	        init();
	        
	        function init() {
				getBooking();
			}
	        
	        function getBooking() {
	        	// Option 1		
	        	var search = {
	    				'bookingCode': $routeParams.bookingCode, 
	    				'supplierCode': $routeParams.supplierCode, 
	    				'incoming': $routeParams.incoming,
	    				'hotelCode': $routeParams.hotelCode,
	    				'token': $routeParams.token,
	    				'languageCode': $routeParams.languageCode
	    			};
	        	
	        	bookingService.getBooking(search).then(function (response) {
	        		vm.booking = response.data;
	        	});
	        	// Option 2
	        	//vm.booking = bookingService.getBookingSelected();
	        }
	        
       };
    
}());    