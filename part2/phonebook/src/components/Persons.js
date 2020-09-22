import React from 'react'

const Persons = ({personsToShow}) => {
    return <div>{personsToShow.map(value => <p key={value.id}>{value.name} {value.number}</p>)}</div>
}

export default Persons