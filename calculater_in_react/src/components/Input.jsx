import React from 'react'

function Input({buttonvalue}) {
    return (
        <div>

<input type="text" value={buttonvalue} readOnly />

        </div>
    )
}

export default Input
