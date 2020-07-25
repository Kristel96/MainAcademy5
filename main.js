let submButton = document.getElementById("submitRegistration");
submButton.onclick = function () {
    // Validation logic will be here
    let emailAdd = document.getElementById("email");
    validateEmail(emailAdd);


    };

function validateEmail(email) {
    console.dir(email);
  let  emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let result = emailPattern.test(email.value);
  console.log(result);
  if( result ===true){
      email.style.border = "2px solid green"
  }else{
      email.style.border = "2px solid red"
  }
}
