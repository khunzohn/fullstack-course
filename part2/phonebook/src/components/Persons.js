import React from 'react'

const Persons = ({personsToShow, handleDelete}) => {
    return (
        <div>
            {personsToShow.map(value => 
                <div key={value.id}>
                    {value.name} {value.number} <button onClick={() => handleDelete(value)}>delete</button>
                </div>)
            } 
        </div>
    )
}

export default Persons