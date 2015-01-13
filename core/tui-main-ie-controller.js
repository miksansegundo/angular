  (function() {

    SWSPortal.controller('MainController', MainController);
    
    MainController.$inject = [
       '$rootScope'
    ];

    function MainController($rootScope) {

        var vm = this;
        vm.messages = [];

        init()


        ///////

        function init() {
            setConfigAndGlobalsInAllScopes();
        } 
        
        function setConfigAndGlobalsInAllScopes() {
            $rootScope.translations = {'APP_NAME': 'APP'};
        }
    };
  
}());




