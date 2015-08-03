angular.module("WxCourse").factory("parserServices", function(SharedState, transformServices, config) {
    return {
        parseTrainer: function(data) {
            var trainer = new _m_trainer();
            trainer.id = "";
            trainer.type = data.type || "暂未填写";
            trainer.name = data.company_name || "暂未填写";
            trainer.avatar = data.avatar ? config.imageUrl + data.avatar : "../images/avatar_2.png";
            trainer.intro = data.company_info || "暂未填写";
            trainer.address = data.company_address || "暂未填写";
            trainer.contact = data.company_incharge || "暂未填写";
            trainer.telephone = data.company_telephone || "暂未填写";
            trainer.status = data.identity_status || "1";
            return trainer;
        },
        parseCourse: function(data) {
            var course = new _m_course();
            course.id = data.course_id;
            course.name = data.name;

            course.capacity = data.count;
            course.apply_amount = data.apply_count || "0";
            course.comment_amount = data.comment_count || "0";
            course.like_amount = data.zans_count || "0";
            course.is_like = data.is_zan || "0";
            course.endless = data.run_type || "0";
            course.from = this.parseDate(data.start_day);
            course.to = this.parseDate(data.end_day);
            course.repeat = transformServices.rever(config.message.repeater)[data.repetition];
            course.time = this.parseTimes(data.courseTimes, transformServices.rever(config.message.repeater)[data.repetition]);
            course.address = data.address;
            course.money = data.fee;
            course.intro = data.info;
            course.section = data.course_count;
            course.release_time = data.publish_time || "刚刚";
            // type
            course.type = {
                id: data.type_id,
                name: data.type
            };
            // teacher
            course.teacher = {
                id: data.teacher_id,
                name: data.teacher_name,
                avatar: data.avatar ? config.imageUrl + data.avatar : "../images/avatar_2.png"
            };
            // trainer
            course.trainer.name = data.company_name;
            // comment
            course.comments = this.parseComments(data.comments);
            // apply status
            course.is_apply = data.is_apply || "0";
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
        parseCourseType: function(data) {
            var course_type = new _m_course_type();
            course_type.id = data.type_id;
            course_type.name = data.name;
            return course_type;
        },
        parseCourseTypes: function(data) {
            var course_types = [];
            // courses parse
            for (var i = 0; i < data.length; i++) {
                var course_type = this.parseCourseType(data[i]);
                course_types.push(course_type);
            }
            return course_types;
        },
        parseTime: function(data, repeater) {
            var time;
            if (repeater == config.repeater.DATE) {
                time = new _m_day_repeater();
            }
            if (repeater == config.repeater.WEEK) {
                time = new _m_week_repeater();
                time.week = data.week;
            }
            if (repeater == config.repeater.MONTH) {
                time = new _m_month_repeater();
                time.month = data.week;
            }
            var start_times = data.start_time.split(":"),
                end_time = data.end_time.split(":");
            time.start_time = new Date(1970, 0, 1, start_times[0], start_times[1], 00); //data.start_time;
            time.end_time = new Date(1970, 0, 1, end_time[0], end_time[1], 00) //data.end_time;
            return time;
        },
        parseTimes: function(data, repeater) {
            var times = [];
            if (!data) {
                return times;
            }
            // times parse
            for (var i = 0; i < data.length; i++) {
                var time = this.parseTime(data[i], repeater);
                times.push(time);
            }
            return times;
        },
        parseDate: function(time_string) {
            if (!time_string) {
                return new Date(2015, 1 - 1, 1);
            }
            var date = time_string.split("-");
            return new Date(date[0], parseInt(date[1]) - 1, date[2]);
        },
        parseComment: function(data) {
            var comment = new _m_comment();
            comment.id = data.comment_id;
            comment.by = data.nickname;
            comment.release_time = data.post_date;
            comment.content = data.content;
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
                record.id = data.user_id;
                record.name = data.nickname;
                record.total = data.total_count;
                record.actual = data.person_count;
                return record;
            },
            records: function(data) {
                var records = [];
                for (var i = 0; i < data.length; i++) {
                    var record = this.record(data[i]);
                    records.push(record);
                }
                return records;
            },
            attendance: function(data) {
                var attendance = new _m_schedule.attendance();
                attendance.id = data.user_id;
                attendance.status = data.signup;
                attendance.entrance_time = "";
                attendance.student.name = data.nickname;
                attendance.student.avatar = data.avatar;
                attendance.student.telephone = data.telephone;
                return attendance;
            },
            attendances: function(data) {
                var attendances = [];
                for (var i = 0; i < data.length; i++) {
                    var attendance = this.attendance(data[i]);
                    attendances.push(attendance);
                }
                return attendances;
            },
            history: function(data) {
                var history = new _m_schedule.history();
                history.day = data.post_date;
                history.status = data.signup;
                return history;
            },
            historys: function(data) {
                var historys = [];
                for (var i = 0; i < data.length; i++) {
                    var history = this.history(data[i]);
                    historys.push(history);
                }
                return historys;
            },
        },
        parsePayment: function(data) {
            var payment = new _m_payment();
            payment.id = data.apply_id;
            payment.status = data.status;
            payment.entrance_time = data.post_time;
            // student 
            payment.student = {
                id : data.user_id,
                name : data.nickname,
                avatar : data.avatar,
                telephone : data.telephone,
            }
            payment.course = {
                id: ""
            }
            return payment;
        },
        parsePayments: function(data) {
            var payments = [];
            for (var i = 0; i < data.length; i++) {
                var payment = this.parsePayment(data[i]);
                payments.push(payment);
            }
            return payments;
        },
        parseStudent: function(data) {
            var student = new _m_student();
            student.id = data.user_id;
            student.name = data.nickname;
            student.avatar = data.avatar ? config.imageUrl + data.avatar : "../images/avatar_2.png";;
            student.sex = data.sex;
            student.telephone = data.telephone;
            return student;
        },
        parseTeacher: function(data) {
            var teacher = new _m_teacher();
            teacher.id = data.teacher_id;
            teacher.name = data.name;
            teacher.avatar = data.avatar ? config.imageUrl + data.avatar : "../images/avatar_2.png";
            teacher.type = data.type;
            teacher.intro = data.info;
            return teacher;
        },
        parseTeachers: function(data) {
            var teachers = [];
            for (var i = 0; i < data.length; i++) {
                var teacher = this.parseTeacher(data[i]);
                teachers.push(teacher);
            }
            return teachers;
        },
        parseMessage: function(data) {
            var message = new _m_message();
            message.by = data.user_name;
            message.release_time = data.post_time;
            message.content = data.content;
            message.entrance_time = "";
            return message;
        },
        parseMessages: function(data) {
            var messages = [];
            for (var i = 0; i < data.length; i++) {
                var message = this.parseMessage(data[i]);
                messages.push(message);
            }
            return messages;
        },
        parseReview: function(data) {
            var review = new _m_review();
            review.id = data.learn_id;
            review.by = data.course_name;
            review.name = data.course_name;
            review.release_time = data.post_date;
            review.title = data.title;
            review.content = data.content;
            review.images = this.parseReviewImages(data.pic);
            return review;
        },
        parseReviews: function(data) {
            var reviews = [];
            for (var i = 0; i < data.length; i++) {
                var review = this.parseReview(data[i]);
                reviews.push(review);
            }
            return reviews;
        },
        parseReviewImages:function(images) {
            // console.log(images)
            images = images || [];
            images.map(function(image){
                image.name =config.imageUrl + image.name;
            });
            return images;
        },
        parseAuthenInfo:function(images) {
            // console.log(images)
            images = images || [];
            images = images.map(function(image){
                return config.imageUrl + image;
            });
            return images;
        }
    }
});
