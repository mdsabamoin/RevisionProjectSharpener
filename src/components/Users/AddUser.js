import React from "react";

const AddUser = (props) =>{

const addUserHandler = (event) =>{
  event.preventDefault();
}
  
  return(<div>
    <form submit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username"></input>
      <label htmlFor="age">Age</label>
      <input id="age"></input>
      <button type="submit">Add User</button>
    </form>
  </div>)
}
export default AddUser;