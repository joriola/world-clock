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
