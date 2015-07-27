var attendanceScheduleController = function($scope, $routeParams, scheduleServices, parserServices, errorServices, toastServices, SharedState, config) {
    scheduleServices.queryAttendance($routeParams.course_id, $routeParams.section).then(function(data) {
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.attendances = parserServices.parseSchedule.attendances(data.users);
        } else {
            errorServices.autoHide("服务器错误")
        }

    })
    $scope.attend = function(attendance) {
        scheduleServices.attend(attendance,$routeParams.course_id, $routeParams.section).then(function(data) {
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                attendance.status = attendance.status == "1" ? "0" : "1";
            } else {
                errorServices.autoHide("服务器错误")
            }
            
        })
    }
}
