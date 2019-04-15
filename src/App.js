import React, { useState } from 'react';

import './App.scss';
import Header from './Header';
import AddModal from "./AddModal";
import UserList from "./UserList";

import currentUser from "./data/currentUser";
import defaultUsers from "./data/users";

const App = () => {
  const [users, setUsers] = useState(defaultUsers);

  const addUser = (user) => setUsers(prevState => [...prevState, user]);
  const removeUser = (id) => {
    setUsers(prevState => {
      const newState = [...prevState];
      newState.splice(id, 1);
      console.log(id, prevState, newState);
      return newState;
    })
  };

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <h1>Liste des utilisateurs</h1>
      <AddModal addUser={addUser} />
      <UserList users={users} removeUser={removeUser} />
    </div>
  );
}

export default App;
