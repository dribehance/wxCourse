var studentController = function($scope, $rootScope, studentServices, parserServices, userServices, errorServices, localStorageService, config) {

    studentServices.query().then(function(data) {
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.student = parserServices.parseStudent(data.user);
        } else {
            errorServices.autoHide("服务器错误")
        }
    });
    $scope.ajaxForm = function() {
        studentServices.update($scope.student).then(function(data){
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                errorServices.autoHide("更新成功");
            }
            else {
                errorServices.autoHide("服务器错误")
            }
        })
            
    }
    $scope.logout = function() {
        userServices.logout();
        $rootScope.back()
    };
}
angular.module("WxCourse").controller("studentUploadController", function($rootScope, $scope, localStorageService, config) {

    $scope.$on("flow::filesSubmitted", function(event, flow, flowFile) {
        // $rootScope.back();
        flow.opts.target = config.url + "/app/UserCenter/updateAvatar";
        flow.opts.testChunks = false;
        flow.opts.fileParameterName = "avatar";
        flow.opts.query = {
            "token": localStorageService.get("token")
        };
        flow.upload();
    })
});
