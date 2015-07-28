var consultController = function($rootScope, $scope, consultServices, parserServices, commentServices, errorServices, toastServices, config) {
    $scope.consult = {
        content: "",
    };
    $scope.ajaxForm = function() {
        consultServices.consult($scope.consult).then(function(data) {
        	if (data.code == config.request.SUCCESS) {
        		$rootScope.back();
        	}
        	else {
        		errorServices.autoHide("服务器错误")
        	}
        })
    };
}
