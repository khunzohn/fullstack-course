import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newKeyword, setNewKeyword ] = useState('')

  useEffect(()=> {
    console.log('effect');
    axios
      .get("http://localhost:3002/persons")
      .then(response => {
        console.log(response);
        setPersons(response.data)
      })
  },[])

  const personsToShow = persons.filter(value => value.name.toLocaleLowerCase().includes(newKeyword.toLocaleLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.map(value => value.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)  
    } else {
      const personObject = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  const handleKeywordChange = (event) => {
    console.log(event.target.value);
    setNewKeyword(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter newKeyword={newKeyword}  handleKeywordChange={handleKeywordChange}/>

      <h2>add a new</h2>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      
      <h2>Numbers</h2>
      
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App