navigator.geolocation.getCurrentPosition(showPosition,showError)

function showPosition(position){
  console.log("Latitude: ",position.coords.latitude);
  console.log("Longitute: ",position.coords.longitude)
}

function showError(error){
  console.log("Error : ","user denied permission or location unavailable")
}

