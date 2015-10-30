var releaseCommentController = function($scope,$rootScope,$timeout, $routeParams, parserServices, commentServices, errorServices, toastServices, config) {
	$scope.comment = {
		content:"",
		course_id:$routeParams.course_id
	}
	$scope.ajaxForm = function() {
		toastServices.show();
		commentServices.release($scope.comment).then(function(data){
			toastServices.hide()
			if(data.code == config.request.SUCCESS && data.status == config.response.SUCCESS) {
				errorServices.autoHide("评论成功");
				$timeout(function(){
					$rootScope.back();
				},1500);	
			}
			else {
				errorServices.autoHide("服务器错误");
			}
		})
	}
}
