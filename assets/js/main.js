let output = document.getElementById("output")
let suche = document.getElementById("suche")
let button = document.querySelector("button")

/* fetch("http://api.openweathermap.org/data/2.5/weather?q=Berlin&lang=de&appid=6cd6bbc50c50e509f53f9de106e1379e")
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let wetter = json.weather
        let temperatur = json.main
        let sonne = json.sys
        let wind = json.wind
        console.log(wetter)
        console.log(temperatur)
        console.log(sonne)
        console.log(wind)
    })
 */

    // Current weather data
    // https://openweathermap.org/current



/* fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${KEY}&lang=de&appid=6cd6bbc50c50e509f53f9de106e1379e`)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let list = json.list
        list.forEach(elt => {
            console.log(elt)
        })
    }) */


button.addEventListener("click", () =>{
    console.log(suche.value)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${suche.value}&lang=de&appid=6cd6bbc50c50e509f53f9de106e1379e`)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let wetter = json.weather
        let temperatur = json.main
        let sonne = json.sys
        let wind = json.wind
        let sonnenaufgang = new Date()
        let sonnenuntergang = new Date()
        console.log(wetter)
        console.log(temperatur)
        console.log(sonne)
        console.log(wind)
        output.innerHTML = `${wind.speed} , ${wind.deg} , ${wind.gust} <br> ${sonnenaufgang.setTime(Number(sonne.sunrise))} , ${sonnenuntergang.setTime(Number(sonne.sunset))} <br> ${temperatur.feels_like}, ${temperatur.temp_min}, ${temperatur.temp_max}, ${temperatur.temp}, ${temperatur.humidity}, ${temperatur.pressure} <br>  ${wetter[0].description}`
    })

})