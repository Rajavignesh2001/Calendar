function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";
  var greeting;
  var day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear();
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  if (h <= 7) {
    greeting = "Early Morning";
  } else if (h > 7 && h < 12) {
    greeting = "Morning";
  } else if (h >= 12 && h < 16) {
    greeting = "After Noon";
  } else if (h >= 16 && h < 19) {
    greeting = "Evening";
  } else {
    greeting = "Night";
  }

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h -= 12;
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  document.getElementById("time").innerHTML =
    "It's " + greeting + "  " + h + ":" + m + ":" + s + " " + session;
  document.getElementById("dmy").innerHTML = day + "/" + month + "/" + year;
  setTimeout(showTime, 1000);
}
showTime();
