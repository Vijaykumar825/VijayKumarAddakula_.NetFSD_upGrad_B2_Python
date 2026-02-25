function saveName() {
  let name = "vijay";
  let email = "vijaykumaraddakula33@gmail.com";
  let token = "token123456789";

  localStorage.setItem("username", name);
  localStorage.setItem("email", email);
  localStorage.setItem("token", token);
}

function getData() {
  let savedName = localStorage.getItem("username");
  let savedEmail = localStorage.getItem("email");

  if (savedName) {
    document.getElementById("output").innerHTML =
      `<h1>Welcome ${savedName}</h1>
       <h2>User Email - ${savedEmail}</h2>`;
  }
}

saveName();
getData();