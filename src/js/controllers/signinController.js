var signinController = function($scope, $route, $location, localStorageService, userServices, toastServices, errorServices, config) {
    // if loginin,redirect to index
    if (localStorageService.get("role")) {
        $location.path("/").replace();
    }
    // temp user input
    $scope.input = {
        name: "",
        password: ""
    }
    // signin action
    $scope.ajaxSubmit = function(form) {
        toastServices.show();
        userServices.login($scope.input.name, $scope.input.password).then(function(data) {
            toastServices.hide();
            if (data.code == config.request.SUCCESS && data.status == "3") {
                localStorageService.set("token", data.token);
                localStorageService.set("role", data.type);
                localStorageService.set("user_id", data.user_id);
                if (localStorageService.get("role") == config.role.STUDENT) {
                    $location.path("/student").replace();
                } else {
                    $location.path("/trainer").replace();
                }

            } else {
                errorServices.autoHide(config.message.login[data.status]);
            }
        });
    }
}
