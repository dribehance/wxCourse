var loginInterceptor = function ($location,$q,userServices) {
	var defer = $q.defer();
	if (userServices.checkAuth().status) {
		return true;
	}
	else {
		$location.path("/signin").replace();
		defer.reject()
	}
	return defer.promise;
}