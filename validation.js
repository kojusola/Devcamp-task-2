
$(document).ready(function(){
    var alphaExp = /^[a-zA-Z ]+$/;
    var numericExp = /^[0-9]{11}$/;
    var emailExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var passExp =/^(?=.*\d)(?=.*[a-zA-Z]).{4,8}$/;
  
  
  $('#name').blur(function(e) {
     e.preventDefault();
     var name = $('#name').val();
      
     if(name.length == 0)
     {
         $('#err_name').show();
         $('#err_name').text("Please Enter Your Name");
         return false;
     }else{
         if(!alphaExp.test(name)) {
             $('#err_name').show();
             $('#err_name').text("No Numbers or Special Characters are allowed");
             return false;
         }else {
             $('#err_name').hide();
             return true;
         }
     }     
  });
  
  
  $('#phoneNumber').blur(function(e) {
      e.preventDefault();
      var phone = $('#phoneNumber').val();
      if(phone.length == 0) {
          $('#err_phone').show();
          $('#err_phone').text("Please Enter Your Phone Number");
          return false;
      }else {
          if(!numericExp.test(phone)) {
              $('#err_phone').show();
              $('#err_phone').text("Please Enter a Valid Phone Number");
              return false;
          }else {
              $('#err_phone').hide();
              return true;
          }
        }     
    });
  
   $('#email').blur(function(e) {
      e.preventDefault();
      var email = $('#email').val();
    if(email.length == 0) {
        $('#err_email').show();
        $('#err_email').text("Please Enter Your Email Address");
        return false;
    }else {
        if(!emailExp.test(email)) {
            $('#err_email').show();
            $('#err_email').text("Please Enter a Valid Email Address");
            return false;
        }
      }
  });
  
   $('#password').blur(function(e) {
      e.preventDefault();
      var pass = $('#password').val();
      if(pass.length == 0) {
          $('#err_pass').show();
          $('#err_pass').text("Please Enter Your Password");
          return false;
      } else {
          if(pass.length > 3 && pass.length < 15) {
              if(!passExp.test(pass)){
                  $('#err_pass').show();
                  $('#err_pass').text("Your Password must contain both alphabets and numbers");
                  return false;
              }else {
                  $('#err_pass').hide();
                  return true;
              }
              return false;
          }else{
              $('#err_pass').show();
              $('#err_pass').text("Your Password must be more then 3 characters");
              return false;
          }
      }      
   });
var adeola = "adeola"
localStorage.setItem('vendor', JSON.stringify(adeola))
$('.bott').click(function(e){
    e.preventDefault();
    console.log(e.target)
    var vendorname= localStorage.getItem('vendor');
    console.log(vendorname)
    myname= $('#name').val()
    myname= `"${myname}"`
    console.log(myname)
    if (myname===vendorname){
        window.location.replace("vendor.html");
    } else{
        window.location.replace("homepage.html");
    }
    })
});