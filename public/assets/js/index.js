$(document).ready(function() {

    $("#submit-button").on("click", function(event) {

    })
 
    $("#submit-button").on("click", function(event) {
        event.preventDefault();
      
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
        
        const studentObject = {
            studentFirst: $("#studentFirst").val(),
            studentLast: $("#studentLast").val(),
        }
        
        // send parentObject
        console.log(parentObject);
        $.ajax({
            method:"POST",
            url: "/signup/parent",
            data: parentObject
        }).then(apiRes=>{
            console.log(apiRes);
            window.location.href = "/signup/parent"
        });

        // send studentObject
        console.log(studentObject);
        $.ajax({
            method:"POST",
            url:"/signup/student",
            data: studentObject
        }).then(apiRes=>{
            console.log(apiRes);
            window.location.href = "/signup/student"
        });
    
    });
    
});
  