$(document).ready(function() {
 
    $("#createParent").on("submit",event=>{
        event.preventDefault();
        console.log('Parent created');
        const parentObj = {
            first_name: $("#parentFirst").val(),
            last_name: $("#parentLast").val(),
            email: $("#email").val(),
            password: $("#password").val(),
            monday: $("#monday").val(),
            tuesday: $("#tuesday").val(),
            wednesday: $("#wednesday").val(),
            thursday: $("#thursday").val(),
            friday: $("#friday").val()
        }
        console.log(parentObj)
        $.ajax({
            method:"POST",
            url:"/api/parents",
            data:parentObj
        }).then(response=>{
            console.log(response);
            window.location.href= "/parent"
        })
    })

    $("#createTeacher").on("submit",event=>{
        event.preventDefault();
        console.log('Teacher created');
        const teacherObj = {
            first_name: $("#teacherFirst").val(),
            last_name: $("#teacherLast").val(),
            email: $("#email").val(),
            password: $("#password").val(),
            monday: $("#monday").val(),
            tuesday: $("#tuesday").val(),
            wednesday: $("#wednesday").val(),
            thursday: $("#thursday").val(),
            friday: $("#friday").val()
        }
        console.log(teacherObj)
        $.ajax({
            method:"POST",
            url:"/api/teachers",
            data:teacherObj
        }).then(response=>{
            console.log(response);
            window.location.href= "/teacher"
        })
    })

    $(".feature").click(function() {
        console.log($(this).text());
        $(".feature").removeClass("active")
        for(var i=0;i<4;i++){
            if($(this).data("f") === i){
                $(this).addClass("active")
                $(".feature-screenshot").attr("src","../assets/img/screenshot-"+i+".png")
            }
        }
    });

    
    $("#loginButton").click(function(){
        $("#loginDiv").removeClass("hide")
    });

    $("#close").click(function(){
        $("#loginDiv").addClass("hide")
    });
    
});
  