import React from 'react'

import './Quote.css'

function Quote({
                   author,
                   message,
               }) {
    return (
        <p>
            <q>{message}</q>
            <small>
                <i>
                    {author}
                </i>
            </small>
        </p>
    )
}

export default Quote;
