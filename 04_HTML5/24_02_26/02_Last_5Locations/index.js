
    // Load existing history or empty array
    let historyData = JSON.parse(localStorage.getItem("locationHistory")) || [];

    function getLocation() {
      if (!navigator.geolocation) {
        alert("Geolocation not supported");
        return;
      }

      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const time = new Date().toLocaleString();

      const location = {
        latitude,
        longitude,
        time
      };

      // Show current location
      document.getElementById("currentLocation").innerText =
        `Latitude: ${latitude} | Longitude: ${longitude}`;

      // Add new location to beginning
      historyData.unshift(location);

      // Keep only last 5 entries
      if (historyData.length > 5) {
        historyData.pop();
      }

      // Save to localStorage
      localStorage.setItem("locationHistory", JSON.stringify(historyData));

      displayHistory();
    }

    function error(err) {
      console.log(err);
      alert("Location access denied or error occurred");
    }

    function displayHistory() {
      const list = document.getElementById("historyList");
      list.innerHTML = "";

      historyData.forEach(item => {
        const li = document.createElement("li");
        li.textContent =
          `Lat: ${item.latitude} | Long: ${item.longitude} | Time: ${item.time}`;
        list.appendChild(li);
      });
    }

    // Display stored history on page load
    displayHistory();
