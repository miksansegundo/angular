(function() {
	
	SWSPortal.controller('ContactController', ContactController);

    ContactController.$inject = ['CONFIG', 'globals', 'contactService'];

    function ContactController(CONFIG, globals, contactService) {
    	
        var vm = this;

        vm.service = contactService;

        init();


        ///////


        function init() {
        }   

     };

}());    
    



