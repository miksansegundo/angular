(function() {
	
    SWSPortal.config(router);
    
    router.$inject = ['routeProvider', '$routeProvider', 'CONFIG']; 

    function router(routeProvider, $routeProvider, CONFIG) {

        $routeProvider
	        .when('/login', {
	        	templateUrl: routeProvider.getViewByName({viewName: 'login'}),
	        	resolve: {
	            	extendTranslations: extendTranslationsResolver
	            }
	        })
	        .when('/contact', {
        		templateUrl: routeProvider.getViewByName({viewName: 'contact'}),
	        	resolve: {
	            	extendTranslations: extendTranslationsResolver
	            }
	        })
	        // Automatic Private Routes By URL param
	        // Demo for get params inject $routeParams in controller: 
	        // <a href="#/booking?id1=1111&id2=2222"> 
	        .when('/:viewName', 
	            {
	                templateUrl: routeProvider.getViewByName,
	                reloadOnSearch: false,
	                resolve: {
	                	userAuthentication: userAuthenticationResolver
	                }
	            })
	        .otherwise({ redirectTo: CONFIG.view.dashboard.path });

		console.log("Router configured");

     };

    ///////

	extendTranslationsResolver.$inject = ['mainService'];

	function extendTranslationsResolver(mainService) { 
	    return mainService.extendTranslationsByView('public');
	}
 
	userAuthenticationResolver.$inject = ['loginService'];

	function userAuthenticationResolver(loginService) { 
		loginService.setPathToRedirectAfterLogin();
	    return loginService.userAuthenticationResolver();
	}
 
}());    



