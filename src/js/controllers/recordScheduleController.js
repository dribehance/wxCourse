var recordScheduleController = function($scope, $routeParams, parserServices,scheduleServices, errorServices, toastServices, config) {
    toastServices.show();
    $scope.course_id = $routeParams.course_id;
    scheduleServices.queryRecord($scope.course_id).then(function(data) {
        toastServices.hide();
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
        	$scope.records = parserServices.parseSchedule.records(data.applys.list)
        }
        else {
        	errorServices.autoHide("服务器错误")
        }
    })
}
