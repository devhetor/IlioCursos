import React from "react";
import ReactDOM from "react-dom";
import { MyComponent } from "./demo";

import "./styles.css";
import UsersList from "./users-list";
import Users from './components/Users';
import SelectTitle from "./components/SelectTitle";
import UserStorage from "./components/UserStorage";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <MyComponent />
      <h1>Users</h1>
      <Users/>
      <SelectTitle/>
      <h1>Users</h1>
      <UserStorage/>
      <h1>Counter</h1>
      <Counter/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
