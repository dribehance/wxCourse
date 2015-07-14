var releaseCourseController = function($scope, teacherServices, errorServices, toastServices,SharedState, config) {
	$scope.course = new _m_course();
	$scope.course.repeat = 0;
	$scope.months = config.months;
	$scope.weeks = config.weeks;
	$scope.choose = function () {

		$scope.teachers = [{
			"name":"张三",
			"type":"语文",
			"intro":"简介"
		},{
			"name":"李四",
			"type":"语文",
			"intro":"简介"
		},{
			"name":"王五",
			"type":"语文",
			"intro":"简介"
		},{
			"name":"陈六",
			"type":"语文",
			"intro":"简介"
		}];
		SharedState.turnOn("teachers_panel");
		// teacherServices.queryByTrainer().then(function(data){
		// 	$scope.trainer.teachers = [];
		// })
	}
	$scope.select = function (teacher) {
		$scope.course.teacher.name = teacher.name;
		SharedState.turnOff("teachers_panel");
	}
	$scope.$watch("course.repeat",function(o,n) {
		$scope.course.time = [];
		if (n == "0") {
			$scope.course.time.push(new _m_day_repeater());
		}
		if (n == "1") {
			$scope.course.time.push(new _m_week_repeater())
		}
		if (n == "2") {
			$scope.course.time.push(new _m_month_repeater());
		}
	})
	$scope.addTime = function () {
		if ($scope.course.repeat == "0") {
			$scope.course.time.push(new _m_day_repeater());
		}
		if ($scope.course.repeat == "1") {
			$scope.course.time.push(new _m_week_repeater())
		}
		if ($scope.course.repeat == "2") {
			$scope.course.time.push(new _m_month_repeater());
		}
	}
	$scope.removeTime = function () {
		if ($scope.course.time.length == 1) {
			return;
		}
		$scope.course.time.pop();
	}
}