const apiKey='085a2baf803d961034e4af8cf025ff07'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

function fetchWeatherByCity(cityName){
    const apiUrl = `${baseUrl}?q=${cityName}&appid=${apiKey}&units=imperial`;

    return fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                throw new Error("Network response was not ok")
            }
            return response.json();
        })
        .then(data => ({
            temperature:data.main.temp,
            description:data.weather[0].description,
            cityName:name

        }))
        .catch(error => {
            console.error("fetch error", error)
            return null;
        });
    }
    function initialize(){
        document.addEventListener('DOMContentLoaded',function(){
            const weatherForm = document.getElementById("weatherForm");
            const weatherInfo = document.getElementById("weatherInfo");
        
           if(weatherForm &&weatherInfo){
            weatherForm.addEventListener('submit',function(event){
                event.preventDefault();
                const cityNameInput = document.getElementById('cityNameInput');
                if(cityNameInput) {
                    const cityName = cityNameInput.value;
                    fetchWeatherByCity(cityName).then(data =>{
                        if(data){
                            weatherInfo.innerHTML= `<h2>Weather in ${cityName}</h2>
                                                    <p>Temperature: ${temperature} °F</p>
                                                    <p>Description: ${description}</p>`;
                        }else{
                            weatherInfo.innerHTML=`<p>Failed to fetch weather data for ${cityName}.`
                        }
                    });
                }else{
                    console.error('City Name input element not found')
                }
            });
           }else{
            console.error("Weather form or element not found");
           }
        });
    }
    
module.exports=fetchWeatherByCity;