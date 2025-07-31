export default function HomePage() {
  // Render HomePage HTML into #content
  const content = document.getElementById('content');
  if (!content) return;
  content.innerHTML = `
    <h1 class="my-4 text-center">Weather For <span id="cityName"></span></h1>
    <main>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Temperatures</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                <span id="temp2"></span><small class="text-body-secondary fw-light"><span>&#8451;</span></small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Temperature is <span id="temp"></span><span>&#8451;</span></li>
                <li>Feels like <span id="feelslike"></span></li>
                <li>Humidity is <span id="humidity"></span></li>
              </ul>
              
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Cloud-Info</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                <span id="conditions2"></span><small class="text-body-secondary fw-light"></small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Conditions is <span id="conditions"></span></li>
                <li>Sunset at <span id="sunset"></span></li>
                <li>Sunrise at <span id="sunrise"></span></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-primary">
            <div class="card-header py-3 text-bg-primary border-primary">
              <h4 class="my-0 fw-normal">Wind-Info</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                <span id="windspeed2"></span><small class="text-body-secondary fw-light">mp/h</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Clouds <span id="cloudcover"></span></li>
                <li>Visibility is <span id="visibility"></span></li>
                <li>Wind speed is <span id="windspeed"></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2 class="display-6 text-center mb-4" id="forecast-title">Next Days Forecast</h2>
      <div class="table-responsive mb-4">
        <table class="table text-center" id="forecast-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Max Temp (°C)</th>
              <th>Min Temp (°C)</th>
              <th>Avg Temp (°C)</th>
              <th>Conditions</th>
            </tr>
          </thead>
          <tbody>
            <!-- Forecast rows will be inserted here -->
          </tbody>
        </table>
      </div>
      <h2 class="display-6 text-center mb-4">Weather of other common cities</h2>
      <div class="table-responsive">
        <table class="table text-center">
          <thead>
            <tr>
              <th style="width: 34%;"></th>
              <th style="width: 22%;">Conditions</th>
              <th style="width: 22%;">Feels_like</th>
              <th style="width: 22%;">Humidity</th>
              <th style="width: 22%;">Sunrise</th>
              <th style="width: 22%;">Sunset</th>
              <th style="width: 22%;">Temp</th>
              <th style="width: 22%;">Wind_speed</th>
              <th style="width: 22%;">Visbility</th>
              <th style="width: 22%;">Cloud_Cover</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="text-start">Mumbai</th>
              <td id="conditions3"></td>
              <td id="feelslike3"></td>
              <td id="humidity3"></td>
              <td id="sunrise3"></td>
              <td id="sunset3"></td>
              <td id="temp3"></td>
              <td id="windspeed3"></td>
              <td id="visibility3"></td>
              <td id="cloudcover3"></td>
            </tr>
            <tr>
              <th scope="row" class="text-start">Kolkata</th>
              <td id="conditions4"></td>
              <td id="feelslike4"></td>
              <td id="humidity4"></td>
              <td id="sunrise4"></td>
              <td id="sunset4"></td>
              <td id="temp4"></td>
              <td id="windspeed4"></td>
              <td id="visibility4"></td>
              <td id="cloudcover4"></td>
            </tr>
            <tr>
              <th scope="row" class="text-start">Lucknow</th>
              <td id="conditions5"></td>
              <td id="feelslike5"></td>
              <td id="humidity5"></td>
              <td id="sunrise5"></td>
              <td id="sunset5"></td>
              <td id="temp5"></td>
              <td id="windspeed5"></td>
              <td id="visibility5"></td>
              <td id="cloudcover5"></td>
            </tr>
            <tr>
              <th scope="row" class="text-start">Jammu</th>
              <td id="conditions6"></td>
              <td id="feelslike6"></td>
              <td id="humidity6"></td>
              <td id="sunrise6"></td>
              <td id="sunset6"></td>
              <td id="temp6"></td>
              <td id="windspeed6"></td>
              <td id="visibility6"></td>
              <td id="cloudcover6"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  `;

  // Now re-select all required DOM elements
  const cityName = document.getElementById('cityName');
  const conditions = document.getElementById('conditions');
  const conditions2 = document.getElementById('conditions2');
  const feelslike = document.getElementById('feelslike');
  const humidity = document.getElementById('humidity');
  const sunrise = document.getElementById('sunrise');
  const sunset = document.getElementById('sunset');
  const temp = document.getElementById('temp');
  const temp2 = document.getElementById('temp2');
  const windspeed = document.getElementById('windspeed');
  const windspeed2 = document.getElementById('windspeed2');
  const visibility = document.getElementById('visibility');
  const cloudcover = document.getElementById('cloudcover');
  const submit = document.getElementById('submit');
  const city = document.getElementById('city');

  // Other cities
  const conditions3 = document.getElementById('conditions3');
  const feelslike3 = document.getElementById('feelslike3');
  const humidity3 = document.getElementById('humidity3');
  const sunrise3 = document.getElementById('sunrise3');
  const sunset3 = document.getElementById('sunset3');
  const temp3 = document.getElementById('temp3');
  const windspeed3 = document.getElementById('windspeed3');
  const visibility3 = document.getElementById('visibility3');
  const cloudcover3 = document.getElementById('cloudcover3');

  const conditions4 = document.getElementById('conditions4');
  const feelslike4 = document.getElementById('feelslike4');
  const humidity4 = document.getElementById('humidity4');
  const sunrise4 = document.getElementById('sunrise4');
  const sunset4 = document.getElementById('sunset4');
  const temp4 = document.getElementById('temp4');
  const windspeed4 = document.getElementById('windspeed4');
  const visibility4 = document.getElementById('visibility4');
  const cloudcover4 = document.getElementById('cloudcover4');

  const conditions5 = document.getElementById('conditions5');
  const feelslike5 = document.getElementById('feelslike5');
  const humidity5 = document.getElementById('humidity5');
  const sunrise5 = document.getElementById('sunrise5');
  const sunset5 = document.getElementById('sunset5');
  const temp5 = document.getElementById('temp5');
  const windspeed5 = document.getElementById('windspeed5');
  const visibility5 = document.getElementById('visibility5');
  const cloudcover5 = document.getElementById('cloudcover5');

  const conditions6 = document.getElementById('conditions6');
  const feelslike6 = document.getElementById('feelslike6');
  const humidity6 = document.getElementById('humidity6');
  const sunrise6 = document.getElementById('sunrise6');
  const sunset6 = document.getElementById('sunset6');
  const temp6 = document.getElementById('temp6');
  const windspeed6 = document.getElementById('windspeed6');
  const visibility6 = document.getElementById('visibility6');
  const cloudcover6 = document.getElementById('cloudcover6');


  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Ranchi?unitGroup=us&key=AQA3L28SMMW2RUK7DS6JJ87N3&contentType=json";
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=AQA3L28SMMW2RUK7DS6JJ87N3&contentType=json`, options)
      .then(response => response.json())
      .then(response => {
        conditions.innerHTML = response.currentConditions.conditions;
        conditions2.innerHTML = response.currentConditions.conditions;
        feelslike.innerHTML = ((response.currentConditions.feelslike - 32) * 5 / 9).toFixed(1) + " ℃";
        humidity.innerHTML = response.currentConditions.humidity;
        sunrise.innerHTML = response.currentConditions.sunrise;
        sunset.innerHTML = response.currentConditions.sunset;
        temp.innerHTML = ((response.currentConditions.temp -32) * 5 / 9).toFixed(1);
        temp2.innerHTML = ((response.currentConditions.temp -32) * 5 / 9).toFixed(1);
        windspeed.innerHTML = response.currentConditions.windspeed;
        windspeed2.innerHTML = response.currentConditions.windspeed;
        visibility.innerHTML = response.currentConditions.visibility;
        cloudcover.innerHTML = response.currentConditions.cloudcover;
        // Render forecast for next days
        const forecastTable = document.getElementById('forecast-table').getElementsByTagName('tbody')[0];
        forecastTable.innerHTML = '';
        if (response.days && Array.isArray(response.days)) {
          // Show up to 7 days forecast (excluding today)
          for (let i = 1; i <= 7 && i < response.days.length; i++) {
            const day = response.days[i];
            const date = day.datetime;
            const tempmax = ((day.tempmax - 32) * 5 / 9).toFixed(1);
            const tempmin = ((day.tempmin - 32) * 5 / 9).toFixed(1);
            const tempavg = ((day.temp - 32) * 5 / 9).toFixed(1);
            const cond = day.conditions || '';
            forecastTable.innerHTML += `<tr><td>${date}</td><td>${tempmax}</td><td>${tempmin}</td><td>${tempavg}</td><td>${cond}</td></tr>`;
          }
        }
        console.log(response);
      })
      .catch(err => console.error('Error fetching weather data:', err));
  };

  if (submit && city) {
    submit.onclick = (e) => {
      e.preventDefault();
      getWeather(city.value);
    };
  }

  getWeather("Ranchi");

  // Fetching weather data for other cities
  // Mumbai
  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Mumbai?unitGroup=us&key=AQA3L28SMMW2RUK7DS6JJ87N3&contentType=json`, options)
    .then(response => response.json())
    .then(response => {
      conditions3.innerHTML = response.currentConditions.conditions;
      feelslike3.innerHTML = response.currentConditions.feelslike + ' <span>&#8457;</span>';
      humidity3.innerHTML = response.currentConditions.humidity;
      sunrise3.innerHTML = response.currentConditions.sunrise;
      sunset3.innerHTML = response.currentConditions.sunset;
      temp3.innerHTML = response.currentConditions.temp;
      windspeed3.innerHTML = response.currentConditions.windspeed;
      visibility3.innerHTML = response.currentConditions.visibility;
      cloudcover3.innerHTML = response.currentConditions.cloudcover;
    })
    .catch(err => console.error('Error fetching weather data:', err));

  // Kolkata
  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kolkata?unitGroup=us&key=AQA3L28SMMW2RUK7DS6JJ87N3&contentType=json`, options)
    .then(response => response.json())
    .then(response => {
      conditions4.innerHTML = response.currentConditions.conditions;
      feelslike4.innerHTML = response.currentConditions.feelslike + ' <span>&#8457;</span>';
      humidity4.innerHTML = response.currentConditions.humidity;
      sunrise4.innerHTML = response.currentConditions.sunrise;
      sunset4.innerHTML = response.currentConditions.sunset;
      temp4.innerHTML = response.currentConditions.temp;
      windspeed4.innerHTML = response.currentConditions.windspeed;
      visibility4.innerHTML = response.currentConditions.visibility;
      cloudcover4.innerHTML = response.currentConditions.cloudcover;
    })
    .catch(err => console.error('Error fetching weather data:', err));

  // Lucknow
  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lucknow?unitGroup=us&key=AQA3L28SMMW2RUK7DS6JJ87N3&contentType=json`, options)
    .then(response => response.json())
    .then(response => {
      conditions5.innerHTML = response.currentConditions.conditions;
      feelslike5.innerHTML = response.currentConditions.feelslike + ' <span>&#8457;</span>';
      humidity5.innerHTML = response.currentConditions.humidity;
      sunrise5.innerHTML = response.currentConditions.sunrise;
      sunset5.innerHTML = response.currentConditions.sunset;
      temp5.innerHTML = response.currentConditions.temp;
      windspeed5.innerHTML = response.currentConditions.windspeed;
      visibility5.innerHTML = response.currentConditions.visibility;
      cloudcover5.innerHTML = response.currentConditions.cloudcover;
    })
    .catch(err => console.error('Error fetching weather data:', err));

  // Jammu
  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Jammu?unitGroup=us&key=AQA3L28SMMW2RUK7DS6JJ87N3&contentType=json`, options)
    .then(response => response.json())
    .then(response => {
      conditions6.innerHTML = response.currentConditions.conditions;
      feelslike6.innerHTML = response.currentConditions.feelslike + ' <span>&#8457;</span>';
      humidity6.innerHTML = response.currentConditions.humidity;
      sunrise6.innerHTML = response.currentConditions.sunrise;
      sunset6.innerHTML = response.currentConditions.sunset;
      temp6.innerHTML = response.currentConditions.temp;
      windspeed6.innerHTML = response.currentConditions.windspeed;
      visibility6.innerHTML = response.currentConditions.visibility;
      cloudcover6.innerHTML = response.currentConditions.cloudcover;
    })
    .catch(err => console.error('Error fetching weather data:', err));

}