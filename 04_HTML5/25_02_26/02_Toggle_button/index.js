const togglebutton=document.getElementById("buttonbnt");
const body=document.body;
const loadThem=()=>{
  const savedTheme=localStorage.getItem("theme");
  if(savedTheme){
    body.classList.add(savedTheme)

  }else{
    body.classList.add("light")

  }

};

const toggleThem=()=>{
  if(body.classList.contains("light")){
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme","dark");
  }
  else{
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme","light");
  }
};
togglebutton.addEventListener("click",toggleThem)

