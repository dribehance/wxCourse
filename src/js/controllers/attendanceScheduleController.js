var attendanceScheduleController = function($scope, scheduleServices, parserServices, errorServices, toastServices, SharedState, config) {
    // scheduleServices.queryAttendance().then(function(data) {
    //     $scope.attendances = parserServices.parseSchedule.attendance(data);
    // })
	$scope.attend = function(attendance) {
		attendance.status = attendance.status == "1"?"0":"1";
	}
    $scope.attendances = [{
        "id": "0",
        "status": "0",
        "student": {
            "name": "张三",
            "type": "语文",
            "intro": "简介"
        }
    }, {
        "id": "0",
        "status": "1",
        "student": {
            "name": "张三",
            "type": "语文",
            "intro": "简介"
        }
    }, {
        "id": "0",
        "status": "0",
        "student": {
            "name": "张三",
            "type": "语文",
            "intro": "简介"
        }
    }];
}
