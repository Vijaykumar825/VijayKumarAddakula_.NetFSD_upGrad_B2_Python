


fetch('data.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
            data.users.forEach(users => {
                console.log(users.id, users.name, users.age)
            });
    })

    .catch(error => {
        console.log("Error")
    })
fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
    .then(response => {
        return response.json()
    })
    .then(data => {
            data.users.forEach(users => {
                console.log(users.id, users.name, users.age)
            });
    })

    .catch(error => {
        console.log("Error")
    })
fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log("Full API Response:", data);

    console.log("Current Temperature:", data.current.temperature_2m);
    console.log("Current Wind Speed:", data.current.wind_speed_10m);

    console.log("Hourly Temperatures:", data.hourly.temperature_2m);
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });
