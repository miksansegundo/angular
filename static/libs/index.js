var app = angular.module("sws2", ['pascalprecht.translate'])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider
            .useStaticFilesLoader({
              prefix: 'rest/translations-',
              suffix: '.json'
            })
            .use("en")
            .cloakClassName('ng-cloak');

    }]);

app.controller('TranslateController', function($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
});
