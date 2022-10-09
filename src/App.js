import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />

    </div>
  );
}
//For <UsersList we set users from props to empty array so we don't have problems rendering
export default App;
