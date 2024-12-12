let id = '9505fd1df737e20152fbd78cdb289b6a';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;


let valueSearch = document.getElementById('name');
let city = document.querySelector('.name');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let pressure = document.getElementById('pressure');
let humidity = document.getElementById('humidity');
let main = document.querySelector('main');

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(valueSearch.value != '') {
        searchWeather();
    }
})


const searchWeather = () => {
    fetch(url + '&q=' + valueSearch.value)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.cod == 200) {
            city.querySelector('figcaption').textContent = data.name;
            city.querySelector('img').src = 'http://flagsapi.com/' + data.sys.country + '/shiny/32.png';
            
            temperature.querySelector('img').src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png';
            temperature.querySelector('figcaption').innerHTML = data.main.temp;
            description.innerText = data.weather[0].description;
            clouds.innerText = data.clouds.all;
            pressure.innerText = data.main.pressure;
            humidity.innerText = data.main.humidity;
        } else {
            main.classList.add('error');
            setTimeout(() => {
                main.classList.remove('error');
            }, 1000);
        }

        valueSearch.value = '';
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

const initApp = () => {
    valueSearch.value = 'Lucknow';
    searchWeather();
}
initApp();