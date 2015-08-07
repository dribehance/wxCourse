var teacherController = function($rootScope, $scope, $routeParams, teacherServices, parserServices, errorServices, toastServices, SharedState, config) {

    teacherServices.queryById($routeParams.teacher_id).then(function(data) {
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.teacher = parserServices.parseTeacher(data);
        } else {
            errorServices.autoHide("服务器错误")
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
    $scope.ajaxForm = function() {
        var editable = {};
        editable[$scope.input.editable_key] = $scope.input.editable_content;
        teacherServices.update(editable,$routeParams.teacher_id).then(function(data) {
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                errorServices.autoHide("修改成功");
                $scope.teacher[$scope.input.editable_key] = $scope.input.editable_content;
                SharedState.turnOff("editable_panel");
            } else {
                errorServices.autoHide("服务器错误")
            }
        })
    }
    $scope.remove = function() {
        teacherServices.remove($routeParams.teacher_id).then(function(data) {
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $rootScope.back();
            } else {
                errorServices.autoHide("服务器错误")
            }
        });
    }
}
angular.module("WxCourse").controller("uploadTeacherAvatarController", function($scope,$routeParams, localStorageService, config) {
    $scope.$on("flow::filesSubmitted", function(event, flow, flowFile) {
        flow.opts.target = config.url + "/app/UserCenter/updateTeacherAvatar";
        flow.opts.testChunks = false;
        flow.opts.fileParameterName = "avatar";
        flow.opts.query = {
            "token": localStorageService.get("token"),
            "teacher_id": $routeParams.teacher_id,
        }
        flow.upload();
    })
});
