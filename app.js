const searchBtn = document.querySelector("#searchBtn");
const inputBox = document.querySelector(".input-box");
const weather_img = document.querySelector(".weather-img");
const temp = document.querySelector(".temp");
const desc = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");

weather_body.style.display="none";
async function checkWeather(city){
    const api_key = "3bece272481b035c7811186b6fa533ae";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response =>
        response.json());
    
    if(weather_data.cod == `404`){
        try{
            location_not_found.style.display="flex";
            weather_body.style.display="none";
    
            console.log("Error");
            return;
        }
        catch(err){
            location_not_found.style.display="flex";
            weather_body.style.display="none";
    
            console.log(err);
            return;
            
        }
            
        
    
            
    }
    console.log(weather_data);
    temp.innerHTML = `${Math.round((weather_data.main.temp)-273)}°C`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/hr`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    desc.innerText = weather_data.weather[0].description;
    
    
    weather_body.style.display="flex";
    location_not_found.style.display="none";


    switch(weather_data.weather[0].main){
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            break;
        case 'Clouds':
            weather_img.src = "/assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png";
            break;

        case 'Rain':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png";
            break;
        

    }
}


searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
    weather_body.display.style="flex";
})
