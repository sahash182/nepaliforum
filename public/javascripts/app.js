$(function() {


// get value from the form on submit click event 
  $('#SignupSubmit').on('click', function(event){
    event.preventDefault();
    var user = {
        userName: $('#userName').val(),
        email: $('#email').val(),
        password: $('#password').val()
  };    
  // post ajax call to server
    $.ajax({
      type: "POST",
      url: "/signup",
      data: user,
      sucess: function(data){
        console.log(data);
        alert("success");
        window.location.reload();
      }
    });
  });

       
});

