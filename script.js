$(document).ready(function(){

    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength: 4,
                maxlength: 14
            },
            sname:{
                required:true,
                minlength:4,
                maxlength: 14

            },
            emailAddress:{
                required:true,
                email:true,
                maxlength:50
            },
            password:{
                required:true,
                minlength:6,
                maxlength: 14

            },
            date:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }

            
        },
        messages:{
            fname:{
                required:"first name is required",
                minlength: "first name cannot be less than 4 characters",
                maxlength: "first name cannot be greater than 16 characters"
            },
            sname:{
                required:"sur name is required",

                minlength:"sur name cannot be less than 4 characters",
                maxlength: "sur name cannot be greater than 16 characters"

            },
            emailAddress:{
                required:"please enter a valid email address",

                maxlength:"email address cannot be greater than 50 characters"
            },
            password:{
                required:"password is required",
                minlength:"password cannot be less than 4 characters",
                maxlength: "password cannot be greater than 16 characters"

            }
        }
       
    });
    $("#sign-up").on("click",function(e){
        e.preventDefault();
        console.log("button clicked")
        if($("#signup-form").valid()) {
            alert("Account created successfully!");
            $("#signup-form").submit();
        } else{
            alert("Fill out the requirements!");
        }
    });
    $("#date, #month, #year").val("");
});

