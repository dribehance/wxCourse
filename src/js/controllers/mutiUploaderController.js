angular.module("WxCourse").controller("multiUploaderController",function($scope){
    $scope.$on("flow::filesSubmitted",function(event, flow, flowFile){
        flow.opts.target = "http://120.25.225.14:8080/admin/FileUpload/special";
        flow.opts.testChunks = false;
        flow.opts.query = {
            "name":"sdfsdf",
            "kksdapp":"it wonderfull team"
        }
        // flow.upload();
    })
});