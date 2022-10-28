function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTimeZone = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTimeZone.format("dddd, MMMM D, YYYY");
  londonTimeElement.innerHTML = londonTimeZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTimeZone = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTimeZone.format("dddd, MMMM D, YYYY");
  parisTimeElement.innerHTML = parisTimeZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTimeZone = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTimeZone.format("dddd, MMMM D, YYYY");
  tokyoTimeElement.innerHTML = tokyoTimeZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let citytimeZone = event.target.value;
  let cityName = citytimeZone.split("/")[1];
  let cityTime = moment().tz(citytimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM D, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm [<small>]A[</small>]"
          )}</div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#selectCity");
citiesSelectElement.addEventListener("change", updateCity);
