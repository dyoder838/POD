$(document).ready(function () {

    //-------------- parentsignup.handlebars code  ----------------------------------

    $("#parent-submit-button").on("click", function (event) {
        event.preventDefault();

        // Define parentObject to send to authController
        const parentObject = {
            parentFirst: $("#parentFirst").val(),
            parentLast: $("#parentLast").val(),
            parentEmail: $("#parentEmail").val(),
            parentPassword: $("#parentPassword").val(),
            monday: $("#monday").is(":checked"),
            tuesday: $("#tuesday").is(":checked"),
            wednesday: $("#wednesday").is(":checked"),
            thursday: $("#thursday").is(":checked"),
            friday: $("#friday").is(":checked")
        }

        // Define studentObject to send to authController
        const studentObject = {
            studentFirst: $("#studentFirst").val(),
            studentLast: $("#studentLast").val(),
        }

        // Post parentObject request -> authController
        console.log(parentObject);
        $.ajax({
            method: "POST",
            url: "/signup/parent",
            data: parentObject
        }).then(apiRes => {
            console.log(apiRes);
            window.location.href = "/parent"
        });

        // Post studentObject request -> authController
        console.log(studentObject);
        $.ajax({
            method: "POST",
            url: "/signup/student",
            data: studentObject
        }).then(apiRes => {
            console.log(apiRes);
            window.location.href = "/parent"
        });

    });

    // --------------- teachersignup.handlebars code ----------------------------

    $("#teacher-submit-button").on("click", function (event) {
        event.preventDefault();

        // Define teacherObject to send to authController
        const teacherObject = {
            teacherFirst: $("#teacherFirst").val(),
            teacherLast: $("#teacherLast").val(),
            teacherEmail: $("#teacherEmail").val(),
            teacherPassword: $("#teacherPassword").val()
        }

        // Post teacherObject request -> authController
        console.log(teacherObject);
        $.ajax({
            method: "POST",
            url: "/signup/teacher",
            data: teacherObject
        }).then(apiRes => {
            console.log(apiRes);
            window.location.href = "/teacher"
        });
    });

    // ---------------Student Creation----------------------------
    $("#createStudentForm").on("submit",event=>{
        event.preventDefault();
        console.log('Student submitted!');
        const studentObj = {
            studentFirst: $("#studentFirst").val(),
            studentLast: $("#studentLast").val(),
            StudentId: $("#StudentId").val()
        }
        console.log(studentObj)
        $.ajax({
            method:"POST",
            url:"/signup/student",
            data:studentObj
        }).then(apiRes=>{
            console.log(apiRes);
            window.location.href= "/parent"
        })
    })

    //--------------------- tabs through screenshots on home page -----------------------------------------------------
    $(".feature").click(function () {
        console.log($(this).text());
        $(".feature").removeClass("active")
        for (var i = 0; i < 4; i++) {
            if ($(this).data("f") === i) {
                $(this).addClass("active")
                $(".feature-screenshot").attr("src", "../assets/img/screenshot-" + i + ".png")
            }
        }
    });

    // ----------- makes login buttons work
    $("#loginButton").click(function () {
        $("#loginDiv").removeClass("hide")
    });

    $(".close").click(function () {
        $("#loginDiv").addClass("hide")
    });
});
