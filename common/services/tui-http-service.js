(function () {

	SWSPortal.factory('httpService', httpService);

	httpService.$inject = [ '$http', 'CONFIG', 'globals', '$q' ];

	function httpService($http, CONFIG, globals, $q) {
		
		var factory = {
			get: get,
			post: post,
			getDummy: getDummy
		};
		
		return factory;


		////////

		function getDummy(name) {
	        var promise = $http.get(CONFIG.dummiesBase + name + '.json');
			return promise;
		};

		function get(objReq) {

			var defaultObjReq = {
				name: null, // nombre del servicio = nombre del json dummy sin extensión
				params: "", // ?id=3232&param=3232 o /32332/23323
				postData: null,  // objeto JSO
				dummy: true
			};
			var objReq = angular.extend(defaultObjReq, objReq);
			var promise;
			
			if (CONFIG.envDevelopment && objReq.dummy) {
				promise = getDummy(objReq.name);

			} else {
				promise = $http.get(CONFIG.restBase + objReq.name + objReq.params);
			}
			return promise
		};

		function post(objReq) {
			var defaultObjReq = {
				name: null,
				params: "",
				postData: null,
				dummy: true
			};
			var objReq = angular.extend(defaultObjReq, objReq);
			var promise;
			
			if (CONFIG.envDevelopment && objReq.dummy) {
				promise = getDummy(objReq.name);

			} else {
				promise = $http.post(CONFIG.restBase + objReq.name + objReq.params, objReq.postData);
			}

			return promise
		};
		  
 	};

}());