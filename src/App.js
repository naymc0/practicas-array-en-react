import React, { useState } from "react";
import "./styles.css";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from "uuid";
import { AddUserForm } from "./components/AddUserForm";

export default function App() {
  const usersData = [
    { id: uuidv4(), name: "Tania", username: "floppydiskette" },
    { id: uuidv4(), name: "Craig", username: "siliconeidolon" },
    { id: uuidv4(), name: "Ben", username: "benisphere" }
  ];

  // state
  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  return (
    <div className="container">
      <h1>Practica de React con arrays</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View user</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}
