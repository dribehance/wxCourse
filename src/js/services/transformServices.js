angular.module("WxCourse").factory("transformServices", function($http, $rootScope, $q, $location, localStorageService, config) {
	return {
		rever:function(obj) {
			var n = {};
			for ( key in obj ) {
				n[obj[key]] = key;
			}
			return n;
		}
	}
});