if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      localStorage.setItem("latitude", latitude);
      localStorage.setItem("longitude", longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const city =
            data.address.city || data.address.town || data.address.village;
          localStorage.setItem("city", city);
        })
        .catch((error) => {
          console.error("Ошибка при получении названия города:", error);
          localStorage.setItem("city", "Краснодар");
          localStorage.setItem("latitude", "45.0448");
          localStorage.setItem("longitude", "38.9765");
        });
    },
    function (error) {
      console.log(error);
    }
  );
} else {
  alert("Невозможно определить ваше местоположение");
}

const url = `https://www.7timer.info/bin/api.pl?lon=${localStorage.getItem(
  "longitude"
)}&lat=${localStorage.getItem("latitude")}&product=civil&output=json`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log("Данные о погоде:", data);

    const weatherData = data.dataseries;

    const firstPeriod = weatherData[0];
    const temperature = firstPeriod.temp2m;
    localStorage.setItem("temperature", temperature);
    const weatherCondition = firstPeriod.weather;

    const weatherConditionsObj = {
      clear: "Ясно",
      clearnight: "Ясно",
      pcloudy: "Переменная облачность",
      pcloudday: "Переменная облачность",
      pcloudnight: "Переменная облачность",
      mcloudy: "Облачно",
      mcloudday: "Облачно",
      mcloudnight: "Облачно",
      cloudy: "Пасмурно",
      lightrain: "Легкий дождь",
      rain: "Дождь",
      rainnight: "Дождь",
      ts: "Гроза",
      tsday: "Гроза",
      tsnight: "Гроза",
      tsrain: "Гроза с дождем",
      tsrainnight: "Гроза с дождем",
      lightsnow: "Легкий снег",
      snow: "Снег",
      snownight: "Снег",
      rainsnow: "Мокрый снег",
      fog: "Туман",
      fognight: "Туман",
    };

    localStorage.setItem(
      "weatherCondition",
      weatherConditionsObj[weatherCondition]
    );
  })
  .catch((error) => {
    console.error("Ошибка при получении данных о погоде:", error);
  });

document.querySelector(".weather").textContent = `${localStorage.getItem(
  "city"
)} | ${localStorage.getItem("temperature")}°C | ${localStorage.getItem(
  "weatherCondition"
)}`;
