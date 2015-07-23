var forgetController = function($scope, $location, $timeout, userServices, toastServices, errorServices, SharedState, config) {
    $scope.input = {
            "telephone": "",
            "smscode": "",
            "password": ""
        }
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
    $scope.getSmscode = function() {
            userServices.getSmscode($scope.input.telephone, config.smstype.FORGET).then(function(data) {
                $scope.smscode = data.sms_code;
                console.log("验证码" + $scope.smscode)
            })
            $scope.callbackTimer.counting = 1;
            $scope.callbackTimer.addSeconds(5);
        }
        // error handler
    $scope.nextStep = function() {
        // toastServices.show();
        userServices.exist($scope.input.telephone).then(function(data) {

            toastServices.hide();
            if (data.status == config.user.EXIST && data.code == config.request.SUCCESS) {
                SharedState.set("forgetStep", 2)
            } else {
                errorServices.autoHide("该手机号还未注册");
            }
        })
    }
    $scope.ajaxForm = function(form) {
        if ($scope.smscode != $scope.input.smscode) {
            errorServices.autoHide("验证码不正确")
            return false;
        }
        toastServices.show();
        userServices.forgetPassword($scope.input.telephone, $scope.input.password).then(function(data) {
            toastServices.hide();

            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                errorServices.autoHide("找回密码成功，跳转登录！")
                $timeout(function() {
                    $location.path("/signin").replace();
                }, 2000)
            } else {
                errorServices.autoHide("服务器错误");
            }
        })
    }
}
