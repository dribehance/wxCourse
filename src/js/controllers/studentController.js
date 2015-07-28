var studentController = function($scope, $rootScope, studentServices, parserServices, userServices, errorServices, localStorageService, config) {

    studentServices.query().then(function(data) {
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.student = parserServices.parseStudent(data.user);
        } else {
            errorServices.autoHide("服务器错误")
        }
    });
    $scope.logout = function() {
        userServices.logout();
        $rootScope.back()
    };
}
angular.module("WxCourse").controller("studentUploadController", function($rootScope, $scope, localStorageService, config) {

    $scope.$on("flow::fileSuccess", function(file, message, chunk) {
        $rootScope.back();
    })
    $scope.ajaxForm = function(flow) {
        flow.opts.target = config.url + "/app/UserCenter/updateUserInfo";
        flow.opts.testChunks = false;
        flow.opts.fileParameterName = "avatar";
        flow.opts.query = {
            "token": localStorageService.get("token"),
            "nickname": $scope.student.name,
            "sex": $scope.student.sex
        };
        flow.upload();
    }
});
