(function () { 

	SWSPortal.factory('mainService', mainService);

	mainService.$inject = [ '$http', 'CONFIG', 'globals', '$q', '$rootScope', '$location', 'httpService'];

	function mainService($http, CONFIG, globals, $q, $rootScope, $location, httpService) {
		
		console.log("MAIN Service loaded");

		var factory = {
			extendTranslationsByView: extendTranslationsByView,
			getAllTranslations: getAllTranslations,
			showPreloaderAnimation: showPreloaderAnimation,
			loadApp: loadApp
		};
		
		return factory;

		////////

	 	function showPreloaderAnimation(value) {
	 		globals.preloader = value;
	 	}  
        
        function getLanguage() {
			return globals.user.language || CONFIG.languageByDefault;
        }

        function loadApp() {

			// GET ALL TRANSLATIONS FIRST
			getAllTranslations().then(function () {
				globals.loadDashboard({reload: true});
			});
        }

	 	function getAllTranslations() {
	 		var language = getLanguage();
	        var promise = httpService.get({
	        		name: 'all-translations-' + language, 
	        		params: language
	        	})
	        	.success(function(data) {
	        		$rootScope.translations = data;
		        	return data;
				});

			return promise;
		};

	 	function extendTranslationsByView(viewName) {
	 		var language = getLanguage();
	        var promise = httpService.get({
	        		name: viewName + '-translations-' + language, 
	        		params: language
	        	})
	        	.success(function(data) {
	        		angular.extend($rootScope.translations, data);
		        	return data;
				});

			return promise;
		};
		  
 	};

}());