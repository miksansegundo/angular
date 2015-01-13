  (function() {

    SWSPortal.controller('MainController', MainController);
    
    MainController.$inject = [
       '$rootScope', 
       '$location', 
       '$http', 
       '$modal', 
       'mainService', 
       'CONFIG', 
       'globals'
    ];

    function MainController($rootScope, $location, $http, $modal, mainService, CONFIG, globals) {

        var vm = this;
        vm.messages = [];
        vm.service = mainService;

        init()


        ///////

        function init() {
            setConfigAndGlobalsInAllScopes();
        } 
        
        function setConfigAndGlobalsInAllScopes() {

            $rootScope.globals = globals;
            $rootScope.view = CONFIG.view;
            $rootScope.layout = CONFIG.layout;
            $rootScope.translations = {};
        }
    };
  
}());