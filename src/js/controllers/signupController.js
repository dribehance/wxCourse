var signupController = function($rootScope, $scope, $location, $timeout, localStorageService, userServices, errorServices, SharedState, config, toastServices) {
    if (config.role[localStorageService.get("role")]) {
        $location.path("/").replace();
    }
    $scope.input = {
            telephone: "",
            password: "",
            referee: "学生",
            smscode: ""
        }
        // bind telephone and password
    $scope.$watch("input.telephone", function(n, o) {
        $scope.input.username = n;
    });
    // counting
    $scope.callbackTimer = {};
    $scope.callbackTimer.counting = 0;
    $scope.callbackTimer.finish = function() {
        $scope.callbackTimer.counting = 0;
        $scope.$apply();
    }
    $scope.callbackTimer.addSeconds = function(seconds) {
        angular.element("#kkcountdown")[0].clear();
        angular.element("#kkcountdown")[0].resume();
        angular.element("#kkcountdown")[0].start();
    }
    $scope.nextStep = function() {
        // toastServices.show();
        userServices.exist($scope.input.telephone).then(function(data) {

            toastServices.hide();
            if (data.status == config.user.UNEXIST && data.code == config.request.SUCCESS) {

                SharedState.set("signUpStep", 2)
            } else {
                errorServices.autoHide("该手机号已经注册");
            }
        })
    }
    $scope.getSmscode = function() {
            userServices.getSmscode($scope.input.telephone, config.smstype.SIGNUP).then(function(data) {
                $scope.smscode = data.sms_code;
                console.log("验证码" + $scope.smscode)
            })
            $scope.callbackTimer.counting = 1;
            $scope.callbackTimer.addSeconds(30);
        }
        // error handler
    $scope.errormsg = "";
    // submit handler
    $scope.ajaxForm = function(form) {
        if ($scope.smscode != $scope.input.smscode) {
            errorServices.autoHide("验证码不正确")
            return false;
        }
        toastServices.show();
        userServices.register($scope.input.telephone, $scope.input.password, $scope.input.referee).then(function(data) {
            toastServices.hide();
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                localStorageService.set("token", data.token);
                localStorageService.set("role", data.type);
                localStorageService.set("user_id", data.user_id);
                if (localStorageService.get("role") == config.role.STUDENT) {
                    $location.path("/student").replace();
                } else {
                    $location.path("/trainer").replace();
                }

            } else {
                errorServices.autoHide("注册失败");
            }
        });
    }
}
