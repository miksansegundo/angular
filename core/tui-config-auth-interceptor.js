(function () {
 
    SWSPortal.factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$rootScope', 'globals'];

    function authInterceptor($rootScope, globals) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if (globals.user.token) {
                    config.headers.Authorization = globals.user.token
                }
                return config;
            }
        };
    }

    SWSPortal.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
        console.log("Config HTTP interceptor for Authorization")
    });

})();