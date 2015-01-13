(function () {
 
    SWSPortal.factory('errorInterceptor', errorInterceptor);

    errorInterceptor.$inject = ['$q', '$location'];

    function errorInterceptor($q, $location) {
        return {
            'response': function(response) {

              if (response.status === 401) {
                console.log("RESPONSE", response.status);
                return $q.reject(response);
              }

              if (response.status === 404) {
                console.log("404")
                return $q.reject(response);
              }

              return response || $q.when(response);
            },

            'responseError': function(rejection) {

              console.log("REJECTION", rejection.status);
              return $q.reject(rejection);
            }
        }
    }

    SWSPortal.config(function ($httpProvider) {
        $httpProvider.interceptors.push('errorInterceptor');
        console.log("Config HTTP interceptor for errors")
    });

})();