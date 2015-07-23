var tutorialsController = function($scope, localStorageService, config) {
    $scope.like = false;
    $scope.toggle_like = function() {
        $scope.like = !$scope.like;
    }
    if (config.role[localStorageService.get("role")] == "学生") {
        $scope.is_student = true;
    } else {
        $scope.is_student = false;
    }
}
