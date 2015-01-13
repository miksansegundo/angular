(function() {

	SWSPortal.controller('LoginController', LoginController);

 	LoginController.$inject = ['$http', 'loginService'];

	function LoginController($http, loginService) {
		
		var vm = this;

		vm.loadApp = loginService.loadApp;
		vm.isAuthenticated = loginService.isAuthenticated;
		vm.logout = loginService.logout;
		vm.redirectToDistributorLogin = loginService.redirectToDistributorLogin;


		///////

	 };
	 
}());
