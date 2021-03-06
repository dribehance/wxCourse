var courseSettingController = function($rootScope, $scope, $routeParams, parserServices, courseServices, teacherServices, errorServices, toastServices, SharedState, config) {
    $scope.months = config.months;
    $scope.weeks = config.weeks;
    courseServices.queryCourseType().then(function(data) {
        if (data.code == config.request.SUCCESS) {
            $scope.course_types = parserServices.parseCourseTypes(data.types);

        } else {
            errorServices.autoHide("服务器错误");
        }
    })
    courseServices.queryById($routeParams.course_id).then(function(data) {
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.course = parserServices.parseCourse(data.course);
        } else {
            errorServices.autoHide("服务器错误");
        }
    })
    $scope.choose = function() {

        SharedState.turnOn("teachers_panel");
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
    $scope.select = function(teacher) {
        $scope.course.teacher.name = teacher.name;
        SharedState.turnOff("teachers_panel");
    }
    $scope.$watch("course.repeat", function(n, o) {
        if (o === undefined || n === undefined) {
            return;
        }
        $scope.course.time = [];
        if (n == "0") {
            $scope.course.time.push(new _m_day_repeater());
        }
        if (n == "1") {
            $scope.course.time.push(new _m_week_repeater());
        }
        if (n == "2") {
            $scope.course.time.push(new _m_month_repeater());
        }
    })
    $scope.addTime = function() {
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
    $scope.removeTime = function() {
        if ($scope.course.time.length == 1) {
            return;
        }
        $scope.course.time.pop();
    }
    $scope.ajaxForm = function() {
        courseServices.update($scope.course).then(function(data) {
            if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
                $rootScope.back();
            } else {
                errorServices.autoHide("服务器错误");
            }
        })
    }
}