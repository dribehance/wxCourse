var authenInterceptor = function($rootScope, $location,$timeout, $q, userServices, localStorageService, config) {
    var defer = $q.defer();
    if (localStorageService.get("authen") == config.authen.PASS) {
        return true;
    } else {
        errorServices.authHide(config.message.authen[localStorageService.get("authen")]);
        $timeout(function(){
        	$rootScope.back();
        },500)
        // $location.path("/signin").replace();
        defer.reject()
    }
    return defer.promise;
}
