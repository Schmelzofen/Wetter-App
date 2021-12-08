let output = document.getElementById("output")
let suche = document.getElementById("suche")
let button = document.querySelector("button")
let wetterWoche = document.getElementById("wetter-uebersicht-woche")
let stadt = document.getElementById("stadt")
let temperatur1 = document.getElementById("temperatur")
let status = document.getElementById("status")

/* let long
let lat
window.navigator.geolocation
    .getCurrentPosition(console.log, console.log);
    long = 


getLocation = () => {
    
}

console.log(window.navigator.geolocation.coordinates)
 */


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
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${suche.value}&units=metric&lang=de&appid=6cd6bbc50c50e509f53f9de106e1379e`)
    .then(res => res.json())
    .then(json => {
        console.log(json.list)
        let stadtName = json.city.name

        let temperaturTag1Wochentag = new Date(json.list[0].dt_txt.substring(0,10)).toLocaleString('de-de', {  weekday:'long'})
        let temperaturTag1 = Math.round(json.list[0].main.temp)+"°C"
        let temperaturTag1Description = json.list[0].weather[0].description
        let temperaturTag1Icon = `<img src="https://openweathermap.org/img/wn/${json.list[0].weather[0].icon}@2x.png" alt="${temperaturTag1Description}">`

        let temperaturTag2Wochentag = new Date(json.list[8].dt_txt.substring(0,10)).toLocaleString('de-de', {  weekday: 'long' })
        let temperaturTag2 = Math.round(json.list[8].main.temp)+"°C"
        let temperaturTag2Description = json.list[8].weather[0].description
        let temperaturTag2Icon = `<img src="https://openweathermap.org/img/wn/${json.list[8].weather[0].icon}@2x.png" alt="${temperaturTag2Description}">`

        let temperaturTag3Wochentag = new Date(json.list[16].dt_txt.substring(0,10)).toLocaleString('de-de', {  weekday: 'long' })
        let temperaturTag3 = Math.round(json.list[16].main.temp)+"°C"
        let temperaturTag3Description = json.list[16].weather[0].description
        let temperaturTag3Icon = `<img src="https://openweathermap.org/img/wn/${json.list[16].weather[0].icon}@2x.png" alt="${temperaturTag3Description}">`

        let temperaturTag4Wochentag = new Date(json.list[24].dt_txt.substring(0,10)).toLocaleString('de-de', {  weekday: 'long' })
        let temperaturTag4 = Math.round(json.list[24].main.temp)+"°C"
        let temperaturTag4Description = json.list[24].weather[0].description
        let temperaturTag4Icon = `<img src="https://openweathermap.org/img/wn/${json.list[24].weather[0].icon}@2x.png" alt="${temperaturTag4Description}">`

        let temperaturTag5Wochentag = new Date(json.list[32].dt_txt.substring(0,10)).toLocaleString('de-de', {  weekday: 'long' })
        let temperaturTag5 = Math.round(json.list[32].main.temp)+"°C"
        let temperaturTag5Description = json.list[32].weather[0].description
        let temperaturTag5Icon = `<img src="https://openweathermap.org/img/wn/${json.list[32].weather[0].icon}@2x.png" alt="${temperaturTag5Description}">`

/*         stadt.innerHTML = json.city.name
        temperatur.innerHTML =
        status.innerHTML =  */
        wetterWoche.innerHTML = `
        <ul>
            <li><span>${temperaturTag1Wochentag}</span> <span>${temperaturTag1}</span> <span>${temperaturTag1Icon}</span></li>
            <li><span>${temperaturTag2Wochentag}</span> <span>${temperaturTag2}</span> <span>${temperaturTag2Icon}</span></li>
            <li><span>${temperaturTag3Wochentag}</span> <span>${temperaturTag3}</span> <span>${temperaturTag3Icon}</span></li>
            <li><span>${temperaturTag4Wochentag}</span> <span>${temperaturTag4}</span> <span>${temperaturTag4Icon}</span></li>
            <li><span>${temperaturTag5Wochentag}</span> <span>${temperaturTag5}</span> <span>${temperaturTag5Icon}</span></li>
        </ul>
        `
    })
fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${suche.value}&units=metric&lang=de&appid=6cd6bbc50c50e509f53f9de106e1379e`)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let wetter = json.weather
        let temperatur = json.list[0].main.temp
        let sonne = json.sys
        let wind = json.wind
        console.log(wetter)
        console.log(temperatur)
        console.log(sonne)
        console.log(wind)
        stadt.innerHTML = json.city.name
        temperatur1.innerHTML = temperatur.toFixed() + "°C"
        status.innerHTML = json.list[0].weather[0].main
    })
})


let datum = new Date(1638947037*1000)
console.log(datum)


console.log(new Date().toLocaleString('de-de', {  weekday: 'long' }));


