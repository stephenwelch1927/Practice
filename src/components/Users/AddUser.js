import React from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUsernam, setEnteredUsernme] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsernam.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (enteredAge < 1){
      return;
    }
    console.log(enteredUsernam, enteredAge);
    //Resets the state back to empty string when finished we set the value in
    //each input in the form with value={}
    setEnteredUsernme('');
    setEnteredAge('');
  };

const userNameChangeHandler = (event) => {
  setEnteredUsernme(event.target.value);
  
}

const ageChangeHandler = (event) => {
  setEnteredAge(event.target.value);
}
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">Username</label>
        <input id="userName" type="text" value={enteredUsernam} onChange={userNameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
