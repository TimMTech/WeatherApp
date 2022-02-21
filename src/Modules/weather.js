export { weather }

const convertData = (data) => {
    const { name: cityName,
            main: {
                temp: temperature,
                humidity: humidity
            },
            wind: {
                speed: windSpeed
            }
        } = data
    
    return { cityName, temperature, humidity, windSpeed }
}

const weather = async (city) => {
    const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7d118477d9762c05d4af34b441114d8f`
    const response = await fetch(requestUrl, { mode: 'cors'})
    const data = convertData(await response.json())
    
    return data
}


