import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 1, name: 'Arto Hellas', number: "09448081677" },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newKeyword, setNewKeyword ] = useState('')

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
      <div>
        filter shown with <input value={newKeyword} onChange={handleKeywordChange}/>
      </div>

      <h2>add a new</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
  {personsToShow.map(value => <p key={value.id}>{value.name} {value.number}</p>)}
    </div>
  )
}

export default App