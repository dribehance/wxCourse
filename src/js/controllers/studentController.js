var studentController = function($scope, $rootScope, studentServices, parserServices, userServices, errorServices, localStorageService, config) {
    $scope.logout = function() {
        userServices.logout();
        $rootScope.back()
    }
    studentServices.query().then(function(data) {
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.student = parserServices.parseStudent(data.user);
        } else {
            errorServices.autoHide("服务器错误")
        }
    })
}
angular.module("WxCourse").controller("studentUploadController", function($scope) {
    $scope.$on("flow::filesSubmitted", function(event, flow, flowFile) {
        flow.opts.target = "http://120.25.225.14:8080/admin/FileUpload/special";
        flow.opts.testChunks = false;
        flow.opts.query = {
            "name": "sdfsdf",
            "kksdapp": "it wonderfull team"
        };
        // flow.upload();
    })
});
