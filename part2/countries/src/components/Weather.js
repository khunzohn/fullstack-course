import React from 'react'

const Weather = ({weather}) => {
    return (
        <div>
            <h4>Weather in {weather.location.name}</h4>
            <div><b>temperature:</b> {weather.current.temperature} Celcius</div>
            <img src={weather.current.weather_icons[0]} alt='weather icon'/>
            <div><b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</div>
        </div>
    )
}

export default Weather