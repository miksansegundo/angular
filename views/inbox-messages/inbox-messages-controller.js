(function() {
	
	SWSPortal.controller('InboxController', InboxController);

    InboxController.$inject = ['CONFIG', 'globals', 'inBoxService'];

    function InboxController(CONFIG, globals, inBoxService) {
    	
        var vm = this;

        init();


        ///////

        function init() {
            getMessages()
        }   

        function getMessages() {
            inBoxService.getMessages().then(function (response) {
                vm.messages = response.data;
                
            });
        } 

     };

}());    
    



