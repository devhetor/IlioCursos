import React, { useState, useEffect } from "react";

export default function UserStorage() {
  const [user, setUser] = useState("Jane");


  // when you load the component
  // when component mounted successfully then we need to perform it
  useEffect(() => {
     // make sure save the user to localstorage
    const user = window.localStorage.getItem('user');
    if(user){
        setUser(user);
    }
  },[]);

  useEffect(() => {
   window.localStorage.setItem('user', user)
  },[user])

  return (
    <select value={user} onChange={e => setUser(e.target.value)}>
      <option>Doe</option>
      <option>Jane</option>
      <option>Marcus</option>
      <option>Samin</option>
    </select>
  );
}