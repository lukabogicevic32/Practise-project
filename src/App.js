import React, {useState} from 'react';
import User from './components/Users/User';
import UsersList from './components/Users/UsersList';


function App() {
  const  [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
     return (
       [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString() },]
     );
    });
  };
  return (
    <div>
     <User onAddUser={addUserHandler}/>
     <UsersList users={usersList} />
    </div>
  );
}

export default App;
