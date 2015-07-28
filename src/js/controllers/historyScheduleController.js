var historyScheduleController = function($scope, $routeParams, parserServices,scheduleServices, errorServices, toastServices, config) {
    toastServices.show();
    $scope.record_id = $routeParams.record_id;
    $scope.course_id = $routeParams.course_id;
    scheduleServices.queryHistory($scope.record_id,$scope.course_id).then(function(data) {
        toastServices.hide();
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
        	$scope.historys = parserServices.parseSchedule.historys(data.list)
        }
        else {
        	errorServices.autoHide("服务器错误")
        }
    })
}