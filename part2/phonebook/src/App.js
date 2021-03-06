import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
import Error from './components/Error'
import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newKeyword, setNewKeyword ] = useState('')
  const [ notification, setNotification] = useState(null)
  const [ error, setError] = useState(null)

  useEffect(()=> {
    console.log('effect');
  
    personService
      .getAll()
      .then(persons => {
        console.log('getAll',persons);      
        setPersons(persons)
      })
  },[])

  const personsToShow = persons.filter(value => value.name.toLocaleLowerCase().includes(newKeyword.toLocaleLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.map(value => value.name).includes(newName)) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        let person = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())
        let updatedPerson = {...person, number: newNumber}

        personService
          .update(updatedPerson.id, updatedPerson)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id === updatedPerson.id ? updatedPerson : p))
            setNewName('')
            setNewNumber('')
            setNotification(`Updated ${updatedPerson.name}`)    
            setTimeout(() => {
              setNotification(null)
            },5000)
          })
          .catch(error => {
            setPersons(persons.filter(p => p.id !== updatedPerson.id))
            setError(`Information of ${updatedPerson.name} has already been removed from server`)  
            setTimeout(() => {
              setError(null)
            },5000)
          })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(addedPerson => {
          setPersons(persons.concat(addedPerson))
          setNewName('')
          setNewNumber('')
          setNotification(`Added ${addedPerson.name}`)
          setTimeout(() => {
            setNotification(null)
          },5000)
        })
        .catch(error => {
          console.log("shit happened",)
          setError(error.response.data.error)  
          setTimeout(() => {
            setError(null)
          },5000)
        })
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

  const handleDelete = (person) => {
    if(window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person.id)
        .then(res => {
          console.log(`deleted`,res);
          setPersons(persons.filter(p => p.id !== person.id))
        })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Notification message={notification}/>
      <Error message={error}/>

      <Filter newKeyword={newKeyword}  handleKeywordChange={handleKeywordChange}/>

      <h2>add a new</h2>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      
      <h2>Numbers</h2>
      
      <Persons personsToShow={personsToShow} handleDelete={handleDelete}/>
    </div>
  )
}

export default App