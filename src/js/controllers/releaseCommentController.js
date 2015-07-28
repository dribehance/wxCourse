var releaseCommentController = function($scope, $routeParams, parserServices, commentServices, errorServices, toastServices, config) {
	$scope.comment = {
		content:"",
		course_id:$routeParams.course_id

	}
}
