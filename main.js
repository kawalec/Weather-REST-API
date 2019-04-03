const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Lublin,%20pl&APPID=c5a511f8c8c9cb56da94da36ea4f4cc5', true);
xhr.send();
xhr.onload = () => {
    if (xhr.status === 200) {
        const day = JSON.parse(xhr.responseText);
        document.querySelector('#town').innerHTML = `Miasto: ${day.name}`;
        document.querySelector('#temperature').innerHTML = `Temperature: ${Math.round((day.main.temp-273)*100)/100} &deg;C`;
        document.querySelector('#rain').innerHTML = `Rain: ${day.weather[0].main} / ${day.weather[0].description} / (icon) ${day.weather[0].icon}`;
        document.querySelector('#humidity').innerHTML = `Humidity: ${day.main.humidity} %`;
        document.querySelector('#wind').innerHTML = `Wind: ${day.wind.speed} m/s / ${day.wind.deg} &deg;`;
        document.querySelector('#pressure').innerHTML = `Pressure: ${day.main.pressure} hPs`;
    } else {
        console.log(`Błąd: ${xhr.status}, ${xhr.statusText}.`);
    }
}


fetch("http://api.openweathermap.org/data/2.5/forecast?q=Lublin,%20pl&APPID=c5a511f8c8c9cb56da94da36ea4f4cc5")
.then(res => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(res)
    }
})

.then(res => {
    let week = "";
    for(let i=0; i<res.list.length; i++) {
        week += `
        Day: ${res.list[i].dt_txt} <br>
        Temperature: ${Math.round((res.list[i].main.temp-273)*100)/100} C <br>
        Rain: ${res.list[i].weather[0].main} / ${res.list[i].weather[0].description} <br>
        Wind: ${res.list[i].wind.speed} m/s / ${res.list[i].wind.deg} <br>
        Pressure: ${res.list[i].main.pressure} hPa <br>
        <hr>
        `
    }
    document.querySelector('#week').innerHTML = week;
})
.catch(err => console.dir(err))