const searchButton = document.querySelector('.search-button');
const apiKey = 'e0315d105fa643b0a1b165329231605';
let requestLocation = '';
let requestCountry = '';
let requestTemp = '';
let requestCondition = '';
let requestHumidity = '';
let requestWind = '';
let requestCode = '';

searchButton.addEventListener('click', async function() {
    const location = document.querySelector('.search-bar').value;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Handle the retrieved data here
        console.log(data);
        getData(data)
        displayCurrentData()
        changeImage()
    } catch (error) {
      alert('Enter a valid location Name!')
        console.error('Error fetching data:', error);
    }
});

function getData(data){
  requestLocation = data.location.name;
  requestCountry = data.location.country;
  requestTemp = data.current.temp_c;
  requestCondition = data.current.condition.text;
  requestHumidity = data.current.humidity;
  requestWind = data.current.wind_kph;
  requestCode = data.current.condition.code
  console.log(requestLocation , requestCountry , requestTemp , requestCondition , requestHumidity , requestWind)
  console.log(requestCode)
}

function displayCurrentData(){
  document.querySelector('.location-box').innerHTML = `Location : ${requestLocation}`
  document.querySelector('.country-box').innerHTML = `Country:${requestCountry}`
  document.querySelector('.temp-box').innerHTML = `Temperature : ${requestTemp}°C`
  document.querySelector('.condition-box').innerHTML = `Condition : ${requestCondition}`
  document.querySelector('.humidity-box').innerHTML = `Humidity : ${requestHumidity}%`
  document.querySelector(`.wind-box`).innerHTML = `Wind : ${requestWind}km/hr`
}


function changeImage(){
  const x = Number(requestCode);
  let newSrc =  document.querySelector('.weather-img');

  /*if (requestCondition === 'Partly cloudy' || requestCondition === 'cloudy' || requestCondition == 'Overcast'){
    document.querySelector('.weather-img').src = "images/clouds.png"
  }
  else if(requestCondition === 'Sunny' || requestCondition === 'Clear'){
    document.querySelector.src = "images/clear.png"
  }
  else if (requestCondition === "Mist" || requestCondition === "Patchy snow possible" ||)*/
  if(x === 1003 || x === 1006 || x === 1009){
    newSrc.src = "images/clouds.png";
  }
  else if(x === 1000){
    newSrc.src = "images/clear.png";
  }
  else if(x === 1135 || x === 1147 ){
    newSrc.src = "images/mist.png"
  }
  else if (x === 1180 || x === 1183 || x === 1186 || x === 1189 || x === 1192 || x === 1195 || x === 1198 || x === 1201 || x === 1240 || x === 1243 || x === 1246 || x === 1273 || x === 1276) {
    newSrc.src = "images/rain.png";}
  else if (x === 1210 || x === 1213 || x === 1216 || x === 1219 || x === 1222 || x === 1225 || x === 1255 || x === 1258 || x === 1279 || x === 1282) {
      newSrc.src = "images/snow.png"; 
    }
  else if(x === 1114 || x === 1117){
    newSrc.src = "images/wind.png"
  }
  else if (x === 1063 || x === 1150 || x === 1153 || x === 1168 || x === 1171){
    newSrc.src = "images/drizzle.png"
  }
}