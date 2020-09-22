import React from 'react'

const Error = ({message}) => {
    
    const style = {
        fontSize: 16,
        color: 'red',
        background: 'lightgrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if(message === null) {
        return null
    } else {
        return (
            <div style={style}>{message}</div>
        )
    }
}

export default Error