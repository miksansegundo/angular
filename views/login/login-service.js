(function () {

	SWSPortal.factory('loginService', loginService);

	loginService.$inject = ['httpService', '$window', '$location', 'globals', 'CONFIG', 'mainService', 'selectHotelService', 'dashBoardService', '$q'];

	function loginService(httpService, $window, $location, globals, CONFIG, mainService, selectHotelService, dashBoardService, $q) {

		var tokenInUrl = getToken();
		var location = getLocation();
		globals.loadDashboard = dashBoardService.loadDashboard;
		var pathToRedirectAfterLogin;

		var factory = {
			loadApp: loadApp,
			isAuthenticated: isAuthenticated,
			externalLoginToApp: externalLoginToApp,
			redirectToDistributorLogin: redirectToDistributorLogin,
			redirectToLogin: redirectToLogin,
			userAuthenticationResolver: userAuthenticationResolver,
			logout: logout,
			setPathToRedirectAfterLogin: setPathToRedirectAfterLogin
		};

		return factory; 
		
		///////

	 	function setPathToRedirectAfterLogin(value) {
	 		if (!pathToRedirectAfterLogin || value === -1) {
		 		pathToRedirectAfterLogin = value || $location.path();
	 		}
	 	}

		function getToken() {
			var tokenInUrl = $location.search().token;
			$location.search('token', null);
			return tokenInUrl;
		}

		function isAuthenticated() {
			return globals.user.authenticated;
		}

		function setAuthenticated(value) {
			globals.user.authenticated = value;
		}

		function logout() {
			globals.user = {};
			setAuthenticated(false);
			redirectToLogin();
		}

		function getLocation() {
			var location = $window.location;
			// Inside iframe 
			if ($window.parent) {
				location = $window.parent.document.location;
			}
			return location
		};

		function externalLoginToApp(userData) {
	        getUserDetail(userData).then(function (response) {
	        	if (response.data.homeUrlWithToken) {
	        		location.href = response.data.homeUrlWithToken;
	        	}
	        });
		};

		function loadApp(userData) {
			getUserDetail(userData)
				.then(mainService.loadApp);
		};

		function redirectToDistributorLogin() {
			location.href = CONFIG.distributorRedirectUrl;
		};		

		function redirectToLogin() {
			$location.path(CONFIG.view.login.path);
		};

		function getUserDetail(userData) {
			 
	        var promise = httpService.post({
	        		name: 'userdetail', 
	        		postData: userData,
	        		dummy: true
	        	})
	        	.success(function(data) {
					globals.user = data;
					console.log("User Logged");
		        	return data;
				});

			return promise;
		};


	 	function getUserDetailByTokenUrl() {

			globals.user.token = tokenInUrl;
			getUserDetail().then(mainService.loadApp);

	 		return;
  	 	}

	 	function isUserPath() {
			return (CONFIG.view.user.path === $location.path())
	 	}

		function redirectAfterLogin(defer) {
            if (!pathToRedirectAfterLogin || pathToRedirectAfterLogin === -1) {
            	defer.resolve();
           		return;
            }

        	if (pathToRedirectAfterLogin === $location.path()) {
        		defer.resolve();
				setPathToRedirectAfterLogin(-1);
				return;
        	}

			defer.reject();
        	$location.path(pathToRedirectAfterLogin);
        	setPathToRedirectAfterLogin(-1);
        	return;
        }

		function userAuthenticationResolver() {
			var defer = $q.defer();
	 		var promise = defer.promise;   

 			if (!isAuthenticated()) {
 				defer.reject();
				if (tokenInUrl) {
		 			getUserDetailByTokenUrl();
		 			return promise;
	 			} 	
  				redirectToLogin();
 				return promise;	
 			}

 			if (isUserPath()) {		
 				defer.resolve();
 				return promise;
 			}

 			if (selectHotelService.isHotelSelectorPath()) {		
 				defer.resolve();
 				return promise;
 			}

 			if (selectHotelService.isHotelSelected()) {	
 				redirectAfterLogin(defer);
 				return promise;
 			}

 			if (!selectHotelService.isHotelSelected()) {
 				defer.reject();
 				mainService.showPreloaderAnimation(false); 
 				selectHotelService.redirectToHotelSelector();
 				return promise;
 			}
			
	 	}
	};

}());