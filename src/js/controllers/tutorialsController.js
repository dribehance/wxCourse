var tutorialsController = function($scope) {
	$scope.like = false;
	$scope.toggle_like = function() {
		$scope.like = !$scope.like;
	} 
}