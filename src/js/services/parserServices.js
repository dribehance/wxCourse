angular.module("WxCourse").factory("parserServices", function(SharedState) {
    return {
        parseTrainer: function(data) {
            var trainer = new _m_trainer();
            trainer.id = "";
            trainer.type = data.type || "暂未填写";
            trainer.name = data.company_name || "暂未填写";
            trainer.avatar = data.avatar || "../images/avatar_2.png";
            trainer.intro = data.company_info || "暂未填写";
            trainer.address = data.company_address || "暂未填写";
            trainer.contact = data.company_incharge || "暂未填写";
            trainer.telephone = data.company_telephone || "暂未填写";
            trainer.status = data.indentity_status || "1";
            return trainer;
        },
        parseCourse: function(data) {
            var course = new _m_course();
            course.id = "";
            course.name = "";
            course.type = "";

            course.capacity = "";
            course.apply_amount = "0";
            course.comment_amount = "0";
            course.like_amount = "0";
            course.is_like = "0";

            course.teacher.name = "";
            course.trainer.name = "";
            course.comments = this.parseComments(data.comments);

            course.from = "";
            course.to = "";
            course.repeat = "";
            course.time = [];
            course.address = "";
            course.money = "";
            course.intro = "";
            return course;
        },
        parseCourses: function(data) {
            var courses = [];
            if (!data) {
                return courses;
            }
            // courses parse
            for (var i = 0; i < data.length; i++) {
                var course = this.parseCourse(data[i]);
                courses.push(course);
            }
            return courses;
        },
        parseComment: function(data) {
            var comment = new _m_comment();
            comment.by = "";
            comment.release_time = new Date("1900,01,01");
            comment.content = "";
            return comment;
        },
        parseComments: function(data) {
            var comments = [];
            if (!data) {
                return comments;
            }
            // comments parse
            for (var i = 0; i < data.length; i++) {
                var comment = this.parseComment(data[i]);
                comments.push(comment);
            }
            return comments;
        },
        parseSchedule: {
            section: function(data) {
                var section = new _m_schedule.section();
                section.id = "";
                section.name = "";
                section.day = "";
                section.start_time = new Date("1990,01,01");
                section.end_time = new Date("1990,01,01");
                return section;
            },
            record: function(data) {
                var record = new _m_schedule.record();
                record.id = "";
                record.name = "";
                record.total = "0";
                record.actual = "0";
                return record;
            },
            attendance: function(data) {
                var attendance = new _m_schedule.attendance();
                attendance.id = "";
                attendance.status = "0";
                attendance.entrance_time = "";
                attendance.student.name = "";
                attendance.student.avatar = "";
                attendance.student.telephone = "";
                attendance.student.status = "";
                return attendance;
            },
            history: function(data) {
                var history = new _m_schedule.history();
                history.day = "";
                history.status = "";
                return history;
            }
        },
        parsePayment: function(data) {
            var payment = new _m_payment();
            payment.status = "0";
            payment.entrance_time = "";
            payment.student.name = "";
            payment.student.avatar = "";
            payment.student.telephone = "";
            return payment;
        },
        parseStudent: function(data) {
            var student = new _m_student();
            student.id = "";
            student.name = "";
            student.avatar = "";
            student.sex = "";
            student.telephone = "";
            return student;
        },
        parseTeacher: function(data) {
            var teacher = new _m_teacher();
            teacher.id = "";
            teacher.name = "";
            teacher.avatar = "";
            teacher.type = "";
            teacher.intro = "";
            return teacher;
        },
        parseMessage: function(data) {
            var message = new _m_message();
            message.by = "";
            message.release_time = "";
            message.entrance_time = "";
            message.content = "";
            message.student.name = "";
            return message;
        },
        parseReview: function(data) {
            var review = new _m_review();
            review.id = "",
            review.by = "";
            review.release_time = "";
            review.title = "";
            review.content = "";
            return review;
        }
    }
});
