(function() {
	
	SWSPortal.controller('SelectHotelController', SelectHotelController);

    SelectHotelController.$inject = ['CONFIG', 'globals', 'selectHotelService', '$rootScope', 'dashBoardService'];

    function SelectHotelController(CONFIG, globals, selectHotelService, $rootScope, dashBoardService) {
    	
        var vm = this;

        vm.loadDashboard = dashBoardService.loadDashboard;

        init();


        ///////


        function init() {

        }   


     };

}());    
    



