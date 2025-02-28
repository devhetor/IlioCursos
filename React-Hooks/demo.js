import React, { useState } from 'react';

export const MyComponent = props => {
    const nameArray = React.useState('Jonh Doe');
    const myname = name[0]
    const setMyName = name[0]

    return (
        <>
            <h4>{MyName}</h4>
            <input>
                value={MyName}
                onChange={(e) => setMyName(e.target.value)}
            </input>
        </>
    )
}