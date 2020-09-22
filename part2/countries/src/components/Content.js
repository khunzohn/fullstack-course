import React from 'react'
import Country from './Country'
import CountryDetail from './CountryDetail'

const Content = ({ countriesToShow, handleShow, clickedCountry}) => {

    if(clickedCountry != null) {
        return <CountryDetail country={clickedCountry}/>
    } else if(countriesToShow.length > 10) {
        return <p>Too many matches, specify another filter</p>
    } else if(countriesToShow.length == 1) {
        return <CountryDetail country={countriesToShow[0]}/>
    } else {
        return (
            <div>
                {countriesToShow.map(country => <Country country={country} handleShow={()=> handleShow(country)}/>)}
            </div>
        )
    }
}

export default Content