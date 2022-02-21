export { ui }

const ui = (weatherData) => {
    if (!weatherData) return;
    const searchData = document.getElementById('searchResult')
    searchData.classList.add('active')

    const cityName = document.getElementById('cityName')
    const temperature = document.getElementById('temperature')
    const humidity = document.getElementById('humidity')
    const windSpeed = document.getElementById('wind')

    cityName.innerHTML = `${weatherData.cityName}`
    temperature.innerHTML = `${weatherData.temperature} °C`
    humidity.innerHTML = `Humidity: ${weatherData.humidity}`
    windSpeed.innerHTML = `Wind Speed: ${weatherData.windSpeed}`

    return searchData;
}