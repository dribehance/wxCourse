var trainerController = function($scope, $http, $location, localStorageService, trainerServices, parserServices, userServices, errorServices, toastServices, SharedState, config) {
    trainerServices.query().then(function(data) {
        $scope.trainer = parserServices.parseTrainer(data);
        localStorageService.set("authen", $scope.trainer.status)
    });
    $scope.input = {
        "editable_key": "",
        "editable_content": ""
    }
    $scope.edit = function(m) {
        for (key in m) {
            $scope.input.editable_key = key;
            $scope.input.editable_content = m[key];
        }
        SharedState.turnOn("editable_panel");
    }
    $scope.ajaxForm = function() {
        var editable = {};
        editable[$scope.input.editable_key] = $scope.input.editable_content;
        trainerServices.update(editable).then(function(data) {
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                errorServices.autoHide("修改成功");
                $scope.trainer[$scope.input.editable_key] = $scope.input.editable_content;
                SharedState.turnOff("editable_panel");
            } else {
                errorServices.autoHide("服务器错误")
            }
        })
    }
    $scope.logout = function() {
        userServices.logout();
        $location.path("/index").replace();
    }
}
angular.module("WxCourse").controller("singleAvatarUploadController", function($scope,localStorageService, config) {
    $scope.$on("flow::filesSubmitted", function(event, flow, flowFile) {
        flow.opts.target = config.url + "/app/UserCenter/updateAvatar";
        flow.opts.testChunks = false;
        flow.opts.fileParameterName = "avatar";
        flow.opts.query = {
            "token": localStorageService.get("token")
        }
        flow.upload();
    })
});
