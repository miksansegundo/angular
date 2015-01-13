(function () {

	SWSPortal.factory('inBoxService', inBoxService);

	inBoxService.$inject = [
		'CONFIG',
		'globals',
		'httpService'
	];

	function inBoxService(CONFIG, globals, httpService) {

		var factory = {
				getMessages: getMessages
		};

		return factory; 
		
		
		///////
        
		function getMessages() {
	        var promise = httpService.get({ 
	        		name: 'messages',
	        	})
	        	.success(function(response) {
		        	return response;
				});
			return promise;
		};
	};

}());        