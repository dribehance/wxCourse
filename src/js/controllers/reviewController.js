var reviewController = function($scope, $routeParams, localStorageService, parserServices, courseServices, errorServices, toastServices, config) {
    courseServices.queryReviewById($routeParams.review_id).then(function(data) {
        if (data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
            $scope.review = parserServices.parseReview(data.Learn);
        }
        else {
            errorServices.autoHide("服务器错误")
        }
    });
}
