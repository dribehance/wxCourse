var paymentController = function($scope, scheduleServices, parserServices, errorServices, toastServices, SharedState, config) {
    
	$scope.pay = function(payment) {
		payment.status = payment.status == "1"?"0":"1";
	}
    $scope.payments = [{
        "id": "0",
        "status": "0",
        "student": {
            "name": "张三",
            "type": "语文",
            "intro": "简介"
        }
    }, {
        "id": "0",
        "status": "1",
        "student": {
            "name": "张三",
            "type": "语文",
            "intro": "简介"
        }
    }, {
        "id": "0",
        "status": "0",
        "student": {
            "name": "张三",
            "type": "语文",
            "intro": "简介"
        }
    }];
}
