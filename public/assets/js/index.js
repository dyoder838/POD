$(document).ready(function() {
 
    $("#submit-button").on("click", function(event) {
        event.preventDefault();
      
        const parentObject = {
            parentFirst: $("#parentFirst").val, 
            parentLast: $("#parentLast").val,
            parentEmail: $("#parentEmail").val,
            parentPassword: $("#parentPassword").val,
            monday: $("#monday").val,
            tuesday: $("#tuesday").val,
            wednesday: $("#wednesday").val,
            thursday: $("#thursday").val,
            friday: $("#friday").val
        }
        
        const studentObject = {
            studentFirst: $("#studentFirst").val,
            studentLast: $("#studentLast").val,
        }
        
        // send parentObject
        console.log(parentObject);
        $.ajax({
            method:"POST",
            url: "/api/parent",
            data: parentObject
        }).then(apiRes=>{
            console.log(apiRes);
            window.location.href = "/api/parent"
        });

        // send studentObject
        console.log(studentObject);
        $.ajax({
            method:"POST",
            url:"api/students",
            data: studentObject
        }).then(apiRes=>{
            console.log(apiRes);
            window.location.href = "/api/students"
        });
        
        
        
        // var burger_id = $(this).children(".burger_id").val();
        // $.ajax({
        //   method: "PUT",
        //   url: "/burgers/update/" + burger_id
        // }).then(function(data) {
         
        //   location.reload();
        // });
      
    });
    
});
  