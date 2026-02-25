function saveData() {
    const username = document.getElementById('username');
    const useremail = document.getElementById('email');
    let name = username.value;
    let email = useremail.value;
    if (name && email) {
        alert("Data saved successfully!");
    }
    else {        alert("Please enter both name and email!");
        return;
    }

    localStorage.setItem("username", name);
    localStorage.setItem("email", email);
    useremail.value = "";
    username.value = "";
}
function loadData() {
    const savedName = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email");
    if (savedName && savedEmail) {
        document.getElementById("output").innerHTML =
            `<h1>Welcome ${savedName}</h1>
             <h2>User Email - ${savedEmail}</h2>`;
    }
}

saveData();
loadData();