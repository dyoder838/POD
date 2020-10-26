$(document).ready(function () {
    
    // Parent Sign up ------------------------------------------------
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
    });

    // Teacher Signup ------------------------------------------------
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

    // Add Student --------------------------------------------------
    $("#createStudentForm").on("submit",event=>{
        event.preventDefault();
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
    
    // Tab through feature screenshots
    $(".feature").click(function () {
        console.log($(this).text());
        $(".feature").removeClass("active")
        for (var i = 0; i < 4; i++) {
            if ($(this).data("feature") === i) {
                $(this).addClass("active")
                $(".feature-screenshot").attr("src", "../assets/img/screenshot-" + i + ".png")
            }
        }
    });

    // Login module
    $("#parent-login-button").click(function () {
        $("#parent-login-div").removeClass("hide")
    });
    $("#teacher-login-button").click(function () {
        $("#teacher-login-div").removeClass("hide")
    });
    $(".close").click(function () {
        $("#parent-login-div").addClass("hide")
        $("#teacher-login-div").addClass("hide")
    });
});
