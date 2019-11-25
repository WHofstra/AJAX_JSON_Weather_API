//HTML elementen
let activate1 = document.getElementById('activate1'); //Bind via DOM
let activate2 = document.getElementById('activate2'); //Bind via DOM aan JS
let activate3 = document.getElementById('activate3'); //Bind via DOMbutton aan JS

activate1.addEventListener("click", getWeather1); //Click Event



let result = document.getElementById('result'); //Bind div element aan JS

//Weather API http://weerlive.nl/delen.php
let apiAddress = "http://weerlive.nl/api/json-data-10min.php?key=" //Address
let key = "demo";
let locatie = "&locatie=";
let geoLocation = "Amsterdam"; //Locatie als string
let url = apiAddress + key + locatie + geoLocation; //URL van API
