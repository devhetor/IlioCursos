import React, { useEffect } from 'react';
import { useState } from "react";


export default function Users(){
    const [users, setUsers] = useState([]);

    // work like a componentDidMount
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(res => setUsers(res))
     .catch(err => console.log(err))
    },[])

    return <div>{JSON.stringify(users)}</div>
}