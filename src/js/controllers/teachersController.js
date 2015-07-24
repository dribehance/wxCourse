var teachersController = function($scope, teacherServices,parserServices, errorServices, toastServices, SharedState, config) {
    toastServices.show();
    teacherServices.queryByTrainer().then(function(data) {
        toastServices.hide();
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.teachers = parserServices.parseTeachers(data.teachers);
        } else {
            errorServices.autoHide("服务器错误");
        }
    })

}
