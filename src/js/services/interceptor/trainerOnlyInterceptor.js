var trainerOnlyInterceptor = function($location, $q, $timeout, userServices, errorServices, config) {
    var defer = $q.defer();
    // check login
    if (!userServices.checkAuth().status) {
        $location.path("/signin").replace();
        defer.reject();
        return;
    }
    // check trainer
    if (userServices.checkAuth().role == config.role.TRAINER) {
        return true;
    } else {
        errorServices.autoHide("只有培训方才可以开班")
        $timeout(function(){
            $location.path("/").replace();
        },500)
        defer.reject();
    }
    return defer.promise;
}
