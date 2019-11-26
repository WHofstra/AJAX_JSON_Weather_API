function makeAjaxCall(url, methodType){
  let promiseObj = new Promise(function(resolve, reject){
    console.log(url);

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open(methodType, url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
      if (xmlhttp.readystate === 4)
      {
        if (xmlhttp.status === 200)
        {
          console.log("Xmlhttp done succesfully.");

          let serverResponse = xmlhttp.responseText; //Server antwoord met string
          console.log(serverResponse);
          resolve(serverResponse); //Wordt via return promiseObj teruggegeven
        }
        else
        {
          reject(xmlhttp);
          console.log("Xmlhttp processing still going on.");
        }
      }
    }
    console.log("Request sent succesfully.");
  });
  return promiseObj;
}

function errorHandler(statusCode){
  console.log("Failed with status ", status);
}
