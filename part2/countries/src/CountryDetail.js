import React from 'react'

const CountryDetail = ({country}) => {
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
        </div>
    )
}

export default CountryDetail