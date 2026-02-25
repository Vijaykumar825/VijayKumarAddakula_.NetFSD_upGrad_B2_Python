function storeUserData(){
  let name="vijay";
  let email="vijay@example.com";
  let password="vijay123";
  localStorage.setItem("name",name);
  localStorage.setItem("email",email);
  localStorage.setItem("password",password);
}

storeUserData();

function getPassword(){
  let password=localStorage.getItem("password");
  return password;
} 


function getUserData(){
  let name=localStorage.getItem("name");
  let email=localStorage.getItem("email");
  if(name && email){
    document.getElementById("output").innerHTML=`Name: ${name} <br> Email: ${email}`;
  }
}

function checkPassword(){
  let password=document.getElementById("password").value;
  event.preventDefault();
  if(password){

    if(password===getPassword()){
      getUserData();
      window.location.href="welcome.html";
      
    } else{
      document.getElementById("output").innerHTML="Password is incorrect!";
    }

  }
}

function validatePassword(){
}
checkPassword();