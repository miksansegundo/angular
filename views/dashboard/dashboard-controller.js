(function() {
	
	SWSPortal.controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$anchorScroll', '$scope', '$rootScope', '$http', '$location', 'CONFIG', 'globals'];

    function DashboardController($anchorScroll, $scope, $rootScope, $http, $location, CONFIG, globals) {
    	
        var vm = this;
        vm.goTo = goTo;
        vm.oneAtATime = true;

        vm.status = {
          open1: true,
          isFirstDisabled: false
        };
        
        init();


        ///////

        function init() {

        }

        function goTo(idHash) {
            $location.hash(idHash);
            $anchorScroll();
        }                

     };

}());    
    



