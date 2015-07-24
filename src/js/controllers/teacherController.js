var teacherController = function($scope, $routeParams, teacherServices, parserServices, errorServices, toastServices, SharedState, config) {

    teacherServices.queryById($routeParams.teacher_id).then(function(data) {
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.teacher = parserServices.parseTeacher(data);
        }
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
}
angular.module("WxCourse").controller("uploadTeacherAvatarController", function($scope, localStorageService, config) {
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
