var sectionScheduleController = function($scope, $routeParams, scheduleServices, errorServices, toastServices, config) {
    toastServices.show();
    $scope.course_id = $routeParams.course_id;
    scheduleServices.querySection($scope.course_id).then(function(data) {
        toastServices.hide();
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
        	data.course_count = data.course_count || 0;
            $scope.sections = new Array(data.course_count);
        }
        else {
        	errorServices.autoHide("服务器错误")
        }
    })
}
