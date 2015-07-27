var releaseReviewController = function($scope, $routeParams) {
    $scope.review = new _m_review();
    $scope.student_id = $routeParams.student_id;
    $scope.course_id = $routeParams.course_id;
}
angular.module("WxCourse").controller("multiUploaderController", function($scope, $rootScope, toastServices,errorServices, localStorageService, config) {
    $scope.$on("flow::fileSuccess", function(file, message, chunk) {
        toastServices.hide();
        errorServices.hide();
        $rootScope.back();
    })
    $scope.ajaxForm = function(flow) {
        toastServices.show();
        errorServices.show("上传中")
        flow.opts.target = config.url + "/app/Course/commitSituation";
        flow.opts.testChunks = false;
        flow.opts.query = {
            "token": localStorageService.get("token"),
            "title": $scope.review.title,
            "content": $scope.review.content,
            "user_id": $scope.student_id,
            "course_id": $scope.course_id
        };
        flow.upload();
    }
});
