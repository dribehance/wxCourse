var authenController = function() {
	
}
angular.module("WxCourse").controller("authenUploadController",function($scope,errorServices){
	
	$scope.$on('flow::filesSubmitted',function(event, $flow, flowFile){
		if ($flow.files.length>2) {
			$flow.cancel();
			errorServices.autoHide("上传文件个数过多");

		}
	});
})