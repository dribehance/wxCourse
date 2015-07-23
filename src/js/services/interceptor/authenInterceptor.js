var authenInterceptor = function($rootScope, $location,$timeout, $q, userServices,errorServices, localStorageService, config) {
    var defer = $q.defer();
    if (localStorageService.get("authen") == config.authen.PASS) {
        return true;
    } else {
        errorServices.autoHide(config.message.authen[localStorageService.get("authen")]);
        $timeout(function(){
            $rootScope.back();
        },3000)
        defer.reject()
    }
    return defer.promise;
}
