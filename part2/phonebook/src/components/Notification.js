import React from 'react'

const Notification = ({message}) => {
    
    const style = {
        fontSize: 16,
        color: 'green',
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

export default Notification