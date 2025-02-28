import React, {useState} from "react";

export const MyComponent = props => {
  const [name, setName] = useState('John Doe');
  const [count, setCount] = useState(0);
  const [person, setPerson ] = useState({
    name: 'Haider',
    email: 'ali@gmail.com'
  })

  return (
    <>
      <h4>{name}</h4>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h4>{count}</h4>
      <button onClick={() => setCount(count+1)}>
       +
      </button>
      <p>{person.name}</p>
      <p>{person.email}</p>

      <input
      value={person.name}
      onChange={(e) => setPerson({
        ...person,
        name: e.target.value
      })}/>

       <input
      value={person.email}
      onChange={(e) => setPerson({
        ...person,
        email: e.target.value
      })}/>
    </>
  );
};