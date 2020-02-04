//HTML elementen
let activate1 = document.getElementById('activate1'); //Bind via DOM
let activate2 = document.getElementById('activate2'); //Bind via DOM aan JS
let activate3 = document.getElementById('activate3'); //Bind via DOMbutton aan JS

activate1.addEventListener("click", getWeather1); //Click Event
activate2.addEventListener("click", getWeather2);
activate3.addEventListener("click", getWeather3);

//let result = document.getElementById('container');
let result = document.getElementById('result'); //Bind div element aan JS

//Weather API http://weerlive.nl/delen.php
let apiAddress = "http://weerlive.nl/api/json-data-10min.php?key=" //Address
let key = "demo";
let locatie = "&locatie=";
let geoLocation = "Amsterdam"; //Locatie als string
let url = apiAddress + key + locatie + geoLocation; //URL van API

function getWeather1(){
  //console.log(url);
  makeAjaxCall(url, "GET"). then (showWeather1, errorHandler);
}

function showWeather1(JSONresponseFromAjax){
  //console.log("Show the one.");
  result.innerHTML = JSONresponseFromAjax; //Laat de ruwe data zien
}

function getWeather2(){
  makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
}

function showWeather2(JSONresponseFromAjax){
  let weatherObject = JSON.parse(JSONresponseFromAjax); //Covert JS string => Object
  let completeData = ""; //Maak een lege string

  for (const [key, value] of Object.entries(weatherObject.liveweer[0]))
  {
    //console.log(`${key}: ${value}`);
    completeData += key + " : " + value + "<br>"; //Maak string
    result.innerHTML = completeData; //String printen naar browser
  }
}

function getWeather3(){
  makeAjaxCall(url, "GET"). then (showWeather3, errorHandler);
}

function showWeather3(JSONresponseFromAjax){
  let weatherObject = JSON.parse(JSONresponseFromAjax); //Covert JS string => Object
  let completeData = "";

  for (const [key, value] of Object.entries(weatherObject.liveweer[0]))
  {
    //console.log(`${key}: ${value}`);
    //console.log(key, value);

    switch (key) {
      case "plaats":
        completeData += value + "<br><br>";
        break;
      case "temp":
        completeData += "Temperatuur: " + value + " °C <br>";
        break;
      case "samenv":
        completeData += value + "<br>";
        break;
      case "verw":
        completeData += value + "<br>";
        break;
    }
    //completeData += value + "<br>"; //Maak string
    result.innerHTML = completeData; //String printen naar browser
  }
}
