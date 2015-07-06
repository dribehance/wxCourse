angular.module('WxCourse', [
  'ngRoute',
  'mobile-angular-ui',
  'WxCourse.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});