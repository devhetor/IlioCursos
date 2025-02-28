import React from "react";
import ReactDOM from "react-dom";
import { MyComponent } from "./demo";

import "./styles.css";
import UsersList from "./users-list";
import Users from './components/users';
import SelectTitle from "./components/select-title";

function App() {
  return (
    <div className="App">
      <MyComponent />
      <h1>Users</h1>
      <Users/>
      <SelectTitle/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
