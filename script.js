async function dataFetch(){
    let getInput = await fetch("https://restcountries.com/v2/all");
    let resInput = await getInput.json();
    console.log(resInput);

    displayInCard(resInput)
}
dataFetch()

function displayInCard(resInput){

    var div = document.createElement("div");
    div.className = "container";
    div.innerHTML = "<h1><i>Rest Countries & Weather Using Fetch API</i></h1>";

    var row = document.createElement("div");
    row.className = "row";

    for(let i = 0; i<resInput.length;i++){
        console.log(resInput[i]);

        var col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `<div class="card" id="main-align" style="width: 18rem;">
        <h3 class="card-title text-center"><b>${resInput[i].name}</b></h3>
        <img src="${resInput[i].flag}" class="card-img-top" alt="..." id = "img-align">
        
          <div class="card-body" id="card-align">
           
          <p class="card-text">Capital: ${resInput[i].capital}</p>
          <p class="card-text">Region: ${resInput[i].region}</p>
          <p class="card-text">Country Code: ${resInput[i].callingCodes}</p>
          <p class="card-text">LatLng: ${resInput[i].latlng}</p>
          
          <a href="#" class="btn btn-primary" id="button-align" onclick = "weatherTest('${resInput[i].name}')">Click For Weather</a>
        
          </div>
        </div>`;
        
        row.append(col);

    }
    div.append(row);
    document.body.append(div);
}
function weatherTest(countryName){
    console.log(JSON.stringify(countryName));
    var weather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=9c74b3de00340a6c7db725ba6a833843`);
    
    weather.then((data)=>data.json()).then((weatherData)=> {
      console.log(weatherData);
        alert(`weather in ${countryName}: ${weatherData.weather[0].description}`);
      
    })
  }