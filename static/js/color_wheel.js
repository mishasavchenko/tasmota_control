var colorWell;
var default_color = "#0000ff";
var start_color = default_color;
// getIntialColor();
// window.addEventListener("start", getIntialColor, false);
console.log(start_color);
window.addEventListener("load", getIntialColor, false);
console.log(start_color);
// window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  // var a =
  // console.log(a);
  // colorWell.value = getIntialColor();
  colorWell.value = start_color;
  console.log("BBB");
  // console.log(colorWell.value);
  // colorWell.value = getIntialColor();

  colorWell.addEventListener("input", updateFirst, false);
  // colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

function getIntialColor() {
  var url = "http://10.0.0.70/cm?cmnd=State";
  const Http = new XMLHttpRequest();
  Http.open("GET", url, true);
  Http.send();

  Http.onreadystatechange = function() {
    var json = JSON.parse(Http.responseText);
    var current_color = '#' + json.Color.slice(0, 6);
    current_color = current_color.toLowerCase();
    console.log(current_color);
    start_color = current_color;
    // return current_color;
    // console.log(current_color);
    // console.log(current_color);

    // console.log(current_color);
    // for(i = 0; i < arr.length; i++) {
    //     out += '<a href="' + arr[i].url + '">' +
    //     arr[i].display + '</a><br>';
    // }
    // return current_color;
  }
  console.log("AAA");

  // console.log(Http.onreadystatechange);
  // return current_color;
  return "#ff00ff";
}

function updateFirst(event) {
  var base = "http://10.0.0.70/cm?cmnd=Color%20";
  var color = event.target.value.toUpperCase().slice(1);
  var url = base.concat(color);
  // var url = "http://10.0.0.70/cm?cmnd=State";

  const Http = new XMLHttpRequest();
  Http.open("GET", url, false);
  Http.send();

  // Http.onreadystatechange = (e) => {
  //   console.log(Http.responseText);
  //   // var json = JSON.parse(Http.responseText);
  //   // var current_color = json.Color.slice(0, 6);
  //   // console.log(current_color);
  //
  //
  //   // for(i = 0; i < arr.length; i++) {
  //   //     out += '<a href="' + arr[i].url + '">' +
  //   //     arr[i].display + '</a><br>';
  //   // }
  //
  // }
}
