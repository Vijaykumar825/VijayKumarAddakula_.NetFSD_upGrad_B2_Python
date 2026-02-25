let user={
    name:"vijay",
    age:24,
    isStudent:true,
    hobbies:["coding","gaming","traveling"],
    address:{
        city:"Hydrabad",
        state:"Telangana",
        country:"India"
    }
}

function greet(){
    console.log("Hello, " + user.name + "! You are " + user.age + " years old.");
}


console.log(user);