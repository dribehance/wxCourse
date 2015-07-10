angular.module('WxCourse', [
    'ngRoute',
    'mobile-angular-ui',
    "mobile-angular-ui.core.capture",
    "mobile-angular-ui.core.activeLinks",
    "mobile-angular-ui.core.sharedState",
])

.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            reloadOnSearch: false
        })
        .when('/trainer', {
            templateUrl: 'trainer.html',
            reloadOnSearch: false,
            controller: trainerController
        })
        .when('/student', {
            templateUrl: 'student.html',
            reloadOnSearch: false,
            controller: studentController
        })
        .when('/about', {
            templateUrl: 'about.html',
            reloadOnSearch: false,
            controller: aboutController
        });
}).run(function(appServices) {
    // init event such as routechangestart...
    appServices.init();
});
