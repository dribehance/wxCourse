var addTeacherController = function($scope, teacherServices, courseServices, parserServices, errorServices, toastServices, SharedState, config) {
    $scope.teacher = new _m_teacher();
    $scope.course = {};
    courseServices.queryCourseType().then(function(data) {
        if (data.code == config.request.SUCCESS) {
            $scope.course_types = parserServices.parseCourseTypes(data.types);
            $scope.course.type = $scope.course_types[0];
        } else {
            errorServices.autoHide("服务器错误");
        }
    })
}
angular.module("WxCourse").controller("teacherUploadController", function($rootScope,$scope,$timeout,errorServices,config,localStorageService,toastServices) {
    $scope.$on("flow::fileSuccess",function(file, message, chunk){
        toastServices.hide()
        $rootScope.back();
    })
    $scope.ajaxForm = function(flow) {
        console.log($scope.teacher.intro)
        if($scope.teacher.name =="" || $scope.teacher.name == undefined) {
            errorServices.autoHide("姓名不能为空");
            return;
        }
        if($scope.course.type.name =="" || $scope.course.type.name == undefined) {
            errorServices.autoHide("培训名称不能为空");
            return;
        }
        if($scope.teacher.intro =="" || $scope.teacher.intro == undefined) {
            errorServices.autoHide("简介不能为空");
            return;
        }
        toastServices.show();
    	flow.opts.target = config.url + "/app/Organization/addTeacher";
        flow.opts.testChunks = false;
        flow.opts.fileParameterName = "avatar";
        flow.opts.query = {
                "token": localStorageService.get("token"),
                "name":$scope.teacher.name,
                "type":$scope.course.type.name,
                "info":$scope.teacher.intro
            }
        flow.upload();
    }
});
