import React from 'react'

const Journal = ({journal}) => {

    return (
        <div>
            <h2>{journal.date}</h2>
            <img src={journal.picture} alt="Journal Picture" />
            <p>{journal.diary}</p>
        </div>
    )
}

export default Journal