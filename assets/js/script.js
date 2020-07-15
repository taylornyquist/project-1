// seems like this one will accept uppercase or lowercase, still should use .val() and .trim()

var stateCode = "tn";

function getNPSData() {

    fetch(
        "https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=" + stateCode + "&api_key=VWQc76Xi1MA1G7mT3R2RbvodV6ongjdqKvID51cV"
    )

        .then(function (NPSResponse) {
            return NPSResponse.json();
        })
        .then(function (NPSResponse) {
            console.log(NPSResponse);
            console.log(NPSResponse.data[0].fullName);
            console.log(NPSResponse.data[0].description);

        })

};


var cityName = "nashville";

function getTickemaster() {

    fetch(
        "https://app.ticketmaster.com/discovery/v2/events.json?&city=" + cityName + "&apikey=tjyAA0gwpffEVvhQI0s0EEVJT3wznjso"
    )
        .then(function (ticketmasterResponse) {
            return ticketmasterResponse.json();
        })
        .then(function (ticketmasterResponse) {
            console.log(ticketmasterResponse);
            console.log(ticketmasterResponse._embedded.events[0].name);
            console.log(ticketmasterResponse._embedded.events[0].url);

        })

};

// state must be lowercase and two letter abbreviation, we'll use toLowerCase() method
// user will need to input both a city and a state for these api's to work

var state = "tn";

function getCovidData() {

    fetch(
        "https://covidtracking.com/api/v1/states/" + state + "/current.json"
        )

        .then(function (CovidResponse) {
            return CovidResponse.json();
        })
        .then(function (CovidResponse) {
            console.log(CovidResponse);
            console.log(CovidResponse.positive);
        
        })

};

var city = "nashville"

function getWeatherForecast() {
    fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=23374a7ea0862c1bbdc6d9a18c5c0b7a"
    )
    .then(function(weatherResponse) {
        return weatherResponse.json();
    })
    .then(function(weatherResponse) {
         //create element to house forecast information
        //  forecastEl.innerHTML = "<h4 class='mt-3'>5-Day Forecast:</h4>";
         var forecastRowEl = document.createElement("div");
         forecastRowEl.className = "row";
         var divEl = document.createElement("div");
         divEl.classList.add("card-deck");


         for (i = 0; i < response.list.length; i++) {
             //find instances in the forecast data occurring at 3 p.m. 
             if (response.list[i].dt_txt.indexOf("15:00:00") !== -1) {

                 //create cards to hold forecast data
                 var cardEl = document.createElement("div");
                 cardEl.classList.add("card", "bg-primary", "text-white");
                 //create element and pull date from each instance
                 var dateEl = document.createElement("h5");
                 date = response.list[i].dt_txt;
                 dateEl.textContent = moment(date).format("MM/DD/YYYY");
                 //create element and pull icon depicting current weather conditions for each instance
                 var iconEl = document.createElement("img");
                 iconEl.src = "http://openweathermap.org/img/wn/" + response.list[i].weather[0].icon + "@2x.png";
                 iconEl.alt = response.list[i].weather[0].description;
                 iconEl.setAttribute("class", "icon");
                 //create element and pull temperature for each instance 
                 var tempEl = document.createElement("p");
                 tempEl.innerHTML = "<p>Temp: " + response.list[i].main.temp + "&degF</p>";
                 //create element and pull humidity level for each instance
                 var humidityEl = document.createElement("p");
                 humidityEl.textContent = "Humidity: " + response.list[i].main.humidity + "%";

                 //append all elements to cards
                 cardEl.appendChild(dateEl);
                 cardEl.appendChild(iconEl);
                 cardEl.appendChild(tempEl);
                 cardEl.appendChild(humidityEl);
                 divEl.appendChild(cardEl);
                 forecastEl.append(divEl);

             }
         }
     })
};




getNPSData();
getTickemaster();
getCovidData();
getWeatherForecast();