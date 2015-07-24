angular.module("WxCourse").constant("config", {
    url: "http://120.25.225.14:8080",
    imageUrl: "http://120.25.225.14:8080/upload/",
    weeks: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    months: ["1号", "2号", "3号", "4号", "5号", "6号", "7号", "8号", "9号", "10号", "11号", "12号", "13号", "14号", "15号", "16号", "17号", "18号", "19号", "20号", "21号", "22号", "23号", "24号", "25号", "26号", "27号", "28号", "29号", "30号"],
    request: {
        "SUCCESS": "200",
        "TOKEN_INVALID": "405",
    },
    response: {
        "SUCCESS": "1",
    },
    message: {
        register: {
            "1": "提交成功",
            "2": "手机号码已经注册",
        },
        login: {
            "1":"手机号未注册",
            "2":"登录密码错误",
            "3":"登录成功"
        },
        authen: {
            "1":"未认证",
            "2":"已认证通过",
            "3":"认证未通过"
        },
        repeater:{
            "0":"每天",
            "1":"每周",
            "2":"每月"
        }
    },
    // 1 学生 2培训方
    role: {
        "STUDENT": "1",
        "TRAINER": "2"
    },
    user:{
    	"UNEXIST":"1",
    	"EXIST":"2"
    },
    smstype:{
    	"FORGET":"1",
    	"SIGNUP":"2"
    },
    // 1-未认证，2-已认证通过，3-认证未通过
    authen:{
        "UNAUTHEN":"1",
        "PASS":"2",
        "REFUSED":"3"
    },
    repeater:{
        "DATE":"0",
        "WEEK":"1",
        "MONTH":"2"
    },
    common_params: {},
});
