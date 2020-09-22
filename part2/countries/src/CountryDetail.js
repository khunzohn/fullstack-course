import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const CountryDetail = ({country}) => {

    const [weather , setWeather] = useState(null)

    const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        console.log('CountryDetail effect');
        axios
            .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital}}`)
            .then(response => {
                console.log("weather => ",response);
                setWeather(response.data)
            })
    },[])

    return (
        <div>
            <h2>{country.name}</h2>
        
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
        

            <h4>Spoken language</h4>
            
            <ul>
                {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
            </ul>

            <img src={country.flag} alt='country flag' width='100px' height='60px'/>

            { weather != null ?<Weather weather={weather}/> : <div/>}
            
        </div>
    )
}

export default CountryDetail