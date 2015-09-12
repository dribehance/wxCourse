var _m_trainer = function() {
    // type 培训类型
    // name 培训方名称
    // avatar 头像
    // intro 培训方
    // address 培训方联系地址
    // contact 联系人
    // telephone 联系电话
    // status 状态 1未认证 2认证通过 3认证未通过
    return {
        "id": "",
        "type": "",
        "name": "",
        "avatar": "",
        "intro": "",
        "address": "",
        "contact": "",
        "telephone": "",
        "status": ""
    }
}
var _m_course = function() {
    // name 课程名称
    // type 培训课程类型
    // capacity 课程人数容量
    // apply_amount 报名人数
    // like_amount 点赞人数
    // is_like 是否已赞 0:未赞 1:已赞

    // teacher 老师
    // trainer 培训方
    // comments 评论

    // release_time 发布时间

    // endless 课程无结束时间 0:无限 1:有限 
    // from 课程开始时间
    // to 课程结束时间
    // repeat 课程重复频率 0:每天 1:每周 2:每月
    // time 上课时间

    // address 上课地址
    // money 费用标准
    // intro 课程简介
    // section 总节数

    // is_apply 0:未申请 1:已申请
    return {
        "id": "",
        "name": "",
        "type": new _m_course_type(),

        "capacity": "",
        "apply_amount": "0",
        "comment_amount": "0",
        "like_amount": "0",
        "is_like": "0",

        "teacher": new _m_teacher(),
        "trainer": new _m_trainer(),
        "comments": [],

        "release_time":"",

        "endless": "1",
        "from": new Date(2015, 1 - 1, 1),
        "to": new Date(2015, 1 - 1, 1),
        "repeat": "0",
        "time": [],
        "address": "",
        "money": "",
        "intro": "",
        "section": "",

        "is_apply":"0"
    }
}
var _m_course_type = function() {
    return {
        id: "",
        name: "",
    }
}
var _m_day_repeater = function() {
    // start_time 当天上课开始时间
    // end_time 当天上课时间
    return {
        "start_time": new Date(2015, 1 - 1, 1, 07, 00, 00),
        "end_time": new Date(2015, 1 - 1, 1, 22, 00, 00)
    }
}
var _m_week_repeater = function() {
    // week 星期
    // start_time 当天上课开始时间
    // end_time 当天上课时间
    return {
        "week": "周一",
        "start_time": new Date(2015, 1 - 1, 1, 07, 00, 00),
        "end_time": new Date(2015, 1 - 1, 1, 22, 00, 00)
    }
}
var _m_month_repeater = function() {
    // day 日期 天
    // start_time 当天上课开始时间
    // end_time 当天上课时间
    return {
        "month": "1号",
        "start_time": new Date(2015, 1 - 1, 1, 07, 00, 00),
        "end_time": new Date(2015, 1 - 1, 1, 22, 00, 00)
    }
}
var _m_schedule = {
    // section 课程计划
    // record 学生上课记录
    // attendance 学生签到情况
    section: function() {
        // name 课程 节名
        // day 日期 天
        // start_time 当天上课开始时间
        // end_time 当天上课时间
        return {
            "id": "",
            "name": "",
            "day": "",
            "start_time": "",
            "end_time": ""
        }
    },
    record: function() {
        // name 记录学生姓名
        // total 已授课程
        // actual 实到课程
        return {
            "id": "",
            "name": "",
            "total": "0",
            "actual": "0"
        }
    },
    attendance: function() {
        // status 签到情况 0:未签到 1:已签到
        // student 学生
        return {
            "id": "",
            "status": "0",
            "student": new _m_student()
        }
    },
    history: function() {
        // status 0:未参加 1:参加
        return {
            "day": "",
            "status": "",
        }
    }
}
var _m_payment = function() {
    // status 签到情况 0:未缴费 1:已缴费
    return {
        "status": "0",
        "student": new _m_student(),
        "course": new _m_course()
    }
}
var _m_student = function() {
    // id 学生ID
    // name 学生姓名
    // avatar 学生头像
    // telephone 联系方式
    return {
        "id": "",
        "name": "",
        "avatar": "",
        "sex": "",
        "telephone": "",
    }
}
var _m_teacher = function() {
    // id 老师ID
    // name 老师姓名
    // avatar 老师头像
    // telephone 联系方式
    return {
        "id": "",
        "name": "",
        "avatar": "",
        "type": "",
        "intro": "",
    }
}
var _m_message = function() {
    return {
        "id": "",
        "by": "",
        "release_time": "",
        "content": "",
    }
}
var _m_comment = function() {
    return {
        "id":"",
        "by": "",
        "release_time": "",
        "content": ""
    }
}
var _m_review = function() {
    return {
        "id": "",
        "by": "",
        "name":"",
        "title": "",
        "content": "",
        "release_time": "",
        "images":[]
    }
}
