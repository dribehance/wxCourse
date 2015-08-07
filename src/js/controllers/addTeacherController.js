var addTeacherController = function($scope, teacherServices, courseServices, parserServices, errorServices, toastServices, SharedState, config) {
    $scope.teacher = new _m_teacher();

}
angular.module("WxCourse").controller("teacherUploadController", function($rootScope,$scope,$timeout,config,localStorageService,toastServices) {
    $scope.$on("flow::fileSuccess",function(file, message, chunk){
        toastServices.hide()
        $rootScope.back();
    })
    $scope.ajaxForm = function(flow) {
        toastServices.show();
    	flow.opts.target = config.url + "/app/Organization/addTeacher";
        flow.opts.testChunks = false;
        flow.opts.fileParameterName = "avatar";
        flow.opts.query = {
                "token": localStorageService.get("token"),
                "name":$scope.teacher.name,
                "type":$scope.teacher.type,
                "info":$scope.teacher.intro
            }
        flow.upload();
    }
});
