import React, { useEffect } from 'react';
import { useState } from "react";


export default function Users() {
  const [users, setUsers] = useState([]);

  // work like a componentDidMount
  useEffect(() => {
    async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const results = await response.json();
      setUsers(results);
      console.log(results);
    }
    catch (e) {
      console.error(e);
    }
  }
    fetchData();
  }, [])

  return <div>{users.length}</div>


}