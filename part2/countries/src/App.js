import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import axios from 'axios'

function App() {
  const [newKeyword, setKeyword] = useState('')
  const [countries, setCountries] = useState([])
  const [clickedCountry, setClickedCountry] = useState(null)

  useEffect(()=> {
    console.log('effect');
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('response =>',response);
        setCountries(response.data)
      })
  },[])


  const countriesToShow = newKeyword ? countries.filter(country => country.name.toLowerCase().startsWith(newKeyword.toLowerCase())) : []
  
  const handleKeywordChange = (event) => {
    console.log(event.target.value)
    setClickedCountry(null)
    setKeyword(event.target.value)
  }

  const handleShow = (country) => {
    console.log('clickedCountry', country);
    setClickedCountry(country)
  }

  return (
    <div>
      <div>find countries<input value ={newKeyword} onChange={handleKeywordChange}></input></div>  
      <Content countriesToShow={countriesToShow} handleShow={handleShow} clickedCountry={clickedCountry}/>
    </div>
  );
}

export default App;
