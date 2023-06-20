let currentcity = document.querySelector('#city')
let btn = document.querySelector('#add');
let city = document.querySelector('#output')
let summary = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')
apik = "375b5b72defecfdfccfa090d50f49db4"

function getWeatherData(val)
{
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function()
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+currentcity.value+'&appid='+apik)
  .then(res => res.json())


  .then(data => 
  {
    let currentcity = data['name']
    let summary = data['weather']['0']['description']
    let tempature = data['main']['temp']
    let wndrate = data['wind']['speed']
    city.innerHTML=`Weather Info: <span>${currentcity}<span>`
    temp.innerHTML = `Temperature Info: <span>${ getWeatherData(tempature)} C</span>`
    description.innerHTML = `Humidity: <span>${summary}<span>`
    wind.innerHTML = `Wind Speed: <span>${wndrate} km/h<span>`

  })

  .catch(err => alert('Please Enter City !'))
})